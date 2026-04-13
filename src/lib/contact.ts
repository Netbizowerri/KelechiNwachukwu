import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  businessName: z.string().optional(),
  servicesOffered: z.string().min(10),
  productsOffered: z.string().min(10),
  websiteFeatures: z.string().min(10),
  website: z.string().max(0).optional(), // honeypot
});

let lastSubmit = 0;
const COOLDOWN_MS = 10_000;

export type ContactFormValues = z.infer<typeof contactSchema>;

export async function submitContactForm(values: ContactFormValues) {
  const now = Date.now();
  if (now - lastSubmit < COOLDOWN_MS) {
    return { success: false, message: "Slow down a bit and try again." };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. " + parsed.error.errors.map((e) => e.message).join(" "),
    };
  }

  if (values.website) {
    return { success: false, message: "Unable to process request." };
  }

  try {
    const res = await fetch("https://formspree.io/f/movkogoe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    lastSubmit = now;

    if (res.ok) {
      return { success: true, message: "Thanks! I'll reply shortly." };
    }
    return { success: false, message: "Something went wrong. Please try again later." };
  } catch (error) {
    console.error("Contact submit failed", error);
    return {
      success: false,
      message: "Network issue. Check your connection and retry.",
    };
  }
}
