import React from 'react'

const Offer = ({toggle, setToggle}) => {
  return (
    // bg-[#12372a]
    <div className="w-full ">
    {/* :MAIN CONTAINER */}
    <div className="mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
      {/* ::Title */}
      <h2 className={`space-y-2 text-3xl sm:text-4xl font-extrabold uppercase ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Sign up now to get 10% off</h2>
      {/* ::Text */}
      <p className={`mt-4 text-lg leading-6 ${toggle === false ? "text-[#436860]" : "text-[#fbfada]"} `}>
      Empowering individuals with essential skills and providing 100% job placement success. We ensure that you gain the knowledge and confidence needed to excel in your career and secure your dream job.
      </p>
      {/* ::Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-around items-center uppercase font-medium tracking-widest">
        {/* Signup */}
        <a href="#link" className="relative mb-5 sm:mb-0 px-5 py-3 w-48 rounded-md shadow bg-indigo-100 text-[#12372a] transform hover:bg-white active:top-0.5">Signup</a>
        {/* Maybe later */}
        <a href="#link" className="relative px-5 py-3 w-48 rounded-md shadow bg-[#436860] text-indigo-100 hover:bg-[#355851] active:top-0.5">Maybe later</a>
      </div>
    </div>
  </div>
  )
}

export default Offer