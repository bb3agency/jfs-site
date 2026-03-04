import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Salad, Dumbbell, MessageCircle, Target, ChevronRight, Star } from 'lucide-react';
import { COACHING_PACKAGES, WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';

// Import the methodology background image
import methodologyBg from '../assets/methodology-bg.png';

const Coaching = () => {
    const handleEnroll = (pkgName: string) => {
        const message = `I am interested in enrolling for the coaching package: ${pkgName}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white min-h-screen font-sans">


            {/* Intense Athletic Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] invert"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

                {/* Diagonal Slashes for Edge */}
                <div className="absolute top-0 right-1/4 w-[2px] h-[200%] bg-yellow-400/40 transform rotate-[35deg] translate-y-[-50%] pointer-events-none hidden lg:block"></div>
                <div className="absolute top-0 right-1/3 w-[1px] h-[200%] bg-slate-200 transform rotate-[35deg] translate-y-[-50%] pointer-events-none hidden lg:block"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Hero Text Content */}
                    <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-none mb-8">
                            <span className="flex h-2 w-2 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                            <span className="text-xs md:text-sm font-bold text-slate-800 tracking-[0.2em] uppercase">JFS Elite Performance</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter mb-6 text-slate-950 leading-[0.9]">
                            BUILD YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">LEGACY.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed border-l-4 border-yellow-500 pl-6">
                            Stop guessing. Start growing. Get a personalized, uncompromising training protocol engineered specifically for your genetics and goals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button
                                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-yellow-400 text-slate-950 hover:bg-yellow-500 w-full sm:w-auto font-black uppercase tracking-wider text-sm py-3 px-8 rounded-none transform transition-transform hover:scale-105 shadow-[6px_6px_0_rgba(15,23,42,1)] hover:shadow-[8px_8px_0_rgba(15,23,42,1)] active:shadow-none active:translate-x-1 active:translate-y-1 relative group overflow-hidden border-2 border-slate-950"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    View Protocols <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </Button>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 text-slate-900 hover:text-yellow-600 font-bold tracking-wide transition-colors py-4 px-6 group"
                            >
                                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                                Consult Head Coach
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual Metrics / Graphic Focus */}
                    <div className="lg:w-1/2 w-full relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between group overflow-hidden shadow-2xl">
                            {/* Inner glitch/tech effect corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-slate-950"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-slate-950"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-slate-950"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-slate-950"></div>

                            <div className="text-left relative z-10 flex flex-col h-full">
                                <div>
                                    <h3 className="text-slate-950 font-black font-heading text-4xl mb-2">PROVEN</h3>
                                    <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                                    Real athletes transformed through rigorous, uncompromising, and <span className="text-slate-950 font-bold">science-backed methodologies</span>. No shortcuts. Just results.
                                </p>

                                <div className="mt-auto mb-4 flex justify-center w-full">
                                    <Link to="/transformations" className="bg-slate-950 text-white hover:bg-yellow-500 hover:text-slate-950 transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 px-6 shadow-[3px_3px_0_rgba(203,213,225,1)] hover:shadow-[5px_5px_0_rgba(203,213,225,1)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 border border-slate-950 w-auto">
                                        View Real Results <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                                <div className="bg-white p-4 border border-slate-200 shadow-sm">
                                    <h4 className="text-3xl font-black text-yellow-600 font-heading">100%</h4>
                                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Custom Built</span>
                                </div>
                                <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col justify-center">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Client Rating</span>
                                </div>
                            </div>

                            {/* Hover scanning line effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] transform -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2000ms] ease-in-out"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intense Methodology Section - Dark Theme with Background Asset */}
            <section
                className="py-24 border-t border-slate-800 relative z-10 bg-slate-950"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.4)), url(${methodologyBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-4 items-end justify-between mb-16 max-w-6xl mx-auto border-b border-slate-700/50 pb-8">
                        <div>
                            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2 block">The Protocol</span>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tight uppercase">NO EXCUSES <br /><span className="text-slate-400">METHODOLOGY</span></h2>
                        </div>
                        <p className="text-lg text-slate-300 font-medium max-w-md text-left md:text-right shadow-sm">
                            Everything you need to succeed, engineered into one seamless, unrelenting program.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "Customized Diet", desc: "Macros calculated specifically for your metabolic rate and goals. No cookie-cutter meal plans. Complete nutritional precision.", icon: <Salad className="text-slate-950" size={32} /> },
                            { step: "02", title: "Training Program", desc: "Scientific split routines focusing on progressive overload and exact biomechanics. Designed to tear down and rebuild.", icon: <Dumbbell className="text-slate-950" size={32} /> },
                            { step: "03", title: <><span className="font-sans font-black tracking-tighter">24/7</span> Support</>, desc: "Direct WhatsApp access to your coach for form checks, queries, and hard truths when you need motivation.", icon: <MessageCircle className="text-slate-950" size={32} /> },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm relative group transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:-translate-y-2">
                                {/* Large background step number */}
                                <div className="absolute top-4 right-4 text-slate-100 font-black font-heading text-7xl select-none group-hover:text-slate-200 transition-colors duration-300">
                                    {feature.step}
                                </div>

                                <div className="relative z-10">
                                    <div className="h-16 w-16 bg-slate-50 flex items-center justify-center mb-8 border border-slate-200 group-hover:border-slate-950 transition-colors duration-300 origin-left group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-slate-950 uppercase tracking-wide mb-4 flex items-center gap-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                                {/* Hover line indicator */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-slate-950 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elite Training Packages */}
            <section id="packages" className="py-24 bg-white relative border-t border-slate-200">
                {/* Background lighting */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">Select Your Path</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-950 tracking-tight uppercase mb-6">
                            TRAINING <span className="text-slate-400">PROTOCOLS</span>
                        </h2>
                        <div className="w-24 h-1 bg-slate-950 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 font-medium">Select the level of intensity and guidance required to demolish your goals.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto pt-8">
                        {COACHING_PACKAGES.map((pkg, idx) => {
                            const isPremium = idx === 0;

                            return (
                                <div key={pkg.id} className="flex-1 flex flex-col relative transition-all duration-500 group bg-white hover:bg-slate-950 shadow-sm border border-slate-200 hover:border-slate-800 z-10 w-full">

                                    {/* Subtle corner accents */}
                                    <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-yellow-500 transition-colors duration-500 z-20"></div>
                                    <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-yellow-500 transition-colors duration-500 z-20"></div>

                                    {/* Removed VIP Badge */}

                                    <div className="p-10 border-b border-slate-200 bg-slate-100 group-hover:border-slate-800 group-hover:bg-slate-900/50 relative z-10 transition-colors duration-500">
                                        <h3 className="text-3xl font-black font-heading tracking-tight mb-2 uppercase text-slate-950 group-hover:text-white transition-colors duration-500">{pkg.title}</h3>
                                        <p className="font-bold tracking-widest text-sm uppercase text-slate-500 group-hover:text-yellow-500 transition-colors duration-500">{pkg.duration}</p>
                                    </div>

                                    <div className="p-10 flex-grow relative z-10 transition-colors duration-500 bg-white group-hover:bg-slate-950">
                                        <ul className="space-y-6">
                                            {pkg.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start group/item">
                                                    <Target className={`h-6 w-6 mr-4 shrink-0 transition-colors duration-500 text-yellow-500`} />
                                                    <span className={`font-medium leading-relaxed text-lg transition-colors duration-500 text-slate-700 group-hover:text-slate-300`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-10 pt-0 mt-auto relative z-10 transition-colors duration-500 bg-white group-hover:bg-slate-950 flex justify-center">
                                        <Button
                                            onClick={() => handleEnroll(pkg.title)}
                                            className={`w-full justify-center py-4 font-bold uppercase tracking-widest text-sm rounded-none transition-all duration-300 border border-slate-900
                                                bg-slate-900 !text-white shadow-[4px_4px_0_rgba(203,213,225,1)]
                                                group-hover:bg-yellow-500 group-hover:!text-slate-950 group-hover:border-yellow-500 group-hover:shadow-[4px_4px_0_rgba(255,255,255,0.1)]
                                                active:translate-x-1 active:translate-y-1 active:!shadow-none`}
                                        >
                                            Consult Pricing
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
