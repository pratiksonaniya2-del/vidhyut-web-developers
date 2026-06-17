import Achievements from '@/components/Achievements'
import SponsorsPage from '@/components/SponsorShips'
import Footer from '@/components/Footer'
import Events from '@/components/Event'
import Home from '@/components/Home'
export default function Page() {
  return (
    <main>
      <Home/>
      <Events/>
      <Achievements />
      <SponsorsPage />
      <Footer />
    </main>
  )
}