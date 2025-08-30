import React from 'react';
import { PawPrint, Scissors, Clock } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, badge, color }) => (
  <div className="relative rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${color.bg} ${color.text}`}>
      <Icon size={16} />
      <span>{badge}</span>
    </div>
    <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-700 leading-relaxed">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="mt-20 sm:mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Daycare, Grooming, and Giggles</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Flexible care for busy Brooklynites. Choose what your pup needs today — we’ll handle the tail wags.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={PawPrint}
            title="Doggy Daycare"
            desc="Supervised playgroups, enrichment games, and cozy nap zones. Full-day and half-day options available."
            badge="Most Popular"
            color={{ bg: 'bg-rose-100', text: 'text-rose-800' }}
          />
          <ServiceCard
            icon={Scissors}
            title="Grooming & Spa"
            desc="Baths, blowouts, full grooms, deshedding, nail trims, and blueberry facials. Fresh looks, zero stress."
            badge="Fresh & Fluffy"
            color={{ bg: 'bg-indigo-100', text: 'text-indigo-800' }}
          />
          <ServiceCard
            icon={Clock}
            title="Late Pickups"
            desc="Running behind? We offer late pickup windows so your pup stays safe and comfy until you arrive."
            badge="Flexible"
            color={{ bg: 'bg-emerald-100', text: 'text-emerald-800' }}
          />
        </div>
      </div>
    </section>
  );
}
