import React from 'react';
import { Product } from '../types';
import { Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  variant?: 'default' | 'tall';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 ring-1 ring-transparent hover:ring-slate-200"
    >
      {/* Background Image */}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-contain p-4 pb-20 md:p-8 md:pb-24 transition-transform duration-700 mix-blend-multiply ${product.brand === 'DNA Pharma' ? 'scale-[0.85] group-hover:scale-[0.95]' : 'group-hover:scale-110'
          }`}
      />

      {/* Discount Badge (Top Left) */}
      {product.discount && (
        <div className="absolute top-4 left-4 bg-black text-white text-[10px] md:text-xs font-black px-2.5 py-1.5 rounded-md shadow-lg z-10 font-inter">
          -{product.discount}%
        </div>
      )}

      {/* Bottom Info Pill - Glassmorphic Effect */}
      <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 bg-white/95 backdrop-blur-xl border border-white/50 rounded-xl md:rounded-2xl p-2.5 sm:p-3 shadow-lg flex flex-row items-end justify-between gap-1.5 sm:gap-2 transition-colors group-hover:bg-white overflow-hidden">
        <div className="flex flex-col min-w-0 w-full">
          {/* Name - No line clamp so it wraps fully */}
          <h3 className="text-[11px] sm:text-[12px] md:text-sm font-bold text-slate-900 leading-[1.15] md:leading-tight font-subheading whitespace-normal break-words">
            {product.name}
          </h3>
        </div>
        {/* Price Layout: Vertical Stack */}
        <div className="flex-shrink-0 flex flex-col items-end justify-end font-inter">
          {product.mrp && product.mrp > product.price && (
            <span className="text-[9px] sm:text-[10px] text-slate-400 line-through font-bold mb-0.5">
              ₹{product.mrp.toLocaleString()}
            </span>
          )}
          <span className="text-[12px] sm:text-[13px] md:text-sm font-black text-slate-900 leading-none">
            ₹{product.price.toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;