import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from './Blog/Blog';
// 
// 
// 
const Blogs = () => {
    let cnt = 1;
    const blogs = [
        {
            img: "https://i.ibb.co/fvkGYrS/business-marketing.png",
            title: "STORIES",
            details: "What did we learn from nunning over 100 design sprints in less the year?",
            date: "January 29 , 2022"
        },
        {
            img: "https://i.ibb.co/5n0RKNW/design-sprints.png",
            title: "STORIES",
            details: "The difference between the UI/UX design a simple guide for beginner’s",
            date: "January 29 , 2022"
        },
        {
            img: "https://i.ibb.co/tYQwbxv/UX-design.png",
            title: "STORIES",
            details: "How marketing can help your business more than anything.",
            date: "January 29 , 2022"
        }
    ];
    return (
        <>
            <Container className='my-5' >
                <Container className=" my-5 d-lg-flex justify-content-between" >
                    <div style={{ color: "#152427" }}>
                        <h6 className='fs-6 my-5'> <span style={{ marginRight: "10px" }}>__</span> BLOG & ARTICLES</h6>
                        <h6 className='fs-2 my-5'>Take a look at our latest <br /> articles and resources <span style={{ marginLeft: "10px" }}>____</span></h6>
                    </div>
                    <div className='d-flex justify-content-end align-items-end  w-50 '>
                        <h6 className='fs-5' style={{ color: "#7D8188" }}>The best agency are the ones ideated with clients. we corporate your ideas with memorable</h6>
                    </div>
                </Container>
                <Container className='my-5'>
                    <Row className='my-5'>
                        {
                            blogs.map(blog => <Blog item={blog} key={cnt} count={cnt++}  ></Blog>)
                        }
                    </Row>
                </Container>

            </Container>
        </>
    );
};

export default Blogs;