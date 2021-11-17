import React from 'react'
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import LatestPosts from '../components/LatestPosts'
import Timeline from '../components/Timeline'

const Home = () => {
    return (
        <div className='Homepage-wrapper'>
           
            <Hero />
            <LatestPosts />
            <Timeline />
            <Faqs />
            
        </div>
    )
}

export default Home
