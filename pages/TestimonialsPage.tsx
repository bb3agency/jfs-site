import React, { useRef } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSEO } from '../useSEO';

const TestimonialsPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: 'Customer Reviews & Testimonials',
    description: 'Read real reviews from Joy Fitness customers. Trusted by athletes and fitness enthusiasts for authentic supplements and expert coaching.'
  });

  useGSAP(() => {
    gsap.fromTo('.page-title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo('.page-desc',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );
    gsap.fromTo('.testimonial-item',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.4
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 pt-24 pb-10 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
          <h1 className="page-title text-[40px] md:text-[64px] font-heading font-normal text-slate-900 mb-6 tracking-tight uppercase leading-none">
            Real Impact.
          </h1>
          <p className="page-desc text-lg md:text-xl text-slate-500 leading-relaxed font-body">
            Don't just take our word for it. See how JFS helps athletes and enthusiasts unlock their true potential every single day.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`testimonial-item break-inside-avoid p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${idx % 3 === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-100 shadow-sm'
                }`}
            >


              <Quote className={`mb-6 opacity-20 ${idx % 3 === 0 ? 'text-white' : 'text-slate-900'}`} size={40} />

              <p className={`text-base leading-relaxed mb-8 font-medium font-body ${idx % 3 === 0 ? 'text-slate-200' : 'text-slate-600'}`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-current border-opacity-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-500 ring-offset-2 ring-offset-transparent"
                />
                <div>
                  <h3 className={`font-subheading font-bold ${idx % 3 === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-[10px] md:text-xs uppercase tracking-wider font-bold font-body ${idx % 3 === 0 ? 'text-yellow-500' : 'text-yellow-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="testimonial-item break-inside-avoid bg-yellow-400 p-6 md:p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl shadow-yellow-400/20">
            <h3 className="text-[32px] md:text-[40px] font-heading font-normal text-slate-900 uppercase tracking-tight mb-2 leading-none">Your Story?</h3>
            <p className="text-slate-900/80 mb-6 font-medium text-sm md:text-base font-body">Join the JFS community and start your transformation today.</p>
            <button className="px-6 py-4 bg-slate-900 text-white rounded-xl font-subheading font-bold hover:bg-slate-800 transition-colors w-full shadow-lg text-sm uppercase tracking-wide border-none">
              Submit Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
