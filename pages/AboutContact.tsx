import React, { useState } from 'react';
import { MapPin, Instagram, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';
import whatsappLogo from '../assets/whatsapp_logo.png';
import contactPageImage from '../assets/contact_page_image.jpeg';

const AboutContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*New Contact Inquiry*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-28 pb-16">
            <div className="container mx-auto px-4 md:px-6">

                {/* SECTION 1: ABOUT */}
                <section className="mb-24 lg:mb-32 mt-8 md:mt-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <span className="text-yellow-500 font-bold tracking-tight uppercase text-sm mb-4 block">Our Story</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 uppercase mb-6 tracking-tight leading-[1.1]">
                                Fueling Your <br /><span className="text-slate-400">Ambition.</span>
                            </h1>
                            <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-8"></div>

                            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg">
                                <p>
                                    At <span className="font-bold text-slate-900">JFS Fitness</span>, we believe that greatness isn't given—it's earned. Founded with a single mission: to provide athletes and fitness enthusiasts with the highest quality supplements that deliver real, tangible results.
                                </p>
                                <p>
                                    We don't just sell products; we fuel transformations. Whether you're a professional bodybuilder, a competitive athlete, or someone just starting their fitness journey, our premium range of whey proteins, mass gainers, and essentials are formulated to help you break barriers.
                                </p>
                                <p>
                                    Backed by science and trusted by elite trainers, JFS Fitness stands for purity, potency, and performance. No shortcuts. No compromises. Just pure gains.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-6 text-center border-t border-slate-200 pt-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black font-heading text-slate-900">100%</h3>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 mt-2">Authentic</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black font-heading text-slate-900">5K+</h3>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 mt-2">Happy Clients</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black font-heading text-slate-900"><span className="font-sans">24/7</span></h3>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 mt-2">Expert Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="lg:w-[45%] xl:w-5/12 relative w-full max-w-md lg:max-w-none mx-auto mt-10 lg:mt-0">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] object-cover border-8 border-white group">
                                <img
                                    src={contactPageImage}
                                    alt="JFS Fitness Athlete"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-black font-heading text-3xl uppercase tracking-tight mb-1">Push Limits</p>
                                    <p className="font-medium text-slate-300">Join the JFS Movement</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
                            <div className="absolute top-1/2 -left-12 w-48 h-48 bg-slate-900 rounded-full blur-3xl opacity-10 -z-10"></div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: CONTACT */}
                <section id="contact" className="mt-12 lg:mt-24 mb-16 relative">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25D366] rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/3"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            {/* Text Content */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-0.5 bg-yellow-400"></div>
                                    <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tight mb-8 leading-[1.1]">
                                    Let's Start Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100">Transformation.</span>
                                </h2>
                                <p className="text-lg text-slate-400 font-medium mb-12 leading-relaxed max-w-lg">
                                    Skip the long forms and delayed emails. Connect with our dedicated support team directly on WhatsApp for real-time coaching advice and product recommendations.
                                </p>

                                <div>
                                    <p className="font-bold text-slate-500 text-sm uppercase tracking-wider mb-5">Connect With Us</p>
                                    <div className="flex gap-4">
                                        <a href="https://www.instagram.com/jfs.protein.store/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-yellow-400 hover:bg-slate-800 hover:text-yellow-400 p-4 rounded-2xl text-white transition-all duration-300 group shadow-lg">
                                            <Instagram size={28} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                        <a href="https://www.youtube.com/@Masterjoy09" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-yellow-400 hover:bg-slate-800 hover:text-yellow-400 p-4 rounded-2xl text-white transition-all duration-300 group shadow-lg">
                                            <Youtube size={28} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="flex justify-center lg:justify-end lg:col-span-5 w-full mt-8 lg:mt-0 xl:pr-12">
                                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] w-full max-w-[380px] text-center transform hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                    {/* Hover gradient effect inside card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="bg-white p-5 rounded-[2rem] shadow-[0_0_40px_rgba(37,211,102,0.3)] mb-8 group-hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transition-shadow duration-500">
                                            <img src={whatsappLogo} alt="WhatsApp" loading="lazy" className="w-16 h-16 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h3 className="font-black font-heading text-2xl md:text-3xl text-white uppercase tracking-tight mb-8">
                                            Direct Support
                                        </h3>
                                        <Button
                                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                                            size="lg"
                                            className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-lg py-4 rounded-xl shadow-[0_10px_30px_rgba(37,211,102,0.2)] group-hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-[1.02]"
                                        >
                                            Chat on WhatsApp
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutContact;
