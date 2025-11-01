import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';


const Homebottomtext = () => {
  return (
    <div className="font-[font2] flex items-end justify-center gap-4 h-screen pb-10">
      <div className="text-[6vw] leading-[5vw] border-4 border-white rounded-full px-8 pt-5 uppercase hover:border-[#D3FD50]  hover:text-[#D3FD50]">
        <Link className="text-[6vw]" to="/agence">Agence</Link>
      </div>
      <div className="text-[6vw] leading-[5vw] border-4 border-white rounded-full px-8 pt-5 uppercase  hover:border-[#D3FD50]  hover:text-[#D3FD50]">
        <Link className="text-[6vw]" to="/projects">Projects</Link>
      </div>
    </div>
  )
}

export default Homebottomtext
