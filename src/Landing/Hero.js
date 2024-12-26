import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import HeroImg from '../images/hero-img.png'

const Hero = () => {
  return (
    <div className='hero-banner '>
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h5 className='sub-head'>Skip the travel! Find Online</h5>
                    <h3 className='main-head'>Medical <span>Centers</span></h3>
                    <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                    <button className="main-button">My Bookings</button>
                </Col>
                <Col>
                    <figure>
                        <img src={HeroImg} />
                    </figure>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <div className='form-wrap'>
                        <form>
                            
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero