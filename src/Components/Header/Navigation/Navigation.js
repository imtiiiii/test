import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../img/header/logo.png'
const Navigation = () => {

    return (
        <>
            {/* custom style sheet */}
            <style type='text/css'>
                {
                    `
                        .btn-signup{
                            background-color:#143C3C;
                            color:#fff;
                        }
                        .signup:hover{
                            color:white;
                        }

                    `
                }

            </style>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#fff" }} >
                <Container className='border-bottom border-2 py-2'>
                    <Navbar.Brand href="#home">
                        {/* website logo is here  */}
                        <img alt="logo" width={140} height={25} src={logo} />
                    </Navbar.Brand>
                    {/* this button will be displayed only on mobile or tablet version. in pc version it will be hidden */}
                    <Button variant="signup ms-auto rounded-pill px-3 fs-5 me-4 signup d-lg-none">
                        Sign Up
                    </Button>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* navigation links */}
                        <Nav className='ms-auto fs-5'>
                            <Nav.Link href="#" style={{ color: "#152427" }}>Home</Nav.Link>
                            <Nav.Link href="#" style={{ color: "575D5E" }}>About</Nav.Link>
                            <Nav.Link href="#" style={{ color: "575D5E" }}>Blog</Nav.Link>
                            <Nav.Link href="#" style={{ color: "575D5E" }}>Contact</Nav.Link>
                            <Button variant='signup' className='rounded-pill ms-5 px-5 py-2 fs-5 signup d-lg-inline  d-none' >Sign Up</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;