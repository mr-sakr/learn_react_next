import Logo from "@/components/Logo";
import { NavLinks } from "@/constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar(){
    return(
        <header className="fixed top-0 left-0 bg-slate-900/50 w-full backdrop-blur-md z-30">
            <div className="relative container py-6 flex justify-between">
                <Logo/>
                
                <nav className="hidden md:flex">
                    {NavLinks.map((link, index)=>(
                    <Link key={index} href={`/${link}`} className="px-2 capitalize text-sm font-semibold text-slate-200 tracking-wide">{link}</Link>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <MobileNav/>
            </div>
        </header>
    )
}