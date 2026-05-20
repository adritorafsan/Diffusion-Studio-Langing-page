import React from 'react'

const SpeedBox = ({ heading, text1, text2 }) => {
    return (
        <div className='flex flex-col justify-between p-6 rounded-lg bg-secondary/20 h-[250px] w-[300px]'>
            <p className='text-primary font-primary text-4xl '>{heading}</p>
            <div className='space-y-.5'>
                <p className='text-md text-primary/90 font-primary'>{text1}</p>
                <p className='text-md font-primary text-secondary'>{text2}</p>
            </div>
        </div>
    )
}

export default SpeedBox