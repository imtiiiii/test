import React from 'react';
import { Col } from 'react-bootstrap';

const Blog = (props) => {
    const img = props.item.img;
    const title = props.item.title;
    const details = props.item.details;
    const date = props.item.date;
    const cnt = props.count;
    return (
        <>
            <style type='text/css'>{`
            .evenbtn{
                background-color:#143C3C;
                color:#fff
            }
            .odbtn{
                background-color:#E2EDDF;
            }
        `}

            </style>
            <Col lg={4} style={{ height: "100%" }} className='my-5'>
                <div className='' style={{}}>
                    <img alt="service" src={img} style={{ width: "100%" }} />
                </div>
                <div className="py-4" >
                    {/* giving dynamic class names */}
                    <div className='p-4' style={{ color: "#152427", height: "70px" }}>
                        <h6 className={cnt === 2 ? "fs-6 border border-2 w-50 rounded-pill px-4 py-2 text-center evenbtn" : "fs-6 border border-2 w-50 rounded-pill px-4 py-2 text-center odbtn"}>{title}</h6>
                    </div>
                    <div style={{ color: "#143C3C", height: "150px", }} className="p-4">
                        <h6 className='fs-5'>{details}</h6>
                    </div>
                    <hr />
                    <p className='text-end fs-6'>{date}</p>
                </div>
            </Col>
        </>
    );
};

export default Blog;