import React from 'react'
import FormRefund from './FormRefund';


const RefundForm = ({toggle}) => {
  return (
    <div className={`w-full h-full flex flex-col font-poppins mb-10 `}  >
      <FormRefund toggle={toggle} />
    </div>
  )
}

export default RefundForm