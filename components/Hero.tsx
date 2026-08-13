import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="grid lg:grid-cols-2 min-h-[92vh]">
      <div className="relative overflow-hidden h-[55vh] lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="Modern bathroom with a newly installed sink and faucet by Mendez Family Plumbing & Electrical in Austin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[.95] contrast-[1.03]"
        />
      </div>

      <div className="bg-brand-primary flex items-center px-8 lg:px-16 py-16">
        <div className="max-w-lg">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading text-brand-background leading-[0.95] tracking-tight [text-wrap:balance]">
            The careful plumbers Austin renovators keep calling back
          </h1>
          <p className="mt-6 text-lg text-brand-background/80 max-w-prose leading-relaxed">
            Drain lines, water heaters, and repiping work for Austin homes, handled by the same two technicians every time.
          </p>

          <div className="mt-8 relative inline-block pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-accent"></span>
            <span className="absolute left-0 bottom-0 h-[2px] w-8 bg-brand-accent"></span>
            <a href="tel:+15128130488" className="block text-2xl font-heading text-brand-background tracking-tight">
              (512) 813-0488
            </a>
          </div>

          <div className="mt-8">
            <a
              href="tel:+15128130488"
              className="inline-block bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-none hover:bg-brand-accent/90 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
