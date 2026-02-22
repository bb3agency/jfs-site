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
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/about-contact" element={<AboutContact />} />
          </Routes>
        </main>


      </div>
    </HashRouter>
  );
};

export default App;