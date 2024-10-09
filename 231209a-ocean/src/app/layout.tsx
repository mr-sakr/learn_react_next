import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ocean',
  description: 'By My Hand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden`}>
        <Navbar/>
        <div className='pt-[5rem]'>{children}</div>
        </body>
    </html>
  )
}
