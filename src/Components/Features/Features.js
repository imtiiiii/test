import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Feature from './Feature';

const Features = () => {
    let cnt = 1;
    const features = [
        {
            logo: "https://i.ibb.co/bv7tSYn/Group-1000004104.png",
            title: "Blog",
            details: "We’ve researched numerous agencies and complied a list of digital marketing agency blogs you should read to stay ahead of your rivals and succeed online!"
        },
        {
            logo: "https://i.ibb.co/TP1T5Ht/Group-1000004105.png",
            title: "Documantation",
            details: "In this article, we discuss the different types of documentation, what makes for great technical documentation, and provide examples."
        },
        {
            logo: "https://i.ibb.co/drBd5Fj/Group-1000004106.png",
            title: "Customers",
            details: "Your customers have high expectations — and if your business can't meet them, they're going to leave you for your competitors."
        }
    ];

    return (
        <>
            <Container className='text-center my-5 ' style={{ height: "100%" }}>
                <h1 style={{ color: "#152427" }} className="fs-1 fw-bold my-5">Share the feature that <br /> helps your customer</h1>
                <h6 style={{ color: "#7D8188", width: "50%", margin: "40px auto" }}>You already know that the customer experience doesn't end with a sale — it's an ongoing work in progress that companies should be constantly seeking to improve and iterate on.</h6>
                <Row className='' >
                    {
                        features.map(feature => <Feature item={feature} key={cnt} cnt={cnt++}></Feature>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Features;