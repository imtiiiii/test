import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import './Feature.css'
const Feature = (props) => {


    // console.log(props);
    // const cnt = props.cnt
    // console.log(cnt);
    // if (cnt === 2) console.log("yes");
    // rounded-circle py-5 d-flex justify-content-center align-items-center

    // using useState to give dynamic classname on mouse enter
    const [hover, setHover] = useState("zoom rounded-circle py-5 d-flex justify-content-center align-items-center mx-auto");
    const mouseEnter = (event) => {
        setHover("shadow  zoom rounded-circle py-5 d-flex justify-content-center align-items-center mx-auto");
    }
    const mouseLeave = (event) => {
        setHover("zoom rounded-circle py-5 d-flex justify-content-center align-items-center mx-auto");
    }
    return (
        <>

            <Col lg={3} className={hover} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{ border: "1.5px solid #CECECE", height: "350px", margin: "100px auto" }}  >
                <Container className='px-2 '>
                    <img alt="logo" src={props.item.logo} className="my-4" />
                    <h4 className='my-3'>{props.item.title}</h4>
                    <h6 className=''>{props.item.details}</h6>
                </Container>
            </Col>
        </>
    );
};

export default Feature;