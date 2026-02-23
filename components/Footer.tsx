import React from 'react';
import { ArrowRight, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full px-4 md:px-6 pb-4 md:pb-6 mt-12 md:mt-20 relative overflow-hidden">
            {/* Main Rounded Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800/50">

                {/* Background Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none select-none flex items-center justify-center opacity-[0.03]">
                    <span className="text-[15vw] md:text-[11vw] font-black font-heading text-white leading-none tracking-tight whitespace-nowrap">
                        JFS FITNESS
                    </span>
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-16 md:mb-24">

                    {/* Column 1: GENERAL */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-black text-xs text-slate-500 uppercase tracking-tight mb-6 md:mb-8">
                            General
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><Link to="/" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Home</Link></li>
                            <li><Link to="/about" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">About Us</Link></li>
                            <li><Link to="/career" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Careers</Link></li>
                            <li><Link to="/contact" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: PRODUCTS */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-black text-xs text-slate-500 uppercase tracking-tight mb-6 md:mb-8">
                            Products
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><Link to="/products" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">All Products</Link></li>
                            <li><Link to="/category/whey" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Whey Protein</Link></li>
                            <li><Link to="/category/pre-workout" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Pre-Workout</Link></li>
                            <li><Link to="/category/accessories" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: CUSTOMER SERVICE */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-black text-xs text-slate-500 uppercase tracking-tight mb-6 md:mb-8">
                            Customer Service
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li><Link to="/faq" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: SOCIAL MEDIA & NEWSLETTER (Combined conceptually as 'Connect') */}
                    <div className="flex flex-col">
                        <h4 className="font-heading font-black text-xs text-slate-500 uppercase tracking-tight mb-6 md:mb-8">
                            Social Media
                        </h4>
                        <ul className="space-y-3 md:space-y-4 mb-4">
                            <li><a href="https://www.instagram.com/jfs.protein.store/" target="_blank" rel="noopener noreferrer" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">Instagram</a></li>
                            <li><a href="https://www.youtube.com/@Masterjoy09" target="_blank" rel="noopener noreferrer" className="font-body text-slate-300 hover:text-yellow-400 transition-colors text-sm md:text-base font-medium block">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Large Brand Text at absolute bottom if desired, or here */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end border-t border-slate-800/50 pt-8">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {currentYear} Joy Fitness Solutions.
                    </p>
                </div>

                {/* Large Bottom Text 'JFS' aligned to bottom center - Optional alternate style if watermark isn't enough */}
                {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[15rem] font-bold font-heading text-slate-800/20 leading-none select-none pointer-events-none">
                    JFS
                 </div> */}

            </div>
        </footer>
    );
};

export default Footer;
