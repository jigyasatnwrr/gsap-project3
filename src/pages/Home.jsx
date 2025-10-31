import React from 'react'
import Video from '../components/home/video'
import Homebottomtext from '../components/home/homebottomtext'
import Homeherotext from '../components/home/homeherotext'
const home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
          <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
          <Homeherotext/>
          <Homebottomtext/>

      </div>
    </div>
  )
}

export default home
