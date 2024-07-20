import React, { useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import logoImg from "../assets/logo.png";
import Form from './Form/Form';
import { Link } from 'react-router-dom';
import { DropDown } from './DropDown';

const Header = ({toggle, setToggle}) => {
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    // bg-gray-50
    <>
    <div className={` w-full pt-3 pb-3 border-b-2 border-b-[#ADBC9F] backdrop-blur-sm 
    ${toggle === false && "bg-gray-50 border-b-[#12372A] "}
    `} >
        <div className=' w-11/12 mx-auto flex items-center justify-between' >
            {/* logo */}
        <Link to="/" >
        <div className=' flex items-center gap-5 ' >
            {/* 12372A */}
            <img src={logoImg} className=' w-[50px] ' />
            <p className={` text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Skillfull Developer</p>
        </div>
        </Link>

        <div className=' flex items-center gap-7 font-semibold ' >
        <Link to="/" >
                <p className={` text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500 " : "text-[#adbc9f] hover:text-green-300 "} `}>Home</p>
            </Link>
        <Link to="/about-us" >
                <p className={` text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500 " : "text-[#adbc9f] hover:text-green-300 "} `}>About us</p>
            </Link>
            <Link to="/course" >
                <p className={` text-lg transition-all duration-200 ${toggle === false ? "text-[#436850] hover:text-green-500" : "text-[#adbc9f] hover:text-green-300 "} `} >
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
            <button onClick={togglePopup} className=' font-semibold px-4 py-2 rounded-lg bg-green-500 transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-green-600 border-none '
            >1:1 Career counseling</button>
            <button className=' font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
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