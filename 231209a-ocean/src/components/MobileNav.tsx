'use client'

import { NavLinks } from "@/constants/nav-links";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav(){
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);        
    }

    return(
        <div>
            <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
                {!isOpen ? <Menu/> : <X /> }
                
            </div>
            <figure className={`absolute right-2 origin-top top-20 
            ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-50 opacity-0 hidden"} 
            p-2 transition-all z-50`}>
                <nav className="flex flex-col bg-slate-800/90 p-2 rounded">
                    {NavLinks.map((link,index)=>(
                        <Link key={index} href='/' onClick={toggleMenu} className="cursor-pointer bg-slate-900 hover:bg-slate-700 transition-all duration-200 p-1 rounded mb-2">{link}</Link>
                    ))}
                </nav>
            </figure>
        </div>
    )
}