import './globals.css'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Events from '@/components/Event'
import Achievements from '@/components/Achievements'
export const metadata = {
  title: 'Vidhyut - EV Day',
  description: 'EV Day Annual Summit',
  icons:{
    icon:"/icon.jpg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Home/>
        {children}
        <Achievements/>
      </body>
    </html>
  )
}