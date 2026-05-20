import { GiMoebiusTrefoil } from "react-icons/gi";
import Button1 from "../SubComponents/Button1";


const Navbar = () => {
    const Navlinks=["pricing","changelog","contact"];
  return (
    <div className="flex items-center py-5 justify-between border-b border-b-secondary/30">
        <div className="flex items-center gap-x-1.5 cursor-pointer">
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