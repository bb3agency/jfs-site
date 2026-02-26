import React, { useRef, useState } from 'react';
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFlavour, setSelectedFlavour] = useState<string | null>(null);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Use the images array if available, else fall back to single image
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

  // When a flavour is selected, update the main image
  const currentImage = selectedFlavour
    ? product.flavours?.find(f => f.name === selectedFlavour)?.image || allImages[selectedImageIndex]
    : allImages[selectedImageIndex];

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

    tl.fromTo('.detail-img',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )
      .fromTo('.detail-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1
        },
        "-=0.5"
      );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm md:text-base text-slate-500 hover:text-slate-900 mb-6 md:mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          Back to browsing
        </button>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
          {/* Product Image Section */}
          <div className="detail-img flex-1 w-full max-w-xl mx-auto md:max-w-none">
            {/* Main Image */}
            <div className="bg-slate-100 rounded-3xl md:rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[550px] group mb-4">
              <img
                src={currentImage}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-2 sm:p-4 md:p-8"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-yellow-400 text-slate-900 font-bold px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm shadow-lg">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((imgSrc, idx) => {
                  const mappedFlavour = product.flavours?.find(f => f.image === imgSrc);
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => { setSelectedImageIndex(idx); setSelectedFlavour(null); }}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-slate-50 ${selectedImageIndex === idx && !selectedFlavour
                          ? 'border-slate-900 shadow-md'
                          : 'border-slate-200 hover:border-slate-400'
                          }`}
                      >
                        <img src={imgSrc} alt={`View ${idx + 1}`} loading="lazy" className="w-full h-full object-contain p-1 md:p-2" />
                      </button>
                      {mappedFlavour && (
                        <span className="text-[10px] md:text-xs font-bold text-slate-500 text-center max-w-[64px] md:max-w-[80px] leading-tight px-1 break-words">
                          {mappedFlavour.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="detail-content flex-1 flex flex-col justify-start md:justify-center">
            {/* Brand */}
            <span className="text-slate-400 font-bold uppercase tracking-tight text-[10px] md:text-xs mb-1">
              {product.brand}
            </span>
            {/* Category */}
            <span className="text-yellow-500 font-bold uppercase tracking-tight text-xs md:text-sm mb-1 md:mb-2">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight mb-2 md:mb-3 leading-tight">
              {product.name}
            </h1>
            {product.weight && (
              <span className="text-slate-500 font-bold text-xs md:text-sm mb-3 md:mb-4 block">{product.weight}</span>
            )}


            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-black text-slate-900">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.mrp && product.mrp > product.price && (
                  <span className="text-sm md:text-lg text-slate-400 line-through font-medium">
                    ₹{product.mrp.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                <Check size={12} /> In Stock
              </div>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Flavour Selector */}
            {product.flavours && product.flavours.length > 0 && (
              <div className="mb-8">
                <span className="text-slate-400 font-bold uppercase tracking-tight text-xs block mb-3">Available Flavours</span>
                <div className="flex flex-wrap gap-3">
                  {product.flavours.map((flav) => (
                    <button
                      key={flav.name}
                      onClick={() => {
                        setSelectedFlavour(flav.name === selectedFlavour ? null : flav.name);
                      }}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all duration-200 ${selectedFlavour === flav.name
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                        }`}
                    >
                      {flav.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-10 border-t border-b border-slate-100 py-6 md:py-8">
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

              {/* Add to Cart / Buy Now */}
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
                  className="flex-1 bg-green-500 text-white font-bold px-8 py-4 rounded-full uppercase tracking-wider cursor-default"
                >
                  Added to Cart
                </button>
              )}
            </div>

            {/* Footer Info */}
            <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium mt-2 md:mt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-slate-900" />
                <span>100% Authentic — Direct from manufacturer</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;