import Link from "next/link";
import { socialLinks } from "@/lib/data.tsx";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPin className="h-5 w-5" />
                        <h3 className="font-semibold">My Location</h3>
                    </div>
                    <address className="text-sm not-italic mt-2">
                        Sentiero Hotel Plaza<br />
                        Imo Airport Road, Off Owerri-Aba Expressway<br />
                        Imo State, Nigeria
                    </address>
                </div>
                <p className="text-sm text-center md:text-right">
                    &copy; {year} Kelechi Nwachukwu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
