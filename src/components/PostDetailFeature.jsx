import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Tilt from "react-parallax-tilt";
import { useSelector } from 'react-redux';



const PostDetailFeature = () => {

    const data = useSelector(s => s.cardReducer)
    const {admissionToken, cardImage, cardTitle, cardType, color, onSale} = data.cardDetail
    console.log(admissionToken)
    return (
        <div className='postdetail-feature'>
            <Container>
                <Row>
                    <Col sm={12} md={6} className='text-center' style={{margin: '10px 0'}}>
                        <Tilt>
                            <img src={cardImage} style={{height: '25vmax', width: '20vmax'}} alt="" />
                        </Tilt>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="edition">
                            <span>#04293</span>  <span>2 OF 8</span>
                        </div>
                        <h1>{cardTitle}</h1>
                        <div className="description">
                            <p><span>{cardType}</span></p>
                            <p><span>Admission Token · {admissionToken}</span></p>
                        </div>
                        <div className="admission-redeem my-2">
                            <span>VeeCon Admission</span>
                        </div>
                        <h3>Details</h3>
                        <div className="details">
                            <p>This token is verified for admission to VeeCon 2022, 2023, 2024 This token is a collectible that lives on the Ethereum blockchain</p>
                        </div>
                        <Row>
                            <Col className='my-4 my-sm-4 my-md-4' md={6}>
                                <Link>
                                    <img style={{ width: '100%' }} src="assets/images/etherscan-badge-white.png" alt="" />
                                </Link>
                            </Col>
                            <Col className='my-0 mb-4 mb-sm-4 my-sm-0 my-md-4' md={6}>
                                <Link>
                                    <img style={{ width: '100%' }} src="assets/images/opeansea-badge-white.png" alt="" />
                                </Link>
                            </Col>
                            <Col>
                                <div className='d-flex justify-content-between' style={{ border: '1px solid #CECBCB', borderRadius: '9px', padding: '18px' }}>
                                    <div>
                                        <div> <img src="assets/images/last.svg" alt="" /> <span style={{ fontFamily: 'Poppins-Bold', color: '#A1A1A1' }}>Last Date <span className='date'>11</span></span></div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <img src="assets/images/bull.png" alt="" style={{ width: '40px', borderRadius: '50%' }} />
                                        </div>
                                        <div>
                                            <span className='d-block'>*e*</span>
                                            <span style={{ color: '#A1A1A1', fontFamily: 'Poppins-Bold' }}>0xace94...e719</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostDetailFeature
