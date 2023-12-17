import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">MERN APP</Navbar.Brand>
       
      
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          
          </Nav>
      
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar