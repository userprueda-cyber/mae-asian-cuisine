'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  { value: 2, suffix: '', label: 'Sedes' },
  { value: 5, suffix: '+', label: 'Años' },
  { value: 4.8, suffix: '★', label: 'Rating', isFloat: true },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#0D0D0D]" ref={ref}>
      {/* Gold top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8972B]/30 to-transparent mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8972B] block mb-4">
              Nuestra Historia
            </span>
            <div className="h-px w-12 bg-[#C8972B] mb-6" />

            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F5F5F0] leading-tight mb-8">
              Sabores de Asia en el corazón de Pereira
            </h2>

            <p className="text-[#F5F5F0]/65 leading-relaxed mb-5 font-light">
              Mae Asian Cuisine nació de un profundo amor por las tradiciones culinarias de Asia —
              desde los caldos umami del ramen japonés hasta los aromas intensos del wok chino y la
              delicadeza del dim sum cantonés. Cada plato en nuestra carta es una invitación a un
              viaje sensorial por el continente más diverso del mundo.
            </p>
            <p className="text-[#F5F5F0]/65 leading-relaxed mb-10 font-light">
              Con más de cinco años sirviendo a Pereira, hemos cultivado un espacio donde la
              atmósfera oscura y envolvente, las luces cálidas y los materiales naturales crean el
              escenario perfecto para compartir momentos inolvidables. Nuestras dos sedes — Castilla
              y Cerritos — llevan la misma alma: ingredientes auténticos, técnicas refinadas y una
              hospitalidad que trasciende fronteras.
            </p>

            {/* Stats */}
            <div className="flex gap-10 border-t border-white/5 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl font-bold text-[#C8972B]">
                    {stat.isFloat ? '4.8' : <CountUp target={stat.value} />}
                    {stat.suffix}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-[#F5F5F0]/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-glow">
              <Image
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800"
                alt="Interior del restaurante Mae Asian Cuisine"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
            </div>
            {/* Gold corner accents */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C8972B]/40 rounded-tr-xl" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C8972B]/40 rounded-bl-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
