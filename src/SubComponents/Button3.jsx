import { FaArrowRight } from "react-icons/fa6";


const Button3 = ({ text }) => {
  return (
    <button className='text-sm font-primary text-[#fa413e] hover:text-[#fa413e]/80 cursor-pointer group space-x-1.5 flex items-center '><span>{text}</span> <FaArrowRight className=" group-hover:translate-x-1 transform transition-transform ease-in-out duration-200" /></button>
  )
}

export default Button3