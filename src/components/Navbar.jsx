import React from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/kprice-logo.png" alt="K Price Builders" className="h-9 w-auto" onError={(e)=>{e.currentTarget.style.display='none'}} />
          <span className="font-semibold tracking-tight text-white text-lg">K Price Builders</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/90">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white bg-blue-600/80 hover:bg-blue-600 rounded-lg px-3 py-2 transition">
            <Phone className="h-4 w-4" /> Call us
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white/90">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
