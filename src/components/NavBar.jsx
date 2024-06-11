import React from 'react'
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className='flex items-center gap-[10vh] bg-transparent py-[2%] text-white'>
        <div className='flex gap-[10vh] items-center justify-center w-[40%] text-4xl'>
            {/* <IoMenu color='white' size={60}/> */}
            {/* <h1>Benefits</h1> */}
        </div>
        <img src='images/fitLoupe.png' className='self-center w-[50%] lg:w-[20%]' />
        <div className='flex gap-[10vh] items-center justify-center w-[40%] text-4xl'>
            {/* <h1>Policy</h1> */}
            
        </div>
    </div>
  )
}
