import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Dumbbell, Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../constants';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=Proteins', label: 'Categories' }, // Simplified for demo
  { to: '/transformations', label: 'Transformations' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/about-contact', label: 'About & Contact' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll & Animation State
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSearchOpen && searchInputRef.current && !searchInputRef.current.contains(event.target as Node) && !(event.target as HTMLElement).closest('button[title="Search"]')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-primary selection:text-secondary">

      {/* Floating Pill Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none"
      >
        <motion.nav
          layout
          initial={{ width: "95%", maxWidth: "1280px", borderRadius: "9999px" }}
          animate={{
            width: isScrolled ? "90%" : "95%",
            maxWidth: isScrolled ? "1024px" : "1280px",
            scale: isScrolled ? 0.98 : 1,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
            y: isScrolled ? 4 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "pointer-events-auto relative grid grid-cols-[1fr_auto_1fr] items-center px-6 py-3 md:px-8 md:py-4 border border-black/5 transition-colors duration-300",
            "rounded-full"
          )}
        >
          {/* Left: Logo */}
          <div className="justify-self-start">
            <Link to="/" className="flex items-center gap-3 group shrink-0 z-20">
              <div className="h-10 w-10 bg-primary/20 p-1.5 rounded-full border border-primary/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary/30 transition-colors duration-300">
                <Dumbbell className="h-full w-full text-primary" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-xl font-heading font-bold text-dark tracking-tighter drop-shadow-sm">
                  JFS <span className="text-primary">PROTEIN</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.to.split('?')[0];

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-5 py-2 text-sm font-heading font-medium tracking-[0.8px] uppercase text-dark transition-colors duration-300 hover:text-primary z-10"
                >
                  {/* Hover Pill Background */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-black/5 rounded-full -z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Indicator (Dot) */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    />
                  )}

                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: Icons & Mobile Toggle */}
          <div className="justify-self-end flex items-center gap-2 shrink-0 z-20">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSearch}
                    className="absolute right-12 overflow-hidden"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-gray-100 border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </motion.form>
                )}
              </AnimatePresence>

              <button
                onClick={() => {
                  if (isSearchOpen && searchQuery) {
                    // If open and has query, submit
                    handleSearch({ preventDefault: () => { } } as React.FormEvent);
                  } else {
                    // Toggle open/close
                    setIsSearchOpen(!isSearchOpen);
                  }
                }}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 z-10",
                  isSearchOpen ? "bg-primary text-white shadow-md" : "text-dark hover:bg-black/5 hover:text-primary"
                )}
                title="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center rounded-full text-dark hover:bg-black/5 hover:text-primary transition-all duration-300 group"
              title="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 bg-primary text-secondary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-secondary shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-dark hover:bg-black/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 right-0 mt-4 mx-4 md:mx-auto md:max-w-2xl pointer-events-auto"
            >
              <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6">
                <form onSubmit={handleSearch} className="mb-6 relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pl-11 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder-white/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
                </form>

                <div className="grid grid-cols-1 gap-2">
                  {NAV_LINKS.map((link, idx) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-lg font-heading font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white text-dark border-t border-gray-200 pt-16 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
                <span className="text-xl font-heading font-bold text-dark">
                  JFS <span className="text-primary">PROTEIN</span>
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-6 font-sans">
                Helping you build your strongest body with premium supplements and expert coaching.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="bg-gray-100 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="bg-gray-100 p-2 rounded hover:bg-primary hover:text-white transition-colors"><Youtube size={18} /></a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-dark uppercase tracking-wide">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-sans">
                <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
                <li><Link to="/transformations" className="hover:text-primary transition-colors">Transformations</Link></li>
                <li><Link to="/coaching" className="hover:text-primary transition-colors">Coaching</Link></li>
                <li><Link to="/about-contact" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-dark uppercase tracking-wide">CATEGORIES</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-sans">
                {CATEGORIES.slice(0, 4).map((cat, idx) => (
                  <li key={idx}>
                    <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="hover:text-primary transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4 text-dark uppercase tracking-wide">CONTACT US</h3>
              <ul className="space-y-4 text-gray-600 text-sm font-sans">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>123 Fitness Street, Muscle City, State, India 400001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>+91 90004 21844</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>support@jfsprotein.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} JFS Protein. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
