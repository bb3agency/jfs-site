import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import TestimonialsPage from './pages/TestimonialsPage';
import ProductDetails from './pages/ProductDetails';
import Transformations from './pages/Transformations';
import Coaching from './pages/Coaching';
import AboutContact from './pages/AboutContact';
import FAQ from './pages/FAQ';
import { CartItem, Product } from './types';
import Footer from './components/Footer';

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
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
    setToastMessage(`Added ${product.name} to cart`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
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
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />

        {/* Toast Notification */}
        <div
          className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[100] transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${toastMessage ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
            }`}
        >
          <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <p className="font-subheading text-sm font-medium pr-2 max-w-[200px] md:max-w-[300px] truncate">{toastMessage}</p>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
