import React from 'react'
import {content} from '../content'
import Hero from '../components/Hero/Hero';
import Places from '../components/Places/Places';
import BannerImg from '../components/Hero/BannerImg';
import Blogs from '../pages/Blogs'
import Banner from '../components/Hero/Banner';
import Testimonial from '../components/Testimonial/Testimonial';
import About from './About';

const Home = () => {
  const {hero}=content;
  return (
    <div>
      <div className='relative'>
        <video autoPlay loop muted  className='h-[700px] w-full object-cover'>
          <source src={hero.video} type='video/mp4'/>
        </video>
        <Hero/>
      </div>
      <Places/>
      <BannerImg/>
      <Blogs/>
      <Banner/>
      <About/>
      <Testimonial/>
    </div>
  )
}

export default Home