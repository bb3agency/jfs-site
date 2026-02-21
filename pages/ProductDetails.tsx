import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Check, Truck, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product, CartItem } from '../types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ProductDetailsProps {
  onAddToCart: (product: Product) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart, cartItems, onUpdateQuantity }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const specs = [
    { label: 'Servings', value: '30 Scoops' },
    { label: 'Protein', value: '24g' },
    { label: 'Sugar', value: '0g' },
    { label: 'Flavor', value: 'Chocolate' },
  ];

  const handleBuyClick = () => {
    onAddToCart(product);
  };

  const handleIncrement = () => {
    if (quantity === 0) {
      onAddToCart(product);
    } else {
      onUpdateQuantity(product.id, 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onUpdateQuantity(product.id, -1);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.detail-img', { x: -50, opacity: 0, duration: 1 })
      .from('.detail-content > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white pt-16 md:pt-24 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to browsing
        </button>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="detail-img flex-1 bg-slate-100 rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[600px] group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />
            {product.discount && (
              <div className="absolute top-6 left-6 bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                {product.discount}% OFF
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="detail-content flex-1 flex flex-col justify-center">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-lg text-slate-400 line-through font-medium">
                    ₹{(product.price * (1 + product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>
              <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                <Check size={12} /> In Stock
              </div>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {product.description} This premium formulation is designed to support muscle recovery and growth, providing essential nutrients exactly when your body needs them most.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{spec.label}</div>
                  <div className="text-slate-900 font-bold">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 border-t border-b border-slate-100 py-8">
              {/* Quantity Control */}
              <div className="flex items-center gap-4 p-2 bg-slate-100 rounded-full w-max">
                <button
                  onClick={handleDecrement}
                  disabled={quantity === 0}
                  className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm disabled:opacity-50 hover:bg-slate-50 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md hover:bg-slate-800 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart / Buy Now (if needed) */}
              {quantity === 0 && (
                <button
                  onClick={handleBuyClick}
                  className="flex-1 bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-full uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 active:scale-95"
                >
                  Add to Cart
                </button>
              )}
              {quantity > 0 && (
                <button
                  onClick={() => { /* Open cart drawer logic if available via props or context, otherwise just a visual indicator */ }}
                  className="flex-1 bg-green-500 text-white font-bold px-8 py-4 rounded-full uppercase tracking-wider cursor-default"
                >
                  Added to Cart
                </button>
              )}
            </div>

            {/* Footer Info */}
            <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-slate-900" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-slate-900" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;