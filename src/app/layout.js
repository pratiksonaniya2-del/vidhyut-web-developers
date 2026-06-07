import './globals.css'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

export const metadata = {
  title: 'Vidhyut - EV Day',
  description: 'EV Day Annual Summit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Home/>
        {children}
      </body>
    </html>
  )
}