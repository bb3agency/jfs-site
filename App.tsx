import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import TestimonialsPage from './pages/TestimonialsPage';
import ProductDetails from './pages/ProductDetails';
import { CartItem, Product } from './types';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart logic
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // setIsCartOpen(true); // Removed to prevent auto-opening the drawer
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/products" element={<ProductCatalog onAddToCart={addToCart} />} />
            <Route 
              path="/product/:id" 
              element={
                <ProductDetails 
                  onAddToCart={addToCart} 
                  cartItems={cartItems}
                  onUpdateQuantity={updateQuantity}
                />
              } 
            />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>

        <footer className="bg-[#0f172a] text-slate-400 py-16 border-t border-slate-800">
          <div className="container mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                   <div className="flex items-center gap-2">
                       <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold">
                          <span className="text-[9px]">JFS</span>
                       </div>
                       <span className="text-xl font-black text-white tracking-tight">JFS.</span>
                   </div>
                   <p className="text-sm leading-relaxed max-w-xs">
                     Premium fitness supplements backed by science. 
                     We believe every scoop should be genuine.
                   </p>
                   <div className="flex gap-4">
                      <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Twitter size={16} /></a>
                      <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Instagram size={16} /></a>
                      <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"><Facebook size={16} /></a>
                   </div>
                </div>

                {/* Shop Links */}
                <div>
                   <h3 className="font-bold text-white mb-6">Shop</h3>
                   <ul className="space-y-4 text-sm">
                      <li><a href="#" className="hover:text-yellow-400 transition-colors">Whey Protein</a></li>
                      <li><a href="#" className="hover:text-yellow-400 transition-colors">Pre-Workout</a></li>
                      <li><a href="#" className="hover:text-yellow-400 transition-colors">Vitamins</a></li>
                      <li><a href="#" className="hover:text-yellow-400 transition-colors">Accessories</a></li>
                   </ul>
                </div>

                {/* Company Links */}
                <div>
                   <h3 className="font-bold text-white mb-6">Company</h3>
                   <ul className="space-y-4 text-sm">
                      <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Athletes</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                   </ul>
                </div>

                {/* Newsletter */}
                <div>
                   <h3 className="font-bold text-white mb-6">Stay Updated</h3>
                   <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                   <div className="flex flex-col gap-2">
                      <div className="relative">
                         <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-white placeholder:text-slate-500"
                         />
                         <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-yellow-400 rounded-md text-slate-900 hover:bg-yellow-300 transition-colors">
                            <ArrowRight size={14} />
                         </button>
                      </div>
                   </div>
                </div>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
                <p>&copy; {new Date().getFullYear()} Joy Fitness Solutions. All rights reserved.</p>
                <div className="flex gap-6">
                   <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                   <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;