import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgimg from '../../../img/header/Ellipse 4024.png'
import img1 from '../../../img/header/Rectangle 6038.png'
import img2 from '../../../img/header/Rectangle 6039.png'
import img3 from '../../../img/header/Rectangle 6040.png'
const HeroSection = () => {
    return (
        <>
            <Container>
                <Row className=' ' style={{ height: "400px" }} >
                    {/* this col will contain the text of this section and 2 buttons */}
                    <Col lg={5} className="border border-1 " >
                        <h1 style={{ color: "#152427" }} className="fw-bolder">We’re a <br />creative design <br /> agency.</h1>
                        <h6 className='fs-6' style={{ color: "#575D5E" }}>A brilliant, modular agency template for startup’s build yours toady.</h6>
                    </Col>
                    {/* this secion will contain 1bg image and 3 image */}
                    {/* here i will use css-position property because here i will be using a picture as bg so using position property i can keep 3 images over the bg image */}
                    <Col lg={7} className="border border-2 py-5" style={{ position: "relative" }} >
                        <img alt="bg" src={bgimg} className="w-100" />
                        <Row>
                            <Col lg={4} style={{
                                position: "absolute",
                                top: "100px"
                            }}    >
                                <img alt="heroimage" src={img1} />
                            </Col>
                            <Col lg={4} style={{
                                position: "absolute",
                                top: "150px",
                                left: "250px"
                            }} >
                                <img alt="heroimage" src={img2} />
                            </Col>
                            <Col lg={4} style={{
                                position: "absolute",
                                top: "100px", right: "40px"
                            }} >
                                <img alt="heroimage" src={img3} />
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default HeroSection;