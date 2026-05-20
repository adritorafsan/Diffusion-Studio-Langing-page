import React from 'react'

const Button1 = ({text,textcolor}) => {
  return (
   <button className={`text-lg px-3 py-1.5 text-center text-${textcolor} cursor-pointer border-none rounded-3xl bg-secondary/20 hover:bg-secondary/30 hover:scale-102 transition-all duration-100 ease-in`}>{text}</button>
  )
}

export default Button1