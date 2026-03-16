import { useState } from "react";
import { LuX } from "react-icons/lu";

export function AuthModal({ onClose }) {
    const [isAuth, setAuth] = useState('signIn');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-10 bg-black/70 backdrop-blur-sm">
            <div className="relative w-225 rounded-2xl overflow-hidden border border-white/10 bg-[#0b0f17] shadow-2xl flex">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white"
                >
                    <LuX size={18} />
                </button>
                <div className="w-1/2 p-10 bg-black hidden md:flex flex-col justify-center">
                    <img
                        src='/Lumora-logo-1.png'
                        alt='Lumora logo'
                        className="w-20 sm:w-26 cursor-pointer"
                    />
                    <h2 className="text-3xl mt-8 font-semibold text-white">
                        Automate Everything.
                    </h2>
                    <p className="text-blue-400 text-xl font-semibold mt-2">
                        Smarter.
                    </p>
                    <p className="text-neutral-400 mt-6 text-sm">
                        Join thousands of developers building the future of workflow
                        automation with Lumora AI superpowers.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                        <li>✓ Free forever plan available</li>
                        <li>✓ No credit card required</li>
                        <li>✓ Setup in 2 minutes</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-start">
                    <p className="text-neutral-400 text-sm mt-1">
                        Sign in to your account to continue
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => setAuth('signIn')} className={`px-6 py-2 ${isAuth === 'signIn' ? 'bg-blue-500/80 text-white rounded-lg' : 'text-neutral-400'} text-sm font-medium`}>
                            Sign In
                        </button>
                        <button onClick={() => setAuth('register')} className={`px-6 py-2 ${isAuth === 'register' ? 'bg-blue-500/80 text-white rounded-lg' : 'text-neutral-400'} text-sm`}>
                            Register
                        </button>
                    </div>
                    {
                        isAuth === 'signIn' &&
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="mt-6 w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="mt-4 w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
                            />
                            <div className="flex justify-between items-center w-full mt-3 text-sm text-neutral-400">
                                <button className="text-blue-400 hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            <button className="mt-6 w-full cursor-pointer py-3 bg-linear-to-r from-blue-400 to-blue-700 rounded-lg font-medium">
                                Sign In →
                            </button>
                            <p className="text-sm text-neutral-400 mt-4 text-center">
                                Don't have an account?{" "}
                                <span className="text-blue-400 cursor-pointer">
                                    Sign up for free
                                </span>
                            </p>
                        </div>}
                </div>
            </div>
        </div>
    );
}
