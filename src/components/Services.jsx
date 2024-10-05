import React from 'react'
import img1 from "../assets/learn.gif";
import img2 from "../assets/develop.gif";
import img3 from "../assets/pl.gif";
import img4 from "../assets/internship.gif";
import img5 from "../assets/oneon.gif";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import BGImg from "../assets/bg-service.png";

const Services = ({toggle, setToggle}) => {
  return (
    <div className=' bg-[#12372A] relative mt-[100px] ' >
        <img src={BGImg} className=' w-full absolute top-[-60px] ' />
        <div className=' w-11/12 mx-auto flex flex-col gap-7 pt-[250px] pb-10 justify-center items-center font-poppins ' >
            <div className=' flex items-center gap-10 mb-8 ' >
                {/* #12372A */}
                <h1 className={`w-[50%] text-[52px] font-bold ${ toggle === false ? "text-[#fbfada]" : "text-[#fbfada]" } `} >How it works ?</h1>
                {/* 436850 */}
                <div className=' flex flex-col gap-2 ' >
                    <p className={` text-md  ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `} > Learn essential skills, develop your expertise, and secure your future with guaranteed job placement. Your path to success starts here.</p>
                    <Link to="/course" >
                        <button className=' text-green-500 font-semibold flex items-center gap-2  '
                        >Explore More <MdKeyboardArrowRight/> </button>
                    </Link>
                </div>
            </div>
            <div className=' w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-10 ' >
                <div className=' bg-[#436850] rounded-lg px-8 py-6 md:h-[400px] md:w-[30%] flex flex-col gap-1 items-center ' >
                    <img src={img1} className=' md:mt-[-5px] w-[260px] h-[200px] object-cover ' />
                    {/* 12372A */}
                    <div className=' flex flex-col gap-2 items-center ' >
                        <p className={`text-xl font-bold uppercase ${ toggle === false ? "text-green-500" : "text-[#fbfada]" } `} >Hands-On-Learning</p>
                        {/* 436850 */}
                        <p className={` text-center font-semibold ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `} >Gain essential skills with our expertise  to prepare you for a successful career.</p>
                    </div>
                </div>
                <div className=' bg-[#436850] rounded-lg px-8 py-6 md:h-[400px] md:w-[30%] flex flex-col gap-1 items-center'>
                    <img src={img2} className=' w-[300px] h-[200px] object-cover ' />
                    <div  className=' flex flex-col gap-2 items-center '>
                    <p className={`text-xl font-bold uppercase ${ toggle === false ? "text-green-500" : "text-[#fbfada]" } `}>Industrail Projects</p>
                    <p className={`text-center font-semibold ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
                    </div>
                </div>
                <div className=' bg-[#436850] rounded-lg px-8 py-6 md:h-[400px] md:w-[30%] flex flex-col gap-1 items-center'>
                    <img src={img5} className=' w-[300px] h-[200px] object-cover ' />
                    <div  className=' flex flex-col gap-2 items-center '>
                    <p className={`text-xl font-bold uppercase ${ toggle === false ? "text-green-500" : "text-[#fbfada]" } `}>1-1 Doubt Clearance</p>
                    <p className={`text-center font-semibold ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
                    </div>
                </div>
            </div>
            <div className=' w-10/12 mx-auto flex gap-10 flex-col md:flex-row items-center justify-center ' >
<div className='bg-[#436850] rounded-lg px-8 py-6 md:h-[400px] md:w-[30%] flex flex-col gap-1 items-center'>
        <img src={img4} className=' w-[300px] h-[200px] object-cover ' />
        <div  className=' flex flex-col gap-2 items-center '>
        <p className={`text-xl font-bold uppercase text-center ${ toggle === false ? "text-green-500" : "text-[#fbfada]" } `}>Internship opportunity</p>
        <p className={`text-center font-semibold ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
        </div>
    </div>
    <div className=' bg-[#436850] rounded-lg px-8 py-6 md:h-[400px] md:w-[30%] flex flex-col items-center gap-1'>
        <img src={img3}  className=' h-[200px] object-cover '/>
        <p className={`text-xl font-bold uppercase ${ toggle === false ? "text-green-500" : "text-[#fbfada]" } `}>100% Job Placement</p>
        <p className={`text-center font-semibold ${ toggle === false ? "text-[#adbc9f]" : "text-[#adbc9f]" } `}>Secure your dream job with our 100% placement guarantee, connecting you to top employers ready to hire skilled professionals.</p>
    </div>
</div>

</div>
    </div>
  )
}

export default Services