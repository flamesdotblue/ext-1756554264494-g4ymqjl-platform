import React from 'react';
import { PawPrint } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-emerald-50 to-indigo-50 text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <PawPrint size={20} />
            </span>
            <span className="text-xl">Paws & Play</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-rose-600 transition-colors">Gallery</a>
            <a href="#booking" className="hover:text-rose-600 transition-colors">Book</a>
          </nav>
          <a href="#booking" className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">Book Now</a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <Gallery />
        <Booking />
      </main>

      <footer className="mt-24 border-t border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Paws & Play — Brooklyn, NY</p>
          <div className="flex items-center gap-6">
            <a href="tel:+17185551234" className="hover:text-rose-600">(718) 555-1234</a>
            <a href="mailto:hello@pawsandplaybk.com" className="hover:text-rose-600">hello@pawsandplaybk.com</a>
            <a href="#booking" className="text-rose-600 font-medium">Book a Visit →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
