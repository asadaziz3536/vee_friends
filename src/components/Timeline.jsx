import React from 'react'
import { Container } from 'react-bootstrap';
import { Chrono } from "react-chrono";
import { useState, useEffect } from 'react'

const Timeline = () => {

    const [width, setwidth] = useState(window.innerWidth)

    const [isTimeline, setIsTimeline] = useState('VERTICAL_ALTERNATING')

    window.onresize = () => setwidth(window.innerWidth)

    useEffect(() => {
        if (width < '767') {
            setIsTimeline('VERTICAL')
        }
        else if (width > '768') {
            setIsTimeline('VERTICAL_ALTERNATING')
        }
        else if (width < '552') {
            setIsTimeline('HORIZONTAL')
        }
    }, [width])

    const [isTitle, setIsTitle] = useState('')
    const items = [{
        title: 'Almost Time OCT 11 2022',
        cardTitle: "Keynote Koala",
        cardSubtitle: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space,",
        media: {
            type: "IMAGE",
            source: {
                url: "/assets/images/test.jpg"
            }
        }
    }, {
        title: 'Almost Time OCT 11 2022',
        cardTitle: "Keynote Kola",
        cardSubtitle: "VeeFriends community, it's very important for me to enjoy the next 45years of building this universe. As anobserve of the overall NFT space,",
        media: {
            type: "IMAGE",
            source: {
                url: "/assets/images/test.jpg"
            }
        }
    }
    ];

    return (

        <div>
            <div class="main-title-wrapper"><h2>Timeline</h2></div>
            <Container>
                <div style={{ width: "100%", height: "100%" }} className='timeline-wrapper'>
                    <Chrono items={items}
                        mode={isTimeline}
                        className='chrono-main-wrapper'
                        theme={{
                            primary: "black",
                            secondary: "#0AD900",
                            cardBgColor: "white",
                            cardForeColor: "black",
                            titleColor: "black",
                        }}
                        hideControls={true}
                        cardHeight={200}
                        cardWidth={300}
                        slideShow
                        slideItemDuration={1000}
                        scrollable={{ scrollbar: true }}
                    />

                </div>
            </Container>
        </div>
    )
}


export default Timeline
