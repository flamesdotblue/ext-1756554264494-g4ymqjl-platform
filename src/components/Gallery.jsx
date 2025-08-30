import React from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Corgi smiling during playtime',
  },
  {
    src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Happy puppy portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dogs chilling together',
  },
  {
    src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop',
    alt: 'Fluffy dog after grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dog running in yard',
  },
  {
    src: 'https://images.unsplash.com/photo-1508948956644-0017e845d797?q=80&w=1600&auto=format&fit=crop',
    alt: 'Poodle with stylish cut',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Big Smiles, Bigger Zoomies</h2>
            <p className="mt-2 text-slate-700">A peek at our play pals and glow-ups at the spa.</p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-semibold px-5 py-2.5 hover:bg-slate-800">Book a Spot</a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              className="aspect-[4/3] md:aspect-square object-cover rounded-2xl shadow-sm"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
