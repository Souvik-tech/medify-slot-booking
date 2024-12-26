import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DoctorIc from "../images/Doctor.png";
import Drugstore from "../images/Ambulance.png";
import hospital from "../images/Hospital.png";
import Capsule from "../images/Capsule.png";
import ambulance from "../images/Ambulance.png";

const HeroIcon = () => {
  return (
    <div>
        <Row>
          <Col>
            <div className="card">
              <figure>
                <img src={DoctorIc} alt="doctors"/>
              </figure>
              <h4>Doctors</h4>
            </div>
          </Col>
          <Col>
            <div className="card">
              <figure>
                <img src={Drugstore} alt="labs"/>
              </figure>
              <h4>Labs</h4>
            </div>
          </Col>
          <Col>
            <div className="card active">
              <figure>
                <img src={hospital} alt="hospital"/>
              </figure>
              <h4>Hospitals</h4>
            </div>
          </Col>
          <Col>
            <div className="card">
              <figure>
                <img src={Capsule} alt="medicalstore"/>
              </figure>
              <h4>Medical Stores</h4>
            </div>
          </Col>
          <Col>
            <div className="card">
              <figure>
                <img src={ambulance} alt="ambulance"/>
              </figure>
              <h4>Ambulance</h4>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default HeroIcon