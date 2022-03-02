import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import processimg from '../../img/process/process.png'
const Processes = () => {
    return (
        <>
            <Container className=' border border-1' style={{ marginTop: "200px", marginBottom: "200px" }}>
                <div className='mb-5'>
                    <h6 className='fs-6 my-4'>OUR PROCESS</h6>
                    <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>A simple ,yet effective three step process</h3>
                </div>
                <Container >
                    {/* this row is only for the 01 point */}
                    <Row className=' d-flex ' style={{ backgroundColor: "#E2EDDF", marginTop: "100px", borderRadius: "20px" }}>
                        <Col lg={3} className="d-flex justify-content-between ">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className=' fw-bold' style={{ color: "#152427", fontSize: "80px" }}>01.</h1>
                            </div>
                            <div className='d-flex flex-column justify-content-center  '>
                                <h3 className='fs-4 fw-bold' style={{ color: "#152427" }}>Project idea</h3>
                                <h4 className='fs-5 text-decoration-underline ' style={{ color: "#575D5E" }}>Learn More</h4>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className=' d-flex justify-content-end' >
                                <img alt="img" src={processimg} style={{ marginTop: "-250px" }} className="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Processes;