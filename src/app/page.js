import Home from '@/components/Home'
import Achievements from '@/components/Achievements'
import Event from '@/components/Event'
import SponsorShips from '@/components/SponsorShips'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Home />
      
      <Event />
      <Achievements />
      <SponsorShips />
      <Footer />
    </main>
  )
}