import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CollectionsFeature = () => {
    return (
        <div>
            <div className='postdetail-feature collections-feature-wrap'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className='text-center'>
                            <img src="assets/images/card.png" alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="edition">
                                <span>#04293</span>  <span>2 OF 8</span>
                            </div>
                            <h1>Accountable Anteater</h1>
                            <div className="description">
                                <p><span>MAMMAL</span></p>
                            </div>

                            <div className="admission-redeem my-2">
                                <span>VeeCon Admission</span>
                            </div>
                            <h3>Details</h3>
                            <div className="details">
                                <p>This token is verified for admission to VeeCon 2022, 2023, 2024 This token is a collectible that lives on the Ethereum blockchain</p>
                            </div>
                            <Row >
                                <Col>
                                    <Row className='text-center stats-pannel' style={{ border: '1px solid #CECBCB', borderRadius: '6px' }}>
                                        <Col>
                                            <div className='total'>
                                                <span>40</span>
                                            </div>
                                            <div>
                                                <span style={{color:'#8D8D8D' , fontFamily:'Poppins-Semibold'}}>Total</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='total owners'>
                                                <span>40</span>
                                            </div>
                                            <div>
                                                <span style={{color:'#8D8D8D' , fontFamily:'Poppins-Semibold'}}>Owners</span>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className='total average'>
                                                <span>2.82</span>
                                            </div>
                                            <div>
                                                <span style={{color:'#8D8D8D', fontFamily:'Poppins-Semibold'}}>Average Price</span>
                                            </div>
                                        </Col>
                                       
                                       
                                    </Row>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CollectionsFeature
