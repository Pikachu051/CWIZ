import { Mali } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const mali = Mali({ 
  subsets: ['thai'],
  weight: ['200', '400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'CWIZ',
  description: 'The simple trivia game, CWIZ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mali.className}>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
