import React, { useEffect, useRef, useState } from 'react'
import ReactImage from "../../../assets/skills/pythoni.jpg";
import img from "../../../assets/avatar-1.svg";
import { IoStar } from "react-icons/io5";
import ProjectImg from "../../../assets/project.gif";
import { GoInfo } from 'react-icons/go';
import { TiTick } from "react-icons/ti";
import InterviewImg from "../../../assets/interview.gif";
import PrepareImg from "../../../assets/prepare.gif";
import CareerImg from "../../../assets/career.gif";
import SalaryImg from "../../../assets/salary.gif";

const Express = ({ toggle }) => {
  const skillsGain = [
    { name: "ExpressJs" },
    { name: "NodeJs" },
    { name: "Javascript" },
    { name: "Server-Side Rendering" },
    { name: "Component-based architecture" },
  ];

  const scrollToRef = useRef(null);
  const targetRef = useRef(null);
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
          setFixed(true);
        } else {
          setFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFixed(false);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className={`w-full h-full mb-[100px] flex flex-col font-poppins `}>
      {/* main skill content */}
      <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mt-6 ' >
        <div className='flex md:flex-row flex-col justify-between items-center gap-[50px]'>
          <div className='w-[100%] flex flex-col gap-12 rounded-lg bg-[#55cea4] p-10 relative'>
            <p className={`text-xl sm:text-5xl font-bold ${toggle === false ? "text-white" : "text-white"}`}>Master Express.js: Build <br/> Robust Web Apps</p>
            <p className={` text-justify text-lg leading-6 ${toggle === false ? "text-slate-100" : "text-slate-100"}`}>Boost your Computer programming skills, with minimal previous exposure, learn two <br /> popular programming languages at an accelerated pace.</p>
            {/* <div className='flex items-center gap-1'>
              <div className='flex gap-2 items-center'>
                <img src={img} className='w-[40px]' />
                <p className={`font-bold ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}>Instructor:</p>
              </div>
              <p className={` ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}>Brandon Kenny</p>
            </div> */}
            <div>
              <button style={{ cursor: "pointer" }}
                className='cursor-pointer font-semibold px-8 py-3 flex flex-col items-center rounded-lg bg-[#436850] transition-all duration-300 border-2 text-white hover:bg-[#12372A] border-none'>
                Enroll Now
                <p className='text-sm font-thin'>Started at 1 Aug</p>
              </button>
            </div>

            <div className={`bg-white absolute z-50 flex flex-col px-6 py-6 top-5 right-5 rounded-md shadow-2xl`}>
            <p className={`text-justify text-xl font-bold leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Specialization</p>
            <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>Get in-depth knowledge</p>
            <div className={`w-full mt-2 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`}></div>
            <div className='flex flex-col gap-3 mt-2'>
              <div className='flex gap-2 items-center'>
                <p className={`text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>4.5</p>
                <IoStar className='text-green-500' />
              </div>
              <div className='flex flex-col'>
                <p className={`text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Beginner Level to Advanced Level</p>
                <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>Recommended Experience</p>
              </div>
              <p className={`text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>45 Days with previous revision class</p>
              <div className='flex flex-col'>
                <p className={`text-justify text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Flexible Schedule</p>
                <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>Learn at your own pace</p>
              </div>
              <div className='flex text-green-700 items-center gap-2 border-2 border-green-700 justify-center px-4 py-2 rounded-lg text-md'>
                <GoInfo />
                <p>Get 1 Year Course Access</p>
              </div>
            </div>
          </div>
          </div>
          
        </div>

        <div className='w-[100%] flex gap-10'>
          <div className='w-[67%] flex flex-col gap-5' >
          <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Why learning Express.js is beneficial for students</p>
          <div className='grid lg:grid-cols-2 gap-[20px]'>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Builds dynamic web applications :</strong> 
Express. js help you to build your web applications fast and scale it without compromising on security. By learning Express. With Nodejs students can now build web applications that are able to handle multiple requests and responses far better than an apache server. Today's web development world is all about dynamic and interactive content, so this skill becomes essential.

              </p>
            </div>
            <div className='flex gap-2 justify-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Improves job prospects :</strong> 
Knowledge of Express. The concept of .Js makes our students more valuable in the job market. Many companies use Express. Many companies use JavaScript in their tech stack, so this can give students a leg up on job applications for web development positions. Furthermore, after learning Express.js shows that you can learn new technologies as a student.
</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Enhances Node.js understanding :</strong> 
Express. js is built on top of Node.js, so learning Express. We teach Node at .js deeper level .js and its ecosystem. By mastering Express. With the help of .js, students will get to understand Node. Callbacks, middleware and asynchronous programmes - .js concepts.
</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Develops problem-solving skills :</strong> 
Working with Express. Problem-solving, critical thinking and logical reasoning can be developed in the right way by learning programming through .js. We build and debug an Express app as students. When building js applications, they face many challenges that require having creative solutions. It is the process which makes them proficient in analyzing problems, finding solutions and writing the code that implements those solutions
</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Expands project possibilities :</strong> 
Express.js enables students to tackle complex projects, such as building RESTful APIs, web services, and enterprise-level applications. With Express.js, students can create robust and scalable applications that can handle large amounts of data and traffic.

</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Enhances collaboration :</strong> 
It is also vastly used in industry and open-source projects, which makes it easy for students to work together with other developers. By studying Express.js, students would be able to contribute towards open-source projects, take part in coding communities, and work in team projects easily.

</p>
            </div>
          
          </div>
          </div>

          <div className=' w-[30%] flex flex-col gap-2 bg-white p-6 rounded-md ' >
                <p className={`text-justify text-xl font-bold leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Things you'll learn in this course</p>
            <div className={`w-full mt-1 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`}></div>
            <ul className=' flex flex-col px-2 gap-1 mt-2 list-disc '  >
                <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Installing and setting Up</p>
                  </div>
                </li>
                  <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>JSX</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(Javascript + XML)</p>
                  </div>
                </li>
                <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>State Full and Stateless Component</p> 
                  </li> 
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Component</p> 
                  </li> 
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Everything about Javascript</p> 
                  </li> 
                  <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Hooks</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(useEffect, useState, useMemo, useRef)</p>
                  </div>
                </li>
                  
                    <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Conditional Rendering</p> 
                  </li> 
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Context API & State management</p> 
                  </li>

                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Connect API with Fetch or Axios</p> 
                  </li>
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>React Form or Forkik/Reacthooks</p> 
                  </li>
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Redux & React Router</p> 
                  </li>
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Tailwind CSS with React</p> 
                  </li>
               
            
                    
                         
            </ul>
            <button className='flex text-green-700 mt-3 items-center gap-2 border-2 border-green-700 justify-center px-4 py-2 rounded-lg text-md transition-all duration-200 hover:text-white hover:bg-green-700 '>
                Download full Syllabus Now
              </button>
          </div>
        </div>
   

      <div className=' w-[67%] flex flex-col gap-10 ' >
        <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`} >Skills you'll gain</p>
        <div className='flex flex-col md:flex-row gap-3 flex-wrap items-start ' >
          {
            skillsGain?.map((skill, ind) => (
              <div key={ind} className='bg-emerald-100 px-3 py-1 rounded-xl ' >
                <p className=' text-emerald-500 ' >{skill.name}</p>
              </div>
            ))
          }
        </div>
      </div>

      <h1 ref={scrollToRef} id="scroll-to"></h1>


      {/* new ExpressJs content */}
      <div className=' w-[95%] md:w-[100%]  flex flex-row gap-[50px] ' >
        <div className=' flex flex-col gap-5 ' >
          <h2 className={`text-xl mb-5 sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Why choose Skill-Full Developer for learning ExpressJs</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>100% Placement Guarantee :</strong> We offer a 100% placement guarantee. If a student doesn't secure a job after completing our ExpressJs training program, we will refund the full amount. This commitment ensures that students can trust our training quality and our dedication to their success.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Experienced and Skilled Developers :</strong> Our trainers are highly skilled and experienced developers who bring real-world expertise. This ensures that students receive practical and relevant training, preparing them to excel in the job market.

              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Comprehensive Curriculum :</strong> Our ExpressJs training program covers all essential topics, from basic syntax to advanced concepts like data science and machine learning. This comprehensive approach equips students with the knowledge and skills needed to tackle diverse projects and roles.
              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Hands-On Learning and Projects :</strong> We emphasize hands-on learning with real-world projects and assignments. This practical experience helps students build a strong portfolio, making them more attractive to potential employers and better prepared for industry challenges
              </p>
            </li>
          </ul>
        </div>
        <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 md:w-[70%]' >
        <img src={SalaryImg} className=' w-[250px] ml-5 ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Salary of a ExpressJs Developer</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Average-Salary : <strong>₹6,50,000 - ₹12,00,000 per annum</strong> </p>
              </li>
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Junior-level : <strong>₹4,00,000 - ₹7,00,000 per annum</strong> </p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Mid-level : <strong>₹7,00,000 - ₹11,00,000 per annum</strong></p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Senior-level : <strong>₹11,00,000 - ₹16,00,000 per annum</strong> </p>
              </li>
            </ul>
          </div>
      </div>

      <div className=' flex flex-col md:flex-row items-center justify-between gap-[25px] ' >

      <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 h-[550px]' >
          <img src={PrepareImg} className=' w-[300px] ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Prepare for a career as a ExpressJs Developer</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Get Familiar with NodeJS</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Master Express.js</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build Small Projects</p>
              </li>
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Learn Related Technologies</p>
              </li>
            </ul>
          </div>

          <div className=' bg-white rounded-md flex flex-col justify-center gap-3 px-10 py-5 h-[550px]' >
          <img src={CareerImg} className=' w-[300px] h-[200px] object-cover ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Career opportunities for ExpressJs Developers</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >API Developer</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Full-stack Developer</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Back-end Developer</p>
              </li>
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Cloud Developer</p>
              </li>
            </ul>
          </div>
          <div className=' bg-white rounded-md flex flex-col gap-3 px-10 py-5 h-[550px] ' >
          <img src={InterviewImg} className=' w-[300px] ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Interview opportunities for ExpressJs Developers</h2>
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

  )
}
export default Express