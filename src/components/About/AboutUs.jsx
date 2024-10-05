import React from 'react'
import "./AboutUs.css";
import AboutImg from "../../assets/about.gif";
import Image1 from "../../assets/logos/1.png";
import Image2 from "../../assets/logos/2.png";
import Image3 from "../../assets/logos/3.png";
import Image4 from "../../assets/logos/4.png";
import Image5 from "../../assets/logos/5.png";
import Image6 from "../../assets/logos/6.png";
import Image7 from "../../assets/logos/7.png";
import Image8 from "../../assets/logos/8.png";

import Image9 from "../../assets/logos/9.png";
import Image10 from "../../assets/logos/10.png";
import Image11 from "../../assets/logos/11.png";
import Image12 from "../../assets/logos/12.png";
import Image13 from "../../assets/logos/13.png";
import Image14 from "../../assets/logos/14.png";
import Image15 from "../../assets/logos/15.png";
import Image16 from "../../assets/logos/16.png";
import Image17 from "../../assets/logos/17.png";
import { PiBrainLight } from "react-icons/pi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { GrShieldSecurity } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function AboutUs({toggle, setToggle}) {
    function fok() {
      var j = document.getElementById("arr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
    }
  
    function kof() {
      var j = document.getElementById("arr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
    }
  
    function gok() {
      let j = document.getElementById("brr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
    }
  
    function kog() {
      let j = document.getElementById("brr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
    }
  
    function hok() {
      let j = document.getElementById("crr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
    }
  
    function koh() {
      let j = document.getElementById("crr");
      j.style.backgroundImage =
        "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
    }
  
    window.onscroll = function () {
      jet();
    };
  
    function jet() {
      var ilake = document.getElementById("head");
      ilake.style.top = "0px";
      ilake.style.position = "sticky";
    }
  
    window.addEventListener("scroll", () => {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var wnd = window.innerHeight;
        var rtop = reveals[i].getBoundingClientRect().top;
        var rpoint = 100;
  
        if (rtop < wnd - rpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    });

    return (
        <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `} 
        >
            {/* main skill content */}
            <div className=' w-11/12 mx-auto flex flex-col gap-5 mt-6 mb-10 ' >
            <main>
          <div className=' flex flex-col gap-4 ' >
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>About Us</h2>
          <div className=' flex flex-col md:flex-row gap-[50px] items-center mt-10' >
              <p className={` text-justify text-md md:mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Welcome to Skillfull Developer, the premier platform for mastering coding skills and advancing your tech career! At Skillfull Developer, we are driven by a mission to empower developers to excel in today's fast-paced tech industry. Whether you are an aspiring developer or an experienced professional looking to upskill, we provide the tools and guidance to help you succeed. <br/><br/>
              Our comprehensive, expert-designed curriculum covers a wide range of in-demand skills and technologies, ensuring you're always ahead of the curve. With personalized 1:1 mentorship from seasoned professionals and a vibrant community of like-minded developers, you’ll gain practical experience, industry insights, and the support needed to thrive.
              Since our inception, we’ve helped hundreds of developers land roles at leading companies like Google, Microsoft, and Apple. Join us at Skillfull Developer to unlock your potential and build a future in tech!

                  </p>
              <img src={AboutImg} className=' md:w-[50%] ' />
          </div>
          </div>

          <div className=' grid grid-cols-1 md:grid-cols-2 gap-[80px] mb-10 ' >
              <div className={`relative grid grid-cols-4 gap-5  rounded-lg p-8 bg-white `} >
              <h2 className={`text-center text-md absolute rounded-lg top-[-15%] left-2 font-bold bg-green-500 text-white px-4 py-2 `}>Established Businesses</h2>
              <img src={Image1} />
              <img src={Image2} />
              <img src={Image3} />
              <img src={Image4} />
              <img src={Image5} />
              <img src={Image6} />
              <img src={Image7} />
              <img src={Image8} />
              </div>
              <div className={`relative grid grid-cols-4 gap-5 rounded-lg p-8 bg-white `} >
              <h2 className={`text-center text-md absolute rounded-lg top-[-15%] left-2 font-bold bg-green-500 text-white px-4 py-2 `}>Hypergrowth Startups</h2>
              <img src={Image9} />
              <img src={Image10} />
              <img src={Image11} />
              <img src={Image12} />
              <img src={Image13} />
              <img src={Image14} />
              <img src={Image15} />
              <img src={Image16} />
              </div>
          </div>
  
          <div className=' mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 ' >
            <div className=' flex flex-col items-center justify-center gap-3 bg-slate-100 rounded-lg border-dotted border-green-700 border-[2px] px-6 py-6 ' >
                <div className=' w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center ' ><PiBrainLight className=' w-[70px] h-[70px] text-green-800 ' /></div>
                <h4 className=' font-bold text-xl text-[#12372A] ' >Why Choose Us?</h4>
                <p className=' text-center text-[#436850] ' >Skill Full Developer, we focus on practical, hands-on learning designed by industry experts to meet the demands of top product companies. With expert mentorship and real-world projects, we ensure you gain job-ready skills that make an immediate impact. Join us and turn your skills into your greatest asset!</p>
                <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} >
                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Start Now</button>
                </Link>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3 bg-slate-100 rounded-lg border-dotted border-green-700 border-[2px] px-6 py-6 ' >
                <div className=' w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center ' ><HiMiniComputerDesktop className=' w-[70px] h-[70px] text-green-800 ' /></div>
                <h4 className=' font-bold text-xl text-[#12372A] ' >Our Mission</h4>
                <p className=' text-center text-[#436850] ' >Our mission is to empower developers with the practical skills, expert mentorship, and supportive community they need to excel. We strive to help developers become part of the top 1% in their field, equipping them with the tools to thrive and transition into leading product companies globally.</p>
                <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} >
                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Start Now</button>
                </Link>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3 bg-slate-100 rounded-lg border-dotted border-green-700 border-[2px] px-6 py-6 ' >
                <div className=' w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center ' ><GrShieldSecurity className=' w-[70px] h-[70px] text-green-800 ' /></div>
                <h4 className=' font-bold text-xl text-[#12372A] ' >Our Vision</h4>
                <p className=' text-center text-[#436850] ' >Our vision is to be the top upskilling platform for tech engineers, empowering them to reach their full potential. We aim to drive innovation and excellence in the tech industry by equipping engineers with the skills and expertise needed to thrive in leading product companies.</p>
                <Link to="/enroll-now" onClick={() => window.scrollTo(0, 0)} >
                <button style={{
                        "cursor":"pointer",
                        }}
                        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
                            border-2 text-white hover:bg-[#12372A] mt-5 border-none
                            '
                >Start Now</button>
                </Link>
            </div>
          </div>
  
          <div id="fourth" className={` mt-10 reveal rounded-md ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"} `}>
          <h2 className={`text-center text-xl mb-5 sm:text-4xl font-edusa font-bold ${toggle === false ? "text-white" : "text-[#12372A]"}`}>Course Categories We Offer</h2>
            <div id="fourth_cards" className=' flex-col md:flex-row justify-center items-center gap-10 md:gap-0 ' >
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                  alt=" "
                />
                <p>DATA ANALYTICS</p>
              </div>
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                  alt=" "
                />
                <p>UI/UX DESIGN</p>
              </div>
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                  alt=" "
                />
                <p>WEB DEVELOPEMENT</p>
              </div>
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                  alt=" "
                />
                <p>Q&A TESTING</p>
              </div>
              {/* <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                  alt=" "
                />
                <p>DEDICATED TEAM</p>
              </div> */}
            </div>
          </div>
  
          {/* <div id="second" className="reveal">
            <div className="container">
              <div>
                <h1>WE PROVIDE</h1>
                <h2>Remote Employee</h2>
                <p>
                  A huge pool of talent from every domain available for your
                  office. Solve your freelancing problems by letting us help you
                  find the most suitable employee or a whole team that won't let
                  you down. Everything is managed by Indirect Employee staff!
                </p>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
                alt=""
              />
            </div>
            <div className="container">
              <div>
                <h1>WE HAVE</h1>
                <h2>Global Partnership</h2>
                <p>
                  Our Global parters are spread 12 countries and our client base
                  is growing day by day . Many of my clients are repeat customers
                  and several have come to us through high recommendation and
                  referrals . Our client hail from different domains
                </p>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
                style={{ marginTop: "50px" }}
                alt=""
              />
            </div>
            <div className="container">
              <div>
                <h1>OUR GOAL</h1>
                <h2>Same Quality at Low Cost</h2>
                <p>
                  We have unique and revolutionary business principle, ‘Same
                  quality but significantly lower cost’. we aims to fulfill the
                  long-standing outsourcing vacuum felt by Small Medium
                  Enterprises across the country who, till now, were dependent
                  mostly on offshore freelancers.The hired professionals match
                  their western counterparts in skills, qualifications and
                  experience alongwith the added advantage of attractive low
                  costs.
                </p>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
                style={{ marginTop: "80px" }}
                alt=""
              />
            </div>
            <div className="container">
              <div>
                <h1>OUR STRENGTHS</h1>
                <h2>Intelligent Use of Technology and Human Resource</h2>
                <p>
                  We provide every client with a dedicated, full-time work from
                  home from their comfortable place. To successfully achieve this
                  objective, we relay on management, infrastructure, hardware and
                  the latest technology to bridge physical distance and time zone
                  differences.We provide experience of making employees to work
                  from home for the company as real as they work in the company.
                </p>
              </div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
                alt=""
              />
            </div>
          </div>
  
          <div id="third" className="reveal">
            <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
            <h1 style={{ textAlign: "center" }}>
              Driving Client Results Utilizing New Innovation Points of view
            </h1>
            <div id="third_cards">
              <div>
                <h2>End to End Solutions and Services Guaranteed</h2>
                <p>
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                  Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                </p>
              </div>
              <div>
                <h2>Ahead of The Curve We Future-proof Your IT</h2>
                <p>
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                  Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                </p>
              </div>
              <div>
                <h2>Experience Certainty Every Project Executed Successful</h2>
                <p>
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                  Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
  
          <div id="fifth" className="reveal">
            <h1>ECERA SYSTEM</h1>
            <div>
              <a href={{}}>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                  alt=" "
                />
                <span>
                  <h3>Address</h3>
                  <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
                </span>
              </a>
              <a href={{}}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                  alt=" "
                />
                <span>
                  <h3>Phone</h3>
                  <p>+1 248 672 1972</p>
                </span>
              </a>
              <a href={{}}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                  alt=" "
                />
                <span>
                  <h3>E-mail</h3>
                  <p>Sales@Ecerasystem.com</p>
                </span>
              </a>
            </div>
          </div> */}
        </main>
              
            </div>
        </div>
    );
  }