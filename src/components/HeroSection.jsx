import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import img from "../assets/home1.gif";
import Form from './Form/Form';

const HeroSection = ({toggle, setToggle}) => {
    const el = useRef(null);
   
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Web Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Android Developer",
      "MERN Developer",
      "Coding",], // Strings to display
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);



  // for placement
  const pl = useRef(null);
   
  useEffect(() => {
    const typeds = new Typed(pl.current, {
      strings: [ "Full Fee Refundable",], // Strings to display
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Destropying
    return () => {
      typeds.destroy();
    };
  }, []);

  return (
    <div className='w-full flex justify-center items-center gap-[150px] ' >
      <div className='w-full mx-auto flex flex-col gap-4 ml-[100px] ' >
        <div className='flex ' >
          {/* #12372A */}
            <p className={`text-[26px] md:text-[36px] lg:text-[50px] font-semibold
             ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Your Career in <br/> <span className=' text-green-600 ' ref={el} ></span> <br/> Starts Here</p>
        </div>

        {/* 436850 */}
        <p className={` text-2xl font-bold ${toggle === false ? "text-red-500" : "text-red-400"} `} >100% Job Placement or <span ref={pl} > </span> </p>

        <div>
        <button style={{
        "cursor":"pointer",
        }}
        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white hover:bg-[#12372A] mt-5 border-none
             '
        >Enroll Now</button>
        </div>
        
      </div>
      <img src={img} className='w-[40%]' />
    </div>
  )
}

export default HeroSection