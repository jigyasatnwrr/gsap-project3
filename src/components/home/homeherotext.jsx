import React from 'react'
import Video from './video'
const Homeherotext = () => {
  return (
    <div className='font-[font1] text-[9vw] uppercase leading-[8.5vw] pt-3 text-centre '>
      <div className='flex items-center justify-center'>
        L'étincelle
      </div>
      <div className=' flex items-center justify-center'>
        qui 
        <div className='h-[7vw] w-[17vw] rounded-full overflow-hidden '> 
            <Video/>
        </div>
        génère
      </div>
      <div className='flex items-center justify-center'>
        la  créativité
      </div>
    </div>
  )
}

export default Homeherotext
