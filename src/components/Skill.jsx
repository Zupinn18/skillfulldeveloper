import React from 'react'
import SkillCourse from './skill/SkillCourse';

const Skill = ({toggle}) => {
   
  return (
    <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `} 
    >

        {/* main skill content */}
        <div className=' w-11/12 mx-auto flex flex-col gap-5 mt-6 mb-10 ' >
          <h2 className={`text-center text-xl sm:text-6xl font-extrabold uppercase ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Skill Set</h2>
          {/* ::Text */}
          <p className={` text-center text-lg leading-6 font-semibold ${toggle === false ? "text-[#436860]" : "text-[#fbfada]"} `}>
          Achieve 100% job placement by mastering coding languages and frameworks, ensuring top-tier software development expertise.
          </p>
          <SkillCourse toggle={toggle} />
        </div>

    </div>
  )
}

export default Skill