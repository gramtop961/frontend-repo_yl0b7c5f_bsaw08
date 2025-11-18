import React from 'react'

const items = [
  { title: 'Frameless shower cubicle', img: '/portfolio1.jpg' },
  { title: 'Office glass partition', img: '/portfolio2.jpg' },
  { title: 'Sliding door system', img: '/portfolio3.jpg' },
  { title: 'Stainless steel rails', img: '/portfolio4.jpg' },
  { title: 'Projection window set', img: '/portfolio5.jpg' },
  { title: 'Custom storefront glazing', img: '/portfolio6.jpg' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent work</h2>
            <p className="mt-2 text-slate-300">A glimpse into installations we\'ve delivered for homes and offices.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center font-medium text-blue-300 hover:text-blue-200">Start your project →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition" onError={(e)=>{e.currentTarget.style.opacity=0.15; e.currentTarget.alt='Portfolio placeholder'}} />
              </div>
              <figcaption className="p-4 text-white/90">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
