import React, { useRef } from 'react';
import { ArrowUpRight, Truck, ShieldCheck, Star, Plus, CheckCircle2, Quote, Beaker, Leaf, Factory, ChevronRight, Lock, Award, Zap, TrendingUp } from 'lucide-react';
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

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
    onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    // Filter Data for Sections
    const bestSellers = PRODUCTS.slice(0, 4);
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
                        loading="eager"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Mobile Hero Image */}
                <div className="absolute inset-0 md:hidden bg-slate-950">
                    <img
                        src={mobileHeroImage}
                        alt="Hero"
                        loading="eager"
                        className="w-full h-full object-contain object-top"
                    />
                    {/* Gradient Overlay for buttons visibility - Stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                </div>



                {/* Added pb-32 to clear the mobile floating nav and pt-32 on desktop to lower the hero component offset */}
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-20 pb-32 md:pt-32 md:pb-0 h-full justify-end md:justify-center">
                    <div className="hero-content flex-1 text-center md:text-left w-full px-4 md:px-0">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold font-heading text-[10px] md:text-xs uppercase tracking-tight mb-4 md:mb-6 backdrop-blur-sm">
                            100% Authentic Supplements
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black font-heading text-white leading-[0.9] tracking-tight mb-4 md:mb-6">
                            FUEL YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">AMBITION.</span>
                        </h1>
                        <p className="text-slate-300 md:text-slate-400 text-base md:text-xl max-w-xl leading-relaxed mb-6 md:mb-8 mx-auto md:mx-0">
                            Authentic supplements sourced directly from brands. No middlemen, no fake products. Just pure performance.
                        </p>

                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full md:w-auto mt-2">
                            <Button onClick={() => navigate('/products')} className="bg-yellow-400 !text-slate-950 hover:bg-yellow-300 border-none px-8 py-3.5 md:py-4 text-sm md:text-base font-black uppercase tracking-wider w-full md:w-auto rounded-xl shadow-lg ring-2 ring-yellow-400/50 ring-offset-2 ring-offset-slate-950 transform transition-all hover:ring-yellow-400 active:scale-95">
                                Shop Now
                            </Button>
                            <Button onClick={() => document.getElementById('brands-section')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 md:py-4 text-sm md:text-base font-bold w-full md:w-auto rounded-xl backdrop-blur-md transition-colors">
                                View Brands
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Features Section (New Custom) */}
            <section className="py-8 md:py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Box 1 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <ShieldCheck size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-slate-900 leading-tight uppercase font-heading mb-2">
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
                                <h3 className="text-base font-black text-slate-900 leading-tight uppercase font-heading mb-2">
                                    Expertly Curated Selection
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    We filter through hundreds of options to bring you a verified and diverse selection of top-performing supplements.
                                </p>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <Star size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-slate-900 leading-tight uppercase font-heading mb-2">
                                    Community & Expert Rated
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    Benefit from real customer reviews and fitness expert insights. We only host products that meet JFS high-quality standards.
                                </p>
                            </div>
                        </div>
                        {/* Box 4 */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl inline-flex w-fit group-hover:bg-yellow-50 group-hover:border-yellow-200 transition-colors">
                                <Truck size={28} strokeWidth={2} className="text-slate-700 group-hover:text-yellow-600 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-slate-900 leading-tight uppercase font-heading mb-2">
                                    Seamless Shopping & Fast Delivery
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    Secure WhatsApp checkout and ultra-fast shipping ensure your products arrive fresh and when you need them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Categories (Circular Style) */}
            <section className="categories-section py-10 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-900 text-center mb-8 md:mb-12 uppercase tracking-tight">Shop By Category</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-12">
                        {CATEGORIES_LIST.map((cat, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 md:gap-4 group cursor-pointer w-[28%] md:w-auto" onClick={() => navigate(`/products?category=${encodeURIComponent(cat.name)}`)}>
                                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full p-1 border-2 border-slate-100 group-hover:border-yellow-400 transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
                                        <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                </div>
                                <span className="text-[10px] md:text-base font-bold text-slate-900 uppercase tracking-wide group-hover:text-yellow-600 transition-colors text-center leading-tight">
                                    {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Best Sellers Section (SaaS Grid Background) */}
            <section className="bestsellers-section py-10 md:py-12 bg-slate-50 relative">
                {/* SaaS background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex justify-between items-end mb-6 md:mb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-900 tracking-tight mb-1 md:mb-2">Best Sellers</h2>
                            <p className="text-sm md:text-base text-slate-500">Top rated products by our community.</p>
                        </div>
                        <button onClick={() => navigate('/products')} className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold text-yellow-600 hover:underline border border-yellow-200 bg-yellow-50 px-3 py-1.5 md:border-none md:bg-transparent md:px-0 md:py-0 rounded-full md:rounded-none">
                            View All <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Carousel (Moved to below Best Sellers) */}
            <section id="brands-section" className="brands-section py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl font-black font-heading text-slate-900 uppercase tracking-tight mb-4">
                            Secure Our Top<span className="font-sans">-</span>Tier Brands
                        </h3>
                        <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12 items-center justify-items-center max-w-5xl mx-auto px-4">
                        {BRANDS_LIST.map((brand, idx) => (
                            <div key={idx} className="flex items-center justify-center w-full h-16 md:h-20">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    loading="lazy"
                                    className="object-contain w-full max-w-[120px] max-h-[50px] md:max-w-[160px] md:max-h-[70px] mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Real Results / Transformations Preview */}
            < section className="py-12 md:py-24 bg-slate-50 relative z-30 overflow-hidden" >
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-yellow-500 font-bold tracking-tight uppercase text-xs md:text-sm mb-2 md:mb-4 block">Proven Success</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 mb-4 md:mb-6 uppercase tracking-tight">
                            Real <span className="text-slate-400">Results</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
                            Discipline and the right fuel create masterpieces. See what our clients have achieved under the expert training of Prabha Joy.
                        </p>
                        <div className="w-16 md:w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4 md:mt-6"></div>
                    </div>

                    <div className="columns-2 md:columns-4 gap-3 md:gap-6 space-y-3 md:space-y-6 overflow-hidden px-2 md:px-0">
                        {TRANSFORMATIONS.slice(0, 4).map((item) => (
                            <div key={item.id} className="break-inside-avoid shadow-sm rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:border-slate-300 border border-slate-100 transition-all duration-300 group hover:-translate-y-1">
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

                    <div className="text-center mt-10 md:mt-16">
                        <Button
                            onClick={() => navigate('/transformations')}
                            size="lg"
                            className="bg-slate-900 text-white font-bold px-8 md:px-10 text-sm md:text-base hover:bg-slate-800 w-full md:w-auto rounded-xl md:rounded-full"
                            icon={<ArrowUpRight size={18} className="md:w-5 md:h-5" />}
                        >
                            See All Transformations
                        </Button>
                    </div>
                </div>
            </section >

            {/* 5. New Arrivals Section */}
            < section className="new-arrivals-section py-10 md:py-12 bg-white" >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-6 md:mb-10">
                        <div>
                            <span className="text-yellow-500 font-bold uppercase tracking-tight text-[10px] md:text-xs">Just Dropped</span>
                            <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-900 tracking-tight mt-0.5 md:mt-1">New Arrivals</h2>
                        </div>
                        <button onClick={() => navigate('/products')} className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold text-slate-900 hover:underline border border-slate-200 bg-slate-50 px-3 py-1.5 md:border-none md:bg-transparent md:px-0 md:py-0 rounded-full md:rounded-none">
                            See All <ChevronRight size={14} className="md:w-4 md:h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                </div>
            </section >

            {/* 6. Promotional Split Banners (Unchanged) */}
            < section className="py-10 md:py-12 bg-white" >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Banner 1 */}
                        <div className="relative h-64 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
                                alt="Gains"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center items-start">
                                <span className="text-yellow-400 font-bold uppercase tracking-tight text-[10px] md:text-sm mb-1 md:mb-2">Build Muscle</span>
                                <h3 className="text-2xl md:text-5xl font-black font-heading text-white leading-tight mb-4 md:mb-6">
                                    PACK ON <br /> SERIOUS GAINS
                                </h3>
                                <div className="flex flex-col gap-1 text-white/80 font-medium mb-6 md:mb-8 text-xs md:text-base">
                                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="md:w-4 md:h-4 text-yellow-400" /> Mass Gainers</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="md:w-4 md:h-4 text-yellow-400" /> Creatine</span>
                                </div>
                                <Button className="bg-white !text-black hover:bg-slate-100 font-bold text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 border-none">
                                    Shop Essentials
                                </Button>
                            </div>
                        </div>

                        {/* Banner 2 */}
                        <div className="relative h-64 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                                alt="Performance"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-red-900/90 to-red-900/40"></div>
                            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center items-end text-right">
                                <span className="text-white/80 font-bold uppercase tracking-tight text-[10px] md:text-sm mb-1 md:mb-2">Limited Time</span>
                                <h3 className="text-2xl md:text-5xl font-black font-heading text-white leading-tight mb-2 md:mb-4">
                                    BUY 2 GET <br /> <span className="text-yellow-400">EXTRA 15% OFF</span>
                                </h3>
                                <p className="text-white/90 mb-6 md:mb-8 max-w-[200px] md:max-w-xs text-xs md:text-base">Use code <strong>POWER15</strong> at checkout.</p>
                                <Button className="bg-yellow-400 !text-black hover:bg-yellow-300 font-bold text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 border-none">
                                    Grab The Deal
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 7. Trending in Whey */}
            <section className="trending-section py-12 md:py-20 bg-slate-50 relative overflow-hidden">
                {/* SaaS background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

                {/* Floating soft glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div className="relative">
                            <div className="flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-tight text-xs mb-3">
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
            </section >





            <Footer />
        </div >
    );
};

export default Home;