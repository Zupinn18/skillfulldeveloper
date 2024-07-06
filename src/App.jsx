import { useState } from 'react'
import './App.css'
import Brand from './components/brand/Brand'
import AnimationCar from './components/Common/Carousel/AnimationCar'
import Courses from './components/course/Courses'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Offer from './components/Offer'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `} >
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

export default App
