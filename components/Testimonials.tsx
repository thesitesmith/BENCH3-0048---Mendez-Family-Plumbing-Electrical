import Image from 'next/image'

const quotes = [
  {
    text: `Miguel clearly explained the plumbing issue and what needed to be done to get our kitchen sink and drain working again in about an hour.`,
    name: `Denise`,
  },
  {
    text: `They cleaned up carefully after every visit and left the work area in excellent shape. I really appreciate the quality of the workmanship and the honest communication.`,
    name: `Carla`,
  },
  {
    text: `They removed everything from the bathroom, updated all the plumbing, and put in a brand new bathroom. Every day we were welcomed by friendly plumbers.`,
    name: `Sophia`,
  },
  {
    text: `Billy called ahead to confirm when he would arrive, and he even showed up earlier than planned. He figured out what was wrong, gave me a clear estimate, and fixed the leak right away.`,
    name: `Marco`,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-background py-20 lg:py-28 border-t border-brand-text/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-text">What Austin homeowners say after the work is done</h2>

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-3 gap-10 items-start">
          <div className="order-2 lg:order-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {quotes.map((q) => (
              <div key={q.name} className="border-t border-brand-text/10 pt-6">
                <p className="text-brand-text/90 leading-relaxed max-w-prose">"{q.text}"</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-brand-text/60">{q.name}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden aspect-[3/4] w-full max-w-[653px] mx-auto lg:mx-0 h-full min-h-[420px] lg:col-span-1">
            <Image
              src="/images/gallery-2.jpg"
              alt="Close-up of finished plumbing fixture work by Mendez Family Plumbing & Electrical"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-top saturate-[.95] contrast-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
