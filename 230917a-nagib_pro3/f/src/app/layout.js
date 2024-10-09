'use client'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'


export const metadata = {
  title: 'Nagib Pro3'
}
export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
    require('bootstrap/dist/js/bootstrap.js')
    }
}, [])
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
