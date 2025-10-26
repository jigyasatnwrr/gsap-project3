import React from 'react'

const Video = () => {
  return (
    <div>
      <div className='h-full w-full'>
        <video className='h-full w-full object-cover'  autoPlay
        loop
        muted
        playsInline src="src\assets\69496b2d.mp4" ></video>
    </div>
    </div>
  )
}

export default Video
