import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import PythonImg from "../../assets/skills/pythoni.jpg";
import NodeImg from "../../assets/skills/nodeskill.png";
import MernImg from "../../assets/skills/mern.jpg";
import fullImg from "../../assets/skills/rjs.png";
import AppImg from "../../assets/skills/appde.jpg";
import DigitalImg from "../../assets/skills/digital.jpg";
import { Link } from 'react-router-dom';

export default function CourseInfo({toggle}) {

    let courseData = [
        {
            name:"Python Developer",
            description:"Unlock Python for versatile programming.",
            path:'python',
            image:PythonImg
        },
        {
            name:"NodeJs Developer",
            description:"Build efficient servers with NodeJS.",
            path:'node',
            image:NodeImg
        },
        {
            name:"MERN Stack Developer",
            description:"Master M.E.R.N. for dynamic applications.",
            path:'mern',
            image:MernImg
        },
        {
            name:"Full Stack Developer",
            description:"Become proficient in full-stack development",
            path:'fullstack',
            image:fullImg
        },
        {
            name:"Application Developement",
            description:"Create powerful mobile applications seamlessly.",
            path:'application-developer',
            image:AppImg
        },
        {
          name:"Digital Marketing",
          description:"Excel in digital marketing strategies.",
          path:'digital-marketing',
          image:DigitalImg
      },
    ]

  return (
   <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `}  >

        <div className=' w-11/12 mx-auto flex flex-col gap-5 mt-6 mb-10 ' >
          <h2 className={`text-center text-xl sm:text-5xl font-extrabold uppercase ${toggle === false ? "text-[#12372A]" : "text-white"}`}>Courses Offered</h2>
          {/* ::Text */}
          <p className={` text-center text-lg leading-6 font-semibold ${toggle === false ? "text-[#436860]" : "text-[#fbfada]"} `}>
          Discover comprehensive courses on Skillful Developer for mastering essential coding skills.
          </p>

          <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 ' >
          {
            courseData?.map((course, index)=>( <Card sx={{ width: 320 }}>
                <div key={index} >
                  <Typography level="title-lg">{course.name}</Typography>
                  <Typography level="body-sm">{course.description}</Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                  >
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src={course.image}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <CardContent orientation="horizontal">
                  <Link to={`/course/${course.path}`} onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                  >
                    Explore
                  </Button>
                  </Link>
                </CardContent>
              </Card>))
        }
          </div>

        </div>


   </div>
  );
}
