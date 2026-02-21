import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Home as HomeIcon, LayoutGrid, Quote, LogOut, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  const isProductDetails = location.pathname.startsWith('/product/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useGSAP(() => {
    // Use fromTo to ensure the element ends up in the correct visible state (opacity: 1, y: 0)
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.2
        }
      );
    }
  }, { scope: navRef });

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={24} /> },
    { name: 'Products', path: '/products', icon: <LayoutGrid size={24} /> },
    { name: 'Testimonials', path: '/testimonials', icon: <Quote size={24} /> },
  ];

  return (
    <>
      {/* Global Mobile Menu Overlay (triggered by hamburger in bottom nav or top nav) */}
      <div
        className={`fixed inset-0 z-[50] bg-white transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-3xl font-black font-heading text-slate-900 tracking-tighter">JFS.</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-slate-900 hover:bg-slate-50 rounded-full">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-6 text-3xl font-bold font-heading uppercase tracking-tight transition-colors ${location.pathname === link.path ? 'text-yellow-500' : 'text-slate-900'
                  }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-100">
            <button className="flex items-center gap-4 text-slate-500 font-medium text-lg">
              <LogOut size={24} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Floating Bottom Nav (Capsule Style) --- */}
      {/* Visible on ALL mobile pages (persistent) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[55] md:hidden pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/80 backdrop-blur-xl p-2 rounded-full shadow-2xl shadow-slate-900/50 border border-white/10 ring-1 ring-black/50">

          {/* Home Item */}
          <Link
            to="/"
            className={`
                      w-12 h-12 rounded-full transition-all duration-300 ease-out flex items-center justify-center
                      ${location.pathname === '/'
                ? 'bg-white text-slate-950 shadow-lg scale-100'
                : 'text-slate-400 hover:text-white hover:bg-white/10 scale-95'
              }
                  `}
          >
            <HomeIcon size={20} strokeWidth={2.5} />
          </Link>

          {/* Cart Item */}
          <button
            onClick={onCartClick}
            className="relative w-12 h-12 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center scale-95 active:scale-90"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute top-2.5 right-3 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-slate-950"></span>
            )}
          </button>

          {/* Menu Trigger (Replaces Profile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
                      w-12 h-12 rounded-full transition-all duration-300 ease-out flex items-center justify-center
                      ${isMobileMenuOpen
                ? 'bg-white text-slate-950 shadow-lg scale-100'
                : 'text-slate-400 hover:text-white hover:bg-white/10 scale-95'
              }
                  `}
          >
            <Menu size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* --- Desktop & Global Top Header (Liquid Glass Style) --- */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 justify-center pointer-events-none
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          hidden md:flex
          ${isScrolled ? 'pt-4' : 'pt-8'}
        `}
      >
        <nav
          ref={navRef}
          className={`
                pointer-events-auto
                relative flex items-center justify-between
                
                /* Liquid Glass Aesthetics */
                glass-liquid
                border border-white/10
                
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                overflow-hidden
                
                ${isScrolled
              ? 'w-[75%] max-w-4xl py-3 px-6 rounded-full'
              : 'w-[90%] max-w-7xl py-5 px-10 rounded-[2.5rem]'
            }
            `}
        >
          {/* Shimmer Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[200%] animate-shimmer"></div>
          </div>

          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3 group select-none">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/5 flex items-center justify-center text-white font-bold border border-white/20 group-hover:scale-110 transition-transform duration-500 shadow-lg backdrop-blur-sm">
              <span className="text-[10px] tracking-tighter">JFS</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-black font-heading text-xl tracking-tighter text-white drop-shadow-sm">
              JFS<span className="text-yellow-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="relative z-10 hidden md:flex items-center p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                                relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 select-none
                                ${isActive
                      ? 'text-slate-900 bg-white shadow-[0_2px_10px_rgba(255,255,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }
                            `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="relative z-10 flex items-center gap-2 md:gap-4">
            <button
              onClick={onCartClick}
              className="relative group p-3 rounded-full hover:bg-white/10 transition-all border border-transparent hover:border-white/10 active:scale-95"
              aria-label="Cart"
            >
              <ShoppingBag size={20} className="text-white stroke-[2.5px] drop-shadow-sm" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-black text-slate-900 ring-2 ring-slate-900/50 shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;