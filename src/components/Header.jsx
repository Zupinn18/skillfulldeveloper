import React, { useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import logoImg from "../assets/logo.png";

const Header = ({toggle, setToggle}) => {
  return (
    // bg-gray-50
    <div className={` w-full pt-3 pb-3 border-b-2 border-b-[#ADBC9F] backdrop-blur-sm 
    ${toggle === false && "bg-gray-50 border-b-[#12372A] "}
    `} >
        <div className=' w-11/12 mx-auto flex items-center justify-between' >
            {/* logo */}
        <div className=' flex items-center gap-5 ' >
            {/* 12372A */}
            <img src={logoImg} className=' w-[50px] ' />
            <p className={` text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Skillfull Developer</p>
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
            <button className=' font-semibold bg-[#adbc9f] px-3 py-1 rounded-lg border-[#12372A] border-2 transition-all duration-300 
            hover:text-[#436850] hover:border-[#436850]
             '
            >Login</button>
            <button className=' font-semibold px-3 py-1 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A] '
            >SignUp</button>
        </div>
        </div>
    </div>
  )
}

export default Header