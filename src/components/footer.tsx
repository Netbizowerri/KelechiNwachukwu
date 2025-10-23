import Link from "next/link";
import { socialLinks } from "@/lib/data.tsx";
import { Button } from "@/components/ui/button";

const WavyDivider = () => (
    <div className="bg-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
                fill="hsl(var(--primary))"
                d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,128C672,128,768,96,864,85.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
    </div>
);


export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full">
            <WavyDivider />
            <div className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <Button key={link.name} variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                                    {link.icon}
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <p className="text-sm">
                        &copy; {year} Portfolio Replicator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
