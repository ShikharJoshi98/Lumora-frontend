export function PriceCard({ plan }) {
    return (
        <div className="rounded-3xl hover:-translate-y-1 transition-all duration-300 border-2 border-white/10 bg-linear-to-b from-[#1c2430] to-[#0b0f17] p-8 shadow-xl">
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
            <button className="w-full mt-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 text-white font-medium hover:scale-[1.02] transition">
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
    );
}
