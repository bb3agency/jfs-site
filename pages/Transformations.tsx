import React from 'react';
import { TRANSFORMATIONS, WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';
import { Play } from 'lucide-react';

const Transformations = () => {
    const handleStartJourney = () => {
        const message = "Hi JFS, I am inspired by the transformations and want to start my own journey.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header content */}
                <div className="text-center mb-16 md:mb-24 mt-8">
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Success</span>
                    <h1 className="text-5xl md:text-7xl font-black font-heading text-slate-900 mb-6 uppercase tracking-tighter">
                        Client <span className="text-slate-400">Transformations</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Real people. Real hard work. Real results. Browse through our client success stories and see what's possible.
                    </p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-10"></div>
                </div>

                {/* Transformation Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {TRANSFORMATIONS.map((t) => (
                        <div key={t.id} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 group">
                            {/* Image Wrapper */}
                            <div className="flex h-64 md:h-80 relative overflow-hidden bg-slate-100">
                                {/* Before Image */}
                                <div className="w-1/2 relative border-r border-slate-200">
                                    <img src={t.imageBefore} alt="Before" className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                    <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">BEFORE</span>
                                </div>
                                {/* After Image */}
                                <div className="w-1/2 relative">
                                    <img src={t.imageAfter} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                    <span className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">AFTER</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-8 md:p-10">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-black text-slate-900 font-heading uppercase tracking-tight">{t.name}</h3>
                                    <span className="text-slate-500 font-bold border border-slate-200 px-3 py-1 rounded-lg text-xs uppercase tracking-widest bg-slate-50">{t.duration}</span>
                                </div>
                                <div className="bg-green-50/50 p-4 rounded-xl mb-6 border border-green-100/50">
                                    <p className="text-green-700 font-bold text-sm uppercase flex items-center gap-2">
                                        Result: <span className="text-slate-800 normal-case font-medium">{t.result}</span>
                                    </p>
                                </div>
                                <p className="text-slate-600 font-medium italic leading-relaxed relative">
                                    <span className="text-4xl text-slate-200 absolute -top-4 -left-2 font-serif">"</span>
                                    <span className="relative z-10 pl-4 block">{t.testimonial}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 md:mt-32 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden hover:shadow-yellow-400/10 transition-shadow duration-500 group">
                    {/* Abstract glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-400/30 transition-colors duration-1000"></div>

                    <div className="relative z-10">
                        <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-6 block">Your Turn Next</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white mb-6 uppercase tracking-tight max-w-4xl mx-auto">
                            Ready to be the next <span className="text-slate-400">Success Story?</span>
                        </h2>
                        <p className="text-slate-400 font-medium mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                            Join the JFS Fitness coaching program today and let our experts guide you to your dream physique with science-based diet and training.
                        </p>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleStartJourney}
                                size="lg"
                                variant="secondary"
                                className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold px-10"
                                icon={<Play size={20} fill="currentColor" />}
                            >
                                Start Your Journey
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Transformations;
