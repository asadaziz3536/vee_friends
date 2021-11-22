
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


const Header = () => {
   //assigning location variable
   const location = useLocation();

   //destructuring pathname from location
   const { pathname } = location;

   //Javascript split method to get the name of the path in array
   const splitLocation = pathname.split("/");



    return (

        <div className='header-wrapper'>
            <div className="announcement-bar text-center p-2">
                <p className='mb-0'>Check out our first ever Mini Drop - "Spooky Vees"</p>
            </div>
            <Navbar id='myHeader' expand="lg" className='custom-nav'>
                <Container>
                    <Navbar.Brand ><Link to='/'> <img
                        src="assets/icons/logoipsum-logo.svg"
                        width="180"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-lg-center">
                            <Nav.Link className={splitLocation[1] === "library" ? "active" : ""}><Link to='/library'>library</Link></Nav.Link>
                            <Nav.Link className={splitLocation[1] === "garryscollection" ? "active" : ""}>
                                <Link  to='/garryscollection'>Gary's Collection</Link>
                            </Nav.Link>
                            <Nav.Link className={splitLocation[1] === "" ? "active" : ""} >
                                <Link >Explore Friends</Link>
                            </Nav.Link>
                            <Button href="#" className='custom-btn' style={{ boxShadow: '0px 3px 10px #00000073' }} >Connect Wallet</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
