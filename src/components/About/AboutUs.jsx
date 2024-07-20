import React from 'react'
import "./AboutUs.css";
import AboutImg from "../../assets/about.gif";

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
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Welcome to Skillfull Developer</h2>
          <div className=' flex gap-[50px] items-center  mt-10' >
              <p className={` text-justify text-md mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Welcome to Skillful Developer, your ultimate destination for mastering coding skills! We are passionate about empowering individuals to become proficient developers in today's fast-paced tech world. Our mission is to provide high-quality, accessible education that equips you with the knowledge and tools needed to succeed in your coding journey.

At Skillful Developer, we offer a diverse range of coding courses designed to cater to various skill levels and career aspirations. Whether you're a beginner looking to learn Python or an experienced programmer aiming to become a Full Stack or MERN Developer, we have the right course for you. Our expertly crafted curriculum is delivered by industry professionals with real-world experience, ensuring you gain practical skills that are in demand.
                  <br/><br/>
                  Skillfull Developer provides training in various domains like programming languages, software development, web designing. We deliver a superior brand of training that is practical and relevant to today’s technology demands. Our courses are designed to bridge the gap between academics and industry-requirements with emphasis on hands-on learning concepts and methodologies leading to robust designs and code that translates into an efficient software product or solution.
                  </p>
              <img src={AboutImg} className=' w-[50%] ' />
          </div>
          </div>
  
          {/* <div id="first" className="reveal">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
              alt=""
            />
            <div>
              <h1>We Offer Innovative Technology Solutions</h1>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >
              Skillfull Developer provides training in various domains like programming languages, software development, web designing. We deliver a superior brand of training that is practical and relevant to today’s technology demands. Our courses are designed to bridge the gap between academics and industry-requirements with emphasis on hands-on learning concepts and methodologies leading to robust designs and code that translates into an efficient software product or solution.
              </p>
              <h2>UI/UX Design (90%)</h2>
              <div className="comm">
                <div id="comm1"></div>
              </div>
              <h2>APP Developement (85%)</h2>
              <div className="comm">
                <div id="comm2"></div>
              </div>
              <h2>WEB Developement (70%)</h2>
              <div className="comm">
                <div id="comm3"></div>
              </div>
            </div>
          </div> */}
  
          <div id="fourth" className={`reveal rounded-md ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"} `}>
          <h2 className={`text-center text-xl mb-5 sm:text-4xl font-edusa font-bold ${toggle === false ? "text-white" : "text-[#12372A]"}`}>Services We Offer</h2>
            <div id="fourth_cards">
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
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                  alt=" "
                />
                <p>DEDICATED TEAM</p>
              </div>
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