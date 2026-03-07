import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Salad, Dumbbell, MessageCircle, Target, ChevronRight } from 'lucide-react';
import { COACHING_PACKAGES, WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';
import { useSEO } from '../useSEO';

// Import the methodology background image
import methodologyBg from '../assets/methodology-bg.png';

const Coaching = () => {
    useSEO({
        title: 'Coaching – Personal Training & Online Fitness Programs',
        description: 'Join Joy Fitness coaching by Prabha Joy. Customized diet plans, structured training programs, 24/7 WhatsApp support. 1-on-1 in-person training or online coaching available.'
    });

    const handleEnroll = (pkgName: string) => {
        const message = `I am interested in enrolling for the coaching package: ${pkgName}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white min-h-screen font-sans">

            {/* Intense Methodology Section - Dark Theme with Background Asset */}
            <section
                className="pt-28 pb-12 md:pt-36 md:pb-20 border-t border-slate-800 relative z-10 bg-slate-950 min-h-[70vh] flex items-center"
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
                            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2 block font-body">The Plan</span>
                            <h2 className="text-[32px] md:text-[48px] font-heading font-normal text-white tracking-tight leading-none uppercase">NO EXCUSES <br /><span className="text-slate-400">METHOD</span></h2>
                        </div>
                        <div className="text-left md:text-right max-w-md">
                            <p className="text-lg text-slate-300 font-medium shadow-sm mb-1">
                                Everything you need to improve your body in one complete program.
                            </p>
                            <p className="text-lg text-slate-400">
                                Simple plan. Proper guidance. Real results.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "Customized Diet", desc: "Your diet is planned based on your body, metabolism, and goals. No random or copied meal plans. Everything is calculated for you.", icon: <Salad className="text-slate-950" size={32} /> },
                            { step: "02", title: "Training Program", desc: "A structured workout plan designed to help you build muscle and strength step by step. Focus on correct form, progressive overload, and steady progress.", icon: <Dumbbell className="text-slate-950" size={32} /> },
                            { step: "03", title: <><span className="font-sans font-black tracking-tighter">24/7</span> Support</>, desc: "Direct WhatsApp support from your coach. Ask questions, get form checks, and stay motivated whenever you need help.", icon: <MessageCircle className="text-slate-950" size={32} /> },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 md:p-10 border border-slate-200 shadow-sm relative group transition-all duration-300 hover:border-slate-400 hover:shadow-xl hover:-translate-y-2">
                                {/* Large background step number */}
                                <div className="absolute top-4 right-4 text-slate-100 font-heading font-normal text-7xl select-none group-hover:text-slate-200 transition-colors duration-300">
                                    {feature.step}
                                </div>

                                <div className="relative z-10">
                                    <div className="h-16 w-16 bg-slate-50 flex items-center justify-center mb-8 border border-slate-200 group-hover:border-slate-950 transition-colors duration-300 origin-left group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-[20px] md:text-[24px] font-subheading font-bold text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed font-body">
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
            <section id="packages" className="py-12 md:py-20 bg-white relative border-t border-slate-200">
                {/* Background lighting */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block font-body">Select Your Path</span>
                        <h2 className="text-[32px] md:text-[48px] font-heading font-normal text-slate-950 tracking-tight uppercase mb-6 leading-none">
                            TRAINING <span className="text-slate-400">PROGRAMS</span>
                        </h2>
                        <div className="w-24 h-1 bg-slate-950 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 font-medium">Choose the type of coaching that suits your goals and lifestyle.</p>
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

                                    <div className="p-8 md:p-10 border-b border-slate-200 bg-slate-100 group-hover:border-slate-800 group-hover:bg-slate-900/50 relative z-10 transition-colors duration-500">
                                        <h3 className="text-[24px] md:text-[32px] font-subheading font-bold tracking-tight mb-2 uppercase text-slate-950 group-hover:text-white transition-colors duration-500">{pkg.title}</h3>
                                        <p className="font-bold tracking-widest text-sm uppercase text-slate-500 group-hover:text-yellow-500 transition-colors duration-500 font-body">{pkg.duration}</p>
                                    </div>

                                    <div className="p-8 md:p-10 flex-grow relative z-10 transition-colors duration-500 bg-white group-hover:bg-slate-950">
                                        <ul className="space-y-6">
                                            {pkg.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start group/item">
                                                    <Target className={`h-6 w-6 mr-4 shrink-0 transition-colors duration-500 text-yellow-500`} />
                                                    <span className={`font-medium leading-relaxed text-base md:text-lg transition-colors duration-500 text-slate-700 group-hover:text-slate-300 font-body`}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-8 md:p-10 pt-0 mt-auto relative z-10 transition-colors duration-500 bg-white group-hover:bg-slate-950 flex justify-center">
                                        <Button
                                            onClick={() => handleEnroll(pkg.title)}
                                            className={`w-full justify-center py-4 font-subheading font-bold uppercase tracking-widest text-sm rounded-none transition-all duration-300 border border-slate-900
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
