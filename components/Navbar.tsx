'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: `Services` },
  { href: '#testimonials', label: `Reviews` },
  { href: '#feature', label: `Service Area` },
  { href: '#faq', label: `FAQ` },
  { href: '#contact', label: `Contact` },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <Image src="/images/logo.png" alt="Mendez Family Plumbing & Electrical icon" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="text-xl md:text-2xl font-heading text-brand-background tracking-widest uppercase">Mendez Family</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                active === l.href ? 'text-brand-accent' : 'text-brand-background/80 hover:text-brand-background'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15128130488"
            className="whitespace-nowrap bg-brand-accent text-brand-primary font-semibold px-5 py-2.5 rounded-none hover:bg-brand-accent/90 transition-colors"
          >
            Call Us
          </a>
        </div>

        <button
          className="lg:hidden text-brand-background"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary border-t border-brand-background/10 px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="whitespace-nowrap text-brand-background/90 text-base py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15128130488"
            onClick={() => setIsMenuOpen(false)}
            className="whitespace-nowrap bg-brand-accent text-brand-primary font-semibold px-5 py-3 text-center mt-2"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  )
}
