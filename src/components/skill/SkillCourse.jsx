import * as React from 'react';
import "./SkillCourse.css";
import Blob from "../../assets/skill/blob.png";
import ReactImg from '../../assets/skill/React.png';
import MongoDB from '../../assets/skill/MongoDB.svg';
import Express from '../../assets/skill/Express.png';
import NodeJS from '../../assets/skill/NodeJs.svg';
import HTML from '../../assets/skill/HTML.png';
import CSS from '../../assets/skill/CSS.png';
import Tailwind from '../../assets/skill/Tailwind.png';
import BootStrap from '../../assets/skill/Bootstrap.svg';
import Git from '../../assets/skill/Git.svg';
import Github from '../../assets/skill/Github.svg';
import Redux from '../../assets/skill/Redux.svg';
import JS from '../../assets/skill/Javascript.svg';
import C from '../../assets/skill/C.png';
import Cplus from '../../assets/skill/C++.png';
import java from '../../assets/skill/java.png';
import postman from '../../assets/skill/postman.png';
import python from '../../assets/skill/python.png';
import sql from '../../assets/skill/mysql.png';

export default function SkillCourse() {

  return (
    <div>
    <section className='skill mb-10 ' id='skill' >

      <div className='skills font-poppins ' >
            <img className='blob-style  ' src={Blob} />
            <div className=' bg-white w-[180px] h-[190px] px-5 py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl ' >
              <img className='skills-logo   ' src={C} />
              <p>C - Programming</p>
            </div>
            <div className='bg-white px-5 w-[190px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo ' src={Cplus} />
              <p>C++ - Programming</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo object-cover ' src={java} />
              <p>Java</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={ReactImg} />
              <p>React Js</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={MongoDB} />
              <p>MongoDB</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={Express} />
              <p>Express Js</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={NodeJS} />
              <p>Node Js</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={sql} />
              <p>SQL</p>
            </div>
            <div className='bg-white px-5 w-[180px] object-cover h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={python} />
              <p>Python</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={HTML} />
              <p>HTML</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={CSS} />
              <p>CSS</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={JS} />
              <p>Javascript</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={Tailwind} />
              <p>Tailwind CSS</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={BootStrap} />
              <p>Bootstrap CSS</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] object-cover py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={postman} />
              <p>Postman</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={Git} />
              <p>Git</p>
            </div>

            <div className='bg-white px-5 w-[180px] h-[190px] object-cover py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={Github} />
              <p>Github</p>
            </div>
            <div className='bg-white px-5 w-[180px] h-[190px] py-3 rounded-md flex flex-col gap-4 items-center font-bold shadow-xl' >
              <img className='skills-logo' src={Redux} />
              <p>Redux</p>
            </div>

      </div>
    </section>
</div>
  );
}