import type { Metadata } from 'next'
import { Mali } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const mali = Mali({ 
  subsets: ['thai'],
  weight: ['200', '400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CWIZ',
  description: 'The simple trivia game, CWIZ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mali.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
