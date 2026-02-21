import React, { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TestimonialsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.page-title', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.page-desc', { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
    gsap.from('.testimonial-item', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.4
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 pt-24 pb-32 md:pt-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="page-title text-6xl md:text-8xl font-black font-heading text-slate-900 mb-8 tracking-tight">
            Real Impact.
          </h1>
          <p className="page-desc text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            Don't just take our word for it. See how JFS helps athletes and enthusiasts unlock their true potential every single day.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`testimonial-item break-inside-avoid p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${idx % 3 === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-100 shadow-sm'
                }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <Quote className={`mb-6 opacity-20 ${idx % 3 === 0 ? 'text-white' : 'text-slate-900'}`} size={40} />

              <p className={`text-lg leading-relaxed mb-8 font-medium ${idx % 3 === 0 ? 'text-slate-200' : 'text-slate-600'}`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-current border-opacity-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-500 ring-offset-2 ring-offset-transparent"
                />
                <div>
                  <h3 className={`font-bold ${idx % 3 === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-xs uppercase tracking-wider font-bold ${idx % 3 === 0 ? 'text-yellow-500' : 'text-yellow-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="testimonial-item break-inside-avoid bg-yellow-400 p-10 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-xl shadow-yellow-400/20">
            <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Your Story?</h3>
            <p className="text-slate-900/80 mb-8 font-medium">Join the JFS community and start your transformation today.</p>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors w-full shadow-lg">
              Submit Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;