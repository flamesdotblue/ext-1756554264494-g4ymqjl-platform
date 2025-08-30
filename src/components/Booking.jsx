import React, { useState } from 'react';
import { Calendar, MapPin, Phone } from 'lucide-react';

export default function Booking() {
  const [form, setForm] = useState({
    owner: '',
    email: '',
    phone: '',
    dog: '',
    service: 'Daycare',
    date: '',
    time: '',
    notes: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your request has been received. We\'ll be in touch shortly to confirm.');
  };

  return (
    <section id="booking" className="mt-24 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600"><Calendar size={18} /></span>
              <h3 className="text-xl font-bold text-slate-900">Request a Booking</h3>
            </div>
            <p className="mt-1 text-slate-600">We’ll confirm by phone or email within one business day.</p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Your Name</label>
                <input name="owner" value={form.owner} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Dog’s Name</label>
                <input name="dog" value={form.dog} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300">
                  <option>Daycare</option>
                  <option>Grooming</option>
                  <option>Daycare + Grooming</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Date</label>
                  <input type="date" name="date" value={form.date} onChange={onChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Time</label>
                  <input type="time" name="time" value={form.time} onChange={onChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Notes</label>
                <textarea name="notes" rows={4} value={form.notes} onChange={onChange} placeholder="Temperament, allergies, preferred style…" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 shadow-sm transition-colors">Request Booking</button>
                <a
                  href="https://cal.com/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 shadow-sm transition-colors"
                >
                  Book Online Instantly
                </a>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700"><MapPin size={18} /></span>
                Visit Us
              </div>
              <p className="mt-2 text-slate-700">184 Wythe Ave, Williamsburg, Brooklyn, NY</p>
              <div className="mt-4 h-48 overflow-hidden rounded-xl ring-1 ring-black/5">
                <iframe
                  title="Map to Paws & Play"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-73.964%2C40.717%2C-73.955%2C40.723&layer=mapnik"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><Phone size={18} /></span>
                Questions?
              </div>
              <p className="mt-2 text-slate-700">Call us Mon–Sat, 8am–7pm.</p>
              <a href="tel:+17185551234" className="mt-2 inline-block font-semibold text-rose-600 hover:text-rose-700">(718) 555-1234</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
