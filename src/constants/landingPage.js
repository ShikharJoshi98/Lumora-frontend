import { LuBot, LuChartBar, LuClock3, LuPuzzle, LuShieldCheck, LuZap } from "react-icons/lu";

export const features = [
    {
        icon: LuZap,
        title: "Visual Workflow Builder",
        description:
            "Drag, drop, and connect. Build complex workflows visually—no code needed.",
    },
    {
        icon: LuPuzzle,
        title: "Favorite Tool Connection",
        description:
            "Integrate seamlessly with tools like Slack, Notion, Google Drive, Discord, and more.",
    },
    {
        icon: LuBot,
        title: "AI-Powered Automation",
        description:
            "Let AI help you build, optimize, and scale your workflows.",
    },
    {
        icon: LuClock3,
        title: "Advanced Scheduling",
        description:
            "Run workflows on a schedule, in real-time, or based on events.",
    }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    subtitle: "No credit card required",
    description: "Everything you need to start automating.",
    buttonText: "Start building for free",
    features: [
      "Unlimited workflows",
      "10,000 automation runs",
      "3 active workflows",
      "Slack & Discord integrations",
      "AI workflow actions",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    subtitle: "Per month",
    description: "Advanced automation for growing teams.",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited workflows",
      "100,000 automation runs",
      "Unlimited active workflows",
      "All integrations",
      "Advanced AI actions",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "$99",
    subtitle: "Per month",
    description: "Powerful automation for large organizations.",
    buttonText: "Contact sales",
    features: [
      "Unlimited automation runs",
      "Unlimited workflows",
      "Custom integrations",
      "Advanced security",
      "Dedicated support",
      "Team management"
    ]
  }
];