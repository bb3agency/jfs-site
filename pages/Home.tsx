import React, { useRef } from 'react';
import { ArrowUpRight, Truck, ShieldCheck, Star, Plus, CheckCircle2, Quote, Beaker, Leaf, Factory, ChevronRight, Lock, Award, Zap, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { PRODUCTS, BRANDS_LIST, FEATURES_LIST } from '../data';
import { Product, Category } from '../types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mobileHeroImage from '../assets/jfs-canva-hero-image.jpg';
import heroBackgroundImage from '../assets/jfs-hero-image-with-background.JPEG';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
    onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter Data for Sections
    const bestSellers = PRODUCTS.filter((p) => p.rating >= 4.7).slice(0, 4);
    const newArrivals = [...PRODUCTS].reverse().slice(0, 4);
    const wheyProducts = PRODUCTS.filter(p => p.category === Category.WHEY_PROTEIN || p.category === Category.WHEY_ISOLATE).slice(0, 4);

    // Custom Category Images for the Circular View
    const CATEGORIES_DISPLAY = [
        { name: 'Proteins', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Gainer', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
        { name: 'Creatine', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=400&auto=format&fit=crop' },
        { name: 'Pre-workout', image: 'https://images.unsplash.com/photo-1623875604107-166299d6387a?q=80&w=400&auto=format&fit=crop' },
        { name: 'Fat Burner', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Vitamins', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
    ];

    useGSAP(() => {
        // Hero Animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-content', { y: 30, opacity: 0, duration: 1, delay: 0.2 })
            .from('.hero-image', { x: 50, opacity: 0, duration: 1.2 }, "-=0.8");

        // General Section Stagger
        const sections = ['.categories-section', '.bestsellers-section', '.new-arrivals-section', '.brands-section', '.trending-section', '.authenticity-section'];
        sections.forEach(section => {
            gsap.from(section, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                }
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full overflow-hidden bg-white">

            {/* 1. Hero Section (Mobile Optimized) */}
            <section className="relative min-h-screen md:min-h-[90vh] bg-slate-950 flex flex-col justify-end md:justify-center items-center overflow-hidden">
                {/* Desktop Hero Image */}
                <div className="absolute inset-0 hidden md:block">
                    <img
                        src={heroBackgroundImage}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Mobile Hero Image */}
                <div className="absolute inset-0 md:hidden bg-slate-950">
                    <img
                        src={mobileHeroImage}
                        alt="Hero"
                        className="w-full h-full object-contain object-top"
                    />
                    {/* Gradient Overlay for buttons visibility - Stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                </div>



                {/* Added pb-32 to clear the mobile floating nav */}
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-20 pb-32 md:pb-0 h-full justify-end md:justify-center">
                    <div className="hero-content flex-1 text-center md:text-left w-full px-4 md:px-0">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold font-heading text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 backdrop-blur-sm">
                            #1 Trusted Supplement Store
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black font-heading text-white leading-[0.9] tracking-tight mb-4 md:mb-6">
                            FUEL YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">AMBITION.</span>
                        </h1>
                        <p className="text-slate-300 md:text-slate-400 text-base md:text-xl max-w-xl leading-relaxed mb-6 md:mb-8 mx-auto md:mx-0">
                            Authentic supplements sourced directly from brands. No middlemen, no fake products. Just pure performance.
                        </p>

                        <div className="flex flex-col gap-3 justify-center md:justify-start w-full md:w-auto">
                            <Button onClick={() => navigate('/products')} className="bg-yellow-400 text-slate-950 hover:bg-yellow-300 border-none px-8 py-4 text-base font-black uppercase tracking-wider w-full md:w-auto rounded-xl shadow-lg shadow-yellow-400/20 transform transition-transform active:scale-95">
                                Shop Now
                            </Button>
                            <Button variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-base font-bold w-full md:w-auto rounded-xl backdrop-blur-md transition-colors">
                                View Brands
                            </Button>
                        </div>
                    </div>
                    <div className="hero-image flex-1 relative hidden md:block">
                        <img
                            src="https://pngimg.com/d/protein_supplement_PNG10.png"
                            alt="Protein Jar"
                            className="w-[80%] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Categories (Circular Style) (Unchanged) */}
            <section className="categories-section py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-black font-heading text-slate-900 text-center mb-12 uppercase tracking-tight">Shop By Category</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                        {CATEGORIES_DISPLAY.map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer" onClick={() => navigate('/products')}>
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 border-2 border-slate-100 group-hover:border-yellow-400 transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                </div>
                                <span className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-wide group-hover:text-yellow-600 transition-colors">
                                    {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Best Sellers Section (Unchanged) */}
            <section className="bestsellers-section py-12 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight mb-2">Best Sellers</h2>
                            <p className="text-slate-500">Top rated products by our community.</p>
                        </div>
                        <button onClick={() => navigate('/products')} className="hidden md:flex items-center gap-2 text-sm font-bold text-yellow-600 hover:underline">
                            View All <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Authenticity Banner (FIXED) */}
            <section className="authenticity-section py-16 md:py-24 bg-slate-900 relative overflow-hidden my-6 md:my-8">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                {/* Added a subtle radial gradient for spotlight effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-white/5 to-transparent opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center bg-slate-800/50 backdrop-blur-md rounded-[3rem] p-12 border border-white/5 shadow-2xl">
                        <div className="inline-flex items-center justify-center p-5 bg-yellow-400 rounded-2xl mb-8 text-slate-900 shadow-lg shadow-yellow-400/20 transform hover:rotate-12 transition-transform duration-300">
                            <ShieldCheck size={42} strokeWidth={2} />
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black font-heading text-white uppercase tracking-tight mb-6 leading-none">
                            100% Authentic. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Guaranteed.</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light">
                            We take purity seriously. Every product is sourced directly from the manufacturer and verified for authenticity. Scan, verify, and consume with confidence.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                onClick={() => navigate('/products')}
                                className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-black uppercase px-10 py-5 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3"
                            >
                                <CheckCircle2 size={24} />
                                Shop Verified Products
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. New Arrivals Section (Unchanged) */}
            <section className="new-arrivals-section py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Just Dropped</span>
                            <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight mt-1">New Arrivals</h2>
                        </div>
                        <button onClick={() => navigate('/products')} className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 hover:underline">
                            See All Products <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Promotional Split Banners (Unchanged) */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Banner 1 */}
                        <div className="relative h-80 md:h-96 rounded-[2rem] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
                                alt="Gains"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start">
                                <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">Build Muscle</span>
                                <h3 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-6">
                                    PACK ON <br /> SERIOUS GAINS
                                </h3>
                                <div className="flex flex-col gap-1 text-white/80 font-medium mb-8">
                                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-400" /> Mass Gainers</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-400" /> Creatine Monohydrate</span>
                                </div>
                                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                                    Shop Essentials
                                </Button>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="relative h-80 md:h-96 rounded-[2rem] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                                alt="Performance"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-red-900/90 to-red-900/40"></div>
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-end text-right">
                                <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2">Limited Time</span>
                                <h3 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-4">
                                    BUY 2 GET <br /> <span className="text-yellow-400">EXTRA 15% OFF</span>
                                </h3>
                                <p className="text-white/90 mb-8 max-w-xs">Use code <strong>POWER15</strong> at checkout on all pre-workouts and BCAAs.</p>
                                <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold">
                                    Grab The Deal
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Trending in Whey (FIXED) */}
            <section className="trending-section py-12 md:py-20 bg-slate-50 relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div className="relative">
                            <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-widest text-xs mb-3">
                                <TrendingUp size={16} />
                                <span>Hot Right Now</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight">
                                Trending in Whey
                            </h2>
                            <div className="absolute -left-6 top-0 h-full w-1 bg-yellow-400 hidden md:block rounded-full"></div>
                        </div>
                        <p className="text-slate-500 font-medium max-w-sm text-sm md:text-base">
                            The most popular protein choices fueling athletes this week.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {wheyProducts.length > 0 ? (
                            wheyProducts.map(product => (
                                <div key={product.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                                    <ProductCard product={product} onAddToCart={onAddToCart} />
                                </div>
                            ))
                        ) : (
                            bestSellers.map(product => (
                                <div key={product.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                                    <ProductCard product={product} onAddToCart={onAddToCart} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* 8. Brands Carousel (Tidied Up) */}
            <section className="brands-section py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-black font-heading text-slate-900 uppercase tracking-tight mb-4">
                            Secure Our Top-Tier Brands
                        </h3>
                        <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Changed from circles to grid of pill/cards for cleaner look */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {BRANDS_LIST.map((brand, idx) => (
                            <div key={idx} className="group relative h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-6 hover:shadow-lg hover:border-yellow-400 hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden">
                                <span className="relative z-10 text-center font-bold text-slate-500 text-sm md:text-base group-hover:text-slate-900 uppercase tracking-tight transition-colors">
                                    {brand}
                                </span>
                                {/* Hover effect background */}
                                <div className="absolute inset-0 bg-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Why Choose Us (Unchanged) */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black font-heading text-slate-900">Why Choose Supplemart?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                                <Truck size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Free Fast Shipping</h4>
                            <p className="text-slate-500 leading-relaxed">Get free delivery on all prepaid orders above $50. We ship within 24 hours.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                                <Award size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">100% Authentic</h4>
                            <p className="text-slate-500 leading-relaxed">Products sourced directly from the brands with verification tags.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                                <Lock size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Secure Payments</h4>
                            <p className="text-slate-500 leading-relaxed">Pay with any credit card, UPI, or wallet securely via our encrypted gateway.</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default Home;