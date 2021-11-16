
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Container fluid>
                <Row className=''>
                    <Col md={6}>
                        <div className="hero-content">
                            <span className='theme-accent' style={{ fontFamily: 'Poppins-Medium' }}>What is VeerFriends?</span>
                            <h1 style={{ maxWidth: '233px' }}>Happy Halloween</h1>
                            <p style={{ maxWidth: '348px' }}>A <span className='theme-accent'>Gray Vaynerchuk</span> NFT project around meangiful intellectual property and extraordinary community.</p>
                            <Button href="#" className='custom-btn' >Check out our first ever Mini Drop - "Spooky Vees"</Button>
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>
                            <Col className='col-auto p-0'>
                                <img src="assets/images/card.png" alt="" />
                            </Col>

                        </Row>
                    </Col>

                </Row>




            </Container>

        </div>
    )
}

export default Hero
