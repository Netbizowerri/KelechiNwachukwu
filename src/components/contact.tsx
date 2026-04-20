"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { submitContactForm } from "@/lib/contact";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    whatsapp: z.string().optional(),
    businessName: z.string().optional(),
    servicesOffered: z.string().min(10, { message: "Please describe your services in at least 10 characters." }),
    productsOffered: z.string().min(10, { message: "Please describe your products in at least 10 characters." }),
    websiteFeatures: z.string().min(10, { message: "Please describe desired website features in at least 10 characters." }),
    // Honeypot field - must stay empty
    website: z.string().max(0).optional(),
  });

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      businessName: "",
      servicesOffered: "",
      productsOffered: "",
      websiteFeatures: "",
      website: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);

    if (result.success) {
      form.reset();
      setShowThankYou(true);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message,
      });
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Mail className="h-4 w-4" />
            Let's build something great
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Connect
          </h2>
          <p className="text-muted-foreground">
            Looking for your company's next remote developer? I am just a chat away. Drop me a message below.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Honeypot field to deter bots */}
                  <input
                    type="text"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("website")}
                  />
<FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Whatsapp Line</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="servicesOffered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Offered</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your services..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productsOffered"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Products Offered</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe your products..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
<FormField
                    control={form.control}
                    name="websiteFeatures"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What Features you want in your website</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe desired website features..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Honeypot field to deter bots */}
                  <input
                    type="text"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("website")}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                 </form>
               </Form>
             </CardContent>
           </Card>
         </div>
       </div>

       {/* Social Links Section */}
       <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
         <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
           Follow Me
         </h2>
         <p className="text-muted-foreground">
           Stay connected with me on social media
         </p>
         <div className="flex flex-wrap justify-center gap-4">
           {socialLinks.map((link) => (
             <a
               key={link.name}
               href={link.url}
               target="_blank"
               rel="noreferrer"
               className="flex items-center justify-center w-12 h-12 rounded-lg border border-muted-background/50 bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
             >
               {link.icon}
             </a>
           ))}
         </div>
       </div>

       {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-6 w-6" />
              Thank You!
            </DialogTitle>
            <DialogDescription>
              Your message has been sent successfully. I'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <Button onClick={() => setShowThankYou(false)} className="w-full">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
