"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pricingTiers } from "@/components/pricing";
import { Check, CalendarClock } from "lucide-react";

const WHATSAPP_NUMBER = "2349067180824";

const serviceOptions = [
  { value: "Landing Page", label: "Landing Page" },
  { value: "Multi-Page Static Website", label: "Multi-Page Static Website" },
  { value: "Dynamic Web Application", label: "Web Application" },
  { value: "E-Commerce Web Application", label: "E-Commerce Web Application" },
  { value: "Not sure yet", label: "Not sure yet" },
];

function formatPrices(service: string): string {
  const tier = pricingTiers.find((t) => t.name === service);
  if (!tier) return "";
  return tier.prices
    .flatMap((row) =>
      row.lines.map((line) => `${row.label ? `${row.label} — ` : ""}${line.amount} (${line.note})`)
    )
    .join(", ");
}

interface BookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetService?: string;
}

function BookDialog({ open, onOpenChange, presetService }: BookDialogProps) {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [startDate, setStartDate] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setName("");
      setWhatsapp("");
      setStartDate("");
      setDetails("");
      setSubmitted(false);
      setService(presetService ?? "");
    }
  }, [open, presetService]);

  const selectedTier = pricingTiers.find((t) => t.name === service);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const prices = formatPrices(service);
    const message =
      `Hello Kelechi! I'd like to book a project.%0A%0A` +
      `Service: ${service}%0A` +
      (prices ? `Price range: ${prices}%0A` : "") +
      `Name: ${name}%0A` +
      `WhatsApp: ${whatsapp}%0A` +
      (startDate ? `Preferred start: ${startDate}%0A` : "") +
      `Details: ${details}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass flex max-h-[80vh] w-[calc(100%-2rem)] flex-col overflow-hidden border-white/10 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b border-white/10 px-6 py-5 text-left">
          <p className="eyebrow">Book a service</p>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <CalendarClock className="h-5 w-5 text-primary" />
            Reserve Your Project Slot
          </DialogTitle>
          <DialogDescription>
            Tell me what you need — I'll confirm availability and a quote on WhatsApp.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-y-auto px-6 py-10 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <Check className="h-7 w-7" />
            </span>
            <h4 className="text-lg font-semibold tracking-tight">Almost there!</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your request opened in WhatsApp. Hit send there to confirm your booking.
            </p>
            <Button size="sm" onClick={() => setSubmitted(false)} variant="outline">
              Book another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            <div className="space-y-2">
              <label htmlFor="book-service" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Service
              </label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger id="book-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedTier ? (
              <div className="space-y-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-accent">
                  Pricing
                </p>
                <div className="space-y-2">
                  {selectedTier.prices.map((row, i) => (
                    <div key={i}>
                      {row.label && (
                        <p className="mb-1 text-xs font-semibold text-foreground/85">{row.label}</p>
                      )}
                      <div className="space-y-1.5">
                        {row.lines.map((line, j) => (
                          <div
                            key={j}
                            className="flex items-baseline justify-between gap-2 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2"
                          >
                            <span className="text-base font-bold tracking-tight text-primary">
                              {line.amount}
                            </span>
                            <span className="text-right text-xs text-muted-foreground">{line.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {selectedTier.footnote && (
                  <p className="text-[11px] italic leading-relaxed text-muted-foreground">
                    {selectedTier.footnote}
                  </p>
                )}
              </div>
            ) : service === "Not sure yet" ? (
              <p className="text-xs text-muted-foreground">
                No worries — tell me about your project and I'll recommend the best fit and pricing.
              </p>
            ) : null}

            <div className="space-y-2">
              <label htmlFor="book-name" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Full Name
              </label>
              <Input id="book-name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-whatsapp" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                WhatsApp / Phone
              </label>
              <Input id="book-whatsapp" type="tel" placeholder="+234..." value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-date" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Preferred Start
              </label>
              <Input id="book-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label htmlFor="book-details" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Project Details
              </label>
              <Textarea
                id="book-details"
                placeholder="Tell me about your project, pages needed, features, budget..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full shadow-lg shadow-primary/20">
              Book Now on WhatsApp
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface BookServiceContextValue {
  openBookService: (service?: string) => void;
}

const BookServiceContext = createContext<BookServiceContextValue>({
  openBookService: () => {},
});

export function BookServiceProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  function openBookService(service?: string) {
    setPresetService(service);
    setOpen(true);
  }

  return (
    <BookServiceContext.Provider value={{ openBookService }}>
      {children}
      <BookDialog open={open} onOpenChange={setOpen} presetService={presetService} />
    </BookServiceContext.Provider>
  );
}

export function useBookService() {
  return useContext(BookServiceContext);
}
