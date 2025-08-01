import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Min Portfolio",
  description: "Byggd med Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
