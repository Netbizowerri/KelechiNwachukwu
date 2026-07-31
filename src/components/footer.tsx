import { MapPin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center gap-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <h3 className="font-semibold">My Location</h3>
                    </div>
                    <address className="text-sm not-italic mt-2 text-primary-foreground/80">
                        Sentiero Hotel Plaza<br />
                        Imo Airport Road, Off Owerri-Aba Expressway<br />
                        Imo State, Nigeria
                    </address>
                </div>

                <div className="flex items-center justify-center gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.name}
                            className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition-colors active:scale-95"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <p className="text-sm text-center text-primary-foreground/80">
                    &copy; {year} Kelechi Nwachukwu — Website & Web App Developer in Nigeria. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
