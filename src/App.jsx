import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import RefundForm from "./components/Refund/RefundForm";
import Skill from './components/Skill';
import ReactJs from './components/skill/Pages/ReactJs';
import Python from './components/skill/Pages/Python';
import Mern from './components/skill/Pages/Mern';
import Node from './components/skill/Pages/Node';
import AboutUs from './components/About/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Terms from './components/Terms';
import Contact from './components/Contact';
import CourseInfo from './components/CourseInfo/CourseInfo';
import AppDev from './components/skill/Pages/AppDev';
import DigitalMarketing from './components/skill/Pages/DigitalMarketing';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `} >
      <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={
              <Homepage toggle={toggle} setToggle={setToggle} />
            }/>
            <Route path="/refund" element={
              <RefundForm toggle={toggle}  />
            }/>
            <Route path="/about-us" element={
              <AboutUs toggle={toggle}/>
            }/>
            <Route path="/contact-us" element={
              <Contact toggle={toggle}/>
            }/>
            <Route path="/skill" element={
              <Skill toggle={toggle}/>
            }/>
            <Route path="/course" element={
              <CourseInfo toggle={toggle}/>
            }/>
            <Route path="/course/fullstack" element={
              <ReactJs toggle={toggle}/>
            }/>
            <Route path="/course/python" element={
              < Python toggle={toggle} />
            }/>
            <Route path="/course/mern" element={
              <Mern toggle={toggle}/>
            }/>
            <Route path="/course/node" element={
              <Node toggle={toggle}/>
            }/>
            <Route path="/course/application-developer" element={
              <AppDev toggle={toggle}/>
            }/>
            <Route path="/course/digital-marketing" element={
              <DigitalMarketing toggle={toggle}/>
            }/>
            <Route path="/terms-and-conditions" element={
              <Terms toggle={toggle}/>
            }/>
        </Routes>
        <Footer toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App
