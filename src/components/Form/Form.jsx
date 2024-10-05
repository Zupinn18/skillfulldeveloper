import React, { useEffect, useState } from 'react';
import './Form.css';
import formImg from "../../assets/form.avif";
import { RxCross2 } from "react-icons/rx";

const Form = ({showPopup,setShowPopup}) => {

  useEffect(() => {
    // Set a timeout to show the form after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" w-full flex items-center justify-center font-poppins ">

      {showPopup && (
        <div className="fixed z-[1000] top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
          <div className=' w-full mx-auto flex justify-center rounded-md ' >
          <img src={formImg} className=' w-[36%] rounded-tl-md rounded-bl-md ' loading='lazy' />
          <div className="p-6 bg-white rounded-tr-md rounded-br-md ">
            <div className=' flex flex-col items-center justify-center mb-4 ' >
                <div className=' flex items-center gap-1 mb-2 ' >
                <img src="https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png" className=' w-[30px] ' loading='lazy' />
                <img src="https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png" className=' w-[30px] ' loading='lazy' />
                <img src="https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png" className=' w-[30px] ' loading='lazy'/>
                </div>
            <h2 className="mb-2 text-2xl font-semibold ">Unlock Your Coding Potential Today!</h2>
            </div>
            <form >
             <div className='flex flex-col text-sm gap-2 ' >
             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="name">
                    Name:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    name="name"
                    required
                />
             </div>
             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="email">
                    Email:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    required
                />
             </div>

             <div className=' flex items-center gap-3 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="mobile">
                    Mobile:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    id="mobile"
                    name="mobile"
                    required
                />
             </div>

             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="state">
                    State:
                </label>
                <select
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your State"
                    id="state"
                    name="state"
                    required
                >
                  <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Delhi">Delhi</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
                </select>
             </div>

             <div className=' flex items-center gap-2 ' >
              <label for="course" className={`text-gray-700 font-semibold`}>Course</label>
               <select id="course" className="w-full px-2 py-1 border border-gray-300 rounded-md outline-none" required >
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

             </div>
        
        <div class=" mt-5 relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-green-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-4 py-3 bg-white ring-1 ring-green-900/5 rounded-lg leading-none flex items-center justify-center text-green-700 font-semibold ">
                <button
                type="submit"
              >
                Submit
              </button>
            </div>
        </div>

            </form>

            <button
              className=" absolute px-1  py-1 top-[21%] right-[16%] text-white bg-red-500 rounded-full hover:bg-red-400 text-md font-bold "
              onClick={()=>setShowPopup(!showPopup)}
            >
              <RxCross2 />
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
