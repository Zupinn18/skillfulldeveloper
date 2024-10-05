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
import Reactjs from './components/skill/Pages/ReactJs';
import Java from './components/skill/Pages/Java';
import Express from './components/skill/Pages/Express';
import SQL from './components/skill/Pages/SQL';
import Flutter from './components/skill/Pages/Flutter';
import ReactNative from './components/skill/Pages/ReactNative';
import DSA from './components/skill/Pages/DSA';
import Frontend from './components/skill/Pages/Frontend';
import Backend from './components/skill/Pages/Backend';
import DBMS from './components/skill/Pages/DBMS';
import AIML from './components/skill/Pages/AIML';
import PrivacyPolicy from './components/PrivacyPolicy';
import EnrollPython from './components/EnrollForms/EnrollPython';
import EnrollNode from './components/EnrollForms/EnrollNode';
import EnrollMERN from './components/EnrollForms/EnrollMERN';
import EnrollFullStack from './components/EnrollForms/EnrollFullStack';
import EnrollAPP from './components/EnrollForms/EnrollAPP';
import EnrollJavascript from './components/EnrollForms/EnrollJavascript';
import EnrollReact from './components/EnrollForms/EnrollReact';
import EnrollDigital from './components/EnrollForms/EnrollDigital';
import EnrollAI from './components/EnrollForms/EnrollAI';
import EnrollExpress from './components/EnrollForms/EnrollExpress';
import EnrollJava from './components/EnrollForms/EnrollJava';
import EnrollFlutter from './components/EnrollForms/EnrollFlutter';
import EnrollSQL from './components/EnrollForms/EnrollSQL';
import EnrollReactNative from './components/EnrollForms/EnrollReactNative';
import EnrollDSA from './components/EnrollForms/EnrollDSA';
import EnrollFrontend from './components/EnrollForms/EnrollFrontend';
import EnrollBackend from './components/EnrollForms/EnrollBackend';
import EnrollDBMS from './components/EnrollForms/EnrollDBMS';
import LoginPage from './components/login/LoginPage';
import FAQs from './components/FAQs';
import ExaminationPolicy from './components/ExaminationPolicy';

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
             <Route path="/privacy-policy" element={
              <PrivacyPolicy toggle={toggle}/>
            }/>
            <Route path="/login" element={
              <LoginPage toggle={toggle}/>
            }/>
            <Route path="/frequently-asked-questions" element={
              <FAQs toggle={toggle}/>
            }/>
            <Route path="/examination-policy" element={
              <ExaminationPolicy toggle={toggle}/>
            }/>








            {/* ENROLL FORMS ROUTES */}
            <Route path="/enroll-python-course" element={
              <EnrollPython toggle={toggle}/>
            }/>
            <Route path="/enroll-nodejs-course" element={
              <EnrollNode toggle={toggle}/>
            }/>
            <Route path="/enroll-mern-stack-course" element={
              <EnrollMERN toggle={toggle}/>
            }/>
            <Route path="/enroll-full-stack-course" element={
              <EnrollFullStack toggle={toggle}/>
            }/>
            <Route path="/enroll-application-development-course" element={
              <EnrollAPP toggle={toggle}/>
            }/>
            <Route path="/enroll-javascript-course" element={
              <EnrollJavascript toggle={toggle}/>
            }/>
            <Route path="/enroll-reactjs-course" element={
              <EnrollReact toggle={toggle}/>
            }/>
            <Route path="/enroll-digital-marketing-course" element={
              <EnrollDigital toggle={toggle}/>
            }/>

            <Route path="/enroll-express-course" element={
              <EnrollExpress toggle={toggle}/>
            }/>
            <Route path="/enroll-java-course" element={
              <EnrollJava toggle={toggle}/>
            }/>
            <Route path="/enroll-flutter-course" element={
              <EnrollFlutter toggle={toggle}/>
            }/>
            <Route path="/enroll-mysql-course" element={
              <EnrollSQL toggle={toggle}/>
            }/>
            <Route path="/enroll-react-native-course" element={
              <EnrollReactNative toggle={toggle}/>
            }/>
            <Route path="/enroll-dsa-course" element={
              <EnrollDSA toggle={toggle}/>
            }/>
            <Route path="/enroll-frontend-development-course" element={
              <EnrollFrontend toggle={toggle}/>
            }/>
            <Route path="/enroll-backend-development-course" element={
              <EnrollBackend toggle={toggle}/>
            }/>
            <Route path="/enroll-dbms-course" element={
              <EnrollDBMS toggle={toggle}/>
            }/>
            <Route path="/enroll-aiml" element={
              <EnrollAI toggle={toggle}/>
            }/>



            {/* COURSES ROUTES */}
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
            <Route path="/course/database-management" element={
              <DBMS toggle={toggle}/>
            }/>
            <Route path="/course/ai-ml" element={
              <AIML toggle={toggle}/>
            }/>
        </Routes>
        <Footer toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default App
