"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { pricingTiers } from "@/components/pricing";
import { useBookService } from "@/components/book-service";
import { Check, CalendarClock, Home, Tag, FileText } from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80;
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

const tabClass = (active: boolean) =>
  `flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-1.5 transition-all active:scale-95 ${
    active
      ? "bg-primary/15 text-primary shadow-[inset_0_0_0_1px_rgba(16,185,129,0.3)]"
      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
  }`;

const terms: { title: string; body: string; divider?: boolean }[] = [
  {
    title: "1. Acceptance",
    body: "By engaging Kelechi Nwachukwu to design, build or maintain your website or web application, you agree to these Terms of Service. Please read them carefully before asking us to begin work.",
  },
  {
    title: "2. Demo-First, No-Risk Process",
    body: "You get to see your website design before making any payment. Once all required assets are submitted, we design and develop a fully functional demo and share it with you via a temporary preview link. The project duration at this stage is approximately 2 days. No payment is required to see your demo.",
  },
  {
    title: "3. Payments & No Refund Policy",
    body: "Project cost is paid in two installments: a 50% down payment (e.g. ₦50,000) and a 50% balance. The balance is due before deployment and handover. All payments are final and non-refundable.\n\nYou are assumed to have the funds ready before telling us to proceed with the demo. Committing to the demo process without the means to complete the project is an abuse of our workflow; we reserve the right to terminate the engagement in such cases.\n\nProject payment includes domain and hosting for one (1) year.",
  },
  {
    title: "4. Timeline & Feedback Windows",
    body: "When a demo is submitted, you have one (1) week to review it and provide feedback on the edits you want.\n\nAfter the first payment and once the edits are completed, you again have one (1) week to review the revised demo and give your final approval.\n\nIf you return long after an edited demo has been completed, the balance must be paid in full before any further work, deployment or handover continues.",
  },
  {
    title: "5. Demo Availability",
    body: "Failure to provide feedback within the stated windows gives us the right to disconnect the demo (being a Vercel deployment). Reactivation is at our discretion and subject to the terms above.",
  },
  {
    title: "6. Online Payment Integration",
    body: "If you provide your Paystack verification before the project is completed, payment connection is free.\n\nIf verification is provided only after the project has been completed due to delays on your side, an additional fee of ₦20,000 applies.",
  },
  {
    title: "7. Domain, Hosting & Technology",
    body: "Projects are built on React.js, Vite, Node.js, Tailwind CSS and Firebase. Domain and hosting for the project are included for one (1) year as part of your payment.",
  },
  {
    title: "8. Client Responsibilities & Assets",
    body: "To begin work you must submit all required assets: proposed domain name, business name, contact details, social media links, physical address, business logo, and a comprehensive business profile (overview, mission & vision, management details, services, products with images, testimonials, banners and videos).\n\nA new Gmail account created specifically for the project must be provided (login details sent after creation) — this is used to set up your GitHub account for the full website backup.\n\nIf you don't have a logo, a professional one can be created for ₦5,000. Timely submission of all assets ensures fast delivery; delays may affect the project timeline.",
  },
  {
    title: "9. What You Get",
    body: "Super-fast, highly secure website; SSL certificate for secure browsing; advanced forms with booking/order systems; WhatsApp chat integration; social media link integration; Google Search Console setup; and FREE maintenance and minor updates (address changes, phone lines, social links).",
  },
  {
    title: "10. Intellectual Property",
    body: "Upon full payment, you own the final deliverables. We retain the right to showcase completed work in our portfolio unless agreed otherwise.",
  },
  {
    title: "11. Confidentiality",
    body: "Your business information, project data and credentials are kept confidential and used only to complete your project. They are never shared with third parties.",
  },
  {
    title: "Returning Clients",
    divider: true,
    body: "1. Returning clients will be expected to first make a payment before we create the demo. So for returning clients, a first payment of 50% of the project cost will be expected before project is commenced.\n\n2. After demo is submitted, all needed changes will be carried out. Clients will be expected to go through the website and make highlights of needed changes they require sitewide. These changes will be carried out.\n\n3. After re-submission, if the demo is good to go, a balance payment will be required before website is taken live.",
  },
  {
    title: "Privacy Policy",
    divider: true,
    body: "This privacy policy explains how Kelechi Nwachukwu collects, uses, protects and handles your information when you use this website, book a project, or communicate with us.",
  },
  {
    title: "12. Information We Collect",
    body: "We collect only the information you voluntarily provide, including your name, email address, phone/WhatsApp number, business details and project information submitted through our contact, booking or order forms.",
  },
  {
    title: "13. How We Use Your Information",
    body: "Your information is used solely to respond to enquiries, prepare quotes, build and deliver your website, provide support and maintenance, and improve our services. We do not use your information for any unrelated purpose.",
  },
  {
    title: "14. Data Storage & Security",
    body: "Project data is stored securely on the platforms we use to build and deliver your website (e.g. Vercel, Firebase, GitHub, Gmail). We take reasonable measures to protect your data from unauthorised access, alteration or loss.",
  },
  {
    title: "15. Data Sharing",
    body: "We do not sell, rent or trade your personal information. Information is only shared with the service providers required to complete your project (hosting, domain, payment and communication platforms) and only to the extent necessary.",
  },
  {
    title: "16. Cookies & Analytics",
    body: "Our website may use basic analytics to understand traffic and improve performance. We do not use invasive tracking or sell your browsing data.",
  },
  {
    title: "17. Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us. Where a project is in progress, some information may be retained until the project is completed and handed over.",
  },
  {
    title: "18. Contact",
    body: "Questions about these terms or this privacy policy can be sent through the contact section of this website or via WhatsApp.",
  },
];

function PricingDialog() {
  const [open, setOpen] = useState(false);
  const { openBookService } = useBookService();

  function handleGetStarted() {
    setOpen(false);
    setTimeout(() => openBookService(), 200);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={tabClass(false)}>
        <Tag className="h-5 w-5" />
        <span className="text-[10px] font-medium">Pricing</span>
      </DialogTrigger>
      <DialogContent className="glass flex max-h-[80vh] w-[calc(100%-2rem)] flex-col overflow-hidden border-white/10 p-0 sm:max-w-3xl">
        <DialogHeader className="shrink-0 border-b border-white/10 px-6 py-5 text-left">
          <p className="eyebrow">Pricing</p>
          <DialogTitle className="text-xl font-bold tracking-tight">
            Transparent Pricing
          </DialogTitle>
          <DialogDescription>
            Clear, honest pricing for Nigerian businesses — pick what fits, then we build it.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-5 transition-colors ${
                  tier.featured
                    ? "border-primary/50 bg-primary/5 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground shadow-lg">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/15 text-primary">
                    {tier.icon}
                  </span>
                  <h3 className="font-semibold leading-tight">{tier.name}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{tier.bestFor}</p>

                <div className="mt-4 space-y-3">
                  {tier.prices.map((row, i) => (
                    <div key={i}>
                      {row.label && (
                        <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-accent">
                          {row.label}
                        </p>
                      )}
                      <div className="space-y-1.5">
                        {row.lines.map((line, j) => (
                          <div
                            key={j}
                            className="flex items-baseline justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                          >
                            <span className="text-lg font-bold tracking-tight text-primary">
                              {line.amount}
                            </span>
                            <span className="text-right text-xs text-muted-foreground">{line.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {tier.footnote && (
                  <p className="mt-3 text-[11px] italic leading-relaxed text-muted-foreground">
                    {tier.footnote}
                  </p>
                )}

                {tier.samples.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[11px] text-muted-foreground">
                      {tier.samples.map((s) => s.label).join(" · ")}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleGetStarted();
            }}
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 active:scale-[0.99]"
          >
            Get Started
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function StickyFooter() {
  const [activeId, setActiveId] = useState("home");
  const { openBookService } = useBookService();

  useEffect(() => {
    const sections = ["home", "pricing"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-background/85 shadow-[0_-16px_50px_-12px_rgba(2,6,23,0.9)] backdrop-blur-2xl">
      <nav
        aria-label="Footer"
        className="relative flex w-full items-center justify-between gap-2 px-3 py-1.5 sm:px-6"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        />

        <button
          onClick={() => scrollToId("home")}
          className={tabClass(activeId === "home")}
          aria-current={activeId === "home" ? "true" : undefined}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        <button
          onClick={() => openBookService()}
          className={tabClass(false)}
          aria-haspopup="dialog"
        >
          <CalendarClock className="h-5 w-5" />
          <span className="text-[10px] font-medium">Book a service</span>
        </button>

        <PricingDialog />

        <Dialog>
          <DialogTrigger className={tabClass(false)}>
            <FileText className="h-5 w-5" />
            <span className="text-[10px] font-medium">Terms</span>
          </DialogTrigger>
          <DialogContent className="glass flex max-h-[80vh] w-[calc(100%-2rem)] flex-col overflow-hidden border-white/10 p-0 sm:max-w-lg">
            <DialogHeader className="shrink-0 border-b border-white/10 px-6 py-5 text-left">
              <p className="eyebrow">Legals</p>
              <DialogTitle className="text-xl font-bold tracking-tight">
                Terms & Privacy Policy
              </DialogTitle>
              <DialogDescription>
                Last updated July 2026. By working with me, you agree to these terms and privacy practices.
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
              {terms.map((term) => (
                <div key={term.title} className={term.divider ? "border-t border-white/10 pt-5" : ""}>
                  <h4 className={`mb-1 text-sm font-semibold ${term.divider ? "text-foreground text-base" : "text-primary"}`}>
                    {term.title}
                  </h4>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{term.body}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </footer>
  );
}
