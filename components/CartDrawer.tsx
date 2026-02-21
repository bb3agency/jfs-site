import React from 'react';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import Button from './Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold font-heading text-slate-900">Your Cart</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 rounded-full bg-slate-100 p-6 text-slate-300">
                <ShoppingBag size={48} />
              </div>
              <h3 className="text-lg font-medium text-slate-900">Your cart is empty</h3>
              <p className="mt-2 text-slate-500">Looks like you haven't added any supplements yet.</p>
              <Button variant="secondary" className="mt-6" onClick={onClose}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full bg-slate-100 px-3 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-slate-500 hover:text-slate-900"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-slate-900 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-slate-500 hover:text-slate-900"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t bg-slate-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-medium text-slate-500">Subtotal</span>
              <span className="text-2xl font-bold text-slate-900">₹{total.toFixed(2)}</span>
            </div>
            <p className="mb-6 text-xs text-slate-400 text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full" size="lg" icon={<ArrowRight size={20} />}>
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;