import React from 'react';
import { TRANSFORMATIONS, WHATSAPP_NUMBER } from '../constants';

const Transformations = () => {
  const handleStartJourney = () => {
    const message = "Hi JFS, I am inspired by the transformations and want to start my own journey.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 uppercase">
            Client <span className="text-primary">Transformations</span>
           </h1>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             Real people. Real hard work. Real results. Browse through our client success stories.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary transition-all group">
               <div className="flex h-80 relative">
                 <div className="w-1/2 relative border-r border-gray-100">
                   <img src={t.imageBefore} alt="Before" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                   <span className="absolute bottom-4 left-4 bg-white/90 text-black text-xs font-bold px-3 py-1 rounded shadow-sm">BEFORE</span>
                 </div>
                 <div className="w-1/2 relative">
                   <img src={t.imageAfter} alt="After" className="w-full h-full object-cover" />
                   <span className="absolute bottom-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded shadow-sm">AFTER</span>
                 </div>
               </div>
               
               <div className="p-6">
                 <div className="flex justify-between items-center mb-3">
                   <h3 className="text-2xl font-bold text-gray-900 font-heading">{t.name}</h3>
                   <span className="text-primary font-bold border border-primary px-2 py-0.5 rounded text-sm bg-yellow-50">{t.duration}</span>
                 </div>
                 <div className="bg-green-50 p-3 rounded mb-4 border border-green-100">
                   <p className="text-green-700 font-bold text-sm uppercase flex items-center gap-2">
                     Result: <span className="text-gray-800 normal-case font-normal">{t.result}</span>
                   </p>
                 </div>
                 <p className="text-gray-600 italic">"{t.testimonial}"</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">READY TO BE THE NEXT SUCCESS STORY?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the JFS Protein coaching program today and let us guide you to your dream physique.
          </p>
          <button 
            onClick={handleStartJourney}
            className="bg-primary text-black font-bold text-xl px-10 py-4 rounded hover:bg-black hover:text-white transition-colors uppercase shadow-lg shadow-yellow-200"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transformations;