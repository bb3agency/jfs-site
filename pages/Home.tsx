import React, { useRef } from 'react';
import { ArrowUpRight, Truck, ShieldCheck, Plus, CheckCircle2, Quote, Beaker, Leaf, Factory, ChevronRight, Lock, Award, Zap, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { PRODUCTS, BRANDS_LIST, FEATURES_LIST, TRANSFORMATIONS, CATEGORIES_LIST } from '../data';
import { Product, Category } from '../types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mobileHeroImage from '../assets/jfs-canva-hero-image.jpg';
import heroBackgroundImage from '../assets/jfs-hero-image-with-background.JPEG';
import promoBannerImage from '../assets/promo-banner-bodybuilder.png';
import lightningRing from '../assets/lightning-ring.png';
import lightningRingWhite from '../assets/lightning-ring-white.png';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
    onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter Data for Sections
    const bestSellerIds = ['pre-6', 'iso-2', 'whey-4', 'bcaa-4'];
    const bestSellers = bestSellerIds.map(id => PRODUCTS.find(p => p.id === id)).filter((p): p is Product => p !== undefined);
    const newArrivals = [...PRODUCTS].reverse().slice(0, 4);
    const wheyProducts = PRODUCTS.filter(p => p.category === Category.WHEY_PROTEIN || p.category === Category.WHEY_ISOLATE).slice(0, 4);


    return (
        <div ref={containerRef} className="flex flex-col w-full overflow-hidden">

            {/* 1. Hero Section (Mobile Optimized) */}
            <section className="relative min-h-screen md:min-h-screen bg-slate-950 flex flex-col justify-end md:justify-center items-center overflow-hidden">
                {/* Desktop Hero Image */}
                <div className="absolute inset-0 hidden md:block">
                    <img
                        src={heroBackgroundImage}
                        alt="Hero Background"
                        fetchPriority="high"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Mobile Hero Image */}
                <div className="absolute inset-0 md:hidden bg-slate-950">
                    <img
                        src={mobileHeroImage}
                        alt="Hero"
                        fetchPriority="high"
                        className="w-full h-full object-contain object-top"
                    />
                    {/* Gradient Overlay for buttons visibility - Stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                </div>



                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-20 pb-16 md:pt-32 md:pb-20 h-full justify-end md:justify-center">
                    <div className="hero-content flex-1 text-center md:text-left w-full px-4 md:px-0">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-subheading font-normal text-[10px] md:text-xs uppercase tracking-tight mb-4 md:mb-6 backdrop-blur-sm">
                            100% Authentic Supplements
                        </div>
                        <h1 className="text-[40px] md:text-[64px] font-heading font-normal text-white leading-none tracking-tight mb-4 md:mb-6 uppercase">
                            FUEL YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">AMBITION.</span>
                        </h1>
                        <p className="text-white text-base md:text-xl max-w-xl leading-relaxed mb-6 md:mb-8 mx-auto md:mx-0">
                            Authentic supplements sourced directly from brands. No middlemen, no fake products. Just pure performance.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start w-full md:w-auto mt-2">
                            <Button onClick={() => navigate('/products')} className="bg-yellow-400 !text-slate-950 hover:bg-yellow-300 border-none px-8 py-4 text-sm md:text-base font-subheading font-semibold uppercase tracking-wider w-full md:w-auto rounded-xl shadow-lg ring-2 ring-yellow-400/50 ring-offset-2 ring-offset-slate-950 transform transition-all hover:ring-yellow-400 active:scale-95">
                                Shop Now
                            </Button>
                            <Button onClick={() => navigate('/coaching')} variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm md:text-base font-subheading font-semibold uppercase tracking-wider w-full md:w-auto rounded-xl backdrop-blur-md transition-colors">
                                COACHING
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* 2. Categories (Circular Style) */}
            <section className="categories-section py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-[24px] md:text-[36px] font-subheading text-slate-900 text-center mb-8 md:mb-12 uppercase tracking-tight">Shop By Category</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-12">
                        {CATEGORIES_LIST.map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 md:gap-4 group cursor-pointer w-[28%] md:w-auto" onClick={() => navigate(`/products?category=${encodeURIComponent(cat.name)}`)}>
                                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full p-1 border-2 border-slate-100 group-hover:border-yellow-400 transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden relative bg-white flex items-center justify-center">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            loading="lazy"
                                            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${(cat.name === 'Whey Protein' || cat.name === 'Whey Isolate' || cat.name === 'Pre-Workout')
                                                ? 'object-contain mix-blend-multiply p-2 md:p-4'
                                                : 'object-cover'
                                                }`}
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                    </div>
                                </div>
                                <span className="text-[10px] md:text-sm font-subheading text-slate-900 uppercase tracking-wide group-hover:text-yellow-600 transition-colors text-center leading-tight">
                                    {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Best Sellers Section (SaaS Grid Background) */}
            <section className="bestsellers-section py-16 md:py-20 bg-slate-100 relative">
                {/* SaaS background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
                        <div>
                            <h2 className="text-[24px] md:text-[36px] font-subheading text-slate-900 uppercase tracking-tight mb-2">Best Sellers</h2>
                            <p className="text-base text-slate-500 font-body">Top selling performance essentials.</p>
                        </div>
                        <Button
                            onClick={() => navigate('/products')}
                            variant="outline"
                            className="hidden md:flex items-center gap-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-subheading font-bold uppercase tracking-wider text-xs py-2 px-6 rounded-xl transition-all"
                        >
                            View All <ArrowUpRight size={16} />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Real Results / Transformations Preview */}
            <section className="py-16 md:py-20 bg-slate-100 relative z-30 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-yellow-500 font-bold tracking-tight uppercase text-xs md:text-sm mb-2 md:mb-4 block font-body">Proven Success</span>
                        <h2 className="text-[32px] md:text-[48px] font-heading font-normal text-slate-900 mb-4 md:mb-6 uppercase tracking-tight leading-none">
                            Real <span className="text-slate-400">Results</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
                            Discipline and the right fuel create masterpieces. See what our clients have achieved under the expert training of Prabha Joy.
                        </p>
                        <div className="w-16 md:w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4 md:mt-6"></div>
                    </div>

                    <div className="columns-2 md:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6 overflow-hidden px-2 md:px-0">
                        {TRANSFORMATIONS.slice(0, 4).map((item) => (
                            <div key={item.id} className="break-inside-avoid shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 border border-slate-100 transition-all duration-300 group hover:-translate-y-1">
                                <div className="relative bg-slate-100 w-full h-auto">
                                    <img
                                        src={item.image}
                                        alt="Client Transformation"
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 md:mt-16">
                        <Button
                            onClick={() => navigate('/transformations')}
                            size="lg"
                            className="bg-slate-900 text-white font-subheading font-semibold px-8 md:px-10 text-sm md:text-base hover:bg-slate-800 w-full md:w-auto rounded-xl"
                            icon={<ArrowUpRight size={18} className="md:w-5 md:h-5" />}
                        >
                            See All Transformations
                        </Button>
                    </div>
                </div>
            </section> {/* Brands Carousel (Moved to below Best Sellers) */}
            <section id="brands-section" className="brands-section py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h3 className="text-[24px] md:text-[36px] font-subheading text-slate-900 uppercase tracking-tight mb-4">
                            Secure Our Top<span className="font-sans">-</span>Tier Brands
                        </h3>
                        <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-12 items-center justify-items-center max-w-5xl mx-auto px-4">
                        {BRANDS_LIST.map((brand, idx) => (
                            <div key={idx} className="flex items-center justify-center w-full">
                                <div className="bg-slate-200 rounded-xl flex items-center justify-center w-full px-6 py-5">
                                    <img
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        loading="lazy"
                                        className="object-contain w-full max-w-[120px] max-h-[50px] md:max-w-[160px] md:max-h-[70px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. New Arrivals Section */}
            <section className="new-arrivals-section py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-8 md:mb-12">
                        <div>
                            <span className="text-yellow-500 font-bold uppercase tracking-tight text-[10px] md:text-xs">Just Dropped</span>
                            <h2 className="text-[24px] md:text-[36px] font-subheading text-slate-900 tracking-tight mt-0.5 md:mt-1 uppercase">New Arrivals</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>

                    <div className="text-center mt-12 md:mt-16">
                        <Button
                            onClick={() => navigate('/products')}
                            size="lg"
                            className="bg-slate-900 text-white font-subheading font-semibold px-8 md:px-10 text-sm md:text-base hover:bg-slate-800 w-full md:w-auto rounded-xl"
                            icon={<ChevronRight size={18} className="md:w-5 md:h-5" />}
                        >
                            View All New Arrivals
                        </Button>
                    </div>
                </div>
            </section>

            {/* 6. Promotional Split Banners (Unchanged) */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Banner 1 */}
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 60%, #020617 100%)' }}>
                            {/* Strong spotlight on figure */}
                            <div className="absolute right-[5%] bottom-0 w-[55%] h-[120%] bg-[radial-gradient(ellipse_at_bottom_center,rgba(255,220,100,0.22)_0%,rgba(234,179,8,0.10)_40%,transparent_70%)] pointer-events-none"></div>
                            {/* Top accent glow */}
                            <div className="absolute top-0 right-1/3 w-64 h-64 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none"></div>
                            {/* White lightning ring decorative - behind text */}
                            <img
                                src={lightningRingWhite}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[65%] opacity-100 pointer-events-none select-none z-0"
                            />
                            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none"></div>

                            {/* Left text gradient (moved BEFORE the image so it doesn't darken the subject) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 via-[#0f172a]/80 to-transparent pointer-events-none"></div>

                            <img
                                src={promoBannerImage}
                                alt="Gains"
                                loading="lazy"
                                className="absolute right-[-2%] bottom-[-8%] h-[130%] w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_40px_rgba(234,179,8,0.3)] z-10"
                            />
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center items-start max-w-[50%]">
                                <span className="text-yellow-400 font-bold uppercase tracking-tight text-[10px] md:text-sm mb-1 md:mb-2">Build Muscle</span>
                                <h3 className="text-[32px] md:text-[48px] font-heading font-normal text-white leading-none mb-6 md:mb-8 tracking-tight">
                                    PACK ON <br /> SERIOUS GAINS
                                </h3>
                                <Button
                                    onClick={() => navigate('/products')}
                                    className="bg-yellow-400 !text-slate-950 hover:bg-yellow-300 font-subheading font-semibold text-xs md:text-sm px-4 py-3 md:px-6 rounded-xl border-none shadow-lg shadow-yellow-400/20"
                                >
                                    Shop Essentials
                                </Button>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                                alt="Performance"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-red-900/90 to-red-900/40"></div>
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center items-start text-left">
                                <span className="text-white/80 font-bold uppercase tracking-tight text-[10px] md:text-sm mb-1 md:mb-2 font-body">Transform Your Life</span>
                                <h3 className="text-[32px] md:text-[48px] font-heading font-normal text-white leading-none mb-2 md:mb-4 tracking-tight">
                                    BUILD STRENGTH <br />
                                    BUILD DISCIPLINE <br />
                                    <span className="text-yellow-400 font-heading">BUILD RESULTS</span>
                                </h3>
                                <p className="text-white/90 mb-6 md:mb-8 max-w-[200px] md:max-w-xs text-xs md:text-base font-medium font-body leading-snug">Under the expert guidance of Prabha Joy.</p>
                                <Button
                                    onClick={() => navigate('/coaching')}
                                    className="bg-yellow-400 !text-black hover:bg-yellow-300 font-subheading font-semibold text-xs md:text-sm px-4 py-3 md:px-6 rounded-xl border-none shadow-lg shadow-yellow-400/20"
                                >
                                    Explore Coaching
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Trending in Whey */}
            <section className="trending-section py-16 md:py-20 bg-slate-100 relative overflow-hidden">
                {/* SaaS background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

                {/* Floating soft glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                        <div className="relative">
                            <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-tight text-xs mb-3 font-subheading">
                                <TrendingUp size={16} />
                                <span>Hot Right Now</span>
                            </div>
                            <h2 className="text-[32px] md:text-[48px] font-heading font-normal text-slate-900 tracking-tight leading-none uppercase">
                                Trending in Whey
                            </h2>
                            <div className="absolute -left-6 top-1 h-[80%] w-1 bg-yellow-400 hidden md:block rounded-full"></div>
                        </div>
                        <p className="text-slate-500 font-medium max-w-sm text-sm md:text-base font-body">
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


            {/* Features Section */}
            <section className="py-8 md:py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Box 1 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <ShieldCheck size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base  text-slate-900 leading-tight uppercase font-heading font-normal mb-2">
                                    100% Authenticity Guaranteed
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    Rest easy knowing every product is sourced directly from the authorized brand. Your peace of mind is our priority.
                                </p>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <Beaker size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base  text-slate-900 leading-tight uppercase font-heading font-normal mb-2">
                                    Expertly Curated Selection
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    We filter through hundreds of options to bring you a verified and diverse selection of top-performing supplements.
                                </p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <Truck size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base  text-slate-900 leading-tight uppercase font-heading font-normal mb-2">
                                    Seamless Shopping &amp; Fast Delivery
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    Secure WhatsApp checkout and ultra-fast shipping ensure your products arrive fresh and when you need them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
