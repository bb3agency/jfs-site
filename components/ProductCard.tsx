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

  const rating = (4.6 + (product.id.length % 4) * 0.1).toFixed(1);
  const reviews = 42 + (product.id.charCodeAt(0) * 3) + (product.name.length * 2);

  return (
    <div
      onClick={handleCardClick}
      className="group flex flex-col w-full rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 border border-slate-100 p-5 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] bg-slate-50/50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm z-10 font-subheading tracking-wide">
            SAVE {product.discount}%
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2.5">
        <div className="flex flex-col gap-1.5 flex-1 min-h-[44px]">
          {/* Name */}
          <h3 className="text-[15px] font-medium font-body text-slate-900 leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1.5">
            <span className="text-[13px]">⭐</span>
            <span className="text-[13px] text-slate-600 font-body">
              {rating} ({reviews})
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex flex-col gap-3 mt-2">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900 font-body">
              ₹{product.price.toLocaleString()}
            </span>
            {product.mrp && product.mrp > product.price && (
              <span className="text-sm text-slate-400 line-through font-body">
                ₹{product.mrp.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg py-2.5 px-4 font-subheading font-semibold text-sm transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
