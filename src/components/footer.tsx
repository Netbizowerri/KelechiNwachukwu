import Link from "next/link";
import { socialLinks } from "@/lib/data.tsx";
import { Button } from "@/components/ui/button";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 py-8 flex items-center justify-center">
                <p className="text-sm">
                    &copy; 2025 Kelechi Nwachukwu. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
