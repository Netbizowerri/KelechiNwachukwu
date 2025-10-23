"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. " + parsed.error.errors.map(e => e.message).join(' '),
    };
  }

  try {
    const response = await fetch("https://formspree.io/f/movkogoe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.error || "Something went wrong. Please try again.",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "There was a problem submitting the form. Please check your connection.",
    };
  }
}
