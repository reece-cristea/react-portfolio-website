import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark justify-content-end">
        <Container className="justify-content-end" style={{ margin: "0px" }}>
          <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              <Nav.Link><Link to={"/"} style={{ color: "white", textAlign: "right", textDecoration: "none" }}><h2>Home</h2></Link></Nav.Link>
              <Nav.Link><Link to={"/AboutMe"} style={{ color: "white", textAlign: "right", textDecoration: "none"}}><h2>About Me</h2></Link></Nav.Link>
              <Nav.Link><Link to={"/Projects"} style={{ color: "white", textAlign: "right", textDecoration: "none" }}><h2>Projects</h2></Link></Nav.Link>
              <Nav.Link><Link to={"/Resume"} style={{ color: "white", textAlign: "right", textDecoration: "none" }}><h2>Resume</h2></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default navbar