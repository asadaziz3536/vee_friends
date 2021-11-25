import React from 'react'
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import LatestPosts from '../components/LatestPosts'
import Slider from '../components/Slider'
import TimelineNew from '../components/TimelineNew'

const Home = () => {
    console.log('home')
    return (
        <div className='Homepage-wrapper'>

            <Hero />
            <LatestPosts />
            <Slider/>
            {/* <Timeline /> */}

            <TimelineNew />
            <Faqs />
            
        </div>
    )
}

export default Home
