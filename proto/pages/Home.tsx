import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES, TRANSFORMATIONS, TESTIMONIALS, HERO_IMAGES } from '../constants';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll Logic for Hero Section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const { top, height } = heroRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const windowHeight = window.innerHeight;

      const scrollableDistance = height - windowHeight;
      const rawProgress = scrollPosition / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      if (progress < 0.5) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* PREMIUM SCROLL-BASED HERO SECTION */}
      <section ref={heroRef} className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

          {/* Background Layer (White Gradient) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

          {/* Dynamic Image Layer */}
          <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 overflow-hidden">
            {HERO_IMAGES.map((img, index) => (
              <div
                key={img.id}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out will-change-transform ${index === activeImageIndex
                    ? 'translate-x-0 opacity-100'
                    : index < activeImageIndex
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
              >
                {/* Yellow glow behind subject - reduced opacity */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay blur-3xl transform scale-110"></div>

                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center md:object-right filter contrast-110 brightness-95"
                />
              </div>
            ))}

            {/* Scroll Indicator Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
              {HERO_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-12 rounded-full transition-all duration-500 ${idx === activeImageIndex ? 'bg-primary scale-y-110' : 'bg-white/40'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Content Layer */}
          <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
            <div className="max-w-2xl pt-32 md:pt-0">
              <div className="overflow-hidden mb-4">
                <span key={activeImageIndex} className="block text-primary font-bold tracking-[0.3em] uppercase animate-slide-in-left">
                  {HERO_IMAGES[activeImageIndex].tagline}
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-heading font-bold text-dark mb-8 uppercase leading-[0.9] opacity-0 animate-fade-in-up [animation-delay:200ms] tracking-[1px]">
                Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary">Strongest</span> <br />
                Body
              </h1>

              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg leading-[1.6] opacity-0 animate-fade-in-up [animation-delay:400ms] font-sans font-normal">
                Premium supplements and elite coaching designed for those who refuse to settle for average.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">
                <Link
                  to="/shop"
                  className="group bg-primary text-secondary font-heading font-semibold text-lg px-10 py-4 rounded hover:bg-dark hover:text-white transition-all duration-300 text-center uppercase tracking-wider flex items-center justify-center shadow-subtle hover:shadow-lg"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/coaching"
                  className="group relative overflow-hidden bg-transparent border-2 border-dark text-dark font-heading font-semibold text-lg px-10 py-4 rounded hover:text-white transition-colors text-center uppercase tracking-wider flex items-center justify-center"
                >
                  <span className="absolute inset-0 w-full h-full bg-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative flex items-center">
                    Start Coaching <Play className="ml-2 h-4 w-4 fill-current" />
                  </span>
                </Link>
              </div>

              <div className="absolute bottom-10 left-4 md:left-0 text-dark/50 text-xs tracking-widest uppercase animate-bounce">
                Scroll to Explore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Carousel - Reduced bottom padding to minimize gap */}
      <section className="pt-20 pb-4 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark uppercase tracking-tight">
                Shop By <span className="text-primary">Category</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mt-4 rounded-full"></div>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollCategories('left')} className="p-3 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollCategories('right')} className="p-3 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar snap-x"
          >
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="min-w-[160px] md:min-w-[200px] flex flex-col items-center gap-4 snap-start group"
              >
                {/* Card Shape matching reference */}
                <div className="w-full aspect-square bg-gray-200 rounded-[2.5rem] p-4 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 group-hover:bg-gray-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                  />
                  {/* Overlay for interaction */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors rounded-[2.5rem]"></div>
                </div>

                <h3 className="text-lg md:text-xl font-bold font-heading uppercase text-center text-dark group-hover:text-primary transition-colors tracking-wide">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Reduced top padding and centered layout */}
      <section className="pt-8 pb-24 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Top Rated</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark uppercase tracking-tight mb-4">
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Now</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>

            <Link to="/shop" className="inline-flex items-center text-dark font-bold hover:text-primary transition-colors text-sm uppercase tracking-wider group">
              View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Preview - Premium White Section */}
      <section className="py-24 bg-white text-dark relative z-30 overflow-hidden">
        {/* Abstract bg element - subtle gray */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-dark mb-6 uppercase tracking-tight">
              Real <span className="text-primary">Results</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
              Discipline and the right fuel create masterpieces. See what our clients have achieved with JFS Protein.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRANSFORMATIONS.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="flex h-72 relative">
                  <div className="w-1/2 relative border-r border-gray-100">
                    <img src={item.imageBefore} alt="Before" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    <span className="absolute bottom-3 left-3 bg-white/90 text-dark text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm border border-gray-200 shadow-sm">BEFORE</span>
                  </div>
                  <div className="w-1/2 relative">
                    <img src={item.imageAfter} alt="After" className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">AFTER</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-dark font-heading uppercase">{item.name}</h3>
                    <span className="text-primary text-xs font-bold border border-primary px-3 py-1 rounded-full uppercase bg-primary/10">{item.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm italic mb-6 border-l-2 border-primary/30 pl-4 font-sans">"{item.testimonial}"</p>
                  <div className="flex items-center text-green-600 text-sm font-bold bg-green-50 p-3 rounded-lg border border-green-100">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/transformations"
              className="inline-block bg-dark text-white font-heading font-semibold px-12 py-4 rounded hover:bg-primary hover:text-white transition-colors uppercase tracking-widest shadow-lg hover:shadow-primary/30"
            >
              See All Transformations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Light Background */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-16 text-center uppercase tracking-tight">
            Client <span className="text-primary">Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white border border-gray-100 p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-20 rounded-full"></div>
                  <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover border-4 border-white relative z-10 shadow-md" />
                </div>
                <div>
                  <div className="flex justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary clip-polygon"></div> // Abstract star alternative or just stick to stars
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-dark text-xl font-heading uppercase">{t.name}</h4>
                    <span className="text-primary text-xs uppercase tracking-widest font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;