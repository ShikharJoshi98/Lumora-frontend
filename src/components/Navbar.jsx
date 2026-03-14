import { IoMenu } from "react-icons/io5";
import { homeNav } from "../constants/NavbarData";

export function Navbar() {
    return (
        <header className="p-2 bg-black">
            <nav className="bg-gray-800 flex items-center justify-between py-3 px-8 backdrop-blur-lg rounded-full">
                <img
                    src='/Lumora-logo-1.png'
                    alt='Lumora logo'
                    className="w-20 sm:w-26 cursor-pointer"
                />
                <ul className="sm:flex items-center hidden gap-12 text-sm text-white list-none">
                    {
                        homeNav.map((navItem, index) => (
                            <li key={index} className="cursor-pointer text-white/60 hover:text-white font-semibold">
                                {navItem.title}
                            </li>
                        ))
                    }
                </ul>
                <aside className="flex items-center gap-2">
                    <button
                        href="/dashboard"
                        className="relative inline-flex h-10 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Get Started
                        </span>
                    </button>
                    <IoMenu className="text-white text-xl sm:hidden block" />
                </aside>
            </nav>
        </header>
    )
}