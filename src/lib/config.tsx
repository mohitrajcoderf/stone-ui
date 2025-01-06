export const BLUR_FADE_DEALY = 0.15;

export const siteConfig = {
    name: "Stone UI",
    description: "Build better apps faster with Stone UI",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
    links: {
        email: "support@stone.ui",
        twitter: "https://twitter.com/mohitraj2546",
        discord: "https://discord.gg/",
        github: "https://github.com/mohitrajcoderf/stone-ui",
        instagram: "https://instagram.com/thestone.ui/",
},
    header: [
        {
            href: "/docs",
            label: "Docs",
        },
        {
            href: "/docs/",
            label: "Components",
        },
        {
            href: "/blog",
            label: "Blog",
        },
    ],
    pricing: [
        {
            name: "BASIC",
            href: "#",
            price: "$29",
            period: "month",
            yearlyPrice: "$26",
            features: [
                "1 User",
                "5GB Storage",
                "Basic Support",
                "Limited API Access",
                "Standard Analytics",
            ],
            description: "Perfect for individuals and small projects",
            buttonText: "Subscribe",
            isPopular: false,
        },
        {
            name: "PRO",
            href: "#",
            price: "$49",
            period: "month",
            yearlyPrice: "$40",
            features: [
                "5 Users",
                "50GB Storage",
                "Priority Support",
                "Full API Access",
                "Advanced Analytics",
            ],
            description: "Ideal for growing businesses and teams",
            buttonText: "Subscribe",
            isPopular: true,
        },
        {
            name: "ENTERPRISE",
            href: "#",
            price: "$99",
            period: "month",
            yearlyPrice: "$82",
            features: [
                "Unlimited Users",
                "500GB Storage",
                "24/7 Premium Support",
                "Custom Integrations",
                "AI-Powered Insights",
            ],
            description: "For large-scale operations and high-volume users",
            buttonText: "Subscribe",
            isPopular: false,
        },
    ],
};

export type SiteConfig = typeof siteConfig;