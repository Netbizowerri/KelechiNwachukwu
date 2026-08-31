"use client"

import { useEffect, useState } from "react"
import { X, Check, Sparkles, Shield, Smartphone, Globe, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const PROMO_IMAGE = "https://i.ibb.co/bMzFbx9K/September-Website-Promo.jpg"
const WHATSAPP_LINK = "https://wa.me/p/28011585525157469/2349067180824"

const features = [
  { icon: Globe, text: "FREE .com.ng Domain Name", highlight: true },
  { icon: Shield, text: "FREE SSL Certificate (Secured connection)", highlight: true },
  { icon: Zap, text: "FREE Privyr CRM Integration (WhatsApp leads)", highlight: true },
  { icon: Smartphone, text: "100% Mobile Responsive & High-Speed Design", highlight: true },
]

export function PromoPopout() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCTA = () => {
    window.open(WHATSAPP_LINK, "_blank")
    handleClose()
  }

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl overflow-hidden",
          "bg-card border border-border/50 shadow-[0_24px_60px_-24px_rgba(2,6,23,0.9),inset_0_1px_0_rgba(255,255,255,0.05)]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-bottom-[48%]",
          "max-h-[90vh] flex flex-col"
        )}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 rounded-lg p-1.5 text-muted-foreground/70 hover:text-foreground hover:bg-accent/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Close promo"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-y-auto flex-1 overscroll-contain">
          <div className="p-4 sm:p-6 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-border/30">
              <img
                src={PROMO_IMAGE}
                alt="September Website Promo"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-primary-foreground pointer-events-none">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono-ui uppercase tracking-[0.15em] font-medium">Limited Time Offer</span>
              </div>
            </div>

            <div className="text-center space-y-3">
              <span className="eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                <Sparkles className="h-3 w-3" />
                September Promo
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Elevate Your Brand Online for Just <span className="text-primary">₦50K</span>!
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                Professional website design with zero risk — see your design before you pay.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-medium">Risk-Free Proof of Work</span>
              </div>
              <p className="text-sm text-muted-foreground ml-11">
                We build a live prototype first — if you love it, we launch it. No payment until you approve.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                What You Get
              </h3>
              <div className="space-y-3" role="list">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3 rounded-lg p-4 transition-all",
                      "bg-card border border-border/30 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
                      feature.highlight && "relative overflow-hidden"
                    )}
                    role="listitem"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <Button
                onClick={handleCTA}
                className="w-full justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
                size="lg"
              >
                <Sparkles className="h-4 w-4" />
                Claim Your ₦50K Website Now
              </Button>
              <p className="text-center text-xs text-muted-foreground/70">
                Redirects to WhatsApp • No commitment required
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/60 border-t border-border/30 pt-4 pb-2">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Secure
              </span>
              <span className="flex items-center gap-1">
                <Smartphone className="h-3 w-3" />
                Mobile Ready
              </span>
              <span className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Fast Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
