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
        <div className="bg-slate-50 min-h-screen pt-32 pb-32 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header content */}
                <div className="text-center mb-16 md:mb-24 mt-8">
                    <span className="text-yellow-500 font-bold tracking-tight uppercase text-sm mb-4 block">Proven Success</span>
                    <h1 className="text-5xl md:text-7xl font-black font-heading text-slate-900 mb-6 uppercase tracking-tight">
                        Client <span className="text-slate-400">Transformations</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Real people. Real hard work. Real results. Browse through our client success stories, all personally trained by Prabha Joy, and see what's possible.
                    </p>
                    <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-10"></div>
                </div>

                {/* Transformation Grid (Masonry / Bento Style) */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                    {TRANSFORMATIONS.map((t, idx) => (
                        <div key={t.id} className="break-inside-avoid bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2rem] overflow-hidden border border-slate-100 hover:border-slate-300">
                            <div className="relative overflow-hidden bg-slate-100 w-full h-auto">
                                <img
                                    src={t.image}
                                    alt="Client Transformation"
                                    loading={idx < 3 ? "eager" : "lazy"}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 md:mt-32 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden hover:shadow-yellow-400/10 transition-shadow duration-500 group">
                    {/* Abstract glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-400/30 transition-colors duration-1000"></div>

                    <div className="relative z-10">
                        <span className="text-yellow-400 font-bold tracking-tight uppercase text-sm mb-6 block">Your Turn Next</span>
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
