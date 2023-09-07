"use client"
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import Navbar from './components/navbar'

export const metadata = {
  title: '',
  description: 'This is an application for learning fetch data'
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
