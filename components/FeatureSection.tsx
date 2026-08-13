import { PhoneCall } from 'lucide-react';

const areas = ['Austin, TX']

export default function FeatureSection() {
  return (
    <section id="feature" className="bg-brand-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-text">Serving Austin, TX</h2>
        <p className="mt-4 max-w-prose text-brand-text/80 leading-relaxed">
          Work runs out of our Guadalupe Street location and covers the following:
        </p>
        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-brand-text/80">
          {areas.map((a, i) => (
            <span key={a} className="flex items-center">
              {a}
              {i < areas.length - 1 && <span className="mx-3 text-brand-text/40">&middot;</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-brand-primary py-14">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <a
            href="tel:+15128130488"
            className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-none hover:bg-brand-accent/90 transition-colors whitespace-nowrap"
          >
            <PhoneCall size={20} />
            Call Us
          </a>
          <p className="text-brand-background/80 leading-relaxed max-w-sm">
            Shut-off valves and connections are checked at the same time, and any parts that need replacing are pointed out before the visit ends.
          </p>
        </div>
      </div>
    </section>
  )
}
