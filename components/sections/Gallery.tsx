'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600',
    alt: 'Sushi artesanal',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',
    alt: 'Ramen japonés',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
    alt: 'Dim sum',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600',
    alt: 'Cocina asiática',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600',
    alt: 'Atmósfera del restaurante',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    alt: 'Experiencia gastronómica',
    span: 'col-span-1',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#0D0D0D]" ref={ref}>
      {/* Gold top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8972B]/30 to-transparent mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C8972B] block mb-4">
            Momentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F5F5F0] mb-4">
            Galería
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8972B]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                i === 0 ? 'sm:row-span-2' : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0D0D0D]/30 group-hover:bg-[#0D0D0D]/10 transition-all duration-500" />
              {/* Gold hover overlay */}
              <div className="absolute inset-0 bg-[#C8972B]/0 group-hover:bg-[#C8972B]/15 transition-all duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-xs tracking-widest uppercase text-[#F5F5F0]/80 font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
