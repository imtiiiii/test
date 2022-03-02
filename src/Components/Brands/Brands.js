import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../../img/brands/Google.png'
import slack from '../../img/brands/slack.png'
import agworld from '../../img/brands/Agworld.png'
import riotinto from '../../img/brands/RioTinto.png'
import heroku from '../../img/brands/heroku.png'

const Brands = () => {
    return (
        <>
            <Container fluid className='border border-4'>
                <Container className='border border-1 rounded-pill py-5 ' style={{ backgroundColor: "#E2EDDF" }}>

                    <Row className=' d-flex justify-content-center py-2 align-items-center'>
                        <Col lg={2} className="py-2 ">
                            <img alt="brands" src={google} className="mx-3 " style={{ widhth: "107px", height: "40px" }} />
                        </Col>
                        <Col lg={2} className="py-2">
                            <img alt="brands" src={slack} className="mx-3" style={{ widhth: "86px", height: "50px" }} />
                        </Col>
                        <Col lg={2} className="py-2">
                            <img alt="brands" src={agworld} className="mx-3" style={{ widhth: "107px", height: "40px" }} />
                        </Col>
                        <Col lg={3} className="py-2">
                            <img alt="brands" src={riotinto} className="mx-3" style={{ widhth: "140px", height: "40px" }} />
                        </Col>
                        <Col lg={2} className="py-2" >
                            <img alt="brands" src={heroku} className="mx-3" style={{ widhth: "80px", height: "30px" }} />
                        </Col>


                    </Row>

                </Container>
            </Container>
        </>
    );
};

export default Brands;