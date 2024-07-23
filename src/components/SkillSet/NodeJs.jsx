import React from 'react'
import NodeImage from "../../assets/skills/nodeskill.png";

const NodeJs = ({toggle}) => {
  return (
    <div className='w-full h-full mb-[100px] flex flex-col font-poppins' >
           <div className=' w-11/12 mx-auto flex flex-col gap-[40px] mt-6 ' >
          <div className='w-[100%] flex flex-col rounded-lg '>
            <p className={`text-xl text-center sm:text-5xl font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Node Js</p>
          </div>
      
      <div className=' flex justify-between items-center gap-[50px] ' >
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `}>
              Node.js is not only a tool but a feature that is supplementary to the ideas taken in by the developers of Ruby's Event Machine and Python's Twisted. Node.js simply furnishes the event model with more convenience. Another widely used general-purpose programming language is Node, which has been extensively applied by people in today’s technology industry. Being easy to read and having a very uncomplicated syntax, Node is one of the most popular languages for industry professionals and novices. In this article, you will discover what Node is in its simple definition, primary and secondary capabilities, its use cases in different industries including data science and web development, libraries, frameworks, automation, and scripting. Follow me as we explore the strengths and possibilities of Node in the rapidly developing trends in programming languages.
              </p>
              <img src={NodeImage} className=' w-[25%] ' />
          </div>

          <div className=' flex flex-col gap-5 mt-5 ' >
   <h2 className={` text-xl text-start font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Benefits of NodeJs</h2>
   <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Fast and Scalable :</strong> Node.js's event-driven model and non-blocking I/O make it ideal for real-time web applications</p>
     </li>
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Easy to Learn :</strong> Node.js is built on JavaScript, making it accessible to web developers

</p>
     </li>
     <li>
       <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Large Community :</strong> Node.js has a massive community, ensuring extensive support and resources

</p>
     </li>
   </ul>
   </div>

          <div className={` w-full mt-5 h-[1px] ${toggle === false ? "bg-[#12372A]" : "bg-slate-300"}`} ></div>

          <div className=' flex flex-col gap-5 mt-5 ' >
          <h2 className={` text-xl text-center font-bold ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Key features of Node:</h2>
          <ul className={` flex flex-col gap-5 list-decimal ${toggle === false ? "text-[#12372A]" : "text-white"} `} >
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Asynchronous and Event-Driven :</strong> Node.js uses an asynchronous, event-driven model, allowing for efficient handling of multiple connections simultaneously</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Non-Blocking I/O :</strong> Node.js's non-blocking I/O model ensures that threads are not blocked by input/output operations, making it highly scalable.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>JavaScript on the Server : </strong> Node.js enables developers to write server-side code in JavaScript, leveraging the language's versatility.</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Modules and Packages :</strong> Node.js has a vast ecosystem of modules and packages, making it easy to extend functionality..</p>
            </li>
            <li>
              <p className={` text-justify text-md leading-6 ${toggle === false ? "text-[#436860]" : "text-slate-200"} `} ><strong>Cross-Platform :</strong> Node.js runs on Windows, macOS, and Linux, making it a versatile choice</p>
            </li>
          </ul>
          </div>
</div>
    </div>
  )
}

export default NodeJs