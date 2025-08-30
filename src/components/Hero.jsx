import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide px-3 py-1 rounded-full">Brooklyn’s happiest daycare & grooming</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Play hard. Nap hard. Look fabulous.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700 max-w-prose">
              At Paws & Play, your pup gets a full day of supervised fun and comes home freshly groomed and smiling. Safe, social, and stylish — all under one roof in the heart of Brooklyn.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 shadow-sm transition-colors">Book a Playdate</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/70 hover:bg-white text-slate-900 font-semibold px-6 py-3 border border-white/60 shadow-sm transition-colors">See Services</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop"
                alt="Happy golden retriever smiling"
                className="aspect-square object-cover rounded-2xl shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
                alt="Playful dog enjoying daycare"
                className="aspect-square object-cover rounded-2xl shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1200&auto=format&fit=crop"
                alt="Freshly groomed poodle with bandana"
                className="aspect-square object-cover rounded-2xl shadow-sm"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-200/40 blur-2xl rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1601758124431-7b61b5a2cd94?q=80&w=1800&auto=format&fit=crop"
                alt="Dogs running and playing in a sunny yard"
                className="relative rounded-3xl shadow-xl ring-1 ring-black/5 object-cover w-full h-[420px] sm:h-[520px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
