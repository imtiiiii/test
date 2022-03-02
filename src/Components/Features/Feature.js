import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Feature.css'
const Feature = (props) => {


    // console.log(props);
    const cnt = props.cnt
    // console.log(cnt);
    if (cnt === 2) console.log("yes");
    // rounded-circle py-5 d-flex justify-content-center align-items-center
    return (
        <>

            <Col lg={4} style={{ border: "1.5px solid #CECECE", height: "400px", }} className={cnt === 2 ? "rounded-circle py-5 d-lg-flex justify-content-center align-items-center test shadow-lg" : "rounded-circle py-5 d-lg-flex justify-content-center align-items-center od test"} >
                <Container className=' '>
                    <img alt="logo" src={props.item.logo} />
                    <h4>{props.item.title}</h4>
                    <h6>{props.item.details}</h6>
                </Container>
            </Col>
        </>
    );
};

export default Feature;