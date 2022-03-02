import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import processimg from '../../img/process/process.png'
const Processes = () => {
    return (
        <>
            <Container className=' ' style={{ marginTop: "200px", marginBottom: "200px" }}>
                <div className='mb-5'>
                    <h6 className='fs-6 my-4'>OUR PROCESS</h6>
                    <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>A simple ,yet effective three step process</h3>
                </div>
                <Container >
                    {/* this row is only for  01 row */}
                    <Row className=' d-flex justify-content-between ' style={{ backgroundColor: "#E2EDDF", marginTop: "100px", borderRadius: "20px" }}>
                        <Col lg={4} sm={12} className="d-flex justify-content-between  ">
                            <div className='d-flex flex-column justify-content-center '>
                                <h1 className=' fw-bold' style={{ color: "#152427", fontSize: "80px" }}>01.</h1>
                            </div>
                            <div className='d-flex flex-column justify-content-center  w-50 '>
                                <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>Project idea</h3>
                                <h4 className='fs-5 text-decoration-underline ' style={{ color: "#575D5E" }}>Learn More</h4>
                            </div>
                        </Col>
                        <Col lg={6} className="">
                            <div className=' d-flex justify-content-end' >
                                <img alt="img" src={processimg} style={{ marginTop: "-250px" }} className="d-none d-lg-inline" />
                            </div>
                        </Col>

                    </Row>
                    {/* 2nd Row */}
                    <Row className=' d-flex  justify-content-between ' style={{ marginTop: "80px" }}>
                        <Col lg={4} sm={12} className="d-flex justify-content-between ">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className=' fw-bold' style={{ color: "#152427", fontSize: "80px" }}>02.</h1>
                            </div>
                            <div className='d-flex flex-column justify-content-center   w-50 '>
                                <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>Brainstorming</h3>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className=' d-flex justify-content-end ' >
                                <h5 className='fs-5' style={{ color: "#7D8188" }}>We customse a ensure aligment and difine key mileones and defiverables experience tells us the best solutions are the ones  deated with clients.</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    {/* 3rd row */}
                    <Row className=' d-flex  justify-content-between ' style={{ marginTop: "80px" }}>
                        <Col lg={4} sm={12} className="d-flex justify-content-between ">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className=' fw-bold' style={{ color: "#152427", fontSize: "80px" }}>03.</h1>
                            </div>
                            <div className='d-flex flex-column justify-content-center text-start  w-50  '>
                                <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>Execution</h3>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className=' d-flex justify-content-end ' >
                                <h5 className='fs-5' style={{ color: "#7D8188" }}>We customse a ensure aligment and difine key mileones and defiverables experience tells us the best solutions are the ones  deated with clients.</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </Container>
        </>
    );
};

export default Processes;