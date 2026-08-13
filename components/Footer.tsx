export default function Footer() {
  return (
    <footer className="bg-brand-background pt-16 pb-20 md:pb-10 border-t border-brand-text/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <span className="text-xl md:text-2xl font-heading text-brand-text tracking-widest uppercase">Mendez Family</span>
        <p className="mt-3 max-w-prose text-brand-text/70 leading-relaxed">
          Plumbing repairs, water heaters, and drain work for Austin homes and rental properties.
        </p>

        <div className="mt-8 pt-6 border-t border-brand-text/10 text-sm text-brand-text/60">
          <a href="https://thesitesmith.co" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors">
            Website by The Sitesmith &middot; {new Date().getFullYear()} Mendez Family Plumbing & Electrical
          </a>
        </div>
      </div>
    </footer>
  )
}
