import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Edit() {
  const location = useLocation();
  const data = location.state;
    const [title , setTitle] = useState(data.title);
    const [description , setDescription] = useState(data.description);
    const navigate = useNavigate();
    const editProduct = (event) => {
        event.preventDefault();
        
        axios
            .put(
                `http://localhost:3000/products/${data.id}`, 
            {
                name : title,
                description
            },
            {
                headers: {
                    authorization: localStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                if(res.status === 200) {
                    navigate("/home");
                }
            })
    }
  return (
    <Container>
      <Form onSubmit={editProduct} className='reg-form'>
      <Form.Group className="mb-3">
        <Form.Label>Edit the Product's Name :</Form.Label>
        <Form.Control defaultValue={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="eg: Smart Mobile " />
        <Form.Text className="text-muted">
          The Product Will Be Updated
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Edit Descreption :</Form.Label>
        <Form.Control defaultValue={description} onChange={(event) => setDescription(event.target.value)} type="text" placeholder="eg: Good Offer"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
    </Container>
  );
}

export default Edit;