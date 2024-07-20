import React from 'react'
import TermImg from "../assets/terms.gif";

const Terms = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[50px] ' >
        <div className=' flex flex-col gap-4 mt-[50px]' >
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Terms & Conditions</h2>
          <div className=' flex gap-[50px] items-center ' >
              <p className={` text-justify text-md mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Welcome to Skillful Developer! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our website.
                  <br/><br/>
                  Skillfull Developer provides training in various domains like programming languages, software development, web designing. We deliver a superior brand of training that is practical and relevant to today’s technology demands. Our courses are designed to bridge the gap between academics and industry-requirements with emphasis on hands-on learning concepts and methodologies leading to robust designs and code that translates into an efficient software product or solution.
                  </p>
              <img src={TermImg} className=' w-[50%] ' />
          </div>
          </div>

          {/* <div className=' flex flex-col gap-5 mt-5 ' >
          <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key Features of React</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Components :</strong> The fundamental unit in the transformation of React is components which can be employed and tested to build elite UI systems.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>JSX :</strong> React uses template system known as JSX which is pre-processing extension to js to write components.</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>State and Props :</strong> Members can be of two types state and props where both are used to control information and transfer to other components.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Virtual DOM :</strong>React, in particular, uses the concept of the virtual DOM, which the actual DOM kept in memory and used for rendering and re-rendering.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Hooks :</strong> A Hook is a mechanism that enable use state and other React features in Function Components.</p>
            </li>
           
          </ul>
          </div> */}
    </div>
  )
}

export default Terms