import React from 'react'
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap'

const GarrysCollectionTokens = () => {

    const tokenArray = [
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 177.svg",
            title: "Rare",
            value: '40',
            valueTitle: 'TOTAL'
        }
    ]

    return (
        <>
            <div class="main-title-wrapper"><h2>Collection</h2></div>
            <Container className='custom-contain-sm'>
                <Row className='mx-sm-1 mx-1'>
                    <Col className='ps-0'>
                        <span style={{fontFamily:'Poppins-Semibold', fontSize:'18px'}}>{tokenArray.length} Tokens</span>
                    </Col>
                    <Col className='pe-0' style={{textAlign:'right'}}>
                        <span style={{fontFamily:'Poppins-Semibold', fontSize:'18px'}}>View all</span>
                    </Col>
                </Row>
                <hr style={{margin:'0.25rem 0px'}} />

                <Row xs={1} md={4} className="g-4 card-wrapper py-5">
                    {tokenArray.map((obj, ind) => (
                        <Col sm={4} xs={6} md={3} lg={3} key={ind} >
                            <Card style={{ borderRadius: '3%' }}>
                                <Card.Img style={{ borderTopLeftRadius: '3%', borderTopRightRadius: '3%', backgroundColor: '#F8F8F8' }} variant="top" src={obj.cardImage} />
                                <Card.Body className='p-2'>
                                    <Card.Title className='heading-font text-center mb-0' style={{ fontSize: '14px', color: '#49E442', fontFamily: 'Poppins-Semibold' }}>{obj.title}</Card.Title>
                                    <Row style={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Col className='col-12'>
                                            <h3 className='heading-font mb-0' style={{ fontSize: '16px', fontFamily: 'Poppins-bold' }}>{obj.value}</h3>
                                        </Col>
                                        <Col className='col-12'>
                                            <p style={{ fontSize: '12px' }}>{obj.valueTitle}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default GarrysCollectionTokens
