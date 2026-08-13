import Image from 'next/image'

const services = [
  {
    name: `Drain and sewer line clearing`,
    description:
      'A camera goes down the line first, so the blockage and any crack behind it get found before anything is opened up. Snaking clears the day-to-day clog; a lined pipe can solve a cracked line without tearing out concrete.',
  },
  {
    name: `Water heater replacement and repair`,
    description:
      'Old units get flushed, checked for sediment, and replaced when the tank has worn out. The old heater is hauled away, the new one gets walked through, and shut-off valves and connections are checked at the same time.',
  },
  {
    name: `Toilet and fixture repair`,
    description:
      'Fill valves, flush levers, and worn internal parts get rebuilt or replaced so a toilet stops running or leaking at the base. Shut-off valves that no longer fully close often get swapped out in the same visit.',
  },
  {
    name: `Repiping and leak repair`,
    description:
      'Copper and older pipe gets opened up, inspected, and replaced section by section when a leak points to a bigger problem behind a wall or under a slab. Drywall is cut carefully and the area is cleaned up after.',
  },
  {
    name: `Garbage disposal and appliance install`,
    description:
      'New disposals, dishwashers, and outdoor fixtures get connected and tested before the crew leaves. Options and rough pricing get explained before anything is installed, based on what is already in the kitchen.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-brand-background py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-text">Plumbing work we handle around Austin</h2>
        <p className="mt-4 max-w-prose text-brand-text/80 leading-relaxed">
          From a slow drain to a full repipe, the work below covers what shows up most in Austin homes and rentals.
        </p>

        <div className="mt-10 lg:mt-14 space-y-16 lg:space-y-20">
          {services.map((service, i) => (
            <div key={service.name} className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-lg font-semibold text-brand-text">{service.name}</h3>
                <p className="mt-3 max-w-prose text-brand-text/80 leading-relaxed">{service.description}</p>
              </div>
              {i === 0 ? (
                <div className={`relative overflow-hidden max-w-[666px] mx-auto lg:mx-0 aspect-[3/4] w-full ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="A Mendez Family Plumbing & Electrical technician working on a drain line inside an Austin home"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top saturate-[.95] contrast-[1.03]"
                  />
                </div>
              ) : (
                <div className={i % 2 === 1 ? 'lg:order-1' : ''} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
