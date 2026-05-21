import { GiMoebiusTrefoil } from "react-icons/gi";
import Button1 from "../SubComponents/Button1";
import { useEffect, useState } from "react";



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const Navlinks=["pricing","changelog","contact"];
  return (
    <div className={`flex items-center py-5 px-2 justify-between border-b border-b-secondary/30 sticky top-0 shadow-2xl backdrop-blur-xl z-50 ${scrolled ? "bg-secondary/25 rounded-2xl" : "bg-transparent rounded-none"} transition-colors duration-300 ease-in-out`}>
        <div onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-x-1.5 cursor-pointer">
            <GiMoebiusTrefoil className="text-xl text-primary" />
            <h1 className="text-xl text-primary font-primary">Diffusion Studio</h1>
        </div>
        <div className="flex gap-x-5 items-center ">
            {Navlinks.map((item,index)=>{
                return <ul className="flex gap-x-2.5 items-center" key={index}>
                    <li className="text-lg cursor-pointer font-primary text-secondary hover:text-primary transform duration-200 ease-in transition-transform hover:scale-102">{item}</li>
                </ul>
            })}
        </div>
        <div className="flex items-center gap-x-3.5">
            <button className="text-lg cursor-pointer font-primary text-secondary hover:text-primary transform duration-300 ease-in transition-transform hover:scale-102 px-2 py-1  rounded-xl hover:border border-primary">sign up</button>
            <Button1 text={"open in Browser"} textcolor={"primary"}/>
        </div>
    </div>
  )
}

export default Navbar