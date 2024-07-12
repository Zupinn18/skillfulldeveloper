import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer';
import FormRefund from './FormRefund';


const RefundForm = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className={`w-full h-full flex flex-col font-poppins ${toggle === true ? "main" : "main-light"}  `}  >
      <Header  toggle={toggle} setToggle={setToggle}  />
      <FormRefund toggle={toggle} setToggle={setToggle} />
      <Footer toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default RefundForm