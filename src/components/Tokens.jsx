import React from 'react'
import { Card, Row, Col, Container, Image } from 'react-bootstrap'
import Header from './Header'

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
    return (
        <>
            <Header />
            <Container>
                <Row xs={1} md={4} className="g-4 card-wrapper">
                    {tokenArray.map((obj, ind) => (
                        <Col sm={4} xs={6} md={3} lg={3} key={ind} >
                            <Card style={{ borderRadius: '3%'}}>
                                <Card.Img style={{ borderTopLeftRadius: '3%', borderTopRightRadius: '3%', backgroundColor: '#F8F8F8' }} variant="top" src={obj.cardImage} />
                                <Card.Body>

                                    <Row style={{alignItems: 'center'}}>
                                        <Col className='col-2'>
                                            <Image src={obj.logo} style={{ width: "14.84px", height: "12.37px", borderRadius: "100%" }} alt="this img" />
                                        </Col>

                                        <Col className='col-10 ps-0'>
                                            <p style={{ fontSize: '10px', paddingLeft: '3px' }}>{obj.logoTitle}</p>
                                        </Col>
                                    </Row>
                                    <Card.Title className='heading-font' style={{ fontSize: '14px' }}>{obj.title}</Card.Title>
                                    <Row style={{alignItems: 'center'}}>
                                        <Col className='col-3'>
                                            <h3 className='heading-font' style={{ fontSize: '16px' }}>{obj.value}</h3>
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


            </Container>

            <div>
                {tokenArray.map((obj, ind) => (
                    <>
                        <h4>{obj.cardTitle}</h4>
                    </>
                ))}
            </div>
        </>
    )
}

export default Tokens
