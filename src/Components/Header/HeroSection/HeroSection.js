import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bgimg from '../../../img/header/Ellipse 4024.png'
import img1 from '../../../img/header/Rectangle 6038.png'
import img2 from '../../../img/header/Rectangle 6039.png'
import img3 from '../../../img/header/Rectangle 6040.png'
import img4 from '../../../img/header/Rectangle 6038 (1).png'
import img5 from '../../../img/header/Rectangle 6039 (1).png'
import img6 from '../../../img/header/Rectangle 6040 (1).png'
import playButton from '../../../img/header/play button.png'
const HeroSection = () => {
    return (
        <>
            <Container>
                <Row className='' style={{}} >
                    {/* this col will contain the text of this section and 2 buttons */}
                    <Col lg={6} className=" d-flex flex-column justify-content-center text-start " >
                        <h1 style={{ color: "#152427" }} className="fw-bolder d-none d-lg-block">We’re a <br />creative design <br /> agency.</h1>
                        <h3 style={{ color: "#152427" }} className="fw-bolder  d-lg-none">We’re a creative design  agency.</h3>
                        <h6 className='fs-6' style={{ color: "#575D5E" }}>A brilliant, modular agency template for startup’s build yours toady.</h6>
                        <div className='my-5'>
                            <Button variant='signup rounded-pill fs-6 py-3 px-5 signup fw-bold'>Get in touch</Button>
                            <Button variant='signup rounded-pill fs-5 py-3 px-5  fw-bold ' style={{ color: "black", backgroundColor: "#fff" }}>
                                <img src={playButton} alt="playbuttonlogo" className='mx-3' />
                                Watch Video
                            </Button>
                        </div>
                    </Col>
                    {/* this secion will contain 1bg image and 3 image */}
                    {/* here i will use css-position property because here i will be using a picture as bg so using position property i can keep 3 images over the bg image */}
                    <Col lg={6} className="px-1" style={{ position: "relative", }} >
                        <div className=" d-flex justify-content-center .align-items-center">
                            <img alt="bg" src={bgimg} style={{ width: "100%", maxHeight: "100%", border: "1px solid red" }} />
                        </div>
                        <Row>
                            <Col lg={3} md={12} style={{
                                position: "absolute",
                                top: "10%", left: "0%",
                            }}    >
                                <img alt="heroimage" src={img1} style={{ maxWidth: "150px" }} className="d-lg-block d-none" />
                                <img alt="heroimage" src={img4} style={{ maxWidth: "100px", maxHeight: "200px" }} className="d-lg-none d-block" />
                            </Col>
                            <Col lg={3} style={{
                                position: "absolute",
                                top: "20%",
                                left: "30%"
                            }} >
                                <img alt="heroimage" src={img2} style={{ maxWidth: "150px" }} className="d-lg-block d-none" />
                                <img alt="heroimage" src={img5} style={{ maxWidth: "100px", maxHeight: "200px" }} className="d-lg-none d-block" />
                            </Col>
                            <Col lg={3} style={{
                                position: "absolute",
                                top: "10%", left: "60%",
                            }} >
                                <img alt="heroimage" src={img3} style={{ maxWidth: "150px" }} className="d-lg-block d-none" />
                                <img alt="heroimage" src={img6} style={{ maxWidth: "100px", maxHeight: "200px" }} className="d-block d-lg-none" />
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default HeroSection;