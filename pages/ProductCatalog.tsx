import React, { useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product, Category } from '../types';
import { Search, SlidersHorizontal, Filter } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate categories list including 'All'
  const categories = ['All', ...Object.values(Category)];

  // Filter products based on Category AND Search Term
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    // Use fromTo for all animations to ensure start/end states are deterministic
    // This prevents elements from getting stuck at opacity: 0 during re-renders
    tl.fromTo('.catalog-header',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo('.catalog-search',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo('.category-label',
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo('.category-pill',
        { y: 15, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.2)'
        },
        "-=0.2"
      )
      .fromTo('.product-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 pt-24 pb-32 md:pt-40 md:pb-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="catalog-header"> {/* Initial opacity 0 to prevent flash before animation */}
            <h1 className="text-4xl md:text-6xl font-black font-heading text-slate-900 tracking-tight mb-4">
              The Collection
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
              Premium supplements designed for performance. Filter by category to find your perfect match.
            </p>
          </div>

          {/* Search Bar */}
          <div className="catalog-search w-full lg:w-96 relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-12 py-4 rounded-full bg-white border border-slate-200 text-slate-900 font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 placeholder:font-normal"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
              <SlidersHorizontal size={18} />
            </div>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="mb-12">
          <div className="category-label flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            <Filter size={14} />
            <span>Filter by Category</span>
          </div>

          {/* Scrollable on mobile, Wrapped on desktop. Added min-height to prevent collapse during loading */}
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap min-h-[50px] items-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill flex-shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border select-none ${selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20 transform scale-105'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white rounded-3xl border border-dashed border-slate-200 product-item">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 text-slate-300 mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 font-medium">We couldn't find any matches for "{searchTerm}" in {selectedCategory}.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-6 text-yellow-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductCatalog;