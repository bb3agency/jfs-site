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
      className="group flex flex-col w-full h-full rounded-[18px] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-3 md:p-4 cursor-pointer border border-transparent hover:border-slate-100"
    >
      {/* Premium Image Container */}
      <div className="relative w-full aspect-[4/5] bg-[#f8f9fb] rounded-[14px] overflow-hidden mb-4 md:mb-5 flex items-center justify-center p-4 md:p-6 transition-colors duration-300 group-hover:bg-[#f1f3f7]">

        {/* Navy Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#0F172A] text-white text-[12px] font-semibold px-[10px] py-[4px] rounded-[6px] z-10 font-subheading tracking-wide shadow-sm">
            -{product.discount}%
          </div>
        )}

        <img
          src={product.image}
          srcSet={`${product.image} 300w, ${product.image} 600w`}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Cart Button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-2 left-2 md:bottom-3 md:left-3 w-10 h-10 md:w-9 md:h-9 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-md border border-slate-100 transition-all duration-300 hover:scale-110 hover:bg-slate-900 hover:text-white"
          aria-label="Add to cart"
        >
          <Plus size={18} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 items-center text-center px-1">
        {/* Title */}
        <h3 className="text-[13px] md:text-[15px] font-medium font-body text-slate-900 leading-snug line-clamp-2 min-h-[38px] md:min-h-[44px] mb-2">
          {product.name}
        </h3>

        {/* Price Row */}
        <div className="mt-auto flex items-baseline justify-center gap-2">
          <span className="text-base md:text-lg font-semibold text-slate-900 font-inter">
            ₹{product.price.toLocaleString()}
          </span>
          {product.mrp && product.mrp > product.price && (
            <span className="text-[11px] md:text-sm text-slate-400 line-through font-inter font-medium">
              ₹{product.mrp.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
