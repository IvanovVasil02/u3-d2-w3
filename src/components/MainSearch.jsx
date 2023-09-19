import { Container, Row, Col, Form, Placeholder, Card } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getJobsData } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const isLoading = useSelector((state) => state.jobs.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobsData("search", query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3 d-flex justify-content-center align-items-center '>
          <h1 className='display-1'>Remote Jobs Search</h1>
          <Link to='favoriteList' className='nav-link'>
            <h5 className='ms-auto text-primary'>Go to favorites</h5>
          </Link>
        </Col>
        <Col xs={10} className='mx-auto mb-4'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>

        {isLoading ? (
          <Col xs={10} className='mx-auto mb-5'>
            {[...Array(5).keys()].map((key) => (
              <Card className='mb-2' key={"placeholder" + key}>
                <Card.Body>
                  <Placeholder as={Card.Text} animation='glow'>
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  </Placeholder>
                </Card.Body>
              </Card>
            ))}
          </Col>
        ) : (
          <Col xs={10} className='mx-auto mb-5'>
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
