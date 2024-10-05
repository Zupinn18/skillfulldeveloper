import React from 'react'
import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "How exactly Skillful developer Help me?",
    desc: "Skillful developer provide you hands on coding training to help students not only learn programming but also apply it in real project. And Skillful developer give you 100% placement guarantee with interview preparation as well. Our goal is to help you gain confidence solve real problem through code and open door to new career opportunities in the tech field.",
  },
  {
    title: "Will I have to pay for the recorded session?",
    desc: "Absolutely NO, all the recorded session will be free of cost you will receive. You will have to make the payment only one time for the training program. That’s It",
  },
  {
    title: "What are the extra things you are providing in this program which other company don’t have? ",
    desc: "As we have mentioned multiple times That we provide 100% placement guarantee for all the students who will join this program. Another thing is if you won’t get job after this program so your full fee will be refunded to you.",
  },
  {
    title: "In which company you can provide job?",
    desc: "We have multiple company in pan India. You will get the job in top tech company",
  },
  {
    title: "what would be starting salary If I will be working as a fresher after this course ?",
    desc: "After 45 days training we’ll provide 45 days practice in real projects. So, you will be hire in tech company and the package will be around 5LPA. And another thing will be depending on your interview.",
  },
  {
    title: "Where will the classes take place?",
    desc: "The classes will be taught online. The program is designed to give you access to all pre-recorded content and materials, so you may learn from anywhere at any time. In addition, you will regular assignments, and unlimited doubt assistance.",
  },
  {
    title: "What happens if I miss a lecture throughout the course?",
    desc: "No need to worry about it we will provide you all the recoded videos after the class .So you can cover the left part of your course.",
  },
  {
    title: "Do we provide job guarantees?",
    desc: "Yes, we do. Our placement team will assist you throughout the program by helping you polish your portfolio and resume, practice interviewing, and secure your first tech job following graduation.",
  },
  {
    title: "I'm already 30/40/50; is it too late for me? ",
    desc: "Today's professional life spans 20 to 65 years. Even if you're 40-45 years old, you still have 20-25 years of labour ahead of you. And it is certainly more enjoyable to spend these years in an intriguing and attractive subject such as the Data Science industry",
  },

  {
    title: "Who is Skillfull developer ?",
    desc: "Skillfull developer is the best institute for application development training program. Where you can learn application development android and IOS both.",
  },
  {
    title: "Can we get placement through Skillfull developer ?",
    desc: "After this training program Skillfull developer give you the 100% placement guarantee in top tech companies like Microsoft, PayPal, Google, Meta, Adobe, Samsung and more.",
  },
  {
    title: "Can I attend online classes ?",
    desc: "Yes, Skillfull developer provide you online classes according to your time you can select any slot which is available at that time.",
  },
  {
    title: "What are the Application Development training program ?",
    desc: "Application development training program learn the latest tools and technologies to build modern app with our comprehensive application development course. Master language java script, C# and many more.",
  },
  {
    title: "Can we attend the training program part-time ?",
    desc: "Skillfull developer provides you training online so you can select the batch and you can attend the daily classes accordingly.",
  },
  {
    title: "What support is available after completing this program ?",
    desc: "Skillfull developer provide you interview preparation support until and unless you will get the job. And all practical training in real project. ",
  },
  {
    title: "What technologies and programming language will I learn from skillfull developer ?",
    desc: "Skillfull developer will teach you multiple things like UI/UX design, React Native, Android Studio, Java or Kotlin, packaging and deploying and many more. Which can help you to build your career. ",
  },
  {
    title: "What are the benefits of this application development training program ?",
    desc: "You can improve your programming abilities, gain practical experience, and stay current with industry trends by enrolling in an application development training program. Creating a portfolio, obtaining credentials, connecting with industry experts, and honing your problem-solving skills will all help you advance your career in a rapidly changing field.",
  },
];

export function FAQs({toggle}) {
  return (
    <section className="px-8 py-20">
      <div className=" mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className={`mb-2 text-4xl !leading-snug lg:text-[40px] ${toggle === false ? "text-[#12372A]" : "text-white"} `}
          >
            Frequently asked questions
          </Typography>
          <div className=' w-[30%] mx-auto h-[2px] bg-green-500 ' ></div>
          {/* <Typography
            className={`mx-auto mt-4 font-normal text-[18px] lg:max-w-3xl ${toggle === false ? "text-[#436860]" : "text-gray-200"} `}
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do.
          </Typography> */}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {faqs.map(({ title, desc }) => (
            <div key={title} >
              <Typography className="pb-4 text-[19px] font-bold text-green-500 ">
                {title}
              </Typography>
              <div className="border-t border-green-400 pt-4">
                <Typography className={`text-justify font-normal text-md ${toggle === false ? "text-[#436860]" : "text-gray-200"} `}>
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;