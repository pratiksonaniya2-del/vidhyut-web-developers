import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Vidhyut - EV Day',
  description: 'EV Day Annual Summit by Evolve, MANIT Bhopal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}