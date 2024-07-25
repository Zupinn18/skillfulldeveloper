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

const AppDev = ({ toggle }) => {
  const skillsGain = [
    { name: "Application Development" },
    { name: "Flutter" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "React Native" },
    { name: "Android Studio" },
    { name: "Database Management" },
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
            <p className={`text-xl sm:text-5xl font-bold ${toggle === false ? "text-white" : "text-white"}`}>Master App Development:<br/> Build Stunning Mobile Apps</p>
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

        <div className='w-[100%] flex flex-col md:flex-row gap-5 md:gap-10'>
          <div className='w-[67%] flex flex-col gap-5' >
          <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Why learning Application Development is beneficial for students</p>
          <div className='grid lg:grid-cols-2 gap-[20px]'>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>High Demand for Developers :</strong> Android is the most widely used mobile operating system globally, with millions of apps available on the Google Play Store. There is a high demand for skilled Android developers, making it a lucrative career choice with numerous job opportunities.</p>
            </div>
            <div className='flex gap-2 justify-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Large User Base :</strong> Learning Android development allows students to create applications for a vast and diverse user base. This widespread reach means that successful apps can have a significant impact and reach millions of users worldwide.</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Open Source Platform :</strong> Android is an open-source platform, which means developers have access to a wealth of resources and tools. This openness fosters innovation and allows students to customize and optimize their applications more freely.</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Comprehensive Development Environment :</strong> Android Studio, the official integrated development environment (IDE) for Android, provides a robust set of tools for app development. It includes features like code editing, debugging, and performance analysis, which help students build high-quality applications efficiently</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Diverse Device Ecosystem :</strong> Android runs on a wide variety of devices, including smartphones, tablets, smart TVs, and wearables. Learning Android development enables students to create applications for this diverse ecosystem, broadening their potential market and application scenarios.</p>
            </div>
            <div className='flex gap-2 items-start'>
              <TiTick className='w-[100px]' />
              <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"}`}><strong>Creative and Innovative Projects :</strong> Android development encourages creativity and innovation. Students can work on a wide range of projects, from simple utility apps to complex, interactive applications like games and social media platforms, allowing them to explore their creativity and problem-solving skills</p>
            </div>
            
          </div>
          </div>
          <div className=' w-[30%] flex flex-col gap-2 bg-white p-6 rounded-md ' >
                <p className={`text-justify text-xl font-bold leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Things you'll learn in this course</p>
            <div className={`w-full mt-1 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`}></div>
            <ul className=' flex flex-col px-2 gap-1 mt-2 list-disc '  >
                <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Introduction to Mobile</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(Installation & Setup)</p>
                  </div>
                </li>
                <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Android Studio</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(Android SDK & Installation)</p>
                  </div>
                </li>
                <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>UI/UX Design</p>
                  </div>
                </li>
                  <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>React Native</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(Basics)</p>
                  </div>
                </li>
                  <li>
                <div className='flex gap-1 items-center'>
                    <p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Java or Kotlin</p>
                    <p className={`text-justify text-sm leading-6 ${toggle === false ? "text-slate-400" : "text-slate-400"}`}>(Programming languages)</p>
                  </div>
                    </li>
                    <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Native Development</p> 
                  </li> 
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Cross-Platform Tools</p> 
                  </li>
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Drawing and Working with Animation</p> 
                  </li>   
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Android Intents and Services</p> 
                  </li> 
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Synchronization and Replication of Mobile Data</p>
                  </li>  
                  <li><p className={`text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-800"}`}>Packaging and Deploying</p> 
                  </li>       
            </ul>
            <button className='flex text-green-700 mt-3 items-center gap-2 border-2 border-green-700 justify-center px-4 py-2 rounded-lg text-md transition-all duration-200 hover:text-white hover:bg-green-700 '>
                Download full Syllabus Now
              </button>
          </div>
        </div>
   

      <div className=' w-[67%] flex flex-col gap-10 ' >
        <p className={`text-xl sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`} >Skills you'll gain</p>
        <div className='flex flex-col md:flex-row flex-wrap gap-3 items-start ' >
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
      {/* <div className=' flex justify-between items-center gap-[50px] ' >
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Another widely used general-purpose programming language is Python, which has been extensively applied by people in today’s technology industry. Being easy to read and having a very uncomplicated syntax, Python is one of the most popular languages for industry professionals and novices. In this article, you will discover what Python is in its simple definition, primary and secondary capabilities, its use cases in different industries including data science and web development, libraries, frameworks, automation, and scripting. Follow me as we explore the strengths and possibilities of Python in the rapidly developing trends in programming languages.
              </p>
              <img src={ReactImage} className=' w-[25%] ' />
          </div> */}

      {/* <ul className={` flex flex-col gap-5 list-disc ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={`font-semibold text-lg ${toggle === false ? "text-[#12372A]" : "text-gray-100"}`} >What is Python?</p>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Python is a general-purpose, interpreted programming language which gets high acclaim due to its ease of working and code readability. Unknown to many it is considered ideal for use by novices and professionals due to its simplicity and incredible functionality.</p>
            </li>
            <li>
              <p className={`font-semibold text-lg ${toggle === false ? "text-[#12372A]" : "text-gray-100"}`} >History of Python</p>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Python was created in the late 1980s by Guido van Rossum, a Dutch computer programmer. Over the years, Python has evolved into a popular language used for web development, data analysis, artificial intelligence, and more.
</p>
            </li>
          </ul> */}


      {/* new python content */}
      <div className=' w-[95%] md:w-[100%]  flex flex-row gap-[50px] ' >
        <div className=' flex flex-col gap-5 ' >
          <h2 className={`text-xl mb-5 sm:text-2xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Why choose Skill Full Developer for learning Application Development</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>100% Placement Guarantee :</strong> We offer a 100% placement guarantee. If a student doesn't secure a job after completing our Application Development training program, we will refund the full amount. This commitment ensures that students can trust our training quality and our dedication to their success.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Experienced and Skilled Developers :</strong> Our trainers are highly skilled and experienced developers who bring real-world expertise. This ensures that students receive practical and relevant training, preparing them to excel in the job market.

              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Comprehensive Curriculum :</strong> Our Application Development training program covers all essential topics, from basic syntax to advanced concepts like data science and machine learning. This comprehensive approach equips students with the knowledge and skills needed to tackle diverse projects and roles.
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
        <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Salary of a App Developer</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Entry-level : <strong>INR 400,000 per annum </strong> </p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Mid-level : <strong>INR 9-22 lakhs per annum</strong></p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Senior-level : <strong>INR 200.8 lakhs per annum</strong> </p>
              </li>
            </ul>
          </div>
      </div>

      <div className=' flex flex-col md:flex-row items-center justify-between gap-[25px] ' >

      <div className=' w-[33%] bg-white rounded-md flex flex-col gap-3 px-10 py-5 h-[550px]' >
          <img src={PrepareImg} className=' w-[300px] ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Prepare for a career as a App Developer</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Master Java and Kotlin for Android app development proficiency.</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Gain hands-on experience with Android Studio and development tools.</p>
              </li>
              <li>
                <p className={`  text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Learn UI/UX design principles for creating user-friendly applications.</p>
              </li>
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build and showcase diverse apps to strengthen your professional portfolio.</p>
              </li>
            </ul>
          </div>

          <div className='w-[33%] bg-white rounded-md flex flex-col justify-center gap-3 px-10 py-5 h-[550px]' >
          <img src={CareerImg} className=' w-[300px] h-[200px] object-cover ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Career opportunities for App Developers</h2>
            <ul className={` flex flex-col gap-2 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
              <li>
                <p className={` text-sm ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Build and maintain dynamic applications.</p>
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
          <div className='w-[33%] bg-white rounded-md flex flex-col gap-3 px-10 py-5 h-[550px] ' >
          <img src={InterviewImg} className=' w-[300px] ' />
            <h2 className={`text-lg font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Interview opportunities for App Developers</h2>
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
      {/* <div className={` w-full mt-5 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`} ></div>
          <div className=' flex flex-col gap-5 mt-5 ' >
          <h2 className={` text-xl text-start font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Python's Versatility and Applications</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Application Development with Python :</strong> Python facilitates the creation of software in web applications, desktop GUI, and even mobile applications. Due to its libraries and frameworks, it is good for developing all types of applications and with fewer codes.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Scientific Computing and Data Analysis :</strong> Python is considered to be an ideal language for doing scientific computing and data analyses because of its numerously available and powerful libraries for example NumPy, pandas, and Matplotlib. Some of the application areas of Python include the following; artificial intelligence, machine learning, data visualization, and the like, computational biology among others.</p>
            </li>
          </ul>
          </div>

          <div className=' flex flex-col gap-5 mt-5 ' >
          <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key features of Python:</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Easy to Learn :</strong> It can be noted that this language is rather easy to learn since the syntax of payrollMC 2 is rather simple, and therefore beginner may use this language.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>High-Level Language :</strong> because Python is an interpreted language it is classified as a high-level language, this means that you do not control the engine that interprets your code, hence you do not deal with raw details of an operation but rather raw idea or manner to it.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Interpreted Language : </strong> Other consideration is that it as an interpreted language not compiled, it is a very flexible and easy language one can write and test the script short periods of time.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Object-Oriented :</strong> In addition to this there are reliable concepts such as class, object and inheritance which are features of the object –oriented programming paradigm that are also available in python.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Large Standard Library :</strong> It is a standardized language that has one of the richest and most comprehensive standard package and library that contains ranging abilities that cater for most of the routine operations some of them being file operations, networking operations, dimensional analysis among others.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Dynamic Typing :</strong> If at all, you have noticed, Python is a dynamically typed language, and you do not declare the type of a variable before using it.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Cross-Platform :</strong> The programs written in Python is for all the operating systems including Windows, macOs, Linux and so on.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Extensive Community :</strong> Today, there are many libraries, frameworks, and tools written in Python and, most importantly, they are constantly developing due to the large community of programmers.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Rapid Development :</strong> Thanks to the passing of numeric values and the ease of the language and syntax and the nature of the language is most suitable for prototype.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Extensive Use Cases :</strong> Web development field, data science, machine learning, automation and many such fields have adapted the programming language called Python.</p>
            </li>
          </ul>
          </div> */}

    </div>

  )
}

export default AppDev