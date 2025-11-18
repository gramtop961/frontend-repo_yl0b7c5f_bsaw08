import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to build something exceptional?</h2>
            <p className="mt-3 text-blue-100 text-lg max-w-2xl">Tell us about your space and we\'ll recommend the right systems, specs and finishes to bring it to life.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-3">
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-white/60" placeholder="Your name" />
              <input className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-white/60" placeholder="Email or phone" />
              <textarea className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder:text-white/60" rows={3} placeholder="Project details" />
              <button className="w-full rounded-lg bg-white text-blue-700 font-semibold py-2 hover:opacity-90 transition">Request a quote</button>
              <p className="text-xs text-blue-100/80">We\'ll respond within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
