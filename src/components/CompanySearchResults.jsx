import { useEffect } from "react";
import { Container, Row, Col, Placeholder, Card } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const errorResult = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobsData("company", params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        {isLoading ? (
          <Col className='my-3'>
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
        ) : errorResult ? (
          <Col xs={10} className='mx-auto mb-5'>
            <h2>{errorResult.errorRes}</h2>
          </Col>
        ) : (
          <Col className='my-3'>
            <h1 className='display-4'>Job posting for: {params.company}</h1>
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
