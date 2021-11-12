
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Container>
                <Row className=''>
                    <Col md={6}>
                        <span className='theme-accent' style={{ fontFamily: 'Poppins-Medium' }}>What is VeerFriends?</span>
                        <h1 style={{ maxWidth: '233px' }}>Happy Halloween</h1>
                        <p style={{ maxWidth: '348px' }}>A <span className='theme-accent'>Gray Vaynerchuk</span> NFT project around meangiful intellectual property and extraordinary community.</p>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>

                <Button href="#" className='custom-btn' >Check out our first ever Mini Drop - "Spooky Vees"</Button>


            </Container>

        </div>
    )
}

export default Hero
