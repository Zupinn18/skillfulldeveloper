import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import RefundForm from "./components/Refund/RefundForm";
import Skill from './components/Skill';
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
import Placement from './components/Placement';
import Enroll from './components/Enquiryform'
import NodeJs from './components/SkillSet/NodeJs';
import PythonSkill from './components/SkillSet/PythonSkill';
import Javascript from './components/skill/Pages/Javascript';
import FullStack from './components/skill/Pages/FullStack';
import Reactjs from './components/skill/Pages/Reactjs';
import Java from './components/skill/Pages/Java';
import Express from './components/skill/Pages/Express';
import SQL from './components/skill/Pages/SQL';
import Flutter from './components/skill/Pages/Flutter';
import ReactNative from './components/skill/Pages/ReactNative';
import DSA from './components/skill/Pages/DSA';
import Frontend from './components/skill/Pages/Frontend';
import Backend from './components/skill/Pages/Backend';

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
              <FullStack toggle={toggle}/>
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

            <Route path="/course/flutter" element={
              <Flutter toggle={toggle}/>
            }/>

            <Route path="/course/sql" element={
              <SQL toggle={toggle}/>
            }/>

            <Route path="/course/digital-marketing" element={
              <DigitalMarketing toggle={toggle}/>
            }/>
            <Route path="/course/javascript" element={
              <Javascript toggle={toggle}/>
            }/>
            <Route path="/course/react" element={
              <Reactjs toggle={toggle}/>
            }/>
            <Route path="/terms-and-conditions" element={
              <Terms toggle={toggle}/>
            }/>
            <Route path="/placement" element={
              <Placement toggle={toggle}/>
            }/>
            <Route path="/enroll-now" element={
              <Enroll toggle={toggle}/>
            }/>
            <Route path="/skill/nodejs" element={
              <NodeJs toggle={toggle}/>
            }/>
            <Route path="/skill/python" element={
              <PythonSkill toggle={toggle}/>
            }/>
            <Route path="/course/express-js" element={
              <Express toggle={toggle}/>
            }/>
            <Route path="/course/java" element={
              <Java toggle={toggle}/>
            }/>
            <Route path="/course/react-native" element={
              <ReactNative toggle={toggle}/>
            }/>
            <Route path="/course/data-structure" element={
              <DSA toggle={toggle}/>
            }/>
            <Route path="/course/frontend-development" element={
              <Frontend toggle={toggle}/>
            }/>
            <Route path="/course/backend-development" element={
              <Backend toggle={toggle}/>
            }/>
        </Routes>
        <Footer toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App
