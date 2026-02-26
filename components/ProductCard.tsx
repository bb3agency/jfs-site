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
      className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-1"
    >
      {/* Background Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110"
      />

      {/* Discount Badge (Top Left) */}
      {product.discount && (
        <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-2 py-1.5 rounded-md shadow-lg z-10">
          -{product.discount}%
        </div>
      )}

      {/* Bottom Info Pill - Glassmorphic Effect */}
      <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-2 md:p-3 shadow-lg flex items-end justify-between gap-2 transition-colors group-hover:bg-white">
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          {/* Name */}
          <h3 className="text-sm font-bold text-slate-900 leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>
        {/* Price */}
        <div className="flex-shrink-0 mb-[1px] flex flex-col items-end">
          {product.mrp && product.mrp > product.price && (
            <span className="text-[10px] text-slate-400 line-through font-bold">
              ₹{product.mrp.toLocaleString()}
            </span>
          )}
          <span className="text-sm font-black text-slate-900">
            ₹{product.price.toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;