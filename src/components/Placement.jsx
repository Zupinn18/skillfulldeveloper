import React from 'react'
import googleImg from "../assets/google.png";
import fedImg from "../assets/fed.png";
import ItcImg from "../assets/itc.png";
import TcsImg from "../assets/tcs.png";
import AmazonImg from "../assets/amazon.png";
import accentImg from "../assets/accenture.png";
import {Link} from "react-router-dom";

const Placement = ({toggle}) => {
  return (
    <div className='w-full h-full mb-[100px] flex flex-col gap-10 font-poppins ' >
        <div className=' w-10/12 mx-auto flex flex-col gap-[100px] mt-6 ' >

            {/* section -1 */}
            <div className='flex flex-col justify-between items-center gap-3  ' >
                <h1 className={`text-xl sm:text-3xl font-bold ${toggle === false ? "text-[#55cea4]" : "text-[#55cea4]"}`} >Placement Stats</h1>
                <p className={` text-center text-2xl md:text-5xl font-semibold ${toggle === false ? "text-black" : "text-slate-100"} `} >Helping our Learners
                  <br/>  Get the Best Career
                  <br/>   Breakthroughs and
                  <br/>   into the Best Companies</p> 
                <p className={` text-center text-lg leading-6 ${toggle === false ? " text-gray-700 " : "text-slate-300"} `} >We want to ensure that our learners achieve the best possible <br/>
career outcomes and are able to fulfill their professional goals.</p>

                <div className=' w-9/12 grid grid-cols-1 md:grid-cols-4 items-center gap-5 mt-5 ' >
                    <div className=' bg-[#cae32e] px-6 py-3 rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl ' >95%</p>
                        <p className=' text-sm text-center ' >placed within 9 months of graduation</p>
                    </div>
                    <div className=' bg-[#abed4f] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>10 LPA</p>
                        <p className=' text-sm text-center '>average dream job CTC</p>
                    </div>
                    <div className=' bg-[#57f49e] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>81%</p>
                        <p className=' text-sm text-center '>Average <br/> Salary Hike</p>
                    </div>
                    <div className=' bg-[#2df8c5] px-6 py-3  rounded-md flex flex-col gap-1 items-center justify-center ' >
                        <p className=' font-bold text-4xl '>1000+</p>
                        <p className=' text-sm text-center '>Hiring <br/> Partners</p>
                    </div>
                </div>

                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Apply & Start Now</button>

            </div>

            <div className=" w-full h-[1px] bg-[#55cea4] " ></div>

            {/* section -2 */}
            <div className='flex flex-col justify-between items-center gap-3  ' >
                <h1 className={`text-xl sm:text-3xl font-bold ${toggle === false ? "text-[#55cea4]" : "text-[#55cea4]"}`} >Our Recruiters</h1>
                <p className={` text-center text-2xl md:text-5xl font-semibold ${toggle === false ? "text-black" : "text-slate-100"} `} >Top Unicorns, Soonicorns, and <br/>
Global Tech MNCs hire</p> 
                <p className={` text-center text-lg leading-6 ${toggle === false ? " text-gray-700 " : "text-slate-300"} `} >Recruiters from top companies and hyper-growth startups love working with Skillfull grads</p>

                <div className=' w-10/12 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mt-5 ' >
                    <img src={googleImg} className=' grayscale transition-all duration-200 hover:grayscale-0 ' />
                    <img src={TcsImg} className=' grayscale transition-all duration-200 hover:grayscale-0 '/>
                    <img src={AmazonImg} className=' grayscale transition-all duration-200 hover:grayscale-0 '/>
                    <img src={TcsImg} className=' grayscale transition-all duration-200 hover:grayscale-0 '/>
                    <img src={accentImg} className=' grayscale transition-all duration-200 hover:grayscale-0 '/>
                    <img src={fedImg} className=' grayscale transition-all duration-200 hover:grayscale-0 '/>
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