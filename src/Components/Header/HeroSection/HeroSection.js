import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bgimg from '../../../img/header/Ellipse 4024.png'
import img1 from '../../../img/header/Rectangle 6038.png'
import img2 from '../../../img/header/Rectangle 6039.png'
import img3 from '../../../img/header/Rectangle 6040.png'
import playButton from '../../../img/header/play button.png'
const HeroSection = () => {
    return (
        <>
            <Container>
                <Row className='border border-4' style={{ height: "100%" }} >
                    {/* this col will contain the text of this section and 2 buttons */}
                    <Col lg={5} md={12} sm={12} className=" d-flex flex-column justify-content-center  text-start border border-1 " >
                        <h1 style={{ color: "#152427" }} className="fw-bolder">We’re a <br />creative design <br /> agency.</h1>
                        <h6 className='fs-6' style={{ color: "#575D5E" }}>A brilliant, modular agency template for startup’s build yours toady.</h6>
                        <div>
                            <Button variant='signup rounded-pill fs-6 py-3 px-5 signup fw-bold'>Get in touch</Button>
                            <Button variant='signup rounded-pill fs-5 py-3 px-5  fw-bold ' style={{ color: "black", backgroundColor: "#fff" }}>
                                <img src={playButton} alt="playbuttonlogo" className='mx-3' />
                                Watch Video
                            </Button>
                        </div>
                    </Col>
                    {/* this secion will contain 1bg image and 3 image */}
                    {/* here i will use css-position property because here i will be using a picture as bg so using position property i can keep 3 images over the bg image */}
                    <Col lg={7} md={4} sm={12} className="border border-2" style={{ position: "relative" }} >
                        <div className="border-2  border d-flex justify-content-center .align-items-center">
                            <img alt="bg" src={bgimg} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                        <Row>
                            <Col lg={3} md={12} style={{
                                position: "absolute",
                                top: "100px", left: "100px",
                            }}    >
                                <img alt="heroimage" src={img1} style={{ width: "150px" }} />
                            </Col>
                            <Col lg={3} style={{
                                position: "absolute",
                                top: "150px",
                                left: "300px"
                            }} >
                                <img alt="heroimage" src={img2} style={{ width: "150px" }} />
                            </Col>
                            <Col lg={3} style={{
                                position: "absolute",
                                top: "100px", right: "40px"
                            }} >
                                <img alt="heroimage" src={img3} style={{ width: "150px" }} />
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default HeroSection;