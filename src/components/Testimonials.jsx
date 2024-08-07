import React from 'react'
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import Girl1 from "../assets/testimonials/girl1.png";
import Girl2 from "../assets/testimonials/girl2.png";
import Girl3 from "../assets/testimonials/girl3.jpg";
import Boy1 from "../assets/testimonials/boy1.jpg";
import Boy2 from "../assets/testimonials/boy2.jpg";

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
  const baseX = useMotionValue(-100); // Start at -100 to ensure the initial placement is correct

  useAnimationFrame((t, delta) => {
    // Adjust the speed here by changing the multiplier
    baseX.set(baseX.get() + (delta / 1000) * speed);
    if (baseX.get() >= 0) {
      baseX.set(-100);
    }
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="inline-block text-wrap" style={{ x }}>
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
          avatar: Girl1,
          testimony: "Skillfull Developer transformed my career. The training was thorough, and I secured a fantastic job within weeks of completing the course.",
          twitterPseudo: "@priyasharma"
        },
        {
          name: "Rajesh Kumar",
          avatar: Boy1,
          testimony: "Thanks to Skillfull Developer, I gained the skills and confidence needed to land my dream job. Highly recommend it!",
          twitterPseudo: "@rajeshkumar"
        },
        {
          name: "Ayesha Khan",
          avatar: Girl2,
          testimony: "The hands-on projects and expert guidance at Skillfull Developer were invaluable. I now work at a leading tech company!",
          twitterPseudo: "@ayeshakhan"
        },
        {
          name: "Vikram Patel",
          avatar: Boy2,
          testimony: "From learning to placement, Skillfull Developer exceeded my expectations. Their 100% placement promise is real!",
          twitterPseudo: "@vikrampatel"
        },
        {
          name: "Sneha Reddy",
          avatar:Girl3,
          testimony: "Skillfull Developer's comprehensive program helped me develop crucial skills and secure a great job. I'm grateful for their support.",
          twitterPseudo: "@snehareddy"
        },
      ]
      const people2 = [
        {
          name: "Geeta Rana",
          avatar: Girl2,
          testimony: "Skillfull Developer provided top-notch training and placement assistance. I now work in a role I love, thanks to their team.",
          twitterPseudo: "@geeta_rana"
        },
        {
          name: "Vikas Sharma",
          avatar: Boy2,
          testimony: "The skill development and job placement process at Skillfull Developer were seamless. I highly recommend their programs.",
          twitterPseudo: "@vikassharma"
        },
        {
          name: "Priya Rawat",
          avatar: Girl1,
          testimony: "Skillfull Developer's training was exceptional, and their placement support ensured I found a great job quickly.",
          twitterPseudo: "@priyarawat"
        },
        {
          name: "Saurabh Singh",
          avatar: Boy1,
          testimony: "I am thrilled with the skills I gained and the job I landed through Skillfull Developer. Their program truly works!",
          twitterPseudo: "@saurabhrawat"
        },
        {
          name: "Pawan Negi",
          avatar: Boy2,
          testimony: "Skillfull Developer's expert-led training and guaranteed placement made all the difference. I secured a job at a top company.",
          twitterPseudo: "@pawan_negi"
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
       <div className=" relative mx-auto px-4 w-full  text-green-900 "  >
    <div className="flex flex-col items-center ">

      {/* :TITLE CONTAINER */}
      <div className=" px-4 ">
        <h2 className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[52px]
         ${toggle === false ? "text-[#12372A]" :"text-[#fbfada]"}`}>Thousands of Happy Students</h2>
      </div>
      <div className={`mb-[60px] mt-5  ${toggle === false ? "text-green-900" : "text-[#fbfada]" } `} >
        <p>Certainly! Here are 5 testimonials for Skillfull Developer, with a mix of Indian Names.</p>
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
                  <h3 className="text-sm text-black font-semibold ">{person.name}</h3>
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
       {people2?.map(person => (
            <li key={person.twitterPseudo} className="w-[200px] h-[250px]
             sm:col-span-3 lg:col-span-2 py-6 px-4 rounded-xl shadow-lg bg-white 
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
                  <h3 className="text-sm text-black font-semibold">{person.name}</h3>
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
    <div className="mt-8 w-full mb-[100px] ">
        <div className=' flex items-center justify-center ' >
        <button style={{
        "cursor":"pointer",
        }}
        className='cursor-pointer font-semibold px-8 py-3 rounded-lg bg-[#436850] transition-all duration-300
             border-2 text-white hover:bg-[#12372A] border-none
             '
        >Testimonials</button>
        </div>
      </div>
  </>
  )
}

export default Testimonials