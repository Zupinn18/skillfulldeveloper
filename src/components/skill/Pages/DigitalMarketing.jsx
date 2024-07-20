import React from 'react'
import ComingImg from "../../../assets/coming.gif";

const DigitalMarketing = ({toggle}) => {
  return (
    <div className=' w-full h-full mb-[100px] flex flex-col font-poppins  ' >
        <div className=' flex justify-center items-center ' >
            <img src={ComingImg} className=' w-[30%] ' />
        </div>
    </div>
  )
}

export default DigitalMarketing