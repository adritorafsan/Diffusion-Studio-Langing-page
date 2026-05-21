import { GiMoebiusTrefoil } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { useState } from "react";


const Footer = () => {
    const [active, setActive] = useState("dark");

    const product = ['Home', 'Pricing']
    const resources = ['change log', 'Legacy Editor']
    const company = ['contact', 'Y combinator', 'crunchbase']
    const legal = ['privacy policy', 'terms of conditions']

    return (
        <div className="mt-50 mb-2">
            <div className="flex justify-between ">

                <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-x-1.5 cursor-pointer">
                        <GiMoebiusTrefoil className="text-xl text-primary" />
                        <h1 className="text-xl text-primary font-primary">Diffusion Studio</h1>
                    </div>
                    <p className="text-md text-secondary max-w-[60%]  ">Reimagining video editing for the web,built for speed and creativity in San Francisco, CA.</p>
                    <div className="flex items-center gap-x-1.5 ">
                        <FaGithub className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                        <FaYoutube className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                        <FaTiktok className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                        <FaLinkedin className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                        <FaInstagram className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                        <FaXTwitter className="hover:text-primary hover:scale-103 transition ease-in duration-200" />
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-x-13">
                    <ul className="flex flex-col items-center justify-center">
                        <h1 className="font-primary uppercase text-secondary text-xl font-medium mb-2.5">Product</h1>
                        {product.map((item, index) => {
                            return <li className="text-sm cursor-pointer text-secondary/60 mt-1.5 hover:text-secondary transition-all ease-in duration-200" key={index}>{item}</li>
                        })}
                    </ul>
                    <ul className="flex flex-col items-center justify-center">
                        <h1 className="font-primary uppercase text-secondary text-xl font-medium mb-2">Resources</h1>
                        {resources.map((item, index) => {
                            return <li className="text-sm text-secondary/60 mt-1.5 hover:text-secondary transition-all ease-in duration-200" key={index}>{item}</li>
                        })}
                    </ul>
                    <ul className="flex flex-col items-center justify-center mt-6">
                        <h1 className="font-primary uppercase text-secondary text-xl font-medium mb-2">Company</h1>
                        {company.map((item, index) => {
                            return <li className="text-sm cursor-pointer text-secondary/60 mt-1.5 hover:text-secondary transition-all ease-in duration-200" key={index}>{item}</li>
                        })}
                    </ul>
                    <ul className="flex flex-col items-center justify-center">
                        <h1 className="font-primary uppercase text-secondary text-xl font-medium mb-2">Legal</h1>
                        {legal.map((item, index) => {
                            return <li className="text-sm cursor-pointer text-secondary/60 mt-1.5 hover:text-secondary transition-all ease-in duration-200" key={index}>{item}</li>
                        })}
                    </ul>


                </div>
            </div>
            <div className=" mt-25 border-t border-t-primary/20 py-3 px-1 flex justify-between">
                <p className="text-sm text-secondary/60 text-center">Copyright © 2026 Diffusion Studio. All rights reserved.</p>
                <div className="flex gap-x-2.5 p-2 rounded-2xl bg-secondary/20">
                    <MdOutlineLightMode onClick={() => setActive("light")} className={`text-3xl cursor-pointer  transition ease-in duration-200  rounded-full p-1.5 ${active === "light" ? "bg-primary scale-103" : "bg-primary/40"}`} />

                    <FaMoon onClick={() => setActive("dark")} className={`text-3xl cursor-pointer  transition ease-in duration-200 ${active === "dark" ? "bg-primary" : "bg-primary/40 scale-103"} rounded-full p-1.5`} />

                    <RiComputerFill onClick={() => setActive("system")} className={`text-3xl cursor-pointer hover:scale-103 transition ease-in duration-200 ${active === "system" ? "bg-primary scale-103" : "bg-primary/40"} rounded-full p-1.5`} />
                </div>
            </div>
        </div>
    )
}

export default Footer