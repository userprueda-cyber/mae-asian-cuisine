'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reservas', href: '#reservas' },
  { label: 'Sedes', href: '#sedes' },
  { label: 'Galería', href: '#galeria' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      if (currentScrollY < lastScrollY || currentScrollY < 80) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false)
        setIsOpen(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/75 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-serif text-3xl font-bold text-[#C8972B] tracking-[0.3em] hover:opacity-80 transition-opacity"
          >
            MAE
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-[#F5F5F0]/70 hover:text-[#C8972B] transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#reservas"
              onClick={(e) => { e.preventDefault(); handleNavClick('#reservas') }}
              className="px-5 py-2 border border-[#C8972B] text-[#C8972B] text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-[#C8972B] hover:text-[#0D0D0D] transition-all duration-300"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F5F5F0] hover:text-[#C8972B] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-base font-medium text-[#F5F5F0]/80 hover:text-[#C8972B] transition-colors tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservas"
                onClick={(e) => { e.preventDefault(); handleNavClick('#reservas') }}
                className="mt-2 px-5 py-3 border border-[#C8972B] text-[#C8972B] text-sm font-medium tracking-wider uppercase text-center rounded-sm hover:bg-[#C8972B] hover:text-[#0D0D0D] transition-all duration-300"
              >
                Reservar Mesa
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
