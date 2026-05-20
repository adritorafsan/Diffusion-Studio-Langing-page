import React from 'react'
import Button1 from '../SubComponents/Button1'
import Button2 from '../SubComponents/Button2'

const Create = () => {
  return (
    <div className='flex justify-between items-center bg-secondary/20 rounded-2xl px-12 mt-20 py-7'>
        <div>
            <p className='text-3xl text-primary font-primary '>Start creating with Diffusion Studio.</p>
        </div>
        <div className='flex gap-x-3'>
            
            <Button1 text={"sign up"} textcolor={'primary'} />
            <Button2 text={"open in browser"} />
        </div>
    </div>
  )
}

export default Create