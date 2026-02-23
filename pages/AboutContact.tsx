import React, { useState } from 'react';
import { MapPin, Instagram, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import Button from '../components/Button';
import whatsappLogo from '../assets/whatsapp_logo.png';

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
                        <div className="lg:w-1/2 relative w-full">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] object-cover border-8 border-white group">
                                <img
                                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop"
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
                <section id="contact" className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-sm border border-slate-100">
                    <div className="text-center mb-16">
                        <span className="text-yellow-500 font-bold tracking-tight uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight mb-6">
                            Contact <span className="text-slate-400">Us</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Have questions about our products or need coaching advice? We're here to help you achieve your goals. Reach out to our dedicated support team today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-12 flex flex-col justify-center">
                            <div className="pt-8 md:pt-0">
                                <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-6">Follow Our Journey</p>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/jfs.protein.store/" target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-slate-900 hover:text-white p-4 rounded-2xl text-slate-600 transition-all duration-300">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="https://www.youtube.com/@Masterjoy09" target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-slate-900 hover:text-white p-4 rounded-2xl text-slate-600 transition-all duration-300">
                                        <Youtube size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Action */}
                        <div className="lg:col-span-3 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 flex flex-col justify-center items-center text-center">
                            <img src={whatsappLogo} alt="WhatsApp" className="w-24 h-24 mb-8 drop-shadow-md hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-black font-heading text-3xl md:text-4xl text-slate-900 uppercase tracking-tight mb-4">Connect on WhatsApp</h3>
                            <p className="text-slate-500 font-medium mb-10 max-w-md">
                                Skip the forms. Message us directly on WhatsApp for the fastest support, product recommendations, and coaching inquiries.
                            </p>
                            <Button
                                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                                size="lg"
                                className="w-full md:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold text-lg px-12 py-5 rounded-2xl shadow-lg shadow-[#25D366]/30"
                            >
                                Chat With Us Now
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutContact;
