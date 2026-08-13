export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mendez Family Plumbing & Electrical",
  "description": "Plumber in Austin",
  "telephone": "(512) 813-0488",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2508 Guadalupe St Ste 175",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=Mendez%20Family%20Plumbing%20%26%20Electrical&query_place_id=ChIJUyLNim61RIYRM-lw1Jbh4w0",
  "image": "/images/hero.jpg",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "06:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "08:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "08:00",
      "closes": "18:00"
    }
  ]
} as const;
