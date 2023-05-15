import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand className='fw-bold h1-brand fs-3' href="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="me-auto">
            <Link className='mx-2 nav-link' to="home">Home</Link>
            <Link className='mx-2 nav-link' to="about">About</Link>
            <Link className='mx-2 nav-link' to="login">Login</Link>
            <Link className='mx-2 nav-link' to="register">Register</Link>
            <Link className='mx-2 nav-link' to="add-to-card">Add Product</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;