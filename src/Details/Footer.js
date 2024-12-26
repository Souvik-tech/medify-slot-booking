import footerImage from "../images/footer.png";
import Logo from "../images/Logo.png";
import facebook from "../images/facebook.png";
import x from "../images/x.png";
import pinest from "../images/pinest.png";
import youtube from "../images/youtube.png";
import bullet from "../images/bullet.png";

import { Container, Row, Col } from "react-bootstrap";

export default function PageFooter() {
  const footerItems = [
    "About Us",
    "Orthology",
    "About Us",
    "Our Pricing",
    "Neurology",
    "Our Pricing",
    "Our Gallery",
    "Dental Care",
    "Our Gallery",
    "Appointment",
    "Opthalmology",
    "Appointment",
    "Privacy Policy",
    "Cardiology",
    "Privacy Policy",
  ];

  return (
    <div className="footer-cont">
      <Row className="footer-1">
        <Col>
          <img src={footerImage} alt="" />
        </Col>
      </Row>
      <div className="footer-2">
        <Row>
          <Col className="d-flex flex-column" md={3}>
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div className="socialLogo">
              <img src={facebook} alt="fb" />
              <img src={x} alt="x" />
              <img src={youtube} alt="yt" />
              <img src={pinest} alt="p" />
            </div>
          </Col>
          <Col md={9}>
            <Row style={{ gap: 12 }}>
              {footerItems.map((item) => (
                <Col md={3} className="text-white m-1">
                  <img className="m-1" src={bullet} alt="bullet" />
                  {item}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <hr />
        <p class="paraFooter">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
