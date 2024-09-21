import React, { useState } from 'react'
import LoginImg from "../../assets/logi.jpg";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
// import { useDispatch } from 'react-redux';
// import { login } from '../services/authAPI';

const LoginPage = ({ toggle }) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
    })}

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     dispatch(login(formData.email, formData.password, navigate))
    // }

//     const [accountType, setAccountType] = useState('User');

//   const handleToggleAdmin = (e) => {
//     e.preventDefault();
//         setAccountType('Admin');
//   };

//   const handleToggleUser = (e) => {
//     e.preventDefault();
//         setAccountType('User');
//   };

  return (
    <div className='w-11/12 h-full flex font-poppins flex-col md:flex-row mx-auto mt-[50px] mb-[100px] bg-white rounded-lg shadow-2xl  ' >
        {/* image */}
        <div className=' md:w-[70%] flex items-center justify-center relative ' >
            <img src={LoginImg} className=" rounded-tl-lg md:rounded-bl-lg rounded-tr-lg md:rounded-tr-[0px] " loading='lazy' alt='Side Image' />
            <p className=' gradient-img absolute md:text-4xl bottom-[25%] text-center rounded-md font-bold text-white px-6 py-4 uppercase ' >Welcome <br/> to our Classes...</p>
        </div>
        {/* <div className=" md:w-[70%] image">
        <div className="image__child">
            <img alt="img" className=' rounded-tl-lg md:rounded-bl-lg  rounded-tr-lg md:rounded-tr-[0px]' src={LoginImg} />
        </div>
        <div className="  absolute md:text-4xl bottom-[50%] font-bold text-white px-4 py-2 z-10 text-center uppercase ">Welcome to our Classes...</div>
        </div> */}
        {/* Content */}
        <div className='  md:w-6/12 mx-auto h-[100%] rounded-md flex flex-col px-8 py-8 ' >
            <p className={`text-[30px] font-bold text-green-500 `} >Welcome to Skillfull Developer</p>
            <h2 className={`font-bold text-md  font-poppins ${toggle === true ? "text-[#436860]" : "text-[#436860]"}`}
            >Login to your Account</h2>
            <div className='w-full h-[1px] bg-[#BFBFBF] mt-2 ' ></div>
            <form className='flex flex-col gap-2' >
            {/* <div className="flex p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                        className={`${accountType === "User"
                        ?"bg-black text-white" 
                        : "bg-transparent text-gray-600"}
                        py-2 px-5 rounded-full transition-all duration-200`}
                        onClick={handleToggleUser}
                    >
                        User
                </button>
                <button
                    className={`${accountType === "Admin"
                    ? "bg-black text-white"
                    : "bg-transparent text-gray-400"} 
                    py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={handleToggleAdmin}
                >
                    Admin
                </button>
            </div> */}
                <div className='flex flex-col gap-4 mt-5 ' >
                            <div>
                                <label htmlFor='email' >
                                    <p className={`text-md font-semibold text-richblack-5 mb-1 leading-[1.375rem] ${toggle === true ? "text-[#436860]" : "text-[#436860]"} `} >Email Address <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                    <input
                                        required
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Enter your email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-green-500"
                                    />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 mt-5 ' >
                            <div>
                                <label htmlFor='password' >
                                    <p className={`text-md font-semibold text-richblack-5 mb-1 leading-[1.375rem] ${toggle === true ? "text-[#436860]" : "text-[#436860]"}`} >Password <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                    <input
                                        required
                                        type='password'
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleInputChange}
                                        className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-green-500"
                                    />
                            </div>
                        </div>
                <div className=' mt-3 flex justify-end ' >
                    <Link to="/reset-password" className=' text-sm text-green-500 transition-all duration-200 hover:text-green-600 ' >
                        Forgot Password
                    </Link>
                </div>
             
                <button 
                className='bg-green-500 mt-3 font-semibold text-white px-1 py-3 rounded-md
                 hover:bg-green-600 transition-all duration-300' 
                >Login</button>
                <div className=' mt-3 ' >
                    <p className='text-sm text-[#436860] transition-all duration-200' >Don't have an account, <Link to="/" className='text-sm cursor-pointer transition-all duration-200 hover:text-green-600' >Register Now</Link> </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage