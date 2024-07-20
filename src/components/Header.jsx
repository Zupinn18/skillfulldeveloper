import React, { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import logoImg from "../assets/logo.png";
import Form from './Form/Form';
import { Link } from 'react-router-dom';
import { DropDown } from './DropDown';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({toggle, setToggle}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [menu, setMenu] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) { // Adjust the threshold as per your requirement
      setMenu(false);
    }
  };

  useEffect(() => {
    // Set the initial state based on the current window width
    handleResize();

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // bg-gray-50
    <>
    <div className={` w-full pt-3 pb-3 border-b-2 border-b-[#ADBC9F] backdrop-blur-sm 
    ${toggle === false && "bg-gray-50 border-b-[#12372A] "}
    `} >
        <div className=' w-11/12 mx-auto flex items-center justify-between relative ' >
            {/* logo */}
        <Link to="/" >
        <div className=' flex items-center gap-5 ' >
            {/* 12372A */}
            <img src={logoImg} className=' w-[50px] ' />
            <p className={` text-lg md:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Skillfull Developer</p>
        </div>
        </Link>

        <div className={`md:flex flex-col md:flex-row items-center gap-7 font-semibold  ${ menu === true ? " bg-gray-50 block absolute top-[75px] right-[-5%] px-10 py-5 " : "hidden" } `} >
            <Link to="/" >
                    <p className={`text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500 " : "text-[#adbc9f] hover:text-green-300 "} `}>Home</p>
                </Link>
            <Link to="/about-us" >
                    <p className={`text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500 " : "text-[#adbc9f] hover:text-green-300 "} `}>About us</p>
                </Link>
                <Link to="/course" >
                    <p className={`text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500" : "text-[#adbc9f] hover:text-green-300 "} `} >
                        {/* <DropDown toggle={toggle} /> */}
                        Course
                        </p>
                </Link>
                <Link to="/skill" >
                    <p className={` text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500" : "text-[#adbc9f] hover:text-green-300 "} `}>Skill</p>
                </Link>
                <Link to="/" >
                    <p className={` text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500" : "text-[#adbc9f] hover:text-green-300 "} `}>Placement</p>
                </Link>
                
        </div>
        


        <div className='flex items-center gap-5  ' >
            {
                !toggle  && <LuSun onClick={()=>{setToggle(!toggle)}} 
                className={` ${toggle === false ? "text-[#12372A] hover:text-[#436850]" : "text-white hover:text-[#fbfada]"}
                text-2xl cursor-pointer font-semibold  
               hover:font-bold transition-all duration-200 `} />
            }
            {
                toggle  && <FaMoon onClick={()=>{setToggle(!toggle)}} 
                className=' text-2xl cursor-pointer font-semibold
                hover:font-bold transition-all text-white duration-200 hover:text-[#fbfada]' />
            }
            <div className=' block md:hidden cursor-pointer ' >
            <RxHamburgerMenu className=' w-[30px] h-[25px] ' onClick={()=>{setMenu(!menu)}} />
            </div>
            <button onClick={togglePopup} className=' hidden md:block font-semibold px-4 py-2 rounded-lg bg-green-500 transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-green-600 border-none '
            >1:1 Career counseling</button>
            <button className=' hidden md:block font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A] border-none '
            >Login</button>
        </div>
        </div>
    </div>
      <div>
        <Form showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  )
}

export default Header