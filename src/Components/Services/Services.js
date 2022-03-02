import React from 'react';
import { Container } from 'react-bootstrap';
import leftarrow from '../../img/services/leftarrow.png'
import rightarrow from '../../img/services/rightarrow.png'
const Services = () => {
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

            </Container>
        </>
    );
};

export default Services;