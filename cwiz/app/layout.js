import { Mali } from 'next/font/google'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
