import React from 'react'
import ResumeImg from '../Images/Sahil Singh Resume.jpg'

function Resume() {
  return (
    <>
        <div className='w-full h-screen bg-neutral-200 flex justify-center items-center'>
            <img 
            src={ResumeImg} 
            alt="Resume" 
            className='w-[90%] md:w-[50%] lg:w-[40%] h-[95%] rounded-xl hover:scale-110 duration-500'
            />
        </div>
    </>
  )
}

export default Resume
