import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import img from "../assets/main-img.png";
import Enqiryform from './Enquiryform';
import {Link} from "react-router-dom";
import ImageUser from "../assets/avatar-1.svg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import JavascriptImg from "../assets/skill/Javascript.svg";
import CSSImg from "../assets/skill/CSS.png";
import HtmlImg from "../assets/skill/HTML.png";
import ReactImg from "../assets/skill/reactim.png";
import NodeImg from "../assets/skill/NodeJs.svg";
import MongoDBiMG from "../assets/skill/MongoDB.svg";
import HeroBaneerImg from "../assets/hero-banner.png";
import BoyImg1 from "../assets/testimonials/boy1.jpg";
import GirlImg1 from "../assets/testimonials/girl1.png";
import GirlImg2 from "../assets/testimonials/girl-new-1.jpg";
import arrowImg from "../assets/arrow-line.png";

const HeroSection = ({toggle, setToggle}) => {
    const [showPopup, setShowPopup] = useState(false);
    const el = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [ "Web Developer",
  //     "Full Stack Developer",
  //     "Backend Developer",
  //     "Android Developer",
  //     "MERN Developer",
  //     "Coding",], // Strings to display
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 80,
  //     backDelay: 1000,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);



  // for placement
  // const pl = useRef(null);
   
  // useEffect(() => {
  //   const typeds = new Typed(pl.current, {
  //     strings: [ "Full Fee Refundable",], // Strings to display
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 80,
  //     backDelay: 1000,
  //   });

  //   // Destropying
  //   return () => {
  //     typeds.destroy();
  //   };
  // }, []);

  const [formData, setFormData] = useState({
    email:''
});

const handleInputChange = (e) =>{
    setFormData({...formData,
        [e.target.name]: e.target.value
})}

  return (
    <div className=' pb-[100px] ' >
    <div className=' w-[95%] mx-auto md:w-11/12 font-volkhov flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-[150px] ' >
      <div className='w-[50%] mx-auto flex flex-col gap-4 mt-10 md:mt-[0px] ' >
        <div className=' flex flex-col gap-3 ' >
            <p className={`text-[36px] md:text-[42px] leading-[55px] lg:text-[50px] font-extrabold ${toggle === false ? "text-green-900" : "text-[#fbfada]" }
             `} >Launch your <span className=' text-green-500 ' >Career</span> in Just 3-Month</p>
              {/* <p className={`text-[36px] md:text-[42px] leading-[55px] lg:text-[50px] font-extrabold ${toggle === false ? "text-green-900" : "text-[#fbfada]" }
             `} >in Just 3-Month </p> */}
             <p className={`text-sm md:text-lg ${toggle === false ? "text-[#436850]" : "text-[#fbfada]" }
             `} >We want to ensure that our learners achieve the best possible career outcomes and are able to fulfill their professional goals. </p>
             <p className={`text-sm md:text-xl font-extrabold ${toggle === false ? "text-[#d5d52c]" : "text-[#fbfada]" }
             `} >100% Job Placement or your Money Back</p>
             <div className='flex items-center gap-5 ' >
                  <Link to="/course" onClick={() => window.scrollTo(0, 0)} title="" className={`flex text-base transition-all duration-200 ${toggle === false ? "text-black hover:text-green-700 focus:text-green-700" : "text-[#adbc9f] hover:text-green-300 focus:text-green-300"}`}>
                      <button
                        className='cursor-pointer font-semibold px-8 py-3 rounded-full bg-green-500 transition-all duration-300 border-2 text-white hover:bg-green-600 mt-3 border-none'
                      >
                        Explore Courses
                      </button>
                    </Link>
                    <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} title="" className={`flex text-base transition-all duration-200 ${toggle === false ? "text-black hover:text-green-700 focus:text-green-700" : "text-[#adbc9f] hover:text-green-300 focus:text-green-300"}`}>
                      <button
                        className='cursor-pointer font-semibold px-8 py-3 rounded-full bg-green-500 transition-all duration-300 border-2 text-white hover:bg-green-600 mt-3 border-none'
                      >
                        Enroll Now
                      </button>
                    </Link>
              </div>

              <div className='flex gap-5 items-center mt-5 ' >
                    <div className='relative flex ' >
                      <div className='w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={BoyImg1} className=' w-[40px] h-[40px] rounded-full ' />
                      </div>
                      <div className='absolute left-8 w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={GirlImg1} className=' w-[40px] h-[40px] rounded-full '  />
                      </div>
                      <div className=' absolute left-[4rem] w-[40px] h-[40px] bg-white rounded-full ' >
                        <img src={GirlImg2} className=' w-[40px] h-[40px] rounded-full ' />
                      </div>
                    </div>
                    <p className=' absolute left-[13%] flex gap-2 items-center text-[#436850] font-semibold text-[22px] ' > <span className="text-green-500" >10,000+</span> Students 
                    </p>
                  </div>

             {/* <form className='flex items-center gap-5 mt-2 mb-2 ' >
                            <div>
                                    <input
                                        required
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900 "
                                    />
                            </div>
                            <button className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300 border-2 text-white hover:bg-[#12372A] border-none'>Start Now</button>

             </form>

             <p className={`text-sm italic md:text-md ${toggle === false ? "text-slate-600" : "text-[#fbfada]" }
             `} >*Learn from Skillfull developers and Upgrade your skills from our No.1 Tutors</p> */}

        </div>

        {/* <div className='flex flex-col ' >
          #12372A 
            <p className={`text-[36px] md:text-[42px] lg:text-[50px] font-semibold
             ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Your Career in <br/> <span className=' text-green-600 ' ref={el} ></span> <br/> Starts Here</p>
             <p className={`text-[36px] md:text-[42px] leading-[45px] lg:text-[50px] font-semibold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Launch your <span className=' ' >Career in</span> </p>
              <p className={`text-[36px] md:text-[42px] lg:text-[50px] font-semibold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]" }
             `} >Just 3-Month, <br/>
              <span className=' inline-block text-green-600 font-[800] animate-zoom-in-zoom-out ' >100% Job </span> &nbsp;Placement or Your <span className=' inline-block text-green-600 font-[800] animate-zoom-in-zoom-out ' > &nbsp;Money Back</span> </p>
        </div> */}

        {/* 436850 */}
        {/* <p className={` text-md md:text-2xl font-bold 
        ${toggle === false ? "text-red-500" : "text-red-400"} `} >100% Job Placement or <span ref={pl} > </span> </p> */}
        {/* <p className={` text-md md:text-2xl font-bold 
        ${toggle === false ? "text-red-500" : "text-red-400"} `} >100% job placement or your Money Back </p> */}

        {/* <div>
          <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} title="" className={`flex text-base transition-all duration-200 ${toggle === false ? "text-black hover:text-green-700 focus:text-green-700" : "text-[#adbc9f] hover:text-green-300 focus:text-green-300"}`}>
  <button
    className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300 border-2 text-white hover:bg-[#12372A] mt-5 border-none'
  >
    Enroll Now
  </button>
</Link>
        </div> */}
        
      </div>
      
      <div className=' w-[50%] flex justify-center items-center relative  ' >
        {/* <div className=' w-[400px] h-[400px] bg-[#f8a829] rounded-full absolute animate-pulse ' ></div> */}
        {/* <div className=' w-[50px] h-[50px] bg-red-500 rounded-full absoluteleft-0 top-10  ' ></div>
        <div className=' w-[40px] h-[40px] bg-green-500 rounded-full absolute right-0 top-10 ' ></div>
        <div className=' w-[25px] h-[25px] bg-blue-500 rounded-full absolute top-0 ' ></div>
        <div className=' w-[30px] h-[30px] bg-violet-500 rounded-full absolute bottom-0 ' ></div> */}
        <img src={HeroBaneerImg} className=' md:w-[100%] mt-5 z-10 ' />
        <img src={arrowImg} className=' absolute left-[-180px] '  />
        {/* <img src={JavascriptImg} className=' w-[80px] absolute left-[5%] animate-zoom-in-zoom-out ' />
        <img src={HtmlImg} className='w-[80px] absolute top-0 left-[18%] animate-zoom-in-zoom-out ' />
        <img src={CSSImg} className='w-[80px] absolute bottom-0 left-[18%] animate-zoom-in-zoom-out  ' />
        <img src={ReactImg} className=' w-[80px] absolute right-[5%] animate-zoom-in-zoom-out' />
        <img src={NodeImg} className='w-[80px] absolute top-0 right-[18%] animate-zoom-in-zoom-out ' />
        <img src={MongoDBiMG} className='w-[80px] absolute bottom-0 right-[18%] animate-zoom-in-zoom-out  ' /> */}
      </div>

      {/* <div className=' w-[50%] mx-auto flex items-center justify-between gap-[20px] ' >

        <div className=' relative bg-gray-400 w-[350px] rounded-lg h-[400px] ' >
            <div className=' absolute top-10 left-[-50px] w-[350px] bg-white rounded-lg p-6 flex flex-col gap-5 shadow-2xl ' >
              <div className=' flex items-center gap-3 ' >
                  <img src={ImageUser} className=' w-[40px] h-[40px] ' />
                  <p className=' font-semibold text-green-950 ' >Skillfull Developer</p>
              </div>
              <div className=' flex items-center justify-center gap-5 ' >
                  <div className='flex flex-col items-center text-sm text-[#436850] ' >
                    <p className='' >5000+</p>
                    <p className=' font-semibold  ' >Enrolled</p>
                  </div>
                  <div className='flex flex-col items-center text-sm text-[#436850] ' >
                    <p className='' >500+</p>
                    <p className=' font-semibold  ' >Recruiters</p>
                  </div>
                  <div className='flex flex-col items-center text-sm text-[#436850] ' >
                    <p className='' >1000+</p>
                    <p className=' font-semibold  ' >Placed</p>
                  </div>
              </div>
              <div className=' flex justify-center items-center text-white rounded-sm bg-[#12372A] ' >
                <MdOutlineDeveloperMode className=' text-[200px] py-5 ' />
              </div>
              <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} title="" className={`flex text-base transition-all duration-200 ${toggle === false ? "text-black hover:text-green-700 focus:text-green-700" : "text-[#adbc9f] hover:text-green-300 focus:text-green-300"}`}><button
                className=' w-full cursor-pointer font-semibold px-8 py-3 rounded-lg bg-green-500 transition-all duration-300 border-2 text-white hover:bg-green-600 border-none'
              >
                Enroll Now
              </button>
              </Link>

            </div>
        </div>

        <div className=' w-[350px] bg-white px-8 py-6 rounded-lg flex flex-col gap-5 shadow-2xl ' >
        <h2 className="mb-2 text-2xl font-semibold text-center ">Unlock Your Coding Potential Today!</h2>
        <form>
             <div className='flex flex-col text-sm gap-2 ' >
             <div className=' flex items-center gap-5 ' >
                <input
                    className=" w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900  "
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    name="name"
                    required
                />
             </div>
             <div className=' flex items-center gap-5 ' >
                <input
                    className=" w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900  "
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    required
                />
             </div>
             <div className=' flex items-center gap-3 ' >
                <input
                    className=" w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900  "
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    id="mobile"
                    name="mobile"
                    required
                />
             </div>
             <div className=' flex items-center gap-5 ' >
                <select
                    className=" w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900 "
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
                <input
                    className=" w-full rounded-[0.5rem] text-sm outline-none bg-slate-300 p-[12px] pr-10 text-black border-b-2 border-green-500 placeholder:text-green-900  "
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
        </div>

      </div> */}
      
    </div>
    
    </div>
  )
}

export default HeroSection