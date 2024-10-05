import React from 'react'

const ExaminationPolicy = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mb-10 font-poppins ' >
        <div className=' flex flex-col gap-4 mt-[50px]' >
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Examination Policy</h2>
          <p className={` text-justify font-semibold text-md mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Guidelines for Certification and Examinations at Skillfull Developer Policy for Middle exam and Final Exam at Skillfull Developer.</p>
          <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Exam Registration</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >All students are required to register for both middle exams and the final exam. There is no registration fee for the middle exams or the final exam. 
                  </p>
           </div>
           <div className="flex flex-col gap-2" >
                <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Exam Eligibility</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >
                 For exam with the duration of 90 days
                  <ul className="ml-10 list-disc " >
                  <li>First exam eligibility: 30 Days</li>
                  <li>Second exam eligibility: 60 Days</li>
                  <li>Final exam eligibility: 90 Days</li>
                  </ul>
                  </p>
           </div>

           <div className="flex flex-col gap-2" >
           <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Skillfull Developer Internship eligibility</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >
                  <ul className="ml-10 list-decimal " >
                  <li><strong>Attendance Requirement:</strong> To be eligible for Skillfull developer certification, students must maintain a minimum of 90% attendance throughout the course duration.
                </li>
                <li><strong>Score Requirement:</strong> To be eligible for Skillfull developer Internship Certification students must have a minimum combined score of 75% in first, second and final exams.
                </li>
                  </ul>
                  </p>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Exam failure and absenteeism</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Skillfull developer holds no liability if a student fails
                    any certification exam. Students are responsible for adequately preparing for the
                    certification exams. Once a student registers for the exam, the exam date cannot be
                    rescheduled. It is essential for students to carefully consider their availability and
                    preparedness before registering for the exam to ensure they can attend the scheduled
                    date and time. Skillfull developer does not allow rescheduling of exam dates once
                    registration has been completed. Students are advised to plan their schedules
                    accordingly to avoid any inconvenience. And if student failed for any exam so they'll
                    have to repeat the last session again
                  </p>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Exam Format and Platform</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >All certification examinations will be conducted using a Computer-Based Test (CBT) format.<br/>
                 Skillfull developer will conduct certification examinations using its platform, partner
                software, or trusted third-party portals. We are committed to providing a reliable
                examination process and will leverage superior infrastructure and high-end technology
                to ensure a seamless experience. However, unforeseen circumstances may arise, and
                if there are any technical or logistical challenges, Skillfull developer reserves the right to
                request students to reappear for the exam without charging any additional fees. Our
                goal is to maintain the integrity of the certification process and promptly address any
                issues to ensure a fair and transparent examination environment.
                  </p>
           </div>

           <div className="flex flex-col gap-2" >
           <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Exam Absenteeism</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >
                  <ul className="ml-10 list-disc " >
                  <li>If a student fails to appear for the exam after registering, they will be responsible for paying the fee for any additional exam attempts.
                </li>
                <li>It is the student’s responsibility to ensure their availability and preparedness for the scheduled exam.
                </li>
                <li>Failure to attend the exam without a valid reason will result in the student being charged for any subsequent exam they wish to take</li>
                <li>We encourage students to carefully manage their exam schedules and make necessary arrangements to be present for the exams they register for to avoid incurring additional costs.</li>
                  </ul>
                  </p>
           </div>

           <div className="flex flex-col gap-2 mt-10 " >
           <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Additional Guidelines</h4>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Attendance Requirement</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >To be eligible to appear for any exam, students must have a minimum of 90% attendance in the delivered lectures.
                  </p>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Internal Assessments</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Students are required to complete internal assessments before appearing for the respective examination.
                  </p>
           </div>

           <div className="flex flex-col gap-2 mb-10 " >
                  <h4 className={` font-bold text-xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >AI and Remote Proctoring</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Students must provide consent for AI and remote proctoring during online exams. The
                    exam will be remotely proctored, with human proctors supported by AI technology
                    monitoring the session and workspace through a live video and audio feed. This
                    process will be recorded. Before the exam begins, the proctor will verify the photos
                    taken by the student.
                    Skillfull developer is committed to upholding integrity, fairness, and transparency in the
                    certification and examination process, providing students with a valuable and enriching
                    learning experience that enhances their skills.
                  </p>
           </div>

        

          </div>

          {/* <div className=' flex flex-col gap-5 mt-5 ' >
          <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key Features of React</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Components :</strong> The fundamental unit in the transformation of React is components which can be employed and tested to build elite UI systems.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>JSX :</strong> React uses template system known as JSX which is pre-processing extension to js to write components.</p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>State and Props :</strong> Members can be of two types state and props where both are used to control information and transfer to other components.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Virtual DOM :</strong>React, in particular, uses the concept of the virtual DOM, which the actual DOM kept in memory and used for rendering and re-rendering.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Hooks :</strong> A Hook is a mechanism that enable use state and other React features in Function Components.</p>
            </li>
           
          </ul>
          </div> */}
    </div>
  )
}

export default ExaminationPolicy