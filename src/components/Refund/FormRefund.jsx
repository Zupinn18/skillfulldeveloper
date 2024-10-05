import React from 'react'
import ContactImg from "../../assets/contact.gif";
import PrivacyBgWhite from "../../assets/privacybg-white.png";
import PrivacyBgDark from "../../assets/privacybg-dark.png";

const FormRefund = ({toggle}) => {
    
  return (
    <div className=' w-full ' >
      {
        toggle && (
        <div className=' relative font-poppins ' >
          <img src={PrivacyBgDark} />
          <div className=' absolute top-[30%] left-[10%] flex flex-col gap-2 ' >
          <h2 className={` text-center sm:text-4xl md:text-6xl font-poppins font-bold ${toggle === false ? "text-white" : "text-white"}`}>Fee Refund Policy</h2>
          <h2 className={` text-center text-lg font-poppins ${toggle === false ? "text-white" : "text-white"}`}>Learn Confidently, Refund Easily!</h2>
          </div>
      </div>
      )
      }
      {
        !toggle && (
        <div  className=' relative font-poppins ' >
          <img src={PrivacyBgWhite} />
          <div className=' absolute top-[30%] left-[10%] flex flex-col gap-2 ' >
          <h2 className={` text-center sm:text-4xl md:text-6xl font-poppins font-bold ${toggle === false ? "text-white" : "text-white"}`}>Fee Refund Policy</h2>
          <h2 className={` text-center text-lg font-poppins ${toggle === false ? "text-white" : "text-white"}`}>Learn Confidently, Refund Easily!</h2>
          </div>
      </div>
      )
      }

        <div className=' w-11/12 mx-auto font-poppins flex flex-col gap-[50px] ' >
        <div className='  ' >
            <p className={` text-center text-lg text-semibold mb-5 leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
            We at Skillful developer are committed to the success and satisfaction of our learners. We understand that embarking on a journey to enhance your skills and secure a job is a significant investment of your time and resources. Our goal is to support you every step of the way. However, we also recognize that unforeseen circumstances can arise. Hence, we have devised a refund policy to ensure transparency and fairness wherever possible.
                    </p>
          </div>
          <div className=' flex flex-col gap-5 ' > 
          {/* <img src={ContactImg} className=' w-full md:w-[40%] ' /> */}
              <section className=' w-full mx-auto mb-10 ' >
                <div class=" w-[50%] bg-white rounded-md py-6 px-8 mx-auto  ">
                    <h2 className={` ${toggle === true ? " text-white " :" text-[#12372A] " } mb-4 text-4xl tracking-tight font-bold text-center `}>Fee Refund</h2>
                    {/* 436850 */}
                    <p className={`mb-8 lg:mb-10 font-light text-center sm:text-xl ${toggle === true ? " text-gray-300 " :" text-[#436850] " } `}>100% job Placement  otherwise 100% fee refund policy</p>
                    <form class="space-y-2">
                          <div>
                            <label for="name" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}> Name</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                            outline-none " placeholder="Ram Sharma" required />
                        </div>
                        <div>
                            <label for="email" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}> Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                            outline-none " placeholder="name@skillfulldeveloper.com" required />
                        </div>
                        <div>
                            <label for="mobile" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Mobile Number</label>
                            <input type="number" id="mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                            outline-none " placeholder="+123456789" required />
                        </div>
                        <div className='' >
                              <label className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`} htmlFor="state">
                                  State:
                              </label>
                              <select
                                  className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                                  outline-none  "
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
                        <div>
                            <label for="course" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}> Course</label>
                            <input type="text" id="course" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
                            outline-none " placeholder="Enter your Course" required />
                        </div>
                        <div>
                            <label for="reason" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Reason</label>
                            <input type="text" id="reason" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none " placeholder="Your reason for Refund" required />
                        </div>
                        <div className=' flex items-center justify-center ' >
                          <button type="submit" className=" mt-5 font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
                              border-2 text-white cursor-pointer hover:bg-[#12372A] ">Send message</button>
                        </div>
                    </form>
                </div>
              </section>


          </div>

          <ul className={` flex flex-col gap-5 list-disc ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Registration fee :</strong> The Registration Fee is non-refundable (irrespective of the mode of payment).
              <br/>
              However, in the following criteria you have to follow for apply fee refund.
              <br/><br/>
              <ul className=' ml-10 list-disc ' >
                  <li>Your attendance should be 90%</li>
                  <li>Don’t miss the course in between you have to attend the course till the end</li>
                  <li>You will have to attend all the interviews on time which we will suggest you</li>
                  <li>You have to be prepared to move outside of your city</li>
                  <li>Throughout the course, you must use every tool that the tutor recommends</li>
                  <li>Registration fee is nonrefundable</li>
                  <li>GST taxes are nonrefundable</li>
              </ul>
              </p>
            </li>

            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Refund Process :</strong> Upon receiving the refund request, we will initiate a verification process to ensure that the eligibility criteria have been met. Once the verification is complete and the criteria are confirmed, we will process the refund.
              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Refund Amount :</strong> The refund amount will be equal to the course fees paid by the learner at the time of enrolment, excluding GST and Registration Fee.
              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Refund Request :</strong> You can raise a request for refund by sending a mail to <span className="font-semibold" >help@skillfulldeveloper.com</span>
              </p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Contact Us :</strong>
For any questions or concerns regarding our refund policy or to initiate a refund request, please
contact our support team at <span className="font-semibold" >help@skillfulldeveloper.com</span>
              </p>
            </li>
           
          </ul>

          <div className="flex flex-col gap-2" >
                  <h4 className={` font-bold text-2xl ${toggle === false ? "text-[#436860]" : "text-slate-100"} `} >Here are terms and conditions for the use of the website :</h4>
                 <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} >Payment shall be made payable to Skillfull developer either by Online transfer, Cheque or Credit Card payment.
                 <br/><br/>
                 Online Transfer To:
                 <br/><br/> 
                    <div className=' w-fit mx-auto text-[#436860] mt-3 flex flex-col gap-1 px-6 py-6 shadow-2xl bg-white rounded-lg ' >
                      <h6 className=' text-center text-xl mb-2 font-bold ' >Banking Details</h6>
                      <p><strong>Account Name -</strong> Zupinn Business Solutions Pvt. Ltd.</p>
                      <p><strong>Account No. -</strong> 179605000524</p>
                      <p><strong>IFSC Code -</strong> ICIC0001796</p>
                      <p><strong>Bank Name -</strong> ICICI Bank, Vikasnagar, Dehradun, Uttarakhand (248198)</p>
                    </div>

                  </p>
           </div>

           <ul className={` flex flex-col gap-5 list-disc ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>Cheque payment should be crossed "A/C Payee Only". Please write the participant(s) name, course, course date, invoice number & contact number on the reverse side of the cheque or simply attach a photocopy of the invoice.</li>
            <li>Confirmation of this registration is subjected to skillfull developer receiving the Course fee payment.</li>
            <li>Placement assistance is not a compulsion, it's an add-on service from skillfull developer. Work from home opportunities will only be provided as per the requirements from our placement partners.</li>
            <li>Transferring of Batch and Branch will be chargeable INR 3000 + GST.</li>
            <li>Skillfull developer will conduct the course only if there are sufficient participants. In case of non-sufficient participants, the current participants will be merged into another batch or the training might be postponed, at the sole discretion of Skillfull developer.</li>
            <li>Taking pictures of the training classroom and any type of recording (audio or video) during the training session is strictly prohibited. If anyone is found doing so, skillfull developer has the right in its sole discretion to cancel your registration. You agree not to dispute skillfull developer decision regarding cancellation.</li>
            <li>You are required to carry your own laptop during the class. Failure to do so will affect your learning skillfull developer will not be responsible for the same. Further, we do not issue laptops to trainees under any circumstances.</li>
            <li>If you have any other queries or need any further clarifications regarding this or other programs, please do not hesitate to contact us and we are more than happy to assist you to the best of our ability.</li>
          </ul>

        </div>
    </div>
  )
}

export default FormRefund