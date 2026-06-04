'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const locations = [
  {
    name: 'Sede Castilla',
    address: 'Av. 30 de Agosto #35-15, Barrio Castilla, Pereira',
    phone: '+57 310 234 5678',
    hours: {
      weekday: 'Lun – Jue: 12:00 pm – 10:00 pm',
      weekend: 'Vie – Dom: 12:00 pm – 11:00 pm',
    },
    mapSrc: 'https://maps.google.com/maps?q=Mae+Asian+Cuisine+Pereira+Castilla&output=embed',
  },
  {
    name: 'Sede Cerritos',
    address: 'Vía Cerritos Km 2, Centro Comercial Cerritos Plaza, Pereira',
    phone: '+57 320 456 7890',
    hours: {
      weekday: 'Lun – Jue: 12:00 pm – 10:00 pm',
      weekend: 'Vie – Dom: 12:00 pm – 11:00 pm',
    },
    mapSrc: 'https://maps.google.com/maps?q=Mae+Asian+Cuisine+Pereira+Cerritos&output=embed',
  },
]

export default function Locations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToReservations = () => {
    const el = document.querySelector('#reservas')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sedes" className="py-24 lg:py-32 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8972B] block mb-4">
            Encuéntranos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F5F5F0] mb-4">
            Nuestras Sedes
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8972B]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </div>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Card className="group overflow-hidden hover:border-[#C8972B]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,151,43,0.1)]">
                {/* Map embed */}
                <div className="relative h-64 overflow-hidden bg-[#111111]">
                  <iframe
                    src={loc.mapSrc}
                    className="w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    style={{ border: 'none', filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }}
                    title={`Mapa ${loc.name}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-[#C8972B] text-[#0D0D0D] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                    {loc.name}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#C8972B] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#F5F5F0]/70 leading-relaxed">{loc.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#C8972B] mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm text-[#F5F5F0]/70">{loc.hours.weekday}</p>
                      <p className="text-sm text-[#F5F5F0]/70">{loc.hours.weekend}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#C8972B] shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      className="text-sm text-[#F5F5F0]/70 hover:text-[#C8972B] transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <button
                    onClick={scrollToReservations}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 border border-[#C8972B]/40 text-[#C8972B] text-sm font-medium tracking-wider uppercase rounded-xl hover:bg-[#C8972B] hover:text-[#0D0D0D] transition-all duration-300 group"
                  >
                    Reservar en esta sede
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
