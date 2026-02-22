import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

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
    <div className="bg-white min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        
        {/* SECTION 1: ABOUT */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <span className="text-primary font-heading font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark uppercase mb-6 leading-tight">
                Fueling Your <br/><span className="text-primary">Ambition</span>
              </h1>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
              
              <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
                <p>
                  At <span className="font-bold text-dark">JFS Protein</span>, we believe that greatness isn't given—it's earned. Founded with a single mission: to provide athletes and fitness enthusiasts with the highest quality supplements that deliver real, tangible results.
                </p>
                <p>
                  We don't just sell products; we fuel transformations. Whether you're a professional bodybuilder, a competitive athlete, or someone just starting their fitness journey, our premium range of whey proteins, mass gainers, and essentials are formulated to help you break barriers.
                </p>
                <p>
                  Backed by science and trusted by elite trainers, JFS Protein stands for purity, potency, and performance. No shortcuts. No compromises. Just pure gains.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary">100%</h3>
                  <p className="text-xs font-heading uppercase tracking-wider font-bold text-dark mt-1">Authentic</p>
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary">5000+</h3>
                  <p className="text-xs font-heading uppercase tracking-wider font-bold text-dark mt-1">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-primary">24/7</h3>
                  <p className="text-xs font-heading uppercase tracking-wider font-bold text-dark mt-1">Expert Support</p>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
                  alt="JFS Protein Athlete" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading font-bold text-2xl uppercase">Rahul Sharma</p>
                  <p className="font-sans text-sm opacity-90">Head Coach & Founder</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-24"></div>

        {/* SECTION 2: CONTACT */}
        <section id="contact">
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-bold tracking-widest uppercase text-sm mb-2 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark uppercase mb-4">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-gray-500 font-sans max-w-xl mx-auto">
              Have questions about our products or need coaching advice? We're here to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-heading font-bold text-xl text-dark uppercase mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark text-sm uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="font-sans text-gray-600 hover:text-primary transition-colors text-lg">
                        +91 90004 21844
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Available Mon-Sat, 9am - 8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark text-sm uppercase tracking-wide mb-1">Email Address</p>
                      <a href="mailto:support@jfsprotein.com" className="font-sans text-gray-600 hover:text-primary transition-colors text-lg">
                        support@jfsprotein.com
                      </a>
                      <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark text-sm uppercase tracking-wide mb-1">Headquarters</p>
                      <p className="font-sans text-gray-600 text-lg leading-snug">
                        123 Fitness Street, Muscle City,<br/>
                        State, India 400001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-heading font-bold text-dark text-sm uppercase tracking-wide mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-white p-3 rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-dark uppercase mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-heading font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-bold text-gray-700 uppercase tracking-wide mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-heading font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message <Send size={18} />
                </button>
                
                <p className="text-center text-xs text-gray-400 font-sans mt-4">
                  By sending this message, you agree to be contacted via WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContact;
