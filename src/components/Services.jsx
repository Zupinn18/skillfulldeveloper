import React from 'react'
import img1 from "../assets/learn.gif";
import img2 from "../assets/develop.gif";
import img3 from "../assets/pl.gif";
import img4 from "../assets/internship.gif";
import img5 from "../assets/oneon.gif";

const Services = ({toggle, setToggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-7 justify-center items-center mt-[70px] ' >
        {/* #12372A */}
        <h1 className={`text-[52px] font-semibold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >How it works</h1>
        {/* 436850 */}
        <p className={` text-lg text-center ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `} > Skillfull Developer: Learn essential skills, develop your expertise, and secure your future with guaranteed job placement. Your path to success starts here.</p>

        <div className=' w-10/12 mx-auto flex items-center justify-center gap-10 ' >
            <div className=' w-[30%] flex flex-col gap-1 items-center ' >
                <img src={img1} className=' mt-[-50px] w-[260px] h-[200px] object-cover ' />
                {/* 12372A */}
                <div className=' flex flex-col gap-2 items-center ' >
                    <p className={`text-xl font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Hands-On-Learning</p>
                    {/* 436850 */}
                    <p className={` text-center font-semibold ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `} >Gain essential skills with our expertise  to prepare you for a successful career.</p>
                </div>
            </div>
            <div className=' w-[30%] flex flex-col gap-1 items-center'>
                <img src={img2} className=' w-[300px] h-[200px] object-cover ' />
                <div  className=' flex flex-col gap-2 items-center '>
                <p className={`text-xl font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>Industrail Projects</p>
                <p className={`text-center font-semibold ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
                </div>
            </div>
            <div className='w-[30%] flex flex-col gap-1 items-center'>
                <img src={img5} className=' w-[300px] h-[200px] object-cover ' />
                <div  className=' flex flex-col gap-2 items-center '>
                <p className={`text-xl font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>1-1 Doubt Clearance</p>
                <p className={`text-center font-semibold ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
                </div>
            </div>
        </div>
        <div className=' w-10/12 mx-auto flex gap-10 items-center justify-center ' >
        <div className='w-[30%] flex flex-col gap-1 items-center'>
                <img src={img4} className=' w-[300px] h-[200px] object-cover ' />
                <div  className=' flex flex-col gap-2 items-center '>
                <p className={`text-xl font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>Internship opportunity</p>
                <p className={`text-center font-semibold ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
                </div>
            </div>
            <div className='w-[30%] flex flex-col items-center gap-1'>
                <img src={img3}  className=' h-[200px] object-cover '/>
                <p className={`text-xl font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>100% Job Placement</p>
                <p className={`text-center font-semibold ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Secure your dream job with our 100% placement guarantee, connecting you to top employers ready to hire skilled professionals.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Services