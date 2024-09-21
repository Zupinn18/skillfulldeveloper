import React from 'react'
import TermImg from "../assets/terms.gif";

const PrivacyPolicy = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mb-10 ' >
        <div className=' flex flex-col gap-4 mt-[50px]' >
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Privacy Policy</h2>
          <div className=' flex gap-[50px] items-center flex-col md:flex-row ' >
              <p className={` text-justify text-md mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              At Skillful Developer, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when accessing our website and services. We may collect personal details such as your name, email, and contact information to improve our offerings, process enrollments, and communicate with you. We use industry-standard security measures to protect your data. We do not share or sell your information to third parties without your consent. By using our site, you agree to this policy.
                  <br/><br/>
                  </p>
              <img src={TermImg} className=' md:w-[50%] ' />
          </div>
          </div>

          <div className=' flex flex-col gap-5 mt-5 ' >
          {/* <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key Features of React</h2> */}
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Information Collection :</strong> We may collect personal information such as your name, email address, and contact details when you sign up for our services or register for a course. We also gather non-personal information, such as browser type and usage data, to improve our website’s functionality.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Use of Information :</strong> The information we collect is used to provide and improve our services, process course enrollments, send updates and marketing communications, and respond to inquiries. We do not sell or share your personal information with third parties without your consent.</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Data Protection :</strong> We implement industry-standard security measures to protect your data from unauthorized access or disclosure. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Cookies :</strong> We may use cookies to enhance user experience and track site traffic. You can choose to disable cookies through your browser settings.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Changes to Policy :</strong> Skillful Developer reserves the right to update this Privacy Policy. Please review it periodically for changes.</p>
            </li>
           
          </ul>
          </div>

    </div>
  )
}


export default PrivacyPolicy