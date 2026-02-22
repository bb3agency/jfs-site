import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { COACHING_PACKAGES, WHATSAPP_NUMBER } from '../constants';

const Coaching = () => {
  const handleEnroll = (pkgName: string) => {
    const message = `I am interested in enrolling for the coaching package: ${pkgName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero - Updated to White - Added top padding for fixed header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200')] bg-cover bg-center opacity-10 hidden md:block grayscale"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-dark mb-6 uppercase max-w-3xl">
            Expert Coaching for <br/>
            <span className="text-primary">Elite Results</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Stop guessing. Start growing. Get a personalized plan designed specifically for your body type and goals.
          </p>
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-secondary font-bold px-8 py-3 rounded hover:bg-dark hover:text-white transition-colors uppercase tracking-wide shadow-lg"
          >
            View Packages
          </button>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-heading font-bold text-dark text-center mb-16 uppercase">What's Included</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Customized Diet", desc: "Macros calculated specifically for your metabolic rate and goals.", icon: "🥗" },
               { title: "Training Program", desc: "Scientific split routines focusing on progressive overload.", icon: "💪" },
               { title: "24/7 Support", desc: "Direct WhatsApp access to your coach for queries and motivation.", icon: "📱" },
             ].map((feature, i) => (
               <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:border-primary hover:shadow-lg transition-all shadow-subtle">
                 <div className="text-5xl mb-6">{feature.icon}</div>
                 <h3 className="text-xl font-bold text-dark mb-3 uppercase">{feature.title}</h3>
                 <p className="text-gray-600">{feature.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark text-center mb-16 uppercase">
            Select Your <span className="text-primary">Plan</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {COACHING_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all flex flex-col group shadow-subtle">
                <div className="p-8 bg-gray-50 text-center border-b border-gray-100 group-hover:bg-primary/10 transition-colors">
                  <h3 className="text-2xl font-bold text-dark uppercase font-heading mb-2">{pkg.title}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">₹{pkg.price.toLocaleString()}</div>
                  <span className="text-gray-500 text-sm uppercase tracking-wide font-semibold">{pkg.duration}</span>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <button 
                    onClick={() => handleEnroll(pkg.title)}
                    className="w-full bg-dark text-white font-bold py-4 rounded hover:bg-primary hover:text-secondary transition-colors uppercase tracking-wide flex items-center justify-center group"
                  >
                    Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;