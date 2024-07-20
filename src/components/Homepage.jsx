import React, { useState } from 'react'
import HeroSection from './HeroSection'
import Brand from './brand/Brand'
import Services from './Services'
import AnimationCar from './Common/Carousel/AnimationCar'
import Courses from './course/Courses'
import Testimonials from './Testimonials'
import WhyUs from "./WhyUs.jsx";

const Homepage = ({toggle, setToggle}) => {
  return (
    <div className={`w-full h-full flex flex-col font-poppins`} 
    >
        <HeroSection toggle={toggle} setToggle={setToggle}/>
        <Brand/>
        <Services toggle={toggle} setToggle={setToggle}/>
        <WhyUs toggle={toggle} />
        <AnimationCar toggle={toggle} setToggle={setToggle}/>
        <Courses toggle={toggle} setToggle={setToggle}/>
        <Testimonials toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default Homepage