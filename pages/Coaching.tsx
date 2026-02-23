import React from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';
import { COACHING_PACKAGES, WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';

const Coaching = () => {
    const handleEnroll = (pkgName: string) => {
        const message = `I am interested in enrolling for the coaching package: ${pkgName}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden text-white">
                {/* Background Image/Overlay */}
                <div className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-6 uppercase max-w-3xl">
                        Expert Coaching for <br className="hidden md:block" />
                        <span className="text-yellow-400">Elite Results</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-medium leading-relaxed">
                        Stop guessing. Start growing. Get a personalized plan designed specifically for your body type and goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                            variant="secondary"
                            size="lg"
                            className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold"
                        >
                            View Packages
                        </Button>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">What's Included</h2>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Customized Diet", desc: "Macros calculated specifically for your metabolic rate and goals.", icon: "🥗" },
                            { title: "Training Program", desc: "Scientific split routines focusing on progressive overload.", icon: "💪" },
                            { title: <><span className="font-sans">24/7</span> Support</>, desc: "Direct WhatsApp access to your coach for queries and motivation.", icon: "📱" },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
                                <p className="text-slate-500 font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section id="packages" className="py-20 md:py-32 bg-white rounded-[3rem] shadow-sm -mt-10 relative z-20 mx-4 md:mx-8 mb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">
                            Select Your <span className="text-yellow-400">Plan</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                        {COACHING_PACKAGES.map((pkg) => (
                            <div key={pkg.id} className="flex-1 bg-white border-2 border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 flex flex-col group relative">

                                {/* Popular Badge Example (Logic can be added if specific packages are popular) */}
                                {pkg.price > 15000 && (
                                    <div className="absolute top-0 inset-x-0 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-tight text-center py-2">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`p-10 text-center border-b border-slate-100 transition-colors ${pkg.price > 15000 ? 'pt-14 bg-slate-50 group-hover:bg-yellow-50' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                                    <h3 className="text-2xl font-black text-slate-900 uppercase font-heading mb-4 tracking-tight">{pkg.title}</h3>
                                    <div className="flex items-end justify-center gap-1 mb-2">
                                        <span className="text-2xl font-bold text-slate-400">₹</span>
                                        <span className="text-5xl font-black text-slate-900">{pkg.price.toLocaleString()}</span>
                                    </div>
                                    <span className="text-slate-500 font-bold uppercase tracking-tight text-sm">{pkg.duration}</span>
                                </div>

                                <div className="p-10 flex-grow bg-white">
                                    <ul className="space-y-5">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-slate-600 font-medium">
                                                <Check className="h-5 w-5 text-yellow-500 mr-4 shrink-0 mt-0.5" strokeWidth={3} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-10 pt-0 bg-white">
                                    <Button
                                        variant={pkg.price > 15000 ? 'secondary' : 'primary'}
                                        onClick={() => handleEnroll(pkg.title)}
                                        className={`w-full group-hover:scale-105 transition-transform ${pkg.price > 15000 ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 shadow-xl shadow-yellow-400/20' : ''}`}
                                        size="lg"
                                        icon={<ArrowRight size={20} />}
                                    >
                                        Enroll Now
                                    </Button>
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
