import React, { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Brand from './brand/Brand'
import Offer from './Offer'
import Services from './Services'
import AnimationCar from './Common/Carousel/AnimationCar'
import Courses from './course/Courses'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Homepage = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `} 
    >
         <Header toggle={toggle} setToggle={setToggle} />
        <HeroSection toggle={toggle} setToggle={setToggle}/>
        <Brand/>
        <Offer toggle={toggle} setToggle={setToggle} />
        <Services toggle={toggle} setToggle={setToggle}/>
        <AnimationCar toggle={toggle} setToggle={setToggle}/>
        <Courses toggle={toggle} setToggle={setToggle}/>
        <Testimonials toggle={toggle} setToggle={setToggle}/>
        <Footer toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default Homepage