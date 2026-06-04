'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reservations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="reservas" className="py-24 lg:py-32 bg-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8972B] block mb-4">
            Reservaciones
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F5F5F0] mb-4">
            Reserva Tu Mesa
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8972B]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </div>
          <p className="text-[#F5F5F0]/50 text-base font-light">
            Disponible en nuestras 2 sedes en Pereira
          </p>
        </motion.div>

        {/* Reservation iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#1A1A1A]"
        >
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center z-10">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 border border-[#C8972B]/30 border-t-[#C8972B] rounded-full animate-spin mx-auto" />
                <p className="text-sm text-[#F5F5F0]/40 tracking-wider">Cargando sistema de reservas...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://widget.riservi.co/allies/restaurant-widget/mae-asian-cuisine-2bl"
            className="w-full"
            style={{ height: '750px', border: 'none' }}
            title="Reservas Mae Asian Cuisine"
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  )
}
