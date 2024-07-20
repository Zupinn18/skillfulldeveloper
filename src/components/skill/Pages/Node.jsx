import React, { useEffect, useRef, useState } from 'react'
import NodeImage from "../../../assets/skills/nodeskill.png";
import img from "../../../assets/avatar-1.svg";
import { IoStar } from "react-icons/io5";
import { GoInfo } from 'react-icons/go';
import { TiTick } from "react-icons/ti";


const Node = ({toggle}) => {
  const skillsGain = [
    {
      name:"NodeJs"
    },
    {
      name:"Javascript"
    },
    {
      name:"Web Development"
    },
    {
      name:"MongoDB"
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
                <p className={`text-xl sm:text-5xl font-bold ${toggle === false ? "text-white" : "text-white"}`} >Master Node.js - Build <br/>Scalable Apps</p>
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
                <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`} >Why students should learn Node.js</p>

                <div className=' w-[67%] grid lg:grid-cols-2 gap-[20px] ' >
                  <div className=' flex gap-2 items-start' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>High Demand for Developers :</strong> Node.js is widely used in the tech industry, and there is a high demand for developers skilled in this technology. Learning Node.js can significantly enhance employability and open up numerous job opportunities.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Full Stack Development :</strong> Node.js allows for full stack development using JavaScript for both client-side and server-side applications. This simplifies the development process and enables students to become versatile full stack developers.</p>
                  </div>
                  <div className=' flex gap-2 justify-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Fast and Efficient :</strong> Node.js is known for its non-blocking, event-driven architecture, which makes it highly efficient and capable of handling a large number of simultaneous connections. This makes it ideal for building scalable and high-performance applications.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Large Ecosystem :</strong> Node.js has a vast ecosystem of libraries and frameworks available through npm (Node Package Manager). This extensive range of tools can speed up development and help students build robust applications with ease</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Community Support :</strong> Node.js has a strong and active community, providing ample resources, tutorials, and forums for learning and problem-solving. Students can easily find support and collaborate with other developers.</p>
                  </div>
                  <div className=' flex gap-2 items-start ' >
                    <TiTick className=' w-[100px] ' />
                    <p className={` text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Real-Time Applications :</strong> Node.js is particularly well-suited for building real-time applications, such as chat applications, online gaming, and collaborative tools. Learning Node.js equips students with the skills to develop modern, interactive web applications.</p>
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
              {/* <div className=' flex flex-col gap-5 ' >
              <h2 className={`text-xl mb-5 sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Why choose Skill Full Developer for learning Python</h2>
              <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
                <li>
                  <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>100% Placement Guarantee :</strong> We offer a 100% placement guarantee. If a student doesn't secure a job after completing our Python training program, we will refund the full amount. This commitment ensures that students can trust our training quality and our dedication to their success.</p>
                </li>
                <li>
                  <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Experienced and Skilled Developers :</strong> Our trainers are highly skilled and experienced developers who bring real-world expertise. This ensures that students receive practical and relevant training, preparing them to excel in the job market.

                    </p>
                </li>
                <li>
                  <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Comprehensive Curriculum :</strong> Our Python training program covers all essential topics, from basic syntax to advanced concepts like data science and machine learning. This comprehensive approach equips students with the knowledge and skills needed to tackle diverse projects and roles.
                    </p>
                </li>
                <li>
                  <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Hands-On Learning and Projects :</strong> We emphasize hands-on learning with real-world projects and assignments. This practical experience helps students build a strong portfolio, making them more attractive to potential employers and better prepared for industry challenges
                    </p>
                </li>
              </ul>
              </div> */}

              <div className=' flex flex-col md:flex-row items-center justify-between gap-[25px] ' >

                <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 ' >
                <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Prepare for a career as a NodeJs  Developer</h2>
                <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Master Python programming essentials thoroughly.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build real-world projects for experience.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Gain expertise in data structures.</p>
                </li>
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Learn debugging and problem-solving skills.</p>
                </li>
              </ul>
                </div>

                <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 ' >
                <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Career opportunities for NodeJs  Developers</h2>
                <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >High demand across diverse industries.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Competitive salaries and benefits packages.</p>
                </li>
                <li>
                  <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Opportunities for career advancement.</p>
                </li>
                <li>
                  <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Versatility in tech and design.</p>
                </li>
              </ul>
                </div>

              </div>



          </div>

          
        </div>

    </div>
  )
}

export default Node