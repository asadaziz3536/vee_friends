

import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const LatestPosts = () => {
    return (
        <div className='latestposts-section'>
            <Container>
                <Row>
                    <Col md={12} lg={3}>
                        <Button className="btn top-title-pill">
                            <span>From The Blog</span>
                        </Button>
                        <Card style={{  marginTop: '15px', boxShadow: '0px 3px 14px', border: 'none' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title className='card-main-title'><img src='' />Trick or Treat? Nah. Spooky Vees!</Card.Title>
                                <Card.Text>
                                    VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space, I think there's a fine balance between creating value and over-extending, but I've always believed the occasional Easter egg is incredibly important and more importantly-fun.
                                </Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>

                                <hr />
                                <Card.Title><img src='' />VeeFRiends Halloween Treats!</Card.Title>
                                <Card.Text>
                                    VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space,                                </Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>
                                <hr />

                                <Card.Title><img src='' />VeeFRiends Access Timeline & Gift Goat Updates</Card.Title>
                                <Card.Text>VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space,</Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={9}>
                        <div className="btn top-title-pill">
                            <span>Current Floor Prices</span>
                        </div>
                        <Row className='floor-prices'>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6} >
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill' >Core</span>
                                        <h3 className='pt-1 mb-0'>Sufficient Shrimp</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png'  />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill pink' >Bubble Gum</span>
                                        <h3 className='pt-1 mb-0'>Conviction Cockroach</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png'  />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill brown' >Rare</span>
                                        <h3 className='pt-1 mb-0'>Keen Kingfisher</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png'  />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill yellow' >Gold</span>
                                        <h3 className='pt-1 mb-0'>Dapper Dachshund</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png'  />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill green' >Epic</span>
                                        <h3 className='pt-1 mb-0'>Tolerant Tuna</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill purple' >Hologram</span>
                                        <h3 className='pt-1 mb-0'>Bold As Fuck Bat</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill yellow' >G.O.O</span>
                                        <h3 className='pt-1 mb-0'>Swaggy Sea Lion</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width:'100%', boxShadow:'0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill red' >Lava</span>
                                        <h3 className='pt-1 mb-0'>Jolly Jack-O</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill green' >Epic</span>
                                        <h3 className='pt-1 mb-0'>Meticulous Magpie</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='custom-card' >
                                <Row className=''>
                                    <Col md={6}>
                                        <img style={{ width: '100%', boxShadow: '0px 3px 30px #6D1E07AB' }} src='assets/images/card.png' />
                                    </Col>
                                    <Col md={6}>
                                        <span className='category-pill darkgreen' >Diamond</span>
                                        <h3 className='pt-1 mb-0'>Level Headed Lizard</h3>
                                        <span className='value'>9.55 ($43,831.44)</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default LatestPosts
