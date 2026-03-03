import React from 'react';
import { CheckCircle2, ArrowRight, Salad, Dumbbell, MessageCircle, Target, ChevronRight, Star } from 'lucide-react';
import { COACHING_PACKAGES, WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';

const Coaching = () => {
    const handleEnroll = (pkgName: string) => {
        const message = `I am interested in enrolling for the coaching package: ${pkgName}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* SaaS Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-200/50 to-transparent pointer-events-none"></div>
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-yellow-400"></span>
                        <span className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide uppercase">JFS Elite Performance</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight mb-8 text-slate-900 leading-[1.1]">
                        Expert Coaching For <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Elite Results.</span>
                    </h1>

                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Stop guessing. Start growing. Get a personalized plan designed specifically for your body type and goals.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button
                            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-slate-900 text-white hover:bg-slate-800 w-full sm:w-auto shadow-lg shadow-slate-900/20"
                            size="lg"
                            icon={<ArrowRight size={18} />}
                        >
                            View Trainings
                        </Button>
                        <Button
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                            variant="secondary"
                            className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 w-full sm:w-auto"
                            size="lg"
                            icon={<MessageCircle size={18} />}
                        >
                            Talk to Coach
                        </Button>
                    </div>

                    {/* Social Proof metrics */}
                    <div className="mt-16 pt-10 border-t border-slate-200/60 flex justify-center items-center gap-8 md:gap-16 opacity-70">
                        <div className="flex flex-col items-center">
                            <h4 className="text-3xl font-black font-heading text-slate-900">5K+</h4>
                            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Clients</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-3xl font-black font-heading text-slate-900">100%</h4>
                            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Custom</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Reviews</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (SaaS Bento/Grid) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight mb-4">The Methodology</h2>
                        <p className="text-lg text-slate-500 font-medium">Everything you need to succeed, engineered into one seamless program.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "Customized Diet", desc: "Macros calculated specifically for your metabolic rate and goals. No cookie-cutter meal plans.", icon: <Salad className="text-slate-900" size={32} /> },
                            { title: "Training Program", desc: "Scientific split routines focusing on progressive overload and exact biomechanics.", icon: <Dumbbell className="text-slate-900" size={32} /> },
                            { title: "24/7 Support", desc: "Direct WhatsApp access to your coach for form checks, queries and motivation.", icon: <MessageCircle className="text-slate-900" size={32} /> },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                                <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing/Packages (SaaS Pricing Cards) */}
            <section id="packages" className="py-24 bg-slate-50 relative border-t border-slate-200/60">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 tracking-tight mb-4">
                            Choose Your Training
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">Select the level of guidance you need to reach your goals.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
                        {COACHING_PACKAGES.map((pkg, idx) => {
                            // Determine if this is the "Premium" highlight tier (assume idx 0 is premium "1-on-[1]")
                            const isPremium = idx === 0;

                            return (
                                <div key={pkg.id} className={`flex-1 flex flex-col rounded-3xl relative transition-all duration-300 ${isPremium
                                    ? 'bg-slate-900 text-white shadow-2xl scale-100 lg:scale-[1.02] z-10 border-0'
                                    : 'bg-white text-slate-900 border border-slate-200/80 shadow-lg'
                                    }`}>

                                    {/* Premium Badge */}
                                    {isPremium && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="p-10 border-b border-slate-200/10">
                                        <h3 className={`text-2xl font-black font-heading tracking-tight mb-2 ${isPremium ? 'text-white' : 'text-slate-900'}`}>{pkg.title}</h3>
                                        <p className={`font-medium ${isPremium ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.duration}</p>
                                    </div>

                                    <div className="p-10 flex-grow">
                                        <ul className="space-y-4">
                                            {pkg.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start">
                                                    <CheckCircle2 className={`h-5 w-5 mr-3 shrink-0 mt-0.5 ${isPremium ? 'text-yellow-400' : 'text-slate-900'}`} />
                                                    <span className={`font-medium ${isPremium ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-10 pt-0 mt-auto">
                                        <Button
                                            onClick={() => handleEnroll(pkg.title)}
                                            className={`w-full justify-center ${isPremium
                                                ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                                                : 'bg-slate-900 text-white hover:bg-slate-800'
                                                }`}
                                            size="lg"
                                        >
                                            Consult for Pricing
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coaching;
