import React from 'react'
import TermImg from "../assets/terms.gif";

const Terms = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto flex flex-col gap-[50px] mb-10 ' >
        <div className=' flex flex-col gap-4 mt-[50px]' >
          <h2 className={`text-center text-xl sm:text-4xl font-edusa font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Terms & Conditions</h2>
          <div className=' flex gap-[50px] items-center flex-col md:flex-row ' >
              <p className={` text-justify text-md mb-10 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              This is a legal and binding agreement between you, the user (referred to as “user” or “you”) of the Programs, as defined below, and skillful developer stating the terms that govern your use of the Platform, as defined below. The website <a href='https://skillfulldeveloper.com/' className={` font-semibold ${toggle === false ? "text-[#436860]" : "text-slate-200"}`} >https://skillfulldeveloper.com/</a> and the information, services and other materials contained therein are provided and operated by skillful developer. Skillful developer offers specially curated online higher education. <br/> 
              Please review our Terms of Use, Privacy Policy and other policies available on the Platform (collectively referred to as the “Terms”) that govern the use of the Platform and Programs. By accepting these Terms in any manner or accessing the website, you consent, agree, and undertake to abide, be bound by and adhere to the Terms and if you do not agree to these Terms, you are not entitled to avail of/use the Programs and any use thereafter shall be unauthorized.<br/>
                  </p>
              <img src={TermImg} className=' md:w-[50%] ' />
          </div>
          <div className="flex flex-col gap-6" >
            <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Each Program may have a separate set of terms dealing with refunds, deferrals, payments, etc. governing such Programs, and our corporate clients may have executed separate written agreements with us, which, in the event of a conflict, will supersede these Terms to the extent of the conflicting provisions.<br/><br/>
            These Terms shall apply to Skillful developer hosted websites, WhatsApp groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications and other social media forums hosted by Skillful developer, which shall be deemed to be part of the ‘Platform’ by reference. You acknowledge that certain parts of the Platform, as mentioned above, are provided by third-party service providers, and you agree to abide by their terms and conditions. Skillful developer shall not be responsible for any disruption of services caused by such third-party service providers.<br/><br/>
            We may change these Terms from time to time without prior notice. You should review this page regularly. Your continued use of the Platform and Programs after changes have been made will be taken to indicate that you have read and accepted those changes. You should not use the Platform or Programs if you are not happy with any changes to these Terms. <br/><br/>
            Skillful developer makes no claim that the Platform operates (or is legally permitted to operate) in all geographic areas, or that the Platform, or information, services or products offered through the Platform are appropriate or available for use in other locations. Accessing the Platform from territories where the Platform, or any content or functionality of the Platform or its portions thereof is illegal, is expressly prohibited. If you choose to access the Platform, you agree and acknowledge that you do so on your own initiative and at your own risk and that you are solely responsible for compliance with all applicable laws.<br/><br/>
            </p>
           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >User Registration, User Accounts and Delivery of Services</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >In order to participate in most Platform activities and to apply for a Program, you will need to register for a personal account (“User Account”) by undergoing a verification process to verify your login credentials.<br/><br/>
                  Upon payment of the Program fees – in part or whole, depending on the Program – Skillful developer shall deliver the terms of use of the Program and grant you access to the Program. The invoice may be provided to you along with the email confirmation. This shall be a proof of delivery against the successful payment of fees.<br/><br/>
                  In setting up your User Account, you may be prompted or required to enter additional information, including but not limited to your name and email address. Additional information may be required to confirm your identity. You understand and agree that all information provided by you is accurate, current and complete and that you will maintain and update your information to keep it accurate, current and complete. You acknowledge that if any information provided by you is untrue, inaccurate, not current or incomplete, we reserve the right to terminate your use of the Platform and your enrolment into a Program, to the extent applicable.<br/><br/>
                  In addition to the registration process, as part of your use of the Platform or participation in the Programs, we may obtain certain information about you and your performance in the Programs. Some of this information may be Personally Identifiable Information. We may use, maintain, and store this information to provide certain services to you now and in the future, and may share such information with our Educational Partners or third parties in conjunction with such services or for the purpose of marketing. For example, as further detailed in our Privacy Policy, we may share certain materials or information about you with third parties, including your grades/scores in our classes. Access to the Programs is restricted to attendees or students who have specifically been granted access by Skillful developer.<br/><br/>
                  By registering your User Account, you agree that: 
                  <ul className="ml-10 list-disc " >
                    <li>you are registered for the Program only once and will not set up multiple User Accounts and</li>
                    <li>you will abide by these Terms and any terms specific to the Program.</li>
                  </ul>
                  Additional requirements apply to Students. As a Student, in addition to the points above, you agree that you are registering with the intent to complete the assignments, if any, that are relevant and applicable to the Platform or Program into which you have enrolled.
                  </p>
           </div>
           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Payment Terms and Refund Policy</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Unless otherwise expressly agreed in writing by Skillful developer, full payment for participation in a Program is required at the time of registration. With regard to the refund, it shall be done in accordance with the terms and conditions of refund policy of the respective program.<br/><br/>
                  The students are eligible for the Refund after of the completion of the program only If the students have fulfilled all the terms and conditions of the job guarantee agreement such as successful completion and submission of all the course assignments, Projects, and case studies with a minimum of 90% attendance.<br/>
                  It is the sole responsibility of the user enrolling into a Program to check the accuracy of, and evaluate the suitability and relevance of, the Program elected. <br/><br/>

                  To make payment for any Program or to purchase any services or products offered by Skillful developerthrough the Platform, you must have internet access and a current valid accepted payment method as indicated during sign-up (“Payment Method”). Skillful developerdoes not store any of your credit card information or such other information restricted by the Reserve Bank of India (RBI) for processing payment and has partnered with payment gateways for the payment towards the services. By using a third-party payment provider, you agree to abide by the terms of such a payment provider. You agree that in case Skillful developerthird-party payment provider stores any such information, Skillful developerwill not be responsible for such storage, and it will be solely at your discretion to allow the third party to store such information. Any loss of such information or any loss incurred by you due to the usage of such information will be solely a loss incurred by you, and Skillful developeris in no way liable for any such losses and is neither responsible to reimburse / make good such losses in any manner whatsoever. You also agree to pay the applicable fees for the payments made through the Platform.<br/>
                  Skillful developer or its representatives will not ask for OTP or other authentication related information for any purpose, and we urge you to be cautious while making payments and during financial transactions. <br/><br/>
                  Failure to pay the applicable Program fee may result in withdrawal of your access to a Program. Depending on where you transact with us, the type of payment method used and where your payment was issued, your transaction with us may be subject to foreign exchange fees or exchange rates. Skillful developerdoes not support all payment methods, currencies or locations for payment. All applicable taxes are calculated based on the billing information you provide to us at the time of enrolment/purchase.
                  </p>
           </div>
           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Use of Programs</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Skillful developer reserves the right to cancel or reschedule any Program or live lectures/webinars, or to alter, modify or rearrange the schedule of topics, as well as the point value or weight of assignments, tests, quizzes, exams, projects and other such evaluations of progress. You also understand that Skillful developer, at its sole discretion, may limit, suspend, or terminate your use of the Platform or Programs and/or all Skillful developer -provided services related to the Programs, such as access to Skillful developer coaches or support services, evaluation services, or certifications. You also understand that Skillful developer may modify or discontinue all services related to its Programs at its sole discretion. You agree that Skillful developer shall not be liable to you or to any third party for any such modification, suspension or discontinuance. Nothing in these Terms shall be construed to obligate Skillful developer to maintain and support the Platform or Programs or any part or portion thereof or any associated services. <br/><br/>
                  You agree that Skillful developer shall be under no liability whatsoever to you in the event of non-availability of the Platform or any portion thereof occasioned by Act of God, war, disease, revolution, epidemic, riot, civil commotion, strike, lockout, flood, fire, satellite failure, failure of any public utility, man-made disaster or any other cause whatsoever beyond the control of Skillful developer. <br/><br/>
                  Participants of skillful developer online live lectures and webinars shall be provided access to such classes via email. You agree not to share such access with any third party. If you are unable to attend an online live lecture/webinar, please provide skillful developer with prior intimation regarding this.<br/>
                  You shall be exclusively responsible for obtaining and maintaining any equipment or ancillary services needed to connect to, access, receive or use the Platform, including, without limitation, hardware devices, software, and other internet, wireless, broadband, phone and/or other mobile communication device connection services. You shall be exclusively responsible for ensuring that such equipment or ancillary services are compatible with the Platform, and you shall be responsible for all charges incurred in connection with the use of the Platform and Program in connection with all such equipment and ancillary services.
                  </p>
           </div>
          </div>

          <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Certification</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Skillful developer is NOT a university, but an education service provider. We provide PG certificate programs.<br/>
                  You will be awarded a certificate of successful completion of a Program (“Program Certificate”) only upon fulfilling the criteria and requirements of skillful developer.

                  </p>
           </div>
           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Third-Party Intellectual Property</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Skillful developer respects third-party intellectual property rights and actively supports protection of all third-party intellectual property including copyrights and trademarks (“IP”). It is our policy to expeditiously respond to clear notices of alleged IP infringement. If we receive proper notification of IP infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity. <br/><br/>
                  Skillful developer shall not be held liable for the unauthorized use of any third-party IP, and the user that carries out such unauthorized use or infringes any IP available on the Platform shall fully indemnify and hold Skillful developer harmless against any and all claims that may arise as a result of such use.<br/>
                  If you believe that your product or other work has been misrepresented or used in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide us with the following information: 
                  <ul className="ml-10 list-disc " >
                  <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the product, copyright or other intellectual property interest.</li>
                  <li>A description of the product, work or other intellectual property that you claim has been misrepresented or infringed.</li>
                  <li>A description of where the material that you claim is misrepresenting or infringing your product, work or other intellectual property is located on the Platform/Program.</li>
                  <li>Your address, telephone number, and email address.</li>
                  <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the owner of the product, work, copyright or intellectual property, or its agent, or applicable law and</li>
                  <li>A statement by you, made under the penalty of perjury, that the aforementioned information in your notice is accurate and that you are the product, work, copyright or intellectual property owner or authorized to act on such owner’s behalf.</li>
                  <li>Specific applicable code of conduct, if any, relating directly to a Program into which such user is enrolled.</li>
                  </ul> <br/>
                  Skillful developer is an intermediary with respect to User Content (defined under ‘User Content’) and any other post or comment or other information uploaded, published, transmitted or updated by you in accordance with Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021 and the laws of any other jurisdiction where Skillful developer would qualify as an intermediary. In furtherance of the same, you should not host, display, upload, modify, publish, transmit, store, update or share any information that:
                  <ul className="ml-10 list-decimal" >
                    <li>Belongs to another person and to which the user does not have any right;</li>
                    <li>Is defamatory, libelous, fraudulent, threatening, obscene, indecent, profane, pornographic, pedophilic, invasive of another’s privacy including bodily privacy, discriminating, harmful, insulting or harassing on the basis of gender, libelous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force;</li>
                    <li>Is harmful to child;</li>
                    <li>Infringes any patent, trademark, copyright or other proprietary rights;</li>
                    <li>Violates any law for the time being in force;</li>
                    <li>Deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact;</li>
                    <li>Impersonates another person;</li>
                    <li>Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting other nation;</li>
                    <li>Contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                    <li>Is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person;</li>
                    <li>Content that discusses illegal activities, with the intent to commit them;</li>
                    <li>Content that you do not have the right to disclose;</li>
                    <li>Advertising or any form of commercial solicitation;</li>
                    <li>Content related to partisan political activities;</li>
                    <li>Content that contains intentionally inaccurate information or that is posted with the intent of misleading others;</li>
                    <li>Including but not limited to viruses, Trojan horses, worms, time bombs, cancelbots, or other disabling devices or other harmful components intended to or that may damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or personal information;</li>
                    <li>Content that consists of any high volume, automated, or electronic means to access the Platform (including without limitation robots, spiders or scripts);</li>
                    <li>Content that violates the rights of other users of the Platform; or</li>
                    <li>Content that violates any applicable local, state, national or international law or otherwise advocates or encourages any illegal activity.</li>
                  </ul>

                  </p>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >User Content</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >The Platform may allow you to upload forum posts, chat with other users and skillful developer’s counsellors, user discussions, profile pages, and other content and media for social interaction, or certain information and materials for use with the Programs, e.g., questions, hypotheticals, examples, assignments, industry projects, etc. (collectively “User Content”). skillful developerdoes not claim ownership of any User Content you may submit or make available for inclusion on the Platform or Programs. The user will be the sole and exclusive owner of any and all rights, title and interest in and to the User Content.
                 <br/><br/>
                  With respect to any User Content you submit via the Platform or Programs or that is otherwise made available to Skillful developer, you hereby grant Skillful developer an irrevocable, worldwide, perpetual, royalty-free and non-exclusive license to use, distribute, reproduce, modify, adapt, publicly perform and publicly display such User Content on the Platforms or in the Programs or otherwise exploit the User Content, with the right to sublicense such rights (to multiple tiers), for any purpose (including for any commercial purpose). Skillful developer reserves the right to remove any User Content at any time and for any reason. <br/><br/>

                  To the extent that you provide any User Content, you represent and warrant that
 
                  <ul className=" ml-10 list-disc " >
                  <li>You have all necessary rights, licenses and/or clearances to provide such User Content and permit Skillful Developer to use such User Content as provided above;</li>
                  <li>Such User Content is accurate and reasonably complete;</li>
                  <li>As between you and Skillful Developer, you shall be responsible for the payment of any third-party fees related to the provision and use of such User Content; and</li>
                  <li>Such User Content does not and will not infringe or misappropriate any third-party rights or constitute a fraudulent statement or misrepresentation or unfair business practices.</li>
                  </ul> <br/>
                  Skillful developer does not control the User Content posted through the Platform, including any messages, reviews or comments, and does not guarantee the accuracy, integrity or quality of such User Content. Under no circumstances will Skillful developerbe liable in any way for any User Content, including any errors or omissions, or any loss or damage or defamation of any kind incurred as a result of your posting or use of any User Content. You are responsible for complying with all the laws applicable to the User Content.

                  </p>
           </div>

           <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Disclaimer</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >The Platform and/or Programs may contain typographical errors or inaccuracies and may not be complete or current. Skillful developer, therefore, reserves the right to correct any errors, inaccuracies or omissions (including after an order has been submitted) and to change or update information at any time without prior notice. <br/><br/>
                  The Platform, Programs, and any information or Skillful developerContent are provided on an “as is” and “as available” basis with all faults.<br/>
                  Skillful developermakes no representations or warranties of any kind, whether expressed or implied, with respect to Skillful developerContent or services available on or through this Platform and Programs. Skillful developermakes no warranty that the services will meet the user’s requirements or that the services will be uninterrupted, timely, secure, or error free; nor does Skillful developermake any warranty as to the results that may be obtained from the use of the services, or as to the accuracy or reliability of any information obtained through the services, or that any defects in the software will be corrected.<br/><br/>
                  The user understands and agrees that the Skillful developerContent and all other information, data, or other material downloaded or otherwise obtained through or from the Platform or Programs is obtained at the user’s own discretion and risk, and that the user will be solely responsible for any damage to the user, the user’s computer system, electronic device or any loss of data that results from the download of such material or data.<br/>
                  You may find information on availability of EMI options or loans for payment of your program fees on the Platform. Please note this is for information purposes only and the loan facilities are provided by third party credit facility providers and Skillful developeris not privy to any arrangement you may enter into with them. You will be bound by the terms and conditions of your agreement or arrangement with such third-party credit facility providers and Skillful developerwill not in any way be liable or responsible for or in relation to any such arrangements.<br/>
                  Under no circumstances will Skillful developerbe liable in any way for use of any upgrade Content or any other information, data, or other material downloaded or otherwise obtained through or from the Platform or Programs, including any errors or omissions, or any loss or damage or defamation of any kind incurred as a result of your use of or reliance on such information or data. -No advice or information, whether oral or written, obtained by the user from Skillful developeror through or from the services, shall create any warranty by Skillful developer.
                  In the event you find any information provided on the Platform or Programs incorrect or obscene or if you are the owner of any information or content and wish that such information or content is not displayed on the Platform or Programs, kindly notify us at the address provided at the bottom of the page.<br/><br/>
                  Testimonials, reviews and success stories including but not limited to regarding hike in salary, promotions, etc. appearing on the Platform are individual experiences, reflecting real life experiences of those that have used our products and/or services in some way or another. However, they are individual results and results may vary. We do not claim that they are typical results that consumers will generally achieve. The testimonials are not necessarily representative of all of those who will use our products and/or services.<br/><br/>
                  The testimonials, reviews and success stories presented on the Platform are applicable to the individuals writing them and may not be indicative of future performance or success of any other individuals. Skillful developercannot and does not guarantee results.<br/><br/>
                  There might be trademarks, logos and brand names of other companies including EPs featured or referred on the website (“Third Party IP”).  Use of these names, trademarks and brands or Third-Party IP does not imply endorsement. These are the property of their respective trademark holders.<br/><br/>
                  You may not use any of these Third-Party IP, or any variations thereof, without the owner’s prior written consent. You may not use any of these Third-Party IP or any variations thereof, for promotional purposes, or in any way that deliberately or inadvertently claims, suggests or, in the owner’s sole judgment, gives the appearance or impression of a relationship with or endorsement by the owner. <br/>
                  Nothing contained on the Platform should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Third-Party IP displayed on the Platform without the written permission of the owner of the applicable Third-Party IP.<br/><br/>
                  By accepting the Terms through your use of the Platform, you certify that you are 18 years of age or older. If you are under the age of 18 or under the legal age in your jurisdiction to enter into a binding contract, you may use the Platform only under the supervision of a parent or legal guardian who agrees to be bound by the Terms. By using the Platform, you represent and warrant that you have the right, authority, and capacity to enter into the Terms and to abide by all of the terms and conditions set forth herein. The Programs are not for the use of individuals under the age of 18 years.<br/><br/>
                  If any provision of the Terms or any Program-specific terms shared with you is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from the other provisions herein, and shall not affect the validity and enforceability of any remaining provisions. Skillful developershall have no liability under these Terms or any Program-specific terms shared with you, to the extent arising from any failure of Skillful developerto perform any of its obligations under these Terms or any Programspecific terms shared with you, due to any fire, flood, earthquakes, other acts of God, war, civil unrest, terrorism, Internet failures, governmental act or court order, national emergency, strikes or labor disputes or any other event not within Skillful developerreasonable control. Skillful developershall not be responsible for damage or other problems caused by any unauthorized change to these Terms made by way of hacking or cracking this page.
                  The failure of Skillful developer to exercise or enforce any right or provision of the Terms or any Program-specific terms shared with you, shall not constitute a waiver of such right or provision. If any provision of the Terms or any Program-specific terms shared with you is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, to the extent that may lawfully be done, and the other provisions of these Terms or any Program-specific terms shared with you, shall remain in full force and effect.<br/><br/>
                  These Terms or any Program-specific terms shared with you constitute the entire agreement between you and Skillful developer relating to the matters set forth herein, and shall not be modified except in writing, as posted on the Platforms by upgrade or through a specific writing between you and Skillful developer.<br/><br/>
                  Skillful developer may freely transfer or assign any portion of its rights or delegate its obligations under the Terms or any Program-specific terms shared with you. You may not transfer or assign, by operation of law or otherwise, any portion of your rights or delegate your obligations under the Terms or any Program-specific terms shared with you, without the prior written consent of Skillful developer, and any such attempted transfer or assignment shall be void and of no effect.
                  Any notice or communication that may be required to be given to Skillful developer under these Terms or any Program-specific terms shared with you may be sent by writing or emailing to the following addresses: <span className="font-semibold" >info@skillfulldeveloper.com</span>


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

export default Terms