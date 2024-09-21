import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import img from "../assets/home1.gif";
import Enqiryform from './Enquiryform';
import {Link} from "react-router-dom";
const HeroSection = ({toggle, setToggle}) => {
    const [showPopup, setShowPopup] = useState(false);
    const el = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [ "Web Developer",
  //     "Full Stack Developer",
  //     "Backend Developer",
  //     "Android Developer",
  //     "MERN Developer",
  //     "Coding",], // Strings to display
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 80,
  //     backDelay: 1000,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);



  // for placement
  // const pl = useRef(null);
   
  // useEffect(() => {
  //   const typeds = new Typed(pl.current, {
  //     strings: [ "Full Fee Refundable",], // Strings to display
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 80,
  //     backDelay: 1000,
  //   });

  //   // Destropying
  //   return () => {
  //     typeds.destroy();
  //   };
  // }, []);

  return (
    <>
    <div className=' w-[95%] mx-auto md:w-full flex flex-col md:flex-row md:justify-center md:items-center gap-10 md:gap-[150px] ' >
      <div className='w-full mx-auto flex flex-col gap-4 md:ml-[100px] mt-10 md:mt-[0px] ' >
        <div className='flex flex-col ' >
          {/* #12372A */} 
            {/* <p className={`text-[36px] md:text-[42px] lg:text-[50px] font-semibold
             ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Your Career in <br/> <span className=' text-green-600 ' ref={el} ></span> <br/> Starts Here</p> */}
             <p className={`text-[36px] md:text-[42px] leading-[45px] lg:text-[50px] font-semibold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Launch your <span className=' ' >Career in</span> </p>
              <p className={`text-[36px] md:text-[42px] lg:text-[50px] font-semibold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Just 3-Month, <br/>
              <span className=' inline-block text-green-600 font-[800] animate-zoom-in-zoom-out ' >100% Job </span> &nbsp;Placement or Your <span className=' inline-block text-green-600 font-[800] animate-zoom-in-zoom-out ' > &nbsp;Money Back</span> </p>
        </div>

        {/* 436850 */}
        {/* <p className={` text-md md:text-2xl font-bold 
        ${toggle === false ? "text-red-500" : "text-red-400"} `} >100% Job Placement or <span ref={pl} > </span> </p> */}
        {/* <p className={` text-md md:text-2xl font-bold 
        ${toggle === false ? "text-red-500" : "text-red-400"} `} >100% job placement or your Money Back </p> */}

        <div>
          <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} title="" className={`flex text-base transition-all duration-200 ${toggle === false ? "text-black hover:text-green-700 focus:text-green-700" : "text-[#adbc9f] hover:text-green-300 focus:text-green-300"}`}>
  <button
    className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300 border-2 text-white hover:bg-[#12372A] mt-5 border-none'
  >
    Enroll Now
  </button>
</Link>
        </div>
        
      </div>
      
      <img src={img} className='md:w-[40%] ' />
      
    </div>
    
    </>
  )
}

export default HeroSection