import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import CardComponent from "../../components/CardComponent";
import { Link } from "react-router-dom";
const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag ")
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div >
       <Navbar bg="light" expand="lg"  className="navbars">
      <Container>
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'400px'}}>
            <Nav.Link href="#">All</Nav.Link>
            <Nav.Link href="#">Asia</Nav.Link>
            <Nav.Link href="#">Europe</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

      <Container>
        <Row>
          {countries.map((country, index) => (
            <Col md={6} xs={12}>
              <CardComponent dat={country} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
