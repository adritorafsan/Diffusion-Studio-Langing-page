import React from 'react'
import SpeedBox from '../SubComponents/SpeedBox'

const CreativeSpeed = () => {
  return (
    <div className='flex flex-col gap-y-5 justify-center items-center mt-40 mb-2'>
        <div className='flex flex-col justify-center items-center text-center gap-y-5'>
            <h1 className='text-4xl  font-primary text-center font-normal text-primary'>Built for creative speed.</h1>
            <p className='text-md font-primary max-w-[55%] font-normal text-secondary text-center'>Your ideas shouldn't wait. From first frame to final export, nothing gets in the way.</p>
        </div>
        <div className='flex gap-x-3 mt-7'>
           <SpeedBox heading={"All in one"} text1={"Tool for everything"} text2={"Design, edit, animate, export"} />
           <SpeedBox heading={"<120ms"} text1={"canvas response"} text2={"Pan, zoom, and scrub"} />
           <SpeedBox heading={"4K"} text1={"Playback and export"} text2={"No proxies, no waiting"} />
           <SpeedBox heading={"60K+"} text1={"Creators and counting"} text2={"Across the globe"} />
        </div>
    </div>
  )
}

export default CreativeSpeed