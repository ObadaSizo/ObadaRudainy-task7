import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/esm/Container';
import './../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Delete() {
  const location = useLocation();
  const data = location.state;
    const navigate = useNavigate();
    const deleteProduct = (event) => {
        event.preventDefault();
        
        axios
            .delete (
                `http://localhost:3000/products/${data.id}`, 
            {
                headers: {
                    authorization: localStorage.getItem("accessToken"),
                },
            })
            .then((res) => {
                setTimeout(() => {
                    navigate("/home");
                }, 1500);
            })
    }
    const returnMain = () => {
        navigate("/home");
    }
  return (
      <Container className='mt-5 pt-5'>
    <div
      className="modal show mt-5"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Delete Report</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are You Sure !!! ,You Will Delete the Product{data.id}</p>
        </Modal.Body>

        <Modal.Footer>
        <Button onClick={deleteProduct} variant="danger">Delete</Button>
          <Button onClick={returnMain} variant="secondary">Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
</Container>
  );
}


export default Delete;