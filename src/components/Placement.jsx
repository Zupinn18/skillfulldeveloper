import React from 'react'
import googleImg from "../assets/google.png";
import fedImg from "../assets/fed.png";
import ItcImg from "../assets/itc.png";
import TcsImg from "../assets/tcs.png";
import AmazonImg from "../assets/amazon.png";
import accentImg from "../assets/accenture.png";
import {Link} from "react-router-dom";
import Image1 from "../assets/logos/1.png";
import Image2 from "../assets/logos/2.png";
import Image3 from "../assets/logos/3.png";
import Image4 from "../assets/logos/4.png";
import Image5 from "../assets/logos/5.png";
import Image6 from "../assets/logos/6.png";
import Image7 from "../assets/logos/7.png";
import Image8 from "../assets/logos/8.png";
import Image9 from "../assets/logos/9.png";
import Image10 from "../assets/logos/10.png";
import Image11 from "../assets/logos/11.png";
import Image12 from "../assets/logos/12.png";
import Image13 from "../assets/logos/13.png";
import Image14 from "../assets/logos/14.png";
import Image15 from "../assets/logos/15.png";
import Image16 from "../assets/logos/16.png";
import Image17 from "../assets/logos/17.png";

const Placement = ({toggle}) => {
  return (
    <div className='w-full h-full mb-[100px] flex flex-col gap-10 font-poppins ' >

        <div className=' w-full mx-auto flex flex-col gap-[100px] mt-6 ' >

            {/* section -1 */}
            <div className='w-10/12 mx-auto' >
            <div className='flex flex-col justify-between items-center gap-3  ' >
                <h1 className={`text-xl sm:text-3xl font-bold ${toggle === false ? "text-[#55cea4]" : "text-[#55cea4]"}`} >Placement Stats</h1>
                <p className={` text-center text-2xl md:text-5xl font-semibold ${toggle === false ? "text-black" : "text-slate-100"} `} >Helping our Learners
                  <br/>  Get the Best Career
                  <br/>   Breakthroughs and
                  <br/>   into the Best Companies</p> 
                <p className={` text-center text-lg leading-6 ${toggle === false ? " text-gray-700 " : "text-slate-300"} `} >We want to ensure that our learners achieve the best possible <br/>
career outcomes and are able to fulfill their professional goals.</p>

                <div className=' w-9/12 grid grid-cols-1 md:grid-cols-4 items-center gap-5 mt-5 ' >
                    <div className=' bg-[#cae32e] md:h-[120px] px-6 py-3 rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl ' >95%</p>
                        <p className=' text-sm text-center ' >placed within 9 months of graduation</p>
                    </div>
                    <div className=' bg-[#abed4f] md:h-[120px] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>12 LPA</p>
                        <p className=' text-sm text-center '>average dream job CTC</p>
                    </div>
                    <div className=' bg-[#57f49e] md:h-[120px] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>155%</p>
                        <p className=' text-sm text-center '>Average <br/> Salary Hike</p>
                    </div>
                    <div className=' bg-[#2df8c5] md:h-[120px] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>1000+</p>
                        <p className=' text-sm text-center '>Hiring <br/> Partners</p>
                    </div>
                </div>

                <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} >
                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Apply & Start Now</button>
                </Link>

            </div>
            </div>

            <div className=" w-full h-[1px] bg-[#55cea4] " ></div>

            {/* section -2 */}
            <div className='flex flex-col justify-between items-center gap-3  ' >
                <h1 className={`text-xl sm:text-3xl font-bold ${toggle === false ? "text-[#55cea4]" : "text-[#55cea4]"}`} >Our Recruiters</h1>
                <p className={` text-center text-2xl md:text-5xl font-semibold ${toggle === false ? "text-black" : "text-slate-100"} `} >Top Tech Companies Where<br/> You Can Get Job</p> 
                <p className={` text-center text-lg leading-6 ${toggle === false ? " text-gray-700 " : "text-slate-300"} `} >Recruiters from top companies and hyper-growth startups love working with Skillfull grads</p>

                <div className=' w-full mt-[80px] ' >
        <div className=' w-[95%] mx-auto relative h-[450px] bg-[#59916bc4] p-10 rounded-md flex justify-between items-center mt-5 gap-[100px] ' >

{/* left side box */}
<div className={` absolute left-[10%] top-[-18%] p-8 rounded-md w-[30%] flex flex-col gap-4 ${toggle === false ? "bg-[#12372A]" : " bg-gray-300 "} `} >
    <h2 className={`text-2xl font-bold ${toggle === false ? "text-slate-200" : " text-[#12372A] "} `} >1000+ Alumni <br/> Placed At</h2>
    <p className={` text-sm  ${toggle === false ? "text-slate-200" : " text-[#436850] "} `} >Through the dedicated placement support and partnerships with 100+ top tech companies & startups, Skillfull developer has been able to place 1000+ learners in these organizations</p>

    <form className=' flex flex-col gap-2 ' action="https://api.web3forms.com/submit" method="POST" >
            <input type="hidden" name="access_key" value="3f4a890d-c8eb-445c-89f7-e87404f8b03e" />
            <div>
                <input type="text" id="name" name='FullName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                outline-none " placeholder="First Name" required />
            </div>
            <div>
                <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                outline-none " placeholder="Email ID" required />
            </div>
            <div>
                <input type="number" id="contactNo" name='ContactNo' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                outline-none " placeholder="Contact No." required />
            </div>
            <div>
               <select id="subject" name='Course' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
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
            <button className='cursor-pointer font-semibold px-4 py-3 rounded-lg bg-green-500 transition-all duration-300
            border-2 text-white hover:bg-green-600 border-none text-sm
            '>Start Now</button>
    </form>

    <p className={` text-[12px]  ${toggle === false ? "text-slate-200" : " text-[#436850] "} `} >We respect your privacy. Unsubscribe at any time.</p>
    
</div>

{/* right side images */}
<div className=' absolute right-5 flex flex-col gap-7 ' >
    <div className=' flex justify-center items-center gap-5 ' >
        <img src={Image1} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image2} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image3} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
    </div>
    <div className=' flex justify-center items-center gap-5 ' >
        <img src={Image4} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image5} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image6} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image7} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
    </div>
    <div className=' flex justify-center items-center gap-5 ' >
        <img src={Image8} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image9} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image10} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
    </div>
    <div className=' flex justify-center items-center gap-5 ' >
        <img src={Image11} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image12} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image13} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image14} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
    </div>
    <div className=' flex justify-center items-center gap-5 ' >
        <img src={Image15} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image16} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
        <img src={Image17} className=' rounded-md shadow-2xl border-[2px] border-gray-50 ' />
    </div>
</div>
</div>
        </div>

                <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} >
                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Enroll Now</button>
                </Link>

            </div>



        </div>
    </div>
  )
}

export default Placement