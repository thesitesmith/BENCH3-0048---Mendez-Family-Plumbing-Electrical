const faqs = [
  {
    q: 'How do I book a repair?',
    a: 'Call the number on this page and describe the problem. Scheduling happens over the phone, and a technician is sent out based on what you describe and when the shop is open.',
  },
  {
    q: 'Do you take walk-ins?',
    a: 'No. Every visit is scheduled by phone first. That lets the right technician and tools get to the right job, rather than someone waiting on a first-come basis.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday 6:00 AM to 7:00 PM, Wednesday 8:00 AM to 2:00 PM, and Thursday 8:00 AM to 6:00 PM. The shop is closed Tuesday, and closed Friday through Sunday.',
  },
  {
    q: 'Where are you located, and do you serve my area?',
    a: 'The shop is at 2508 Guadalupe St in Austin. Work is done throughout the Austin area.',
  },
  {
    q: 'What happens during a first visit?',
    a: 'A technician looks at the fixture or line in question, explains what is wrong in plain terms, and goes over what the repair involves before starting. For drain and sewer problems, a camera is often used to see the actual line.',
  },
  {
    q: 'How long does a repair take?',
    a: 'A drain clear or fixture repair often finishes within an hour. Larger jobs, like a water heater swap or a repipe behind drywall, take longer and get explained upfront so there are no surprises about the day.',
  },
  {
    q: 'How does payment work?',
    a: 'Costs are walked through and confirmed before work begins, not after. Payment is handled once the job is finished and the work area has been cleaned up.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-brand-background py-20 lg:py-28 border-t border-brand-text/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-text">Common questions about scheduling and pricing</h2>

        <div className="mt-10 lg:mt-14 divide-y divide-brand-text/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="list-none flex items-center justify-between cursor-pointer">
                <span className="font-semibold text-brand-text pr-4">{f.q}</span>
                <span className="text-brand-accent text-2xl leading-none flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-brand-text/80 leading-relaxed max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
