import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from "next/font/google";
export const metadata = {
  title: 'Vidhyut - EV Day',
  description: 'EV Day Annual Summit by Evolve, MANIT Bhopal',
}


const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}