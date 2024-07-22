import React from 'react'
import ContactImg from "../../assets/contact.gif";

const FormRefund = ({toggle}) => {
    
  return (
    <div className=' w-11/12 mx-auto font-poppins ' >
      <div className=' flex flex-col md:flex-row justify-between items-center gap-5 ' > 
      <img src={ContactImg} className=' w-full md:w-[40%] ' />
      <section >
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
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
          <div>
              <label for="state" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}> State</label>
              <input type="text" id="state" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
               outline-none " placeholder="name@skillfulldeveloper.com" required />
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
    </div>
  )
}

export default FormRefund