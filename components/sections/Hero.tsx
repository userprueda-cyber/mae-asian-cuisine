'use client'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(200,151,43,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(200,151,43,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-0 lg:py-24 gap-8">

          {/* Left: Text content */}
          <div className="flex-1 relative pt-24 lg:pt-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(200,151,43,0.15)" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-[#C8972B]" />
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C8972B]">
                  Asian Cuisine · Pereira, Colombia
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
                <span className="bg-gradient-to-br from-[#F5F5F0] to-[#F5F5F0]/80 bg-clip-text text-transparent">
                  Una experiencia
                </span>
                <br />
                <span className="bg-gradient-to-br from-[#C8972B] via-[#E8B84B] to-[#C8972B] bg-clip-text text-transparent">
                  asiática única
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-[#F5F5F0]/60 font-light max-w-md leading-relaxed mb-10">
                Dos sedes. Una sola pasión por la cocina asiática auténtica.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('#menu')}
                  className="px-8 py-3.5 bg-[#C8972B] text-[#0D0D0D] text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[#E8B84B] transition-all duration-300 shadow-[0_0_20px_rgba(200,151,43,0.3)]"
                >
                  Ver Menú
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo('#reservas')}
                  className="px-8 py-3.5 border border-[#C8972B] text-[#C8972B] text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[#C8972B]/10 transition-all duration-300"
                >
                  Reservar Mesa
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right: Spline 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full h-[400px] lg:h-[600px] relative"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
            {/* Subtle gold vignette on left edge */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-[#F5F5F0]/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#C8972B]/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
