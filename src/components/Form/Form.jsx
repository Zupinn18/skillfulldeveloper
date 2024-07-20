import React, { useState } from 'react';
import './Form.css';
import formImg from "../../assets/form.avif";
import { RxCross2 } from "react-icons/rx";

const Form = ({showPopup,setShowPopup}) => {

  return (
    <div className=" w-full flex items-center justify-center font-poppins ">

      {showPopup && (
        <div className="fixed z-[1000] top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
          <div className=' w-full mx-auto flex justify-center rounded-md ' >
          <img src={formImg} className=' w-[36%] rounded-tl-md rounded-bl-md ' />
          <div className="p-6 bg-white rounded-tr-md rounded-br-md ">
            <div className=' flex flex-col items-center justify-center mb-4 ' >
                <div className=' flex items-center gap-1 mb-2 ' >
                <img src="https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png" className=' w-[30px] ' />
                <img src="https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png" className=' w-[30px] ' />
                <img src="https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png" className=' w-[30px] ' />
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
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your State"
                    id="state"
                    name="state"
                    required
                />
             </div>

             <div className=' flex items-center gap-2 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="course">
                    Course:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your Course Name"
                    id="course"
                    name="course"
                    required
                />
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
