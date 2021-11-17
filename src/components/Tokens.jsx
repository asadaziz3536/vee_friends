import React from 'react'
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap'

const Tokens = () => {

    const tokenArray = [
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'

        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '30',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 104.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 104.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        }
    ]

    const navArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <>
            <div className=''>

                <div class="main-title-wrapper"><h2>Library</h2></div>
                <Container>
                    <Col className='card-header-container'>
                        <Row className='card-quantity'>13 Tokens</Row>
                        <hr className='card-header-line' />
                        <Row style={{ width: '80%', margin: '0 auto', justifyContent: 'center', display: 'flex' }}>
                            {navArray.map((obj, ind) => {
                                return (
                                    <div key={ind} style={{ width: "fit-content" }}>
                                        <Col className='alphabet-link' style={{ width: "fit-content" }}>{obj}</Col>
                                    </div>
                                )
                            })}
                        </Row>
                    </Col>
                    <br />
                    <Row xs={1} md={4} className="g-4 card-wrapper">
                        {tokenArray.map((obj, ind) => (
                            <Col sm={4} xs={6} md={3} lg={3} key={ind} >
                                <Card style={{ borderRadius: '3%' }}>
                                    <Card.Img style={{ borderTopLeftRadius: '3%', borderTopRightRadius: '3%', backgroundColor: '#F8F8F8' }} variant="top" src={obj.cardImage} />
                                    <Card.Body>

                                        <Row style={{ alignItems: 'center' }}>
                                            <Col className='col-2'>
                                                <Image src={obj.logo} style={{ width: "14.84px", height: "12.37px", borderRadius: "100%" }} alt="this img" />
                                            </Col>

                                            <Col className='col-10'>
                                                <p style={{ fontSize: '10px', paddingLeft: '3px' }}>{obj.logoTitle}</p>
                                            </Col>
                                        </Row>
                                        <Card.Title className='heading-font' style={{ fontSize: '14px' }}>{obj.title}</Card.Title>
                                        <Row style={{ alignItems: 'center' }}>
                                            <Col className='col-3'>
                                                <h3 className='heading-font mb-0'>{obj.value}</h3>
                                            </Col>

                                            <Col className='col-9 ps-0'>
                                                <p style={{ fontSize: '10px' }}>{obj.valueTitle}</p>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <br />
                    <Col className='my-4'>
                        <Row style={{ width: '80%', margin: '0 auto', justifyContent: 'center', display: 'flex' }}>
                            {navArray.map((obj, ind) => {
                                return (
                                    <div key={ind} style={{ width: "fit-content" }}>
                                        <Col className='alphabet-link' style={{ width: "fit-content" }}>{obj}</Col>
                                    </div>
                                )
                            })}
                        </Row>
                    </Col>

                </Container>
            </div>
        </>
    )
}

export default Tokens
