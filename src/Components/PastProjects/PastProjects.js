import React from 'react';
import './PastProject.css'
import { Container } from 'react-bootstrap';
import leftArrow from '../../img/past projects/left arrow.png'
import projectVideo from '../../img/past projects/project.png'
import videoButton from '../../img/past projects/video button.png'
const PastProjects = () => {
    return (
        <>

            <Container fluid style={{ backgroundColor: "#143C3C" }} className="my-5">
                <Container className='py-5'>
                    {/* parent div to use flex */}
                    <div className='d-lg-flex my-4' >
                        {/* one part */}
                        <h4 className='fs-1 fw-bold w-50' style={{ color: "#E7F9F9" }}>A quick glance of our <br /> past projects <span style={{ marginRight: "20px", }}>___</span> </h4>
                        {/* another part */}
                        <div className='w-50'>
                            <h5 className='fs-5 mb-5' style={{ color: "#6A8383" }}>Are you strive for the fast project simplicity and clarity. Great design is born of those two things.
                            </h5>
                            {/* browse all projects + left arrow  */}
                            <div className='d-lg-flex'>
                                <h5 className='' style={{ color: "#fff", width: "40%" }}>Browse all Projects</h5>
                                {/* left arrow div to use flex perfectly */}
                                <div className="" style={{ width: "60%" }}>
                                    <img alt="leftArrow" src={leftArrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* this div for the video part */}
                    <div className='my-5 ' style={{ position: "relative", width: "100%", height: "100%" }}>
                        <img alt="video-button " src={videoButton} style={{ position: "absolute", top: "40%", left: "50%" }} className=" video-button" />
                        <img alt="projects" src={projectVideo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default PastProjects;