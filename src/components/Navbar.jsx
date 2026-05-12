import { LuMenu } from "react-icons/lu";
import { homeNav } from "../constants/NavbarData";

function Navbar() {
    return (
        <nav className="bg-linear-to-b from-[#0a0315] to-[#0b0318]  w-full">
            <aside className="max-w-7xl px-3 py-5 sm:px-5 mx-auto flex items-center justify-between">
                <img src="/Lumora-logo-1.png" alt="Lumora Logo" className="w-24 sm:w-32" />
                <ul className="hidden md:flex items-center gap-16 lg:gap-24">
                    {
                        homeNav.map((navItem, index) => (
                            <li key={index} className="text-sm hover:text-violet-400 font-medium transition-all duration-300 cursor-pointer text-white/80">{navItem.title}</li>
                        ))
                    }
                </ul>
                <div className="flex items-center gap-3">
                    <button className="bg-violet-500/10 py-1 sm:py-2 px-2 sm:px-4 cursor-pointer hover:bg-violet-500/15 rounded-xl text-violet-400 text-sm sm:text-base font-semibold border-2 border-violet-500">Get Started</button>
                    <LuMenu className="block md:hidden text-violet-400 text-lg" />
                </div>
            </aside>
        </nav>
    )
}

export default Navbar;