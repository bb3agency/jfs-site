import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white border border-gray-200 hover:border-primary/50 shadow-subtle hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square block bg-white">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
        />
        <div className="absolute top-3 left-3 bg-primary text-secondary text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wide shadow-sm">
          {product.category}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="mb-2 mt-2">
          <h3 className="font-heading font-medium text-lg text-dark leading-tight group-hover:text-primary transition-colors line-clamp-2 uppercase">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs font-sans text-gray-500 mb-4 font-normal">{product.brand}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <span className="text-xl font-heading font-semibold text-dark">₹{product.price.toLocaleString()}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-dark hover:bg-primary text-white hover:text-secondary p-2.5 rounded-full transition-colors shadow-sm"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;