import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

const Service = (props) => {
    const img = props.item.img;
    const title = props.item.title;
    const details = props.item.details;
    const cnt = props.count;
    // using useState to give dynamic classname on mouse enter
    const [hover, setHover] = useState("zoom");
    const mouseEnter = (event) => {
        setHover("shadow-lg rounded-3 zoom");
    }
    const mouseLeave = (event) => {
        setHover("zoom");
    }
    // console.log(hover);
    return (
        <>
            <Col lg={4} style={{ height: "100%" }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={hover} >
                <div className='' style={{}}>
                    <img alt="service" src={img} style={{ width: "100%" }} />
                </div>
                <div className="py-4">
                    <div className='p-4' style={{ color: "#152427", height: "70px" }}>
                        <h6 className='fs-4 fw-bold'>{title}</h6>
                    </div>
                    <div style={{ color: "#7D8188", height: "120px" }} className="p-4">
                        <h6 className='fs-5'>{details}</h6>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Service;