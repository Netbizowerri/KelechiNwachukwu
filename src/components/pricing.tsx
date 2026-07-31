import { Rocket, Layers, Database, ShoppingCart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

interface PriceLine {
    amount: string;
    note: string;
}

interface PriceRow {
    label?: string;
    lines: PriceLine[];
}

interface PricingTier {
    icon: React.ReactNode;
    name: string;
    bestFor: string;
    whatYouGet: string;
    prices: PriceRow[];
    samples: { label: string; url: string }[];
    footnote?: string;
    featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
    {
        icon: <Rocket className="h-6 w-6" />,
        name: "Landing Page",
        bestFor: "Best for single products, event signups, lead generation, or direct order bookings.",
        whatYouGet: "A high-converting single-page website with a dedicated contact/order form.",
        prices: [
            {
                lines: [
                    { amount: "₦50,000", note: "with .com.ng domain" },
                    { amount: "₦60,000", note: "with .com domain" },
                ],
            },
        ],
        samples: [
            { label: "CMIMPA Cares", url: "https://cmimpaafrica-edu.com.ng/cmimpa-cares" },
            { label: "Moba Taxi", url: "https://mobataxi.com" },
        ],
    },
    {
        icon: <Layers className="h-6 w-6" />,
        name: "Multi-Page Static Website",
        bestFor: "Best for corporate entities, engineering firms, and service providers looking to showcase detailed company profiles and portfolios.",
        whatYouGet: "A multi-page website with space for extensive content. Note: Content is static (developer-managed updates).",
        prices: [
            {
                lines: [
                    { amount: "₦70,000", note: "with .com.ng domain" },
                    { amount: "₦80,000", note: "with .com, .ng, or .org domain" },
                ],
            },
        ],
        samples: [
            { label: "Akat Engineering", url: "https://akatengineering.com.ng" },
            { label: "Hated But Great", url: "https://hatedbutgreat.com" },
            { label: "Nextoria Health", url: "https://nextoriahealth.com" },
        ],
    },
    {
        icon: <Database className="h-6 w-6" />,
        name: "Dynamic Web Application",
        bestFor: "Best for hotels, real estate agencies, booking management systems, or custom platforms requiring content management.",
        whatYouGet: "Full-stack dynamic web app featuring a secure admin dashboard, authentication, database, and operational control to update dynamic site content.",
        prices: [
            {
                lines: [
                    { amount: "₦100,000", note: "Single Admin Login included, .com domain" },
                ],
            },
        ],
        footnote: "Need multi-user role access? Pricing is determined by project scope.",
        samples: [
            { label: "Alpha Davis Real Estate", url: "https://alphadavisrealestate.com" },
        ],
    },
    {
        icon: <ShoppingCart className="h-6 w-6" />,
        name: "E-Commerce Web Application",
        bestFor: "Best for online stores needing inventory management, payment integration, and product organization.",
        whatYouGet: "An online store built on dynamic web application architecture, complete with an admin inventory dashboard to add, edit, or remove products and manage categories.",
        prices: [
            {
                label: "Starter Store (Up to 15 Products)",
                lines: [
                    { amount: "₦80,000", note: ".com.ng" },
                    { amount: "₦90,000", note: ".com" },
                ],
            },
            {
                label: "Standard Store (Up to 50 Products)",
                lines: [
                    { amount: "₦120,000", note: ".com + full product management system" },
                ],
            },
            {
                label: "Custom Enterprise Store (50+ Products / Multi-Vendor)",
                lines: [
                    { amount: "Quote", note: "based on scope" },
                ],
            },
        ],
        samples: [
            { label: "Bulk Cell", url: "https://bulkcell.com.ng" },
            { label: "Saria Perfume", url: "https://sariaperfume.com" },
        ],
        featured: true,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="section-padding">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
                    <Reveal>
                        <p className="eyebrow">Pricing</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.1] text-balance">
                            Transparent Pricing For Your Website
                        </h2>
                        <p className="text-muted-foreground md:text-lg leading-relaxed">
                            Clear, honest pricing for Nigerian businesses. Every plan is tailored to deliver a fast,
                            responsive, SEO-ready website — pick what fits, then we build it for you.
                        </p>
                    </Reveal>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
                    {pricingTiers.map((tier, index) => (
                        <Reveal key={tier.name} delay={index * 80}>
                            <Card
                                className={`glass h-full flex flex-col transition-all duration-300 hover:-translate-y-1 relative ${
                                    tier.featured
                                        ? "border-primary/50 shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_24px_60px_-24px_rgba(16,185,129,0.35)]"
                                        : "hover:border-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.2)]"
                                }`}
                            >
                                {tier.featured && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                                        Most Popular
                                    </span>
                                )}
                                <CardContent className="flex flex-col gap-5 p-6 pt-8">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/15 text-primary">
                                                {tier.icon}
                                            </span>
                                            <h3 className="font-semibold text-lg leading-tight">{tier.name}</h3>
                                        </div>
                                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tier.bestFor}</p>
                                        <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{tier.whatYouGet}</p>
                                    </div>

                                    <div className="flex-1">
                                        {tier.prices.map((row, i) => (
                                            <div key={i} className="mb-4">
                                                {row.label && (
                                                    <p className="text-xs font-medium uppercase tracking-wide text-accent mb-1.5">
                                                        {row.label}
                                                    </p>
                                                )}
                                                <div className="space-y-1.5">
                                                    {row.lines.map((line, j) => (
                                                        <div key={j} className="flex items-baseline justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                                                            <span className="text-xl font-bold tracking-tight text-primary">
                                                                {line.amount}
                                                            </span>
                                                            <span className="text-right text-xs text-muted-foreground">
                                                                {line.note}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        {tier.footnote && (
                                            <p className="text-xs text-muted-foreground italic leading-relaxed">{tier.footnote}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                            Live Samples
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {tier.samples.map((sample) => (
                                                <a
                                                    key={sample.url}
                                                    href={sample.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                                                >
                                                    {sample.label}
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href="#contact"
                                        className={`mt-auto inline-flex h-10 items-center justify-center rounded-lg text-sm font-semibold transition-all active:scale-[0.98] ${
                                            tier.featured
                                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                                                : "border border-primary/30 text-primary hover:bg-primary/10"
                                        }`}
                                    >
                                        Get Started
                                    </a>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={150}>
                    <p className="mt-10 text-center text-sm text-muted-foreground">
                        Need something custom or a multi-user role access system?{" "}
                        <a href="#contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                            Request a free quote
                        </a>{" "}
                        and I'll get back to you.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
