import React from 'react'
import dsImg from "../../assets/course/datascience.png";
import Dscience from "../../assets/course/dscience.png";
import sqlImg from "../../assets/course/sqlq.png";
import pythonImg from "../../assets/course/pythonc.png";
import mlImg from "../../assets/course/ml.png";
import dbms from "../../assets/course/dbms.png";
import mern from "../../assets/course/merns.png";
import dsa from "../../assets/course/dsawithp.png";
import ds2 from "../../assets/course/ds2.png";
import fullstack from "../../assets/course/full.png";
import reactjs from "../../assets/course/reactjs.png";
import devops from "../../assets/course/devops.png";
import tech from "../../assets/course/tech.png";
import appdev from "../../assets/course/appdevelo.png";
import java from "../../assets/course/javac.png";
import express from "../../assets/skills/Express.png";
import nodejs from "../../assets/skills/NodeJs.png";
import mongo from "../../assets/skills/MongoDB.png";
import flutter from "../../assets/course/flutter.png";
import { GoInfo } from "react-icons/go";
import './Courses.css';
import { Link } from 'react-router-dom';

const Courses = ({toggle, setToggle}) => {
  return (
    <>
    {/* bg-[#12372a] */}
    <div className=' w-full mb-[50px] ' >
        <div className='w-11/12 mx-auto flex flex-col gap-10 py-[70px] ' >
            <h2 className={`text-4xl font-semibold text-center ${toggle === false ? "text-[#12372A]" :"text-[#fbfada]"} `} >Interested in our Combo Packs ?</h2>
            <div className="slider" >
  
    <div className="slides" style={{
    "width": "90%",
    "margin": "0 auto",
    }} >
    
    <div className=' flex gap-10 items-center mb-[60px] ' >
                {/* card1 */}
                <div className=' w-[350px] flex flex-col gap-5 px-4 py-2  bg-white rounded-xl ' >
                    <div className='flex gap-3 items-center ' >
                        <div className=' w-[80px] h-[80px] flex items-center justify-center rounded-full
                        shadow-2xl
                        ' >
                            <img src={pythonImg} />
                        </div>
                        <p className=' text-xl font-bold text-[#12372a] ' >Python Developer</p>
                    </div>
                    <div className=' w-full h-[1px] bg-gray-300 decoration-dashed ' ></div>
                    <div className=' grid grid-cols-2 gap-6 ' >
                        {/* <div className=' flex gap-2 items-center  ' >
                            <img src={Dscience} className=' w-8 ' />
                            <p className=' font-[500] text-md leading-5 ' >Data Science</p>
                        </div> */}
                        <div className=' flex gap-2 items-center  ' >
                            <img src={sqlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >SQL</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={mlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >AI/ML</p>
                        </div>
                        
                        <div className=' flex gap-2 items-center  ' >
                            <img src={pythonImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >Python</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={dsa} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >DSA </p>
                        </div>

                    </div>

                    {/* <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>You get a Refund Validity of 2 Years</p>
                    </div> */}
                    <Link to="/course/python" onClick={() => window.scrollTo(0, 0)} className=' font-semibold px-4 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A]' >
                    Enroll Now
                    </Link>
                </div>

                <div className=' w-[350px] flex flex-col gap-5 px-4 py-2  bg-white rounded-xl ' >
                    <div className='flex gap-3 items-center ' >
                        <div className=' w-[80px] h-[80px] flex items-center justify-center rounded-full
                        shadow-2xl
                        ' >
                            <img src={nodejs} className=' w-[50px] h-[50px] rounded-full ' />
                        </div>
                        <p className=' text-xl font-bold text-[#12372a] ' >NodeJs Developer <br/></p>
                    </div>
                    <div className=' w-full h-[1px] bg-gray-300 decoration-dashed ' ></div>
                    <div className=' grid grid-cols-2 gap-6 ' >
                        <div className=' flex gap-2 items-center  ' >
                            <img src={dbms} className=' w-8 ' />
                            <p className=' font-[500] text-md leading-5 ' >DBMS</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={sqlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >SQL</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={mlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >Javascript</p>
                        </div>
                        
                        <div className=' flex gap-2 items-center  ' >
                            <img src={nodejs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >NodeJs</p>
                        </div>
                        {/* <div  className=' flex gap-2 items-center  ' >
                        <img src={ds2} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >NodeJs</p>
                        </div> */}

                    </div>

                    {/* <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>You get a Refund Validity of 2 Years</p>
                    </div> */}
                    <Link to="/course/node" onClick={() => window.scrollTo(0, 0)} className=' font-semibold px-4 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A]' >
                    Enroll Now
                    </Link>
                </div>

                <div className=' w-[350px] flex flex-col gap-5 px-4 py-2  bg-white rounded-xl ' >
                    <div className='flex gap-3 items-center ' >
                        <div className=' w-[80px] h-[80px] flex items-center justify-center rounded-full
                        shadow-2xl
                        ' >
                            <img src={mern} />
                        </div>
                        <p className=' text-xl font-bold text-[#12372a] ' >MERN-Stack Developer</p>
                    </div>
                    <div className=' w-full h-[1px] bg-gray-300 decoration-dashed ' ></div>
                    <div className=' grid grid-cols-2 gap-6 ' >
                        <div className=' flex gap-2 items-center  ' >
                            <img src={express} className=' w-8 ' />
                            <p className=' font-[500] text-md leading-5 ' >ExpressJs</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={reactjs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >ReactJS</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={mongo} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >MongoDB</p>
                        </div>
                        
                        <div className=' flex gap-2 items-center  ' >
                            <img src={nodejs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >NodeJs</p>
                        </div>

                    </div>

                    {/* <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>You get a Refund Validity of 2 Years</p>
                    </div> */}
                    <Link to="/course/mern" onClick={() => window.scrollTo(0, 0)} className=' font-semibold px-4 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A]' >
                    Enroll Now
                    </Link>
                </div>

                <div className=' w-[350px] flex flex-col gap-5 px-4 py-2  bg-white rounded-xl ' >
                    <div className='flex gap-3 items-center ' >
                        <div className=' w-[80px] h-[80px] flex items-center justify-center rounded-full
                        shadow-2xl
                        ' >
                            <img src={fullstack} className=' w-[50px] h-[50px] object-cover rounded-full ' />
                        </div>
                        <p className=' text-xl font-bold text-[#12372a] ' >Full-Stack Developer</p>
                    </div>
                    <div className=' w-full h-[1px] bg-gray-300 decoration-dashed ' ></div>
                    <div className=' grid grid-cols-2 gap-6 ' >
                        <div className=' flex gap-2 items-center  ' >
                            <img src={tech} className=' w-8 ' />
                            <p className=' font-[500] text-md leading-5 ' >Frontend</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={reactjs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >ReactJS</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={mlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >Backend</p>
                        </div>
                        
                        <div className=' flex gap-2 items-center  ' >
                            <img src={nodejs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >NodeJs</p>
                        </div>

                    </div>

                    {/* <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>You get a Refund Validity of 2 Years</p>
                    </div> */}
                    <Link to="/course/fullstack" onClick={() => window.scrollTo(0, 0)} className=' font-semibold px-4 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A]' >
                    Enroll Now
                    </Link>
                </div>

                <div className=' w-[350px] flex flex-col gap-5 px-4 py-2  bg-white rounded-xl ' >
                    <div className='flex gap-3 items-center ' >
                        <div className=' w-[80px] h-[80px] flex items-center justify-center rounded-full
                        shadow-2xl
                        ' >
                            <img src={appdev} />
                        </div>
                        <p className=' text-xl font-bold text-[#12372a] ' >Application Developer</p>
                    </div>
                    <div className=' w-full h-[1px] bg-gray-300 decoration-dashed ' ></div>
                    <div className=' grid grid-cols-2 gap-6 ' >
                        <div className=' flex gap-2 items-center  ' >
                            <img src={flutter} className=' w-8 ' />
                            <p className=' font-[500] text-md leading-5 ' >Flutter</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={reactjs} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >React Native</p>
                        </div>  
                        <div className=' flex gap-2 items-center  ' >
                            <img src={java} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >Java</p>
                        </div>
                        <div className=' flex gap-2 items-center  ' >
                            <img src={sqlImg} className=' w-8 '  />
                            <p className=' font-[500] text-md ' >SQL</p>
                        </div>

                    </div>

                    {/* <div className=' flex text-green-700 items-center
                     gap-2 border-2 border-green-700 justify-center py-2 rounded-lg text-md ' >
                        <GoInfo />
                        <p>You get a Refund Validity of 2 Years</p>
                    </div> */}
                    <button className=' font-semibold px-4 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white cursor-pointer hover:bg-[#12372A]'
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        
    </div>
  </div>

        </div>
    </div>
    </>
  )
}

export default Courses