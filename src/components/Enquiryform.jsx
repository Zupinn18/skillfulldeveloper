import React from "react";
import ProfessorImg from "../assets/professor2.jpg";

const Enroll = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto font-poppins mb-10 ' >
    <div className=' w-10/12 mx-auto md:flex-row flex-col flex mt-10 bg-white rounded-lg shadow-2xl  ' > 
    <div className=' md:w-[70%] h-[100%] flex flex-col gap-[50px] items-center justify-center relative ' >
            <img src={ProfessorImg} className=" h-[100%] rounded-tl-lg md:rounded-bl-lg rounded-tr-lg md:rounded-tr-[0px] " loading='lazy' alt='Side Image' />
            {/* <p className=' absolute md:text-4xl bottom-0 font-bold text-green-900 px-4 py-2 ' >One smart move today can open the door to your dream career tomorrow!</p> */}
            {/* <div className="" >
                <h5 className=" text-2xl text-[#12372A] font-semibold " >Connect with Experts, One-on-One</h5>
            </div> */}
            {/* <div className=' flex items-center justify-center ' >
          <button type="submit" className=" mt-5 font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] ">Send message</button>
        </div> */}
        </div>
<div className={`py-8 px-8 max-w-screen md:w-7/12 mx-auto rounded-lg `}>
    <h2 className={` ${toggle === true ? " text-white " :" text-[#12372A] " } mb-2 text-4xl tracking-tight font-bold text-center `}>Enroll Now</h2>
    {/* 436850 */}
    <p className={`mb-8 lg:mb-5 font-light text-center sm:text-xl ${toggle === true ? " text-gray-300 " :" text-[#436850] " } `}>Ready to take the next step in your learning journey? fill the form to get started and secure your spot in our course!</p>
    <form className="space-y-2 flex flex-col gap-2 ">
          <div>
            <label for="name" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Full Name</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="Ram Sharma" required />
        </div>
        <div>
            <label for="email" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Email Id</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="name@skillfulldeveloper.com" required />
        </div>
        <div>
            <label for="phoneNumber" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Contact Number</label>
            <input type="number" id="phoneNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="eg. 9876543210" required />
        </div>
        <div>
            <label for="highestEducation" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Highest Education</label>
            <input type="text" id="highestEducation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="Enter your Highest Qualification" required />
        </div>
        <div>
            <label for="subject" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Courses</label>
             <select id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " required >
             <option value="" >Select Course</option>
              <option value="Python" >Python</option>
              <option value="NodeJs" >Nodejs</option>
              <option value="MERN" >MERN Stack Development</option>
              <option value="FullStack" >Full Stack Development</option>
              <option value="AppDevelopment" >App Development</option>
              <option value="Javascript" >Javascript</option>
              <option value="Reactjs" >Reactjs</option>
              <option value="DigitalMarketing" >Digital Marketing</option>
              <option value="ExpressJS" >ExpressJS</option>
              <option value="Java" >Java</option>
              <option value="Flutter" >Flutter</option>
              <option value="MySQL" >MySQL</option>
              <option value="ReactNative" >React Native</option>
              <option value="DSA" >Data Structure and Algorithms</option>
              <option value="FrontendDevelopment" >Frontend Development</option>
              <option value="AIML" >AI/ML</option>
              <option value="DBMS" >Database management systems</option>
              <option value="BackendDevelopment" >Backend Development</option>
             </select>
        </div>
        {/* <div>
            <label for="hearAboutUs" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>How did you hear about us ?</label>
            <input type="text" id="hearAboutUs" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="eg. Advertisement, Friend, etc." required />
        </div>
        <div>
            <label for="careerGoal" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>What is your career goal after the program ?</label>
            <textarea type="text" id="careerGoal" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none " placeholder="Enter your Career Goal" required rows={5} ></textarea>
        </div> */}
        <div className=' flex items-center justify-center ' >
          <button type="submit" className=" mt-5 font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] ">Send message</button>
        </div>
    </form>
</div>  
    </div>
  </div>
  );
};

export default Enroll;

