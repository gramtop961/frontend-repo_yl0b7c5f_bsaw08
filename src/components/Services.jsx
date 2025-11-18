import React from 'react'
import { DoorOpen, Window, Building2, PanelsTopLeft, PanelsTopRight, Ruler, Layers, ShieldCheck } from 'lucide-react'

const services = [
  { icon: Window, title: 'Sliding Windows & Doors', desc: 'Smooth, durable systems that maximize light and improve flow.' },
  { icon: PanelsTopLeft, title: 'Projection Windows', desc: 'Practical outward-opening solutions for ventilation and style.' },
  { icon: Building2, title: 'Office Partitioning', desc: 'Smart glass and aluminum partitions for productive workspaces.' },
  { icon: DoorOpen, title: 'Frameless Doors & Cubicles', desc: 'Premium frameless glass for bathrooms and entrances.' },
  { icon: Layers, title: 'Stainless Rails & Stairs', desc: 'Stainless steel handrails and stair systems built to last.' },
  { icon: ShieldCheck, title: 'Glass Supplies', desc: 'Quality glass, hardware and accessories for any scale.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)', backgroundSize:'20px 20px, 24px 24px, 28px 28px'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">From custom designs to mass installations, we deliver end-to-end solutions with precision and speed.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/20 text-blue-300 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
