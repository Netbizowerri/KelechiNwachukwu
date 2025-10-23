"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. " + parsed.error.errors.map(e => e.message).join(' '),
    };
  }

  // In a real application, you would send an email or save to a database here.
  console.log("Form submitted successfully:", parsed.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
