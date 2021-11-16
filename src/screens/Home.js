import React from 'react'
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'

const Home = () => {
    return (
        <div className='Homepage-wrapper'>
           
            <Hero />
            <LatestPosts />
            <Faqs />
            
        </div>
    )
}

export default Home
