import type { Metadata } from 'next'
import Header from './components/Navbar'
import './globals.css'


export const metadata: Metadata = {
  title: 'Revise',
  description: 'This is a revision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div>{children}</div>
      </body>
    </html>
  )
}
