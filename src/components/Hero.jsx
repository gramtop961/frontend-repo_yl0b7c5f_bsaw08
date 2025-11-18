import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-3 py-1 border border-white/20 backdrop-blur">
            <span className="text-xs uppercase tracking-wider">Crafting spaces that inspire</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_25px_rgba(0,0,0,0.4)]">
            Construction and installation for modern living and workspaces
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            We specialize in sliding doors and windows, frameless glass, office partitioning, stainless steel rails, and custom installations for both residential and commercial spaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 transition">Our Services</a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 border border-white/20 backdrop-blur transition">View Portfolio</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
    </section>
  )
}
