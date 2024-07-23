import React from 'react'
import PythonImage from "../../assets/skills/pythoni.jpg";

const PythonSkill = ({toggle}) => {
  return (
    <div className='w-full h-full mb-[100px] flex flex-col font-poppins' >
    <div className=' w-11/12 mx-auto flex flex-col gap-[40px] mt-6 ' >
   <div className='w-[100%] flex flex-col rounded-lg '>
     <p className={`text-xl text-center sm:text-5xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Python</p>
   </div>

<div className=' flex justify-between items-center gap-[50px] ' >
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
       Another widely used general-purpose programming language is Python, which has been extensively applied by people in today’s technology industry. Being easy to read and having a very uncomplicated syntax, Python is one of the most popular languages for industry professionals and novices. In this article, you will discover what Python is in its simple definition, primary and secondary capabilities, its use cases in different industries including data science and web development, libraries, frameworks, automation, and scripting. Follow me as we explore the strengths and possibilities of Python in the rapidly developing trends in programming languages.
       </p>
       <img src={PythonImage} className=' w-[25%] ' />
   </div>

<ul className={` flex flex-col gap-5 list-disc ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
     <li>
       <p className={`font-semibold text-lg ${toggle === false ? "text-[#12372A]" : "text-gray-100"}`} >What is Python ?</p>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >
Python is a general-purpose, interpreted programming language which gets high acclaim due to its ease of working and code readability. Unknown to many it is considered ideal for use by novices and professionals due to its simplicity and incredible functionality.
</p>
     </li>
     <li>
       <p className={`font-semibold text-lg ${toggle === false ? "text-[#12372A]" : "text-gray-100"}`} >History of Python</p>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Python was created in the late 1980s by Guido van Rossum, a Dutch computer programmer. Over the years, Python has evolved into a popular language used for web development, data analysis, artificial intelligence, and more.
</p>
     </li>
   </ul>

   <div className={` w-full mt-5 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`} ></div>
   <div className=' flex flex-col gap-5 mt-5 ' >
   <h2 className={` text-xl text-start font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Python's Core Features and Syntax</h2>
   <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Python's Easy-to-Read Syntax :</strong> 
Python stands out for its simplicity, and the code one writes is, therefore, easier to comprehend. It has a clean and elegant structure and because of this and because of the lower cost of program maintenance it is widely used
</p>
     </li>
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Dynamic Typing and Strong Typing :</strong>
It is also dynamically typed this means that the data types of the variable are decided as the program is running. It is also strongly typed; this means that variables will be used in proper contexts to avoid certain behaviors.
</p>
     </li>
   </ul>
   </div>

   <div className=' flex flex-col gap-5 mt-5 ' >
   <h2 className={` text-xl text-start font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Python's Versatility and Applications</h2>
   <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Application Development with Python :</strong>
Python facilitates the creation of software in web applications, desktop GUI, and even mobile applications. Due to its libraries and frameworks, it is good for developing all types of applications and with fewer codes.</p>
     </li>
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Scientific Computing and Data Analysis :</strong>
Python is considered to be an ideal language for doing scientific computing and data analyses because of its numerously available and powerful libraries for example NumPy, pandas, and Matplotlib. Some of the application areas of Python include the following; artificial intelligence, machine learning, data visualization, and the like, computational biology among others.

</p>
     </li>
   </ul>
   </div>

   <div className=' flex flex-col gap-5 mt-5 ' >
   <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key features of Python</h2>
   <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Easy to Learn :</strong> It can be noted that this language is rather easy to learn since the syntax of payrollMC 2 is rather simple, and therefore beginner may use this language</p>
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
   </div>
</div>
</div>
  )
}

export default PythonSkill