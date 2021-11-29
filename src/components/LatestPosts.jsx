

import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { latestPostCard } from '../actions/cardData/cardData'


const LatestPosts = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const postCard = [
        {
            cardImage: '/assets/images/Group 172.svg',
            admissionToken: 'Core',
            cardTitle: 'Sufficiant Shrimp',
            onSale: '8.7',
            cardType: 'INVERTEBRATE',
            color: 'grey',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 170.svg',
            admissionToken: 'Bubble Gum',
            cardTitle: 'Conviction Cockroach',
            onSale: '8.7',
            cardType: 'INVERTEBRATE',
            color: 'pink',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 171.svg',
            admissionToken: 'Rare',
            cardTitle: 'Keen Kingfisher',
            onSale: '8.7',
            cardType: 'BIRD',
            color: 'brown',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 169.svg',
            admissionToken: 'Gold',
            cardTitle: 'Dapper Dachshund',
            onSale: '8.7',
            cardType: 'DOG',
            color: 'yellow',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 168.svg',
            admissionToken: 'Epic',
            cardTitle: 'Tolerant Tuna',
            onSale: '8.7',
            cardType: 'FISH',
            color: 'green',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 167.svg',
            admissionToken: 'Hologram',
            cardTitle: 'Bold As Fuck Bat',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'purple',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 165.svg',
            admissionToken: 'G.O.O',
            cardTitle: 'Swaggy Sea Lion',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'yellow',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 164.svg',
            admissionToken: 'Lava',
            cardTitle: 'Jolly Jack-O',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'red',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 163.svg',
            admissionToken: 'Epic',
            cardTitle: 'Meticulous Magpie',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'green',
            msg: 'success'
        },
        {
            cardImage: '/assets/images/Group 166.svg',
            admissionToken: 'Diamond',
            cardTitle: 'Level Header Lizar',
            onSale: '8.7',
            cardType: 'Bird',
            color: 'darkgreen',
            msg: 'success'
        }
    ]

    const [cardData, setCardData] = useState({})


    const clickHandler = (obj) => {
        setCardData({ ...obj })
    }

    useEffect(() => {
        dispatch(latestPostCard(cardData, history))
    }, [cardData])



    return (
        <div className='latestposts-section'>
            <Container>
                <Row className='justify-content-center' style={{marginTop: '6px 34px'}}>
                    <Col md={12} lg={5}>
                        <Button className="btn top-title-pill d-flex mx-auto">
                            <span>From The Blog</span>
                        </Button>
                        <Card style={{ marginTop: '15px', boxShadow: '0px 2px 6px 0px #bbbbbb', border: 'none', borderRadius: '10px', minWidth: '90%' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <div className='blog-section-same'>
                                <Card.Title className='card-main-title'><img className='me-2' src='assets/images/100.png'
                                    style={{ boxShadow: '0px 3px 6px #00000029', width: '40px', height: '40px', borderRadius: '50%' }} />

                                    Trick or Treat? Nah. Spooky Vees!

                                </Card.Title>
                                <Card.Text className='blog-card-text'>
                                    VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space, I think there's a fine balance between creating value and over-extending, but I've always believed the occasional Easter egg is incredibly important and more importantly-fun.
                                </Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>
                                </div>

                                <hr />
                                <div className='blog-section-same'>

                                <Card.Title><img src='' />VeeFRiends Halloween Treats!</Card.Title>
                                <Card.Text className='blog-card-text'>
                                    VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space,                                </Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>
                                </div>
                                <hr />
                                <div className='blog-section-same'>

                                <Card.Title><img src='' />VeeFRiends Access Timeline & Gift Goat Updates</Card.Title>
                                <Card.Text className='blog-card-text'>VeeFriends community, it's very important for me to enjoy the next 45 years of building this universe. As an observe of the overall NFT space,</Card.Text>
                                <Card.Link href="#">Continue reading...</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} lg={7}>
                        <div className='text-center'>
                            <div className="btn top-title-pill mt-sm-4 mt-md-4 mt-lg-0 mt-xs-4">
                                <span>Current Floor Prices</span>
                            </div>
                        </div>
                        <Row className='floor-prices'>

                            {postCard.map((obj, ind) => (
                                <Col md={6} className='custom-card' key={ind}>

                                    <Link to='/' onClick={() => clickHandler(obj)}>
                                        <Row className=''>
                                            <Col md={4} sm={4} xs={4} >
                                                <img style={{ width: '100%', boxShadow: `0px 3px 20px ${obj.color ? obj.color : '#6D1E07AB'}`, borderRadius: '6px' }} src={obj.cardImage} value={obj.cardImage} />
                                            </Col>
                                            <Col md={8} sm={8} xs={8}>
                                                <div className="card-content">
                                                    <span className='category-pill' style={{ color: obj.color, border: `1px solid ${obj.color}` }} value={obj.admissionToken}>{obj.admissionToken}</span>
                                                    <h3 className='pt-3 mb-0' name='cardTitle' value={obj.cardTitle}>{obj.cardTitle}</h3>
                                                    <span className='value' value={obj.onSale}><span className='triple-equal-sign'>Ξ</span> {obj.onSale} ($43,831.44)</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Link>

                                    <div>
                                        <hr style={{ width:'100%', height: '4px' , background: 'rgb(221 221 221)', marginTop: '1.3rem'}}/>
                                    </div>
                                </Col>


                            ))}

                        </Row>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default LatestPosts
