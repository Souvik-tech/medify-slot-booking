import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="top-navbar">
        <Container>
          <Row>
            <Col>
              <p>
                {" "}
                The health and well-being of our patients and their health care
                team will always be our priority, so we follow the best
                practices for cleanliness.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-nav">
        <Container>
          <Row className="align-items-center">
            <Col md={2}>
              <a href="/">
                <figure className="logo">
                  <img src={Logo} />
                </figure>
              </a>
            </Col>
            <Col md={10}>
              <div className="d-flex align-items-center justify-content-end">
                <ul className="d-flex align-items-center">
                  <li>Find Doctors</li>
                  <li>Hospitals</li>
                  <li>Medicines</li>
                  <li>Surgeries</li>
                  <li>Software for Provider</li>
                  <li>Facilities</li>
                </ul>
                <Link to={"/myBookings"}>
                  <button className="main-button">My Bookings</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
