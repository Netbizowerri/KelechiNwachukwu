import Link from "next/link";
import { socialLinks } from "@/lib/data.tsx";
import { Button } from "@/components/ui/button";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-primary text-primary-foreground">
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
        </footer>
    );
}
