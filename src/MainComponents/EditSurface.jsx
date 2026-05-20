import React from 'react'
import Button3 from '../SubComponents/Button3'
import editimg from '../assets/editingsurface.png'
const EditSurface = () => {
  return (
    <div className='flex  justify-between mt-45 mb-2 px-10'>
        <div className='flex flex-col gap-y-4 flex-5 justify-end pl-2'>
            <p className=' uppercase text-md font-primary text-secondary'>Editing surface</p>
            <h1 className='text-primary text-2xl max-w-[55%] font-primary'>Explore on a canvas. Sequence on a timeline.</h1>
            <p className='text-secondary text-md max-w-[65%] font-primary'>Start with an infinite canvas, then edit on the timeline. Everything stays connected, so you can organize and iterate without losing visual context.</p>
            <Button3 text={"open in browser"}/>
        </div>
        <div className='pt-10 pl-10 flex-5 bg-linear-to-t flex items-end justify-end from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg'>
            <img className='w-[100%] rounded-lg' src={editimg} alt="Editing Surface" />
        </div>
    </div>
  )
}

export default EditSurface