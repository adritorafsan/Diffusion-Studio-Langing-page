import React from 'react'

const Button2 = ({text}) => {
  return (
    <button className={`text-lg  w-fit px-4 py-2 text-center text-black cursor-pointer border-none rounded-3xl bg-primary/95 hover:bg-primary/93 hover:scale-102 transition-all duration-100 ease-in`}>{text}</button>
  )
}

export default Button2