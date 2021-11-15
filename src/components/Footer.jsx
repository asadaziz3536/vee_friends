import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>
            <Container fluid>
                <Row>
                    <Col md={6} sm={12}>
                        <h5>
                            See you at VeeCon
                        </h5>
                        <p>Subscribe and stay up to date on the newest updates.</p>
                        <form action="">
                            <div className="input-wrapper">
                                <input type="email" className='form-control' placeholder='E-mail' />
                                <Button type='submit btn'>Join Us!</Button>
                            </div>
                        </form>
                    </Col>
                    <Col md={6} sm={12}>
                        <h5 className='mb-0 pt-sm-4 pt-xs-4'>Follow the VeeFriends!</h5>
                        <a href="">
                            <img src="assets/images/discord.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="assets/images/twitter-btn.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="assets/images/insta.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="assets/images/tiktok.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="assets/images/youtube.svg" alt="" />
                        </a>
                    </Col>
                </Row>
                <hr  />
                <Row className>
                    <Col lg={6} sm={12}>
                        <h6>VeeFriends, LLC2021</h6>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <h6>Vee Friends</h6>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href="">Library</a>
                                    </li>
                                    <li>
                                        <a href="">Explore All</a>
                                    </li>
                                    <li>
                                        <a href="">Gary's Collection</a>
                                    </li>
                                    <li>
                                        <a href="">Access</a>
                                    </li>
                                    <li>
                                        <a href="">Gift</a>
                                    </li>
                                    <li>
                                        <a href="">Top 5</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6}>
                                <h6>Connect</h6>
                                <ul className='list-unstyled'>
                                    <li><a href="">My Profile</a></li>
                                    <li><a href="">FAQ'S</a></li>
                                    <li><a href="">Discord</a></li>
                                    <li><a href="">Instagram</a></li>
                                    <li><a href="">Twitter</a></li>
                                    <li><a href="">YouTube</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <h6>GrayVee</h6>
                                <ul className='list-unstyled'>
                                    <li><a href="">VeeCon</a></li>
                                    <li><a href="">Garyvaynerchuk.com</a></li>
                                    <li><a href="">VaynerNFT</a></li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Footer
