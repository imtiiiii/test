import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import leftarrow from '../../img/services/leftarrow.png'
import rightarrow from '../../img/services/rightarrow.png'
import service1 from '../../img/services/service1.png'
import service2 from '../../img/services/service2.png'
import service3 from '../../img/services/service3.png'
import Service from './Service/Service';
const Services = () => {
    let cnt = 1;
    const services = [
        {
            img: "https://i.ibb.co/XZ1JH4B/service1.png",
            title: "Branding",
            details: "Create beautiful Agency website with Boluethat converts more visitors than any website."
        },
        {
            img: "https://i.ibb.co/PmXR4JK/service2.png",
            title: "Web Design",
            details: "Create beautiful Agency website with Boluethat converts more visitors than any website."
        },
        {
            img: "https://i.ibb.co/X8DpgFZ/service3.png",
            title: "Graphic Design",
            details: "Create beautiful Agency website with Boluethat converts more visitors than any website."
        }
    ];
    return (
        <>
            <Container className='my-5' >
                <Container className=" my-5 d-flex justify-content-between" >
                    <div style={{ color: "#152427" }}>
                        <h6 className='fs-4'>Our Services</h6>
                        <h6 className='fs-2'>We offer a wide range of <br /> design services</h6>
                    </div>
                    <div className='d-flex justify-content-end align-items-end  w-50 '>
                        <img alt="leftarrow" width={54} height={54} src={leftarrow} />
                        <img alt="rightarrow" width={54} height={54} src={rightarrow} />
                    </div>
                </Container>
                <Container>
                    <Row>
                        {
                            services.map(service => <Service item={service} key={cnt} count={cnt++}  ></Service>)
                        }
                    </Row>
                </Container>

            </Container>
        </>
    );
};

export default Services;