import React from 'react'
import img1 from "../assets/learn.gif";
import img2 from "../assets/develop.gif";
import img3 from "../assets/place.gif";

const Services = ({toggle, setToggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-7 justify-center items-center mt-[70px] ' >
        {/* #12372A */}
        <h1 className={`text-[52px] font-semibold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >How it works</h1>
        {/* 436850 */}
        <p className={` text-xl text-center ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `} > Skillfull Developer: Learn essential skills, develop your expertise, and secure your future with guaranteed job placement. Your path to success starts here.</p>

        <div className=' w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center ' >
            <div className='flex flex-col justify-center items-center gap-2 ' >
                <img src={img1} className=' w-[260px] ' />
                {/* 12372A */}
                <p className={`text-xl ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Learn</p>
                {/* 436850 */}
                <p className={`text-center ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `} >Gain essential skills with our expertise  to prepare you for a successful career.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <img src={img2} className=' w-[400px] ' />
                <p className={`text-xl mt-9 ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>Development</p>
                <p className={`text-center ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Enhance your expertise through hands-on projects and real-world experience, building the confidence needed to excel in your field.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                <img src={img3}  className=' w-[300px] '/>
                <p className={`text-xl ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `}>Placement</p>
                <p className={`text-center ${ toggle === false ? "text-[#436850]" : "text-[#adbc9f]" } `}>Secure your dream job with our 100% placement guarantee, connecting you to top employers ready to hire skilled professionals.</p>
            </div>
        </div>

    </div>
  )
}

export default Services