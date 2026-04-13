"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL =
  "https://wa.me/2349067180824?text=Hello%20Kelechi.%20I%20just%20visited%20your%20personal%20website.%20I%20am%20interested%20in%20your%20service.";

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessName: "",
    servicesOffered: "",
    productsOffered: "",
    websiteFeatures: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const avatar = PlaceHolderImages.find((img) => img.id === "avatar");
    if (avatar) setAvatarUrl(avatar.imageUrl);
  }, []);

const subtitle = useMemo(
    () =>
      "My approach is simple - combine clean design, fast performance, and SEO best practices to deliver websites that not only look good but rank well on Google.",
    []
  );

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/e1b8tPVM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Thank You!",
          description: "We've received your information. You'll hear from us soon.",
          variant: "default",
        });
        setFormData({ name: "", email: "", whatsapp: "", businessName: "", servicesOffered: "", productsOffered: "", websiteFeatures: "" });
        setIsDialogOpen(false);
      } else {
        const error = await response.json();
        toast({
          title: "Error",
          description: error?.message || "Failed to submit form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="home" className="section-padding">
      <div className="container px-4 md:px-6">
        <div class="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          {/* Left Column */}
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold text-primary mb-4 md:mb-2">
              <Sparkles className="h-4 w-4" />
              Affordable & Trusted Web Developer in Owerri, Imo State
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              See Your Website/Application Design Before Making Payments!
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
            <p class="text-base md:text-lg text-muted-foreground max-w-2xl">
              If you're looking for an Affordable Website Designer in Owerri or a Trusted Web Developer in Imo State, you're in the right place. I build responsive, SEO-optimized, and scalable websites that help brands grow online.
            </p>
            <div class="flex flex-wrap gap-4 sm:gap-5">
              {/* Get Started Buttons - these open the dialog */}
              <Button
                size="lg"
                className="inline-flex md:hidden shadow-lg shadow-primary/30"
                asChild
              >
                <a href="#contact" target="_self" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Started
                </a>
              </Button>
<Button
  size="lg"
  className="hidden md:inline-flex shadow-lg shadow-primary/30"
  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
>
  View My Work
</Button>
              <Button
                size="lg"
                className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white"
                asChild
              >
                <a href="#contact" target="_self" rel="noreferrer">
                  Get Started
                </a>
              </Button>

            </div>
          </div>

          {/* Right Column - Avatar Image */}
          <div class="relative flex justify-center">
            <div class="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" aria-hidden />
            <div class="glass relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl w-full max-w-lg">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="A portrait of Kelechi Nwachukwu."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              )}
              <div class="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
              <div class="absolute bottom-0 w-full p-6 flex items-center justify-between text-sm text-muted-foreground">
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
                  <p class="font-semibold text-foreground">8+ Years shipping products</p>
                </div>
                <div class="text-right">
                  <p class="text-xs uppercase tracking-[0.2em] text-accent">Location</p>
                  <p class="font-semibold text-foreground">Owerri, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog Overlay */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
           <DialogContent>
             <form onSubmit={handleSubmit} class="space-y-5">
               <div class="space-y-2">
                 <label htmlFor="name" class="text-sm font-semibold text-foreground">
                   Full Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="whatsapp" class="text-sm font-semibold text-foreground">
                   Whatsapp Line
                 </label>
                 <input
                   type="tel"
                   id="whatsapp"
                   name="whatsapp"
                   value={formData.whatsapp}
                   onChange={handleChange}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="email" class="text-sm font-semibold text-foreground">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="businessName" class="text-sm font-semibold text-foreground">
                   Business Name
                 </label>
                 <input
                   type="text"
                   id="businessName"
                   name="businessName"
                   value={formData.businessName}
                   onChange={handleChange}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="servicesOffered" class="text-sm font-semibold text-foreground">
                   Services Offered
                 </label>
                 <textarea
                   id="servicesOffered"
                   name="servicesOffered"
                   value={formData.servicesOffered}
                   onChange={handleChange}
                   rows={4}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="productsOffered" class="text-sm font-semibold text-foreground">
                   Products Offered
                 </label>
                 <textarea
                   id="productsOffered"
                   name="productsOffered"
                   value={formData.productsOffered}
                   onChange={handleChange}
                   rows={4}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="space-y-2">
                 <label htmlFor="websiteFeatures" class="text-sm font-semibold text-foreground">
                   What Features you want in your website
                 </label>
                 <textarea
                   id="websiteFeatures"
                   name="websiteFeatures"
                   value={formData.websiteFeatures}
                   onChange={handleChange}
                   rows={4}
                   required
                   class="w-full px-3 py-2 rounded-lg border border-foreground/200 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                 />
               </div>

               <div class="flex justify-end">
                 <Button type="submit" disabled={isSubmitting}>
                   {isSubmitting ? "Submitting..." : "Submit"}
                 </Button>
               </div>
             </form>
           </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}