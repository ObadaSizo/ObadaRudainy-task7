import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';


function CardCompnent({ data }) {
  const myData = {
    id: data.id,
    title: data.name,
    description: data.description
  }
    return (
        <Card className='mb-4 py-4 px-2 h-500 position-realtive'>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title className='fs-4 fw-bold'>{data.name}</Card.Title>
            <Card.Text className='mb-5 pt-2'>{data.description}</Card.Text>
            <div className="d-flex but position-absolute">
              <Button className='me-1' variant="primary">Buy Now</Button>
              <Link to="/delete" state={myData}><Button className='mx-1' variant="danger"><FontAwesomeIcon icon={faTrash} /></Button></Link>
              <Link to="/edit" state={myData}><Button className='ms-1' variant="secondary"><FontAwesomeIcon className='text-white' icon={faPenClip} /></Button></Link>
            </div>
          </Card.Body>
        </Card>
      );
}

export default CardCompnent;