import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../constants';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Construct the message
    let message = "Hello, I want to order the following products:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Price: ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    message += `\nTotal Amount: *₹${cartTotal.toLocaleString()}*`;
    message += `\n\nPlease confirm availability and payment details.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 pt-28">
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl text-center border border-gray-100 max-w-md w-full">
          <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
             <ShoppingBag className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-dark mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Looks like you haven't made your choice yet. Browse our store to find your supplements.</p>
          <Link 
            to="/shop" 
            className="w-full bg-dark text-white font-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-secondary transition-all duration-300 uppercase block shadow-lg hover:shadow-primary/20 tracking-wider"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-8 uppercase tracking-wide">
          Shopping Cart <span className="text-gray-400 text-2xl normal-case align-middle ml-2">({cart.length} items)</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Cart Items */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all group">
                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-grow text-center sm:text-left w-full">
                    <div className="flex justify-between items-start mb-2">
                         <h3 className="text-lg font-bold text-dark leading-tight pr-4">{item.name}</h3>
                         <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-5">{item.category} • {item.brand}</p>
                    
                    <div className="flex items-center justify-between sm:justify-start sm:gap-12 mt-auto">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                            <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 hover:text-primary transition-colors text-gray-600 rounded-l-lg"
                            disabled={item.quantity <= 1}
                            >
                            <Minus size={16} />
                            </button>
                            <span className="w-10 text-center font-bold text-dark text-sm">{item.quantity}</span>
                            <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 hover:text-primary transition-colors text-gray-600 rounded-r-lg"
                            >
                            <Plus size={16} />
                            </button>
                        </div>
                        <div className="text-right sm:text-left">
                            <p className="text-lg font-bold text-dark">₹{(item.price * item.quantity).toLocaleString()}</p>
                             {item.quantity > 1 && <p className="text-xs text-gray-400">₹{item.price.toLocaleString()} each</p>}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             <button 
                onClick={clearCart}
                className="mt-6 text-gray-400 hover:text-red-500 text-sm flex items-center gap-2 transition-colors font-medium px-2 ml-1"
              >
                <Trash2 size={16} /> Clear Shopping Cart
              </button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl sticky top-28 shadow-lg shadow-gray-100/50">
              <h3 className="text-xl font-heading font-bold text-dark mb-6 uppercase border-b border-gray-100 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-full uppercase tracking-wide">Free via WhatsApp</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST)</span>
                  <span className="text-gray-400 text-sm">Included</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-2xl font-bold text-dark mb-8 pt-6 border-t border-gray-100">
                <span>Total</span>
                <span className="text-primary">₹{cartTotal.toLocaleString()}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-dark text-white font-bold py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center uppercase tracking-wide mb-4 shadow-lg hover:shadow-green-500/20 group"
              >
                Checkout on WhatsApp <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-green-500" /> Secure Checkout
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Truck size={16} className="text-blue-500" /> Fast Delivery
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;