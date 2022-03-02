import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Container style={{ margin: "100px auto" }}>
                {/* there is two part in section  */}
                <Row>
                    {/* 1st part */}
                    <Col lg={6}>

                    </Col>
                    {/* 2nd part */}
                    <Col lg={6}>
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