import React from "react";

const Contact = ({toggle}) => {
  return (
    <div className=' w-11/12 mx-auto font-poppins mb-10 ' >
      <div className=' md:flex-row flex-col flex justify-between items-center gap-[100px] ' > 
      <section >
  <div class="py-8 lg:py-16 px-4 max-w-screen-md mx-auto">
      <h2 className={` ${toggle === true ? " text-white " :" text-[#12372A] " } mb-4 text-4xl tracking-tight font-bold text-center `}>Contact Us</h2>
      {/* 436850 */}
      <p className={`mb-8 lg:mb-10 font-light text-center sm:text-xl ${toggle === true ? " text-gray-300 " :" text-[#436850] " } `}>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
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
              <label for="subject" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Subject</label>
              <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
               outline-none " placeholder="Enter your Subject" required />
          </div>
          <div>
              <label for="yourmessage" className={`block mb-2 text-sm font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`}>Your Message</label>
              <textarea type="text" id="yourmessage" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none " placeholder="Enter your message" required rows={5} ></textarea>
          </div>
          <div className=' flex items-center justify-center ' >
            <button type="submit" className=" mt-5 font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
                border-2 text-white cursor-pointer hover:bg-[#12372A] ">Send message</button>
          </div>
      </form>
  </div>
        </section>

        <div className=" flex flex-col gap-10 " >
            <div className=" flex flex-col  gap-1 " >
                <p className={`sm:text-xl font-bold ${toggle === true ? " text-gray-300 " :" text-[#12372A] " } `} >Address:-</p>
                <p className={` text-lg font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`} >2nd floor , Building no. II , Anurag Market , Indra Nagar , Dehradun , Uttarakhand  Pin -248001</p>
            </div>
            <div className=" flex flex-col gap-1 " >
                <p className={`sm:text-xl font-bold ${toggle === true ? " text-gray-300 " :" text-[#12372A] " } `} >Email:-</p>
                <p className={` text-lg font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`} >help@skillfulldeveloper.com <br/> info@skillfulldeveloper.com </p>
            </div>
            <div className=" flex flex-col gap-1 " >
                <p className={`sm:text-xl font-bold ${toggle === true ? " text-gray-300 " :" text-[#12372A] " } `} >Phone:-</p>
                <p className={` text-lg font-semibold ${toggle === true ? "text-[#adbc9f]" : "text-[#436850]" }`} >+91-9760688893</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

