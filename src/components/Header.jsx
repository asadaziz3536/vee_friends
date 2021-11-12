import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'


const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="announcement-bar text-center p-2">
                <p className='mb-0'>Check out our first ever Mini Drop - "Spooky Vees"</p>
            </div>
            <Navbar bg="white" expand="lg" className='custom-nav'>
                <Container>
                    <Navbar.Brand href="#home"> <img
                        src="assets/icons/logoipsum-logo.svg"
                        width="180"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-lg-center">
                            <Nav.Link href="#home">library</Nav.Link>
                            <Nav.Link href="#link">Gary's Collection</Nav.Link>
                            <Nav.Link href="#link">Explore Friends</Nav.Link>
                            <Button href="#" className='custom-btn' >Connect Wallet</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
