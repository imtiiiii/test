import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bg from '../../img/about/Ellipse 4024.png'
import img1 from '../../img/about/Rectangle 6046.png'
import img2 from '../../img/about/Rectangle 6047.png'
import img3 from '../../img/about/Group 1000004124.png'

const About = () => {
    return (
        <>
            <Container style={{ margin: "100px auto" }}>
                {/* there is two part in section  */}
                <Row>
                    {/* 1st part */}
                    <Col lg={8} className="d-none d-lg-block" style={{
                        position: "relative"
                    }}>
                        <div >
                            <img alt="background" src={bg} style={{ width: "100%", }} />
                        </div>
                        <div style={{
                            position: "absolute", top: "20%", left: "10%"


                        }}>
                            <img alt="img" src={img1} className="rounded-pill" style={{ width: "284px", height: "480px", objectFit: "fill" }} />
                        </div>

                        <div style={{
                            position: "absolute",
                            top: "10%",
                            right: "20%"



                        }}>
                            <img alt="img" src={img2} className="rounded-pill" style={{ width: "286px", height: "480px", objectFit: "fill" }} />
                        </div>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            right: "15%"

                        }}>
                            <img alt="img" src={img3} className="w-100" />
                        </div>
                    </Col>
                    {/* 2nd part */}
                    <Col lg={4} sm={12} className="">
                        <h5 style={{ color: "#152427" }} className="my-5">ABOUT US</h5>
                        <h2 style={{ color: "#152427" }}>We are an extention of <br /> your creative team</h2>
                        <p style={{ color: "#7D8188" }} className="my-3">At the start of every project, we cusomizea detailed project plan together with you set exectationns ensure alighment and define key milestones and deiverbles.</p>
                        <div className='d-flex ' style={{ borderBottom: "1px solid #83A17D" }}>
                            <h1 style={{ color: "#152427" }} className="w-25 pt-3">48%</h1>
                            <h6 style={{ color: "#7D8188" }} className="w-75 pt-3">Are you strive for two things in design simplicity and clarity. Great design is born of those two things
                            </h6>
                        </div>
                        {/* <hr style={{ color: "#83A17D" }} /> */}
                        <div className='d-flex ' style={{ borderBottom: "1px solid #83A17D" }}>
                            <h1 style={{ color: "#152427" }} className=" w-25 pt-3">26%</h1>
                            <h6 style={{ color: "#7D8188", }} className="w-75 pt-3" >Are you strive for two things in design simplicity and clarity. Great design is born of those two things
                            </h6>
                        </div>

                    </Col>

                </Row>



            </Container>
        </>
    );
};

export default About;