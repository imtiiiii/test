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

            <Container className=' py-5 my-5 rounded-pill ' style={{ backgroundColor: "#E2EDDF" }}>

                <Row className='  d-flex justify-content-center py-2 align-items-center'>
                    <Col lg={2} md={6} sm={6} className="py-2 ">
                        <img alt="brands" src={google} className="mx-3 " />
                    </Col>
                    <Col lg={2} md={6} sm={6} className="py-2">
                        <img alt="brands" src={slack} className="mx-3" />
                    </Col>
                    <Col lg={2} md={6} sm={6} className="py-2">
                        <img alt="brands" src={agworld} className="mx-3" />
                    </Col>
                    <Col lg={3} md={6} sm={6} className="py-2">
                        <img alt="brands" src={riotinto} className="mx-3" />
                    </Col>
                    <Col lg={2} md={6} sm={6} className="py-2" >
                        <img alt="brands" src={heroku} className="mx-3" />
                    </Col>


                </Row>

            </Container>

        </>
    );
};

export default Brands;