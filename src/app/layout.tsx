import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-default-domain.com';
const userImage = 'https://i.ibb.co/Z1BwqgH/Kaycee-Nwachukwu.jpg';
const title = 'Kelechi Nwachukwu - Web Developer in Nigeria';
const description = 'Kelechi Nwachukwu is a top-rated, affordable, and professional full-stack web developer based in Owerri, Imo State, Nigeria. Specializing in React, Next.js, and modern web technologies.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'Kelechi Nwachukwu',
    'Web Developer in Owerri',
    'Web Developer in Imo State',
    'Web Developer in Nigeria',
    'Best Web Developer',
    'Affordable Web Developer',
    'Full Stack Developer',
    'React Developer Nigeria',
    'Next.js Developer Nigeria',
    'Freelance Web Developer Nigeria',
    'Portfolio',
  ],
  openGraph: {
    title: title,
    description: description,
    url: siteUrl,
    siteName: 'Kelechi Nwachukwu Portfolio',
    images: [
      {
        url: userImage,
        width: 400,
        height: 400,
        alt: 'A portrait of Kelechi Nwachukwu',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [userImage],
    creator: '@netbizowerri',
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
