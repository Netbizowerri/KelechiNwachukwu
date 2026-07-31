"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
    <section id="home" className="section-padding relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Website & Web App Developer — Serving Clients Across Nigeria
            </div>
            <h1 className="animate-fade-up text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-balance" style={{ animationDelay: "80ms" }}>
              See Your Website/Application Design Before Making Payments!
            </h1>
            <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed" style={{ animationDelay: "160ms" }}>
              {subtitle}
            </p>
            <p className="animate-fade-up text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed" style={{ animationDelay: "240ms" }}>
              If you're looking for an affordable website designer in Nigeria or a trusted web app developer who builds for clients nationwide, you're in the right place. Based in Owerri, I craft responsive, SEO-optimised websites and web applications that help Nigerian brands grow online — from Lagos and Abuja to Port Harcourt and beyond.
            </p>
            <div className="animate-fade-up flex flex-wrap gap-4 sm:gap-5" style={{ animationDelay: "320ms" }}>
              <Button
                size="lg"
                className="inline-flex md:hidden shadow-lg shadow-primary/20 active:scale-[0.98]"
                asChild
              >
                <a href="#contact" target="_self" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Started
                </a>
              </Button>
              <Button
                size="lg"
                className="inline-flex md:hidden bg-emerald-600 hover:bg-emerald-500 text-white active:scale-[0.98]"
                asChild
              >
                <a
                  href="https://selar.com/pe0391v792?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPMjc1MjU0NjkyNTk4Mjc5AAEeF0MpNOi8HqxoOyXWa1EdcPxWTVSG8nQoOKwJiI38ZLb9e4MtzKuw2_vvFVk_aem_yLu9IRaLkyTZXmM1iE-ttw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Training
                </a>
              </Button>
              <Button
                size="lg"
                className="hidden md:inline-flex shadow-lg shadow-primary/20 active:scale-[0.98]"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-500 text-white active:scale-[0.98]"
                asChild
              >
                <a href="#contact" target="_self" rel="noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Avatar Image */}
          <div className="animate-fade-in relative flex justify-center" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full" aria-hidden />
            <div className="animate-float-soft glass relative rounded-3xl overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_80px_-24px_rgba(2,6,23,0.9)] w-full max-w-lg">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Portrait of Kelechi Nwachukwu, website and web app developer in Nigeria"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              <div className="absolute bottom-0 w-full p-6 flex items-center justify-between text-sm text-muted-foreground">
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
                  <p className="font-semibold text-foreground">8+ Years shipping products</p>
                </div>
                <div className="text-right">
                  <p className="font-mono-ui text-xs uppercase tracking-[0.2em] text-accent">Location</p>
                  <p className="font-semibold text-foreground">Owerri, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog Overlay */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-foreground">
                  Whatsapp Line
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="businessName" className="text-sm font-semibold text-foreground">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="servicesOffered" className="text-sm font-semibold text-foreground">
                  Services Offered
                </label>
                <textarea
                  id="servicesOffered"
                  name="servicesOffered"
                  value={formData.servicesOffered}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="productsOffered" className="text-sm font-semibold text-foreground">
                  Products Offered
                </label>
                <textarea
                  id="productsOffered"
                  name="productsOffered"
                  value={formData.productsOffered}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="websiteFeatures" className="text-sm font-semibold text-foreground">
                  What Features you want in your website
                </label>
                <textarea
                  id="websiteFeatures"
                  name="websiteFeatures"
                  value={formData.websiteFeatures}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-foreground/200 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-0 transition-colors"
                />
              </div>

              <div className="flex justify-end">
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
