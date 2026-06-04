import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Menu from '@/components/sections/Menu'
import Reservations from '@/components/sections/Reservations'
import Locations from '@/components/sections/Locations'
import Gallery from '@/components/sections/Gallery'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F5F0]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservations />
      <Locations />
      <Gallery />
      <Footer />
    </main>
  )
}
