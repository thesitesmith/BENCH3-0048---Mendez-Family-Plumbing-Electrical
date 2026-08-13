import { PhoneCall, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const address = '2508 Guadalupe St Ste 175, Austin, TX'
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <section id="contact" className="bg-brand-background py-20 lg:py-28 border-t border-brand-text/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-brand-text">Reach Mendez Family Plumbing & Electrical</h2>

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-2 gap-10">
          <div>
            <a
              href="tel:+15128130488"
              className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary font-semibold px-8 py-4 rounded-none hover:bg-brand-accent/90 transition-colors"
            >
              <PhoneCall size={20} />
              Call Us
            </a>

            <ul className="mt-8 space-y-4 text-brand-text/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>2508 Guadalupe St Ste 175, Austin, TX</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Monday: 6:00 AM to 7:00 PM</p>
                  <p>Closed Tuesday</p>
                  <p>Wednesday: 8:00 AM to 2:00 PM</p>
                  <p>Thursday: 8:00 AM to 6:00 PM</p>
                  <p>Closed Friday to Sunday</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+15128130488" className="hover:text-brand-text transition-colors">
                  (512) 813-0488
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative overflow-hidden min-h-[360px] h-full w-full">
              
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mendez%20Family%20Plumbing%20%26%20Electrical&query_place_id=ChIJUyLNim61RIYRM-lw1Jbh4w0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-brand-secondary hover:text-brand-text transition-colors"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    
      <div className="mx-auto max-w-6xl px-6 mt-10">
        <div className="relative overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps?q=2508%20Guadalupe%20St%20Ste%20175&output=embed"
            title="Location map"
            loading="lazy"
            className="h-[320px] w-full border-0"
          />
        </div>
      </div>
</section>
  )
}
