import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BsFillXOctagonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removoreFromFavorites } from "../redux/actions";

const FavoriteList = () => {
  const favoriteJobs = useSelector((state) => state.favoriteJobs.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Favorite jobs list</h1>
          <Link to='/' className='nav-link'>
            <h5 className='ms-auto text-primary'>Go back</h5>
          </Link>
        </Col>

        <Col xs={10} className='mx-auto mb-5'>
          <ListGroup as='ul'>
            {favoriteJobs.map((jobData, i) => (
              <ListGroup.Item as='li' className='d-flex' key={"favorite" + i}>
                {jobData.company_name}
                <Button variant='transparent' className='ms-auto'>
                  <BsFillXOctagonFill
                    onClick={() => {
                      dispatch(removoreFromFavorites(jobData._id));
                    }}
                  />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteList;
