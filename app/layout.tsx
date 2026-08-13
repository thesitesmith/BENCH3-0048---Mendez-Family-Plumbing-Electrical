import type { Metadata } from 'next'
import { Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Beacon from '../components/Beacon';

export const metadata = {
  title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
  description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Known for attention to detail. Call (512) 813-0488.",
  openGraph: {
    title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
    description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Known for attention to detail. Call (512) 813-0488.",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
    description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Known for attention to detail. Call (512) 813-0488.",
    images: ["/images/og.jpg"],
  },
};


const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-heading',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${barlow.variable} font-body bg-brand-background text-brand-text antialiased`}>
        <LocalBusinessSchema />
        <Beacon />
        {children}
      </body>
    </html>
  )
}
