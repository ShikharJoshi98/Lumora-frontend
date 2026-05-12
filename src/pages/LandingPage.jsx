import { BsArrowRight } from "react-icons/bs";
import { features, pricingPlans } from "../constants/landingPage";
import { FaDiscord, FaSlack } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function LandingPage() {
    return (
        <section className="overflow-hidden">
            <div className="py-10 sm:py-17 text-white w-full max-w-7xl mx-auto relative flex items-center justify-center px-4">
                <img src="/stars.png" alt="hero-star" className="absolute w-14 sm:w-20 left-0 sm:left-5 lg:left-30 top-0 sm:top-10" />
                <img src="/stars.png" alt="hero-star" className="absolute w-16 sm:w-20 right-3 sm:right-6 lg:right-30 bottom-14" />
                <div className="relative z-10 text-center">
                    <h1 className="text-[40px] sm:text-5xl flex flex-col md:text-6xl font-bold leading-tight tracking-tight">
                        <span className="text-white/80">Automate Your Work</span>
                        <span className="bg-linear-to-r from-violet-600 to-purple-400 bg-clip-text text-transparent">
                            With Lumora.
                        </span>
                    </h1>
                    <p className="mt-4 sm:mt-8 text-gray-300 text-xs sm:text-base leading-relaxed max-w-96 sm:max-w-xl mx-auto">
                        Lumora helps teams automate workflows, eliminate repetitive tasks, and focus on what actually matters.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button className="sm:px-8 px-4 py-3 sm:py-4 rounded-full bg-linear-to-r from-violet-600 to-purple-500 text-white text-sm sm:text-md font-medium cursor-pointer">
                            Get Started Now
                        </button>
                        <button className="sm:px-8 px-4 py-3 sm:py-4 text-sm sm:text-md rounded-full bg-[#1A1230] border border-purple-500/20 text-white font-medium cursor-pointer hover:bg-[#24183f]">
                            Try Tutorial Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl mt-14 mb-30 flex flex-col items-center">
                <h3 className="text-white font-medium text-lg text-center opacity-90">
                    Seamless App Integration
                </h3>
                <div className="flex items-center justify-center gap-16 mt-10 text-[#c8b7f5] text-5xl opacity-80">
                    <FaDiscord />
                    <FaSlack />
                    <SiGmail />
                </div>
            </div>

            <div className="mx-auto max-w-7xl mt-16 text-white/85">
                <div className="px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="max-w-5xl lg:max-w-lg">
                        <p className="text-violet-400 uppercase tracking-[0.2em] text-xs font-medium">
                            Built for speed. Designed to scale.
                        </p>
                        <h2 className="mt-5 text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight">
                            Everything you need
                            <br />
                            to automate, in one platform
                        </h2>
                        <p className="mt-6 text-gray-400 leading-relaxed">
                            Design, build, and ship automations faster with powerful
                            features built for modern teams.
                        </p>
                        <button className="mt-8 flex text-lg items-center gap-2 text-violet-400 hover:text-violet-300 transition cursor-pointer">
                            Explore all features
                            <BsArrowRight className="w-4 h-4" />
                        </button>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="group relative rounded-2xl border border-violet-500/10 bg-[#0B0218] p-6 hover:border-violet-500/30 transition">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_60%)]" />
                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20">
                                        <Icon className="w-7 h-7 text-violet-400" />
                                    </div>
                                    <div className="relative mt-5">
                                        <h3 className="font-semibold">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-30 max-w-7xl mx-auto relative px-6">
                <div className="absolute -top-20 h-125 w-225 bg-violet-500/25 blur-[160px] rounded-full" />
                <img src="/lumora-banner.png"
                    alt="Lumora workflow automation dashboard"
                    className="w-full max-w-4xl rounded-4xl border-6 border-[#392a63] shadow-2xl backdrop-blur-xl mx-auto" />
            </div>

            <div className="mt-28 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl flex gap-4 sm:flex-row flex-col justify-center font-semibold text-violet-500">
                        <span className="text-white">Simple, transparent</span>
                        <span>pricing</span>
                    </h2>
                    <p className="mt-8 text-neutral-400 max-w-xl mx-auto">
                        Choose the plan that fits your workflow automation needs.
                        Upgrade anytime as your team grows.
                    </p>
                    <div className="mt-16">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
                            {pricingPlans.map((plan, index) => (
                                <div key={index} className="rounded-3xl hover:-translate-y-1 transition-all duration-300 border-2 border-violet-500 bg-linear-to-b from-violet-400/5 to-violet-500/5 p-8 shadow-xl">
                                    <p className="text-neutral-400 text-sm">{plan.name}</p>
                                    <h3 className="text-4xl font-semibold text-white mt-2">
                                        {plan.price}
                                    </h3>
                                    <p className="text-neutral-400 mt-1 text-sm">
                                        {plan.subtitle}
                                    </p>
                                    <p className="text-neutral-300 mt-6">
                                        {plan.description}
                                    </p>
                                    <button className="w-full mt-6 py-3 rounded-xl bg-linear-to-r from-violet-500 to-purple-500 text-white font-medium cursor-pointer">
                                        {plan.buttonText}
                                    </button>
                                    <div className="border-t border-white/10 my-8"></div>
                                    <p className="text-neutral-400 text-sm mb-4">
                                        Included in {plan.name}:
                                    </p>
                                    <ul className="space-y-4 text-sm text-neutral-300">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-neutral-400">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 my-28">
                <div className="relative w-full mx-auto rounded-3xl border border-gray-500/60 bg-linear-to-r from-violet-500/15 to-[#0b0318] backdrop-blur-xl p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                            Automate your  <span className="text-violet-500">workflows with Lumora</span>
                        </h2>
                        <p className="mt-5 text-neutral-400">
                            Connect your favorite tools and create powerful automations in minutes.
                            Save time, eliminate repetitive tasks, and focus on what truly matters.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <p className="text-neutral-400 text-sm">
                            No credit card required
                        </p>
                        <button className="px-8 py-3 rounded-xl bg-white/10 text-white border border-white/30 font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer">
                            Start for free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;