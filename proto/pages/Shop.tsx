import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    // Sync category if URL changes
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    else if (!searchQuery) setSelectedCategory('All');
  }, [location.search, searchQuery]);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    // Filter by Category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }

    // Filter by Price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // Default / Popular (mock logic using rating)
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  return (
    <div className="bg-white min-h-screen pt-28 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark uppercase tracking-[1px]">
            {searchQuery ? `Search: "${searchQuery}"` : 'Shop Supplements'}
          </h1>
          
          <button 
            className="md:hidden flex items-center gap-2 bg-dark text-white px-4 py-2 rounded shadow font-heading font-semibold uppercase tracking-wider"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-28">
              <div className="flex justify-between items-center md:hidden mb-4">
                <h3 className="font-heading font-bold text-dark text-xl uppercase tracking-wide">FILTERS</h3>
                <button onClick={() => setShowFilters(false)} className="text-gray-500"><X size={20} /></button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-dark text-lg mb-4 uppercase border-b border-gray-100 pb-2 tracking-[0.5px]">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className={`text-sm font-sans hover:text-primary transition-colors ${selectedCategory === 'All' ? 'text-primary font-bold' : 'text-gray-600 font-normal'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {CATEGORIES.map(cat => (
                    <li key={cat.name}>
                      <button 
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`text-sm font-sans hover:text-primary transition-colors text-left ${selectedCategory === cat.name ? 'text-primary font-bold' : 'text-gray-600 font-normal'}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-dark text-lg mb-4 uppercase border-b border-gray-100 pb-2 tracking-[0.5px]">Price Range</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4 font-sans font-normal">
                  <span>₹0</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="10000" 
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-primary"
                  />
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

               {/* Sort Mobile */}
               <div className="md:hidden mb-4">
                <h3 className="font-heading font-semibold text-dark text-lg mb-4 uppercase border-b border-gray-100 pb-2 tracking-[0.5px]">Sort By</h3>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 text-dark p-2 rounded focus:border-primary focus:outline-none font-sans"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
               </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="md:w-3/4">
            {/* Toolbar */}
            <div className="hidden md:flex justify-between items-center mb-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-gray-600 text-sm font-sans font-normal">Showing {filteredProducts.length} results</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-dark font-heading uppercase tracking-wide">Sort By:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-dark p-2 rounded focus:border-primary focus:outline-none text-sm cursor-pointer font-sans"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-dark mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
                <button 
                  onClick={() => {setSelectedCategory('All'); setPriceRange([0,10000]);}}
                  className="mt-4 text-primary font-bold underline hover:text-yellow-600"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;