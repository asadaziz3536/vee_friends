import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link , useHistory} from 'react-router-dom'
import { tokenCard } from '../actions/cardData/cardData'

const Tokens = () => {
    const [selectedValue, setselectedValue] = useState('A')
    console.log("🚀 ~ file: Tokens.jsx ~ line 7 ~ Tokens ~ selectedValue", selectedValue)

    const history = useHistory()
    const dispatch = useDispatch()

    const tokenArray = [
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'

        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '30',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Accountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        },
        {
            cardImage: "/assets/images/Group 185.svg",
            title: "Bccountable Ant",
            logo: "/assets/images/Group 175.svg",
            logoTitle: "Keynote Koala",
            value: '40',
            valueTitle: 'TOTAL'
        }
    ]

    const renderArray  = tokenArray.filter((obj,ind)=> obj.title[0] === selectedValue)

    const clickHandler = (obj) =>{
        dispatch(tokenCard(obj, history))
    }


    const navArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <>
            <div className=''>
                <div class="main-title-wrapper"><h2>Library</h2></div>
                <Container className='custom-contain-sm'>
                    <div className='token-main-container'>
                    <Col className='card-header-container'>
                        <Row className='card-quantity'>{renderArray.length} Tokens</Row>
                        <hr className='card-header-line pashtoclass' /> 
                        <Row style={{ width: '90%', margin: '0 auto', justifyContent: 'center', display: 'flex', marginTop: '2rem' }}>
                            {navArray.map((obj, ind) => {
                                return (
                                    <div key={ind} style={{ width: "fit-content" }}>
                                        <Col className='alphabet-link' onClick={()=> setselectedValue(obj)} style={{ width: "fit-content", cursor: 'pointer' }}>{obj}</Col>
                                    </div>
                                )
                            })}
                        </Row>
                    </Col>
                    <br />
                    
                    <Row xs={1} md={4} className="g-4 card-wrapper">
                        {renderArray.map((obj, ind)=> (
                            
                            <Col sm={4} xs={6} md={3} lg={3} key={ind} >
                                <Card style={{ borderRadius: '12px' }} onClick={()=> clickHandler(obj)}>
                                    <Card.Img style={{ borderTopLeftRadius: '3%', borderTopRightRadius: '3%', height: '12rem', background: 'rgb(248, 248, 248)' }} variant="top" src={obj.cardImage} />
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
                        <Row style={{ width: '90%', margin: '0 auto', justifyContent: 'center', display: 'flex', marginBottom: '3rem' }}>
                            {navArray.map((obj, ind) => {
                                return (
                                    <div key={ind} style={{ width: "fit-content" }}>
                                        <Col className='alphabet-link' style={{ width: "fit-content" }}>{obj}</Col>
                                    </div>
                                )
                            })}
                        </Row>
                    </Col>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Tokens
