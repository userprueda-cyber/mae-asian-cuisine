'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8972B] block mb-4">
            Descubre
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F5F5F0] mb-4">
            Nuestro Menú
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8972B]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </div>
          <p className="text-[#F5F5F0]/50 text-base font-light max-w-md mx-auto">
            Explora nuestra carta de cocina asiática auténtica
          </p>
        </motion.div>

        {/* Menu iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/5"
        >
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center z-10">
              <div className="space-y-4 w-full max-w-lg px-8">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 bg-white/5 rounded-lg animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          <iframe
            src="https://menu.pirpos.com/menu/64caabc681eea805eeff8443"
            className="w-full"
            style={{ height: '850px', border: 'none' }}
            title="Menú Mae Asian Cuisine"
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  )
}
