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

            <Container className=' py-5 my-5 rounded-pill mx-auto ' style={{ backgroundColor: "#E2EDDF" }}>

                <Row className=' py-3 d-flex justify-content-center align-item-center'>
                    <Col lg={2} sm={12} className="py-3 d-flex justify-content-center align-item-center">
                        <img alt="brands" src={google} className="mx-3  " style={{ width: "140px", height: "40px" }} />
                    </Col>
                    <Col lg={2} sm={12} className="py-3 d-flex justify-content-center align-item-center">
                        <img alt="brands" src={slack} className="mx-3   " style={{ width: "150px", height: "40px" }} />
                    </Col>
                    <Col lg={2} sm={12} className="py-3 d-flex justify-content-center align-item-center">
                        <img alt="brands" src={agworld} className="mx-3  " style={{ width: "140px", height: "40px" }} />
                    </Col>
                    <Col lg={2} sm={12} className="py-3 d-flex justify-content-center align-item-center">
                        <img alt="brands" src={riotinto} className="mx-3 " style={{ width: "140px", height: "40px" }} />
                    </Col>
                    <Col lg={2} sm={12} className="py-3 d-flex justify-content-center align-item-center" >
                        <img alt="brands" src={heroku} className="mx-3 " style={{ width: "140px", height: "40px" }} />
                    </Col>


                </Row>

            </Container>

        </>
    );
};

export default Brands;