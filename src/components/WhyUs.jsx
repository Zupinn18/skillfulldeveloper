import React from 'react'
import liveImg from "../assets/live.gif";
import CompreImg from "../assets/compre.gif";
import IndustryImg from "../assets/industry.gif";
import ProjectImg from "../assets/project.gif";
import ExpertImg from "../assets/expert.gif";
import PlacementImg from "../assets/placement.gif";

const whyUs = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-7 justify-center items-center mt-[70px] ' >
         <h1 className={`text-[42px] font-semibold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#fbfada]" } `} >Why Students Should Choose SkillFull Developer ?</h1>
         <div className=' w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center ' >
                {/* 12372A */}
                <div className=' md:h-[500px] flex flex-col gap-5 items-center bg-white px-10 py-8 rounded-md shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={PlacementImg} className=' w-[200px] ' />
                    <div className='h-[40%] flex flex-col gap-2 ' >
                        <p className={`text-xl text-center font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >100% Placement Guarantee</p>
                        {/* 436850 */}
                        <p className={` text-justify text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} >We stand by the quality of our training with a 100% placement guarantee. If students do not secure a job after completing our program, we will refund the full amount, ensuring their investment in education is risk-free.</p>
                    </div>
                </div>
                <div className=' md:h-[500px] flex flex-col gap-5 items-center bg-white px-10 py-8 rounded-md shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={ExpertImg} className=' w-[200px] h-[180px] ' />
                    <div className=' h-[40%] flex flex-col gap-2' >
                    <p className={`text-xl font-bold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >Expert Trainers</p>
                    {/* 436850 */}
                    <p className={` text-justify text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} >Our instructors are seasoned developers with extensive industry experience. They provide insights and knowledge that go beyond textbooks, equipping students with practical skills and real-world problem-solving abilities.</p>
                    </div>
                </div>
                <div className=' md:h-[500px] flex flex-col gap-5 items-center bg-white px-10 py-8 rounded-md shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={CompreImg} className=' w-[250px] '  />
                    <div className=' h-[40%] flex flex-col gap-2 ' >
                        <p className={`text-xl text-center font-bold ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >Comprehensive Curriculum</p>
                        {/* 436850 */}
                        <p className={` text-justify text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} > Our training programs cover a wide range of topics and technologies, including Python, Full Stack Programming, MERN Stack, Java Programming, and Mobile Application Development.
                        {/* This ensures that students gain a versatile skill set that is highly valued in the job market. */}
                        </p>
                    </div>
                </div>
                <div className='md:h-[500px] flex flex-col gap-5 items-center bg-white px-10 py-8 rounded-md  shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={liveImg} className=' w-[200px] ' />
                    <div className='h-[40%] flex flex-col gap-2 ' >
                        <p className={`text-xl font-bold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >Online Live Classes</p>
                        {/* 436850 */}
                        <p className={` text-justify text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} > We offer online live classes, allowing students to learn from anywhere with the flexibility to fit their schedules. This interactive format ensures that students can ask questions, engage in discussions, and receive immediate feedback.</p>
                    </div>

                </div>
                <div className='md:h-[500px] flex flex-col gap-5 items-center bg-white px-8 py-8 rounded-md shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={ProjectImg} className=' w-[200px] ' />
                    <div className='h-[40%] flex flex-col gap-2 ' >
                    <p className={`text-xl font-bold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >Hands-On Projects and Practical Experience</p>
                    {/* 436850 */}
                    <p className={` text-justify text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} >Our courses emphasize hands-on learning through real-world projects and assignments. This practical approach helps students build a strong portfolio, demonstrating their skills to potential employers and enhancing their employability.</p>
                    </div>
                </div>
                <div className=' md:h-[500px] flex flex-col gap-5 items-center bg-white px-8 py-8 rounded-md shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 ' >
                    <img src={IndustryImg} className=' w-[200px] ' />
                    <div className='h-[40%] flex flex-col gap-2' >
                        <p className={`text-xl font-bold text-center ${ toggle === false ? "text-[#12372A]" : "text-[#12372A]" } `} >Industry-Relevant Training and Support</p>
                        {/* 436850 */}
                        <p className={` text-center text-md ${ toggle === false ? "text-[#436850]" : "text-[#436850]" } `} >We stay updated with the latest industry trends and technologies to ensure our training is relevant and up-to-date. Additionally, we provide ongoing support and resources to help students succeed in their careers, from resume building to interview preparation.</p>
                    </div>
                </div>

        </div>
    
    </div>
  )
}

export default whyUs