import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Container, Row, Col, Image } from 'react-bootstrap'


const Slider = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1215 },
            items: 6,
            slidesToSlide: 3,
            marginRight: '2px' // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1214, min: 1024 },
            items: 5,
            slidesToSlide: 3,
            marginRight: '2px'
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 4.6,
            slidesToSlide: 2, // optional, default to 1.
            marginRight: '2px'
        },
        mobile: {
            breakpoint: { max: 800, min: 710 },
            items: 3.5,
            slidesToSlide: 1,
            marginRight: '2px' // optional, default to 1.
        },
        largeMobile: {
            breakpoint: { max: 709, min: 614 },
            items: 3,
            slidesToSlide: 1
        },
        smallMobile: {
            breakpoint: { max: 613, min: 425 },
            items: 2.5,
            slidesToSlide: 1
        },
        extraSmallMobile: {
            breakpoint: { max: 613, min: 425 },
            items: 2,
        },
        doubleExtraSmallMobile: {
            breakpoint: { max: 424, min: 375 },
            items: 1.7,
        }
    };

    const tokenArray = [
        {
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core',
            titleImg: "/assets/images/Group 175.svg"
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core',
            titleImg: "/assets/images/Group 175.svg",
        },
        {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        }, {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'

        },
        {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        },
        {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        },
        {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        }, {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'

        },
        {
            titleImg: "/assets/images/Group 175.svg",
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        },
        {
            cardImage: "/assets/images/Group 174.svg",
            title: "Tough To Beat A Wor...",
            logo: "/assets/images/Group 173.svg",
            titleImg: "/assets/images/Group 175.svg",
            logoTitle: "JUST ART",
            valueTitle: 'Core'
        }
    ]

    return (


        <div>

            <div class="main-title-wrapper"><h2>Read Activity</h2></div>

            <div className='slider-main-container'>

                <Carousel
                    ssr
                    partialVisbile
                    itemClass="image-item"
                    responsive={responsive}
                    containerClass="carousel-container"
                    arrows={true}
                    style={{ marginBottom: '20px' }}
                // infinite={true}
                // autoPlay={true}

                >
                    {/* <div className='card-wrapper'> */}
                    {tokenArray.map((obj, ind) => (
                        <Col className='card-wrapper' key={ind} >
                            <Card style={{ borderRadius: '14px', marginRight: '20px', width: '11.75rem', height: '18.375rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='col-12'>


                                <Card.Img style={{
                                    borderTopLeftRadius: '14px', borderTopRightRadius: '14px', paddingBottom: '30px',
                                    backgroundColor: '#F8F8F8', height: '8.375rem'
                                }} variant="top" src={obj.cardImage} />

                                <Card.Body>
                                    <Row style={{ alignItems: 'center', marginTop: '-36px' }}>

                                        <Col className='col-8'>
                                            <div className='pill rounded-pill'
                                                style={{ boxShadow: '0px 3px 6px #00000029', fontSize: '10px', background: 'white', padding: '6px', zIndex: '10' }}>
                                                <span style={{ color: '#A7A7A7', fontFamily: 'Poppins-Bold' }}>#09396 13 OF 20</span>
                                            </div>
                                        </Col>
                                        <Col className='col-4'>
                                            <Image src={obj.logo} className='rounded-pill' style={{ width: '35px' }} alt='' />
                                        </Col>

                                        <Col className='col-2'>
                                            <Image src={obj.titleImg} style={{ width: "14.84px", height: "12.37px", borderRadius: "100%" }} alt="this img" />
                                        </Col>
                                        <Col className='col-10'>
                                            <p style={{ fontSize: '10px', paddingLeft: '3px' }}>{obj.logoTitle}</p>
                                        </Col>
                                    </Row>
                                    <Card.Title className='heading-font' style={{ fontSize: '14px' }}>{obj.title}</Card.Title>
                                    <Row style={{ alignItems: 'center' }}>

                                        <Col>
                                            <p style={{ fontSize: '10px' }}>{obj.valueTitle}</p>
                                        </Col>
                                    </Row>


                                </Card.Body>
                                <span className='card-footer d-flex' style={{ justifyContent: 'space-between' }}>

                                    <span>
                                        <p>Last Sale</p>
                                    </span>
                                    <div><p>10</p></div>
                                </span>

                            </Card>
                        </Col>
                    ))}
                    {/* </div> */}
                </Carousel>
            </div>
        </div>
    )
}

export default Slider
