import React from 'react'
import { Carousel } from "flowbite-react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

function InfiniteLoopSlider({ children, speed = 4 }) {
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    // Adjust the speed here by changing the multiplier
    baseX.set(baseX.get() - (delta / 1000) * speed);
    if (baseX.get() <= -100) {
      baseX.set(0);
    }
  });

const x = useTransform(baseX, (v) => `${v}%`);

return (
  <div className="overflow-x-hidden whitespace-nowrap ">
    <motion.div className="inline-block text-wrap " style={{ x }}>
      {children}
    </motion.div>
    <motion.div className="inline-block text-wrap" style={{ x }}>
      {children}
    </motion.div>
  </div>
);
}

function InfiniteLoopSliderRight({ children, speed = 4 }) {
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    // Adjust the speed here by changing the multiplier
    baseX.set(baseX.get() + (delta / 1000) * speed);
    if (baseX.get() >= 100) {
      baseX.set(0);
    }
  });

const x = useTransform(baseX, (v) => `${v}%`);

return (
  <div className="overflow-hidden whitespace-nowrap ">
    <motion.div className="inline-block text-wrap " style={{ x }}>
      {children}
    </motion.div>
    <motion.div className="inline-block text-wrap" style={{ x }}>
      {children}
    </motion.div>
  </div>
);
}

const Testimonials = ({toggle, setToggle}) => {
    const people1 = [
        {
          name: "Priya Sharma",
          avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
          testimony: "Skillfull Developer transformed my career. The training was thorough, and I secured a fantastic job within weeks of completing the course.",
          twitterPseudo: "@priyasharma"
        },
        {
          name: "Rajesh Kumar",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: "Thanks to Skillfull Developer, I gained the skills and confidence needed to land my dream job. Highly recommend it!",
          twitterPseudo: "@rajeshkumar"
        },
        {
          name: "Ayesha Khan",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: "The hands-on projects and expert guidance at Skillfull Developer were invaluable. I now work at a leading tech company!",
          twitterPseudo: "@ayeshakhan"
        },
        {
          name: "Vikram Patel",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: "From learning to placement, Skillfull Developer exceeded my expectations. Their 100% placement promise is real!",
          twitterPseudo: "@vikrampatel"
        },
        {
          name: "Sneha Reddy",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: "Skillfull Developer's comprehensive program helped me develop crucial skills and secure a great job. I'm grateful for their support.",
          twitterPseudo: "@snehareddy"
        },
      ]
      const people2 = [
        {
          name: "John Smith",
          avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
          testimony: "Skillfull Developer provided top-notch training and placement assistance. I now work in a role I love, thanks to their team.",
          twitterPseudo: "@johnsmith"
        },
        {
          name: "Emily Johnson",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: "The skill development and job placement process at Skillfull Developer were seamless. I highly recommend their programs.",
          twitterPseudo: "@emilyjohnson"
        },
        {
          name: "Carlos Garcia",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: "Skillfull Developer's training was exceptional, and their placement support ensured I found a great job quickly.",
          twitterPseudo: "@carlosgarcia"
        },
        {
          name: "Maria Martinez",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: "I am thrilled with the skills I gained and the job I landed through Skillfull Developer. Their program truly works!",
          twitterPseudo: "@mariamartinez"
        },
        {
          name: "Liam Brown",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: "Skillfull Developer's expert-led training and guaranteed placement made all the difference. I secured a job at a top company.",
          twitterPseudo: "@liambrown"
        },
      ]
      const parters = [
        {
          name: "Amazon",
          picture: "#icon-monster-image",
        },
        {
          name: "Apple",
          picture: "#icon-monster-image",
        },
      ]
  return (
    // bg-[#12372a]
    <>
       <div className=" relative mx-auto px-4 w-full  text-green-900">
    <div className="flex flex-col items-center ">

      {/* :TITLE CONTAINER */}
      <div className=" px-4 ">
        <h2 className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[52px]
         ${toggle === false ? "text-[#12372A]" :"text-[#fbfada]"}`}>Thousands of happy Students</h2>
      </div>
      <div className={`mb-[60px] mt-5  ${toggle === false ? "text-green-900" : "text-[#fbfada]" } `} >
        <p>Certainly! Here are 10 testimonials for Skillfull Developer, with a mix of Indian and foreign names</p>
      </div>
    </div>
  </div>
    <div className=" w-full flex justify-center items-center ">
    <InfiniteLoopSlider duration={20}>
       {people1.map(person => (
            <li key={person.twitterPseudo} className=" w-[200px] h-[250px]
            col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 rounded-xl shadow-lg bg-white 
            inline-block mx-5 mb-4
            ">
              {/* ::Card header */}
              <div className="flex items-center space-x-3">
                {/* :::avatar */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                  <img src={person.avatar} alt="" className="object-cover" />
                </span>
                <div className="text-left">
                  {/* :::name */}
                  <h3 className="text-sm font-semibold ">{person.name}</h3>
                  {/* :::pseudo twitter */}
                  <p className="text-[12px] text-gray-400">{person.twitterPseudo}</p>
                </div>
              </div>
              {/* ::Card body */}
              <div className=" w-[100%] mt-4 flex text-sm">
                {/* :::testimony */}
                <p className="text-sm">
                  {person.testimony}
                </p>
              </div>
            </li>
          ))
          }
    </InfiniteLoopSlider>
  </div>

  <div className="flex justify-center items-center ">
    <InfiniteLoopSliderRight duration={20}>
       {people2.map(person => (
            <li key={person.twitterPseudo} className="w-[200px] h-[250px]
            col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 rounded-xl shadow-lg bg-white 
            inline-block mx-5 mb-4
            ">
              {/* ::Card header */}
              <div className="flex items-center space-x-3">
                {/* :::avatar */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                  <img src={person.avatar} alt="" className="object-cover" />
                </span>
                <div className="text-left">
                  {/* :::name */}
                  <h3 className="text-sm font-semibold">{person.name}</h3>
                  {/* :::pseudo twitter */}
                  <p className="text-[12px] text-gray-400">{person.twitterPseudo}</p>
                </div>
              </div>
              {/* ::Card body */}
              <div className=" w-[100%] mt-4 flex text-sm">
                {/* :::testimony */}
                <p className="text-sm">
                  {person.testimony}
                </p>
              </div>
            </li>
          ))
          }
    </InfiniteLoopSliderRight>
  </div>

    {/* :PARTNER BRANDS */}
    <div className="mt-8 w-full">
        <h3 className="mb-3 flex justify-center items-center text-center text-lg font-extrabold uppercase">
          <span className={`mr-3 w-16 h-1 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[52px]
         ${toggle === false ? "text-[#12372A]" :"text-[#fbfada]"}`} />
          They trusted Us
        </h3>
        <ul className="flex flex-wrap justify-evenly items-center space-y-5 sm:space-y-0 space-x-6">
          {parters.map(brand => (
            <li key={brand.name} className="w-14 sm:w-16 opacity-40">
              <img src={brand.picture} alt="" className="object-cover" />
            </li>
          ))
          }
        </ul>
      </div>
  </>
  )
}

export default Testimonials