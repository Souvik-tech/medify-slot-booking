import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "../Context/AppContext";
import medical from "../images/div.u-pos-has.png";
import { Container } from "react-bootstrap";
import Navbar from "../Landing/Navbar";
import PageFooter from "./Footer";

function BookingCard({ hospital, date, time }) {
  return (
    <div className="card medicalCard">
      <Row style={{ gap: 28 }}>
        <Col md={2}>
          <img src={medical} alt="medical-icon" />
        </Col>
        <Col md={5}>
          <h5 className="hName">{hospital["Hospital Name"]}</h5>
          <h6>{hospital["Address"]}</h6>
          <p style={{ marginBottom: 0 }}>
            Smilessence Center for Advanced Dentistry + 1
          </p>
          <p style={{ marginBottom: 0 }}>more</p>
          <div className="likes">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgBnY5tDYAwDERXggAkIAEcIAkHZAoIDiYBCXPCHICDcpds//jsJS9bur61zj1EVScwuz/JErNbJCZaJGa86hM8dDhJymwvf7On54RQVgKtfstQOWMsYhKRaBG9dWK0iAFrJl5qsOYiCwdYQHMj+nI5AUF/eSye6k/XAAAAAElFTkSuQmCC"
              alt="like"
              style={{ margin: "5px" }}
            />
            4
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-evenly">
          <div className="timeBox">{time}</div>
          <div className="dateBox">{date}</div>
        </Col>
      </Row>
    </div>
  );
}

function MyBookings() {
  const { bookings } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col md={8}>
            {bookings.map(({ hospital, date, time }) => (
              <BookingCard hospital={hospital} date={date} time={time} />
            ))}
          </Col>
        </Row>
      </Container>
      <PageFooter />
    </div>
  );
}

export default MyBookings;
