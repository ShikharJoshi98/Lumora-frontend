import { PriceCard } from "../components/PriceCard"
import { aboutData, pricingPlans } from "../constants/LandingPageData"

export function LandingPage() {
    return (
        <section className="relative text-center px-6 py-24 mt-20 overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold max-w-3xl bg-linear-to-b from-white to-neutral-500 bg-clip-text text-transparent mx-auto">
                Automate Your Work With <span className="bg-linear-to-b from-blue-500 to-blue-500/50 bg-clip-text text-transparent">Lumora.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-400 mx-auto text-lg leading-relaxed">
                Lumora helps teams automate workflows, eliminate repetitive tasks,
                and focus on what actually matters.
            </p>
            <div className="flex gap-4 mt-10 flex-wrap justify-center">
                <button className="px-8 py-3 font-semibold rounded-xl bg-white text-zinc-800 hover:bg-white/80 transition-all text-lg duration-300 shadow-lg">
                    Start for Free
                </button>
                <button className="px-8 py-3 rounded-xl border font-semibold border-neutral-700 text-white hover:bg-neutral-900 transition-all text-lg duration-300">
                    View Templates
                </button>
            </div>

            <div className="relative mt-24 flex justify-center px-6">
                <div className="absolute -top-20 h-125 w-225 bg-blue-500/40 blur-[160px] rounded-full" />
                <div className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-white/0 p-3 shadow-2xl backdrop-blur-xl">
                    <img
                        src="/lumora-banner.png"
                        alt="Lumora workflow automation dashboard"
                        className="w-full rounded-2xl shadow-xl"
                    />
                </div>
            </div>

            <section className="mt-32 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {
                        aboutData.map((aboutItem, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
                                <h3 className="text-xl font-semibold text-white">
                                    {aboutItem.title}
                                </h3>
                                <p className="mt-4 text-neutral-400 leading-relaxed">
                                    {aboutItem.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="relative max-w-6xl mx-auto px-6 mt-40">
                <div className="absolute inset-0 flex justify-center">
                    <div className="w-175 h-100 bg-blue-500/20 blur-[140px] rounded-full"></div>
                </div>
                <div className="relative w-full mx-auto rounded-3xl bg-linear-to-r border border-gray-500/60 from-gray-500/20 via-gray-700/20 to-black backdrop-blur-xl p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                            Automate your workflows with <span className="text-neutral-300">Lumora</span>
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
                        <button className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 cursor-pointer">
                            Start for free
                        </button>
                    </div>
                </div>
            </section>

            <section className="mt-28 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        Choose the plan that fits your workflow automation needs.
                        Upgrade anytime as your team grows.
                    </p>
                    <section className="mt-16">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                            {pricingPlans.map((plan, index) => (
                                <PriceCard key={index} plan={plan} />
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}