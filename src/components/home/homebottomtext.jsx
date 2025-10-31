import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Homebottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 h-screen'>
      <Link className=' text-[6vw] leading-[5vw] border-5 border-white rounded-full px-8 pt-5 uppercase'>Work</Link>
      <Link className=' text-[6vw] leading-[5vw] border-5 border-white rounded-full px-8 pt-5 uppercase'>Agency</Link>
    </div>
  )
}

export default Homebottomtext
