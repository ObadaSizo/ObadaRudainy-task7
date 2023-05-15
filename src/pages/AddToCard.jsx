import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AddToCard() {
    const [title , setTitle] = useState();
    const [description , setDescription] = useState();
    const navigate = useNavigate();
    const addProduct = (event) => {
        event.preventDefault();
        
        axios
            .post(
                "http://localhost:3000/products", 
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
                if(res.status === 201) {
                    navigate("/home");
                }
            })
    }
  return (
    <Container>
      <Form onSubmit={addProduct} className='reg-form'>
      <Form.Group className="mb-3">
        <Form.Label>The Product's Name :</Form.Label>
        <Form.Control onChange={(event) => setTitle(event.target.value)} type="text" placeholder="eg: Smart Mobile " />
        <Form.Text className="text-muted">
          Your Products Will Apear at the Main Page
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Describe the Product :</Form.Label>
        <Form.Control onChange={(event) => setDescription(event.target.value)} type="text" placeholder="eg: Good Offer"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Product
      </Button>
    </Form>
    </Container>
  );
}

export default AddToCard;