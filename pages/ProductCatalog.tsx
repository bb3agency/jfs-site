import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product, Category } from '../types';
import { Search, SlidersHorizontal, Filter } from 'lucide-react';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Generate categories list including 'All'
  const categories = ['All', ...Object.values(Category)];

  // Filter products based on Category AND Search Term
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const term = searchTerm.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });


  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 pt-6 pb-32 md:pt-40 md:pb-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="catalog-header">
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
        <div className="mb-8 md:mb-12">
          <div className="category-label flex items-center gap-2 text-xs md:text-sm font-bold text-slate-400 uppercase tracking-tight mb-3 md:mb-4">
            <Filter size={14} className="md:w-4 md:h-4" />
            <span>Filter by Category</span>
          </div>

          {/* Scrollable on mobile, Wrapped on desktop. Added vertical padding to prevent shadow clipping */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-8 pt-4 -mb-4 -mt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-2 md:flex-wrap items-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill flex-shrink-0 whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border select-none ${selectedCategory === cat
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
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
            <div className="col-span-full py-16 md:py-32 text-center bg-white rounded-3xl border border-dashed border-slate-200 product-item">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-50 text-slate-300 mb-4 md:mb-6">
                <Search size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">We couldn't find any matches for "{searchTerm}" in {selectedCategory}.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 md:mt-6 text-yellow-600 font-bold hover:underline text-sm md:text-base"
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