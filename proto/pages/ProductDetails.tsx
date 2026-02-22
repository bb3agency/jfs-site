import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Check, ShieldCheck, Truck, ArrowLeft, Share2 } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-dark pt-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-primary underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    const message = `Hello, I want to order: ${product.name} - ₹${product.price}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} on JFS Protein!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-10">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors font-medium">
          <ArrowLeft size={20} className="mr-2" /> Back to Shop
        </Link>
        
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative bg-gray-50 flex items-center justify-center p-8">
              <img 
                src={product.image}  
                alt={product.name} 
                className="w-full h-auto object-contain max-h-[500px] mix-blend-multiply" 
              />
            </div>

            {/* Info Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-4">
                <span className="bg-primary/20 text-dark text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-2 leading-tight">
                {product.name}
              </h1>

              <div className="mb-6">
                <span className="text-gray-500 font-medium">By {product.brand}</span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through text-lg mb-1">₹{(product.price * 1.2).toFixed(0)}</span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-dark text-white font-bold py-4 rounded hover:bg-secondary transition-colors flex items-center justify-center uppercase tracking-wide shadow-lg"
                >
                  <ShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-primary text-secondary font-bold py-4 rounded hover:bg-yellow-400 transition-colors flex items-center justify-center uppercase tracking-wide shadow-lg"
                >
                  Buy via WhatsApp
                </button>
              </div>

              {/* Share Button (Single) */}
              <div className="mb-8 pb-8 border-b border-gray-100">
                <button 
                  onClick={handleShare}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm border border-gray-200 hover:border-primary px-6 py-3 rounded"
                >
                  <Share2 size={18} /> Share Product
                </button>
              </div>

              {/* Features/Trust */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-600 text-sm">
                   <ShieldCheck className="text-green-600 mr-2" /> 100% Authentic
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                   <Truck className="text-blue-600 mr-2" /> Pan-India Delivery
                </div>
              </div>

              {/* Details Tabs/Lists */}
              <div className="space-y-6">
                {product.benefits && (
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg mb-3">KEY BENEFITS</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <Check size={18} className="text-primary mr-2 mt-1 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.ingredients && (
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg mb-2">INGREDIENTS</h3>
                    <p className="text-gray-600 text-sm bg-gray-50 p-4 rounded border border-gray-100">{product.ingredients}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;