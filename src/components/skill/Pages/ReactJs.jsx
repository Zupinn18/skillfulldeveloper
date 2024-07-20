import React, { useEffect, useRef, useState } from 'react'
import img from "../../../assets/avatar-1.svg";
import { IoStar } from "react-icons/io5";
import { GoInfo } from 'react-icons/go';
import { TiTick } from "react-icons/ti";


const ReactJs = ({toggle}) => {
  const skillsGain = [
    {
      name:"Frontend"
    },
    {
      name:"Backend"
    },
    {
      name:"Web Development"
    },
    {
      name:"Javascript"
    },
    {
      name:"HTML/CSS"
    },
    {
      name:"MySQL"
    },
    {
      name:"Redux"
    },
  ]

  const scrollToRef = useRef(null);
  const [Fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollToRef.current) {
        const hT = scrollToRef.current.offsetTop;
        const hH = scrollToRef.current.offsetHeight;
        const wH = window.innerHeight;
        const wS = window.scrollY;

        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH)) {
          setFixed(!Fixed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-full mb-[100px] flex flex-col font-poppins `} 
    >
        {/* main skill content */}
        <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mt-6 ' >
          {/* <h2 className={`text-center text-xl sm:text-4xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>NodeJs  Developer</h2> */}

          <div className='flex md:flex-row flex-col justify-between items-center gap-[50px]  ' >
              <div className=' w-[100%] flex flex-col gap-5 rounded-lg bg-[#55cea4] p-10 ' >
                <p className={`text-xl sm:text-5xl font-bold ${toggle === false ? "text-white" : "text-white"}`} >Become a Fullstack Pro : Master <br/> Development</p>
                <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-slate-100" : "text-slate-100"} `} >Boost your Computer programming skills, with minimal previous exposure, learn two <br/> popular programming languages at an accelerated pace.</p>
                <div className=' flex items-center gap-1 ' >
                  <div className=' flex gap-2 items-center ' >
                    <img  src={img} className=' w-[40px] ' />
                    <p className={` font-bold ${toggle === false ? "text-[#436860]" : "text-slate-200"}`} >Instructor:</p>
                  </div>
                  <p className={` ${toggle === false ? "text-[#436860]" : "text-slate-200"}`} >Brandon Kenny</p>
                </div>

                <div>
                  <button style={{
                  "cursor":"pointer",
                  }}
                  className='cursor-pointer font-semibold px-8 py-3 flex flex-col items-center rounded-lg bg-[#436850] transition-all duration-300
                      border-2 text-white hover:bg-[#12372A] border-none
                      '
                  >Enroll Now
                  <p className=' text-sm font-thin ' >Started at 1 Aug</p>
                  </button>
                  </div>
              </div>
              <div className={`bg-white z-50 flex flex-col px-6 py-5 rounded-md ${Fixed ===true ? "md:absolute" : "md:fixed top-[22%]" } right-[6%] shadow-2xl `} >
                <p className={` text-justify text-xl font-bold leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"} `} >Specialization</p>
                <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"} `} >Get in-depth knowledge</p>
                <div className={` w-full mt-2 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`} ></div>
                <div className=' flex flex-col gap-3 mt-2 ' >
                    <div className=' flex gap-2 items-center ' >
                    <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"} `} >4.5</p>
                    <IoStar className=' text-green-500 ' />
                    </div>
                    <div className=' flex flex-col ' >
                              <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"} `} >Beginner Level to Advanced Level</p>
                              <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"} `} >Recommended Experience</p>
                    </div>
                    <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"} `} >45 Days with previous revision class</p>
                    <div className=' flex flex-col ' >
                              <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"} `} >Flexible Schedule</p>
                              <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"} `} >Learn at your own pace</p>
                    </div>

                    <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center px-4 py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>Get 1 Year Course Access</p>
                    </div>

                </div>
              </div>

          </div>

          <div className=' w-[100%] flex flex-col gap-10 rounded-lg relative ' >
                <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`} >Why students should learn Full Stack development</p>

                <div className=' w-[67%] grid lg:grid-cols-2 gap-[20px] ' >
                  <div className=' flex gap-2 items-start' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Versatility and Flexibility :</strong> Full Stack developers are proficient in both front-end and back-end development, making them versatile professionals capable of handling multiple aspects of web development. This flexibility allows them to work on various projects and adapt to different roles within a team 
                    </p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>High Demand and Employability :</strong> Full Stack developers are highly sought after in the job market due to their broad skill set. Companies value professionals who can manage entire projects independently, making Full Stack developers more employable and opening up numerous career opportunities.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Comprehensive Understanding :</strong> Learning Full Stack development provides a comprehensive understanding of how web applications function from start to finish. This holistic knowledge enables developers to create more cohesive and efficient applications, and to better communicate with different team members.</p>
                  </div>
                  <div className=' flex gap-2 justify-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Efficient Problem Solving :</strong> Full Stack developers can identify and resolve issues across the entire development stack, from the user interface to the server and database. This capability leads to faster problem-solving and a more streamlined development process.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Greater Control Over Projects :</strong> With expertise in both front-end and back-end technologies, Full Stack developers have greater control over projects. They can implement features end-to-end and make informed decisions about the best technologies and approaches to use.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Enhanced Creativity and Innovation :</strong> Full Stack development encourages creativity and innovation by allowing developers to experiment with different technologies and frameworks. This ability to work on all aspects of a project fosters innovative solutions and a deeper understanding of the entire development process</p>
                  </div>
                </div>


                <div className=' w-[67%] flex flex-col gap-5 ' >
                    <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`} >Skills you'll gain</p>
                  <div className='flex flex-col md:flex-row gap-3 items-start ' >
                    {
                      skillsGain?.map((skill,ind)=>(
                        <div key={ind} className='bg-emerald-100 px-3 py-1 rounded-xl ' >
                          <p className=' text-emerald-500 ' >{skill.name}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                
          </div>

          <h1 ref={scrollToRef} id="scroll-to"></h1>



          {/* new python content */}
          <div className=' w-[95%] md:w-[70%] flex flex-col gap-[50px] ' >
             
              <div className=' flex flex-col md:flex-row items-center justify-between gap-[25px] ' >

                <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 md:h-[300px] ' >
                <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Prepare for a career as a Full Stack Developer</h2>
                <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Master front-end technologies: HTML, CSS, and JavaScript</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Gain proficiency in back-end languages: Node.js, Python, or Java.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Learn database management with SQL and NoSQL databases.</p>
                </li>
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build and deploy full stack projects to showcase your skills.</p>
                </li>
              </ul>
                </div>

                <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 md:h-[300px] ' >
                <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Career opportunities for Full Stack developers</h2>
                <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build and maintain dynamic websites and web applications.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Work as a project lead managing full development lifecycle.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Join startups or tech companies needing versatile developers.</p>
                </li>
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Consult as a freelance developer for diverse client projects.</p>
                </li>
              </ul>
                </div>

              </div>



          </div>

          
        </div>

    </div>
  )
}

export default ReactJs