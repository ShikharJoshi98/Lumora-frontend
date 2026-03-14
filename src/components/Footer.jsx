import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex md:flex-row flex-col-reverse gap-8 md:gap-0 md:justify-between max-w-7xl px-12 mx-auto py-12">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 text-neutral-400">
                    <FaGithub className="hover:text-white cursor-pointer" />
                    <FaTwitter className="hover:text-white cursor-pointer" />
                    <FaLinkedin className="hover:text-white cursor-pointer" />
                </div>
                <div className="flex flex-wrap gap-8 text-sm text-neutral-400">
                    <a href="#" className="hover:text-white">Products</a>
                    <a href="#" className="hover:text-white">Pricing</a>
                    <a href="#" className="hover:text-white">Documentation</a>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                            ✓
                        </div>
                        <span className="hover:text-white cursor-pointer">
                            Created By Shikhar Joshi
                        </span>
                    </div>
                </div>
            </div>
            <img
                src='/Lumora-logo-1.png'
                alt='Lumora logo'
                className="w-26 object-contain h-auto cursor-pointer"
            />
        </footer>
    )
}