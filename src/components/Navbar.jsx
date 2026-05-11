import { IoMenu } from "react-icons/io5";
import { homeNav } from "../constants/NavbarData";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

export function Navbar() {
    const [isAuthModal, setAuthModal] = useState(false);

    return (
        <header className="p-1 bg-black">
            <nav className="bg-gray-800/60 fixed z-10 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto top-2 flex items-center justify-between py-3 px-8 backdrop-blur-lg rounded-full">
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
                        onClick={() => setAuthModal(true)}
                        className="relative focus:outline-none inline-flex h-10 overflow-hidden rounded-full p-0.5"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#3B82F6_40%,#1D4ED8_60%,#93C5FD_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Get Started
                        </span>
                    </button>
                    <IoMenu className="text-white text-xl sm:hidden block" />
                </aside>
            </nav>
            {
                isAuthModal && <AuthModal onClose={() => setAuthModal(false)} />
            }
        </header>
    )
}