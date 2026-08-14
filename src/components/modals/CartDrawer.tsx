import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, Send } from 'lucide-react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onOpenQuoteModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1C1C] border-l border-[#333333] shadow-2xl flex flex-col justify-between text-white">
          
          {/* DRAWER HEADER */}
          <div className="p-5 border-b border-[#2A2A2A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#EFA721]" />
              <h3 className="text-base font-bold font-heading">Sample & B2B Selection</h3>
              <span className="bg-[#242424] text-[#EFA721] text-xs font-mono font-bold px-2 py-0.5 rounded border border-[#333333]">
                {items.length} Items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#242424] text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ITEM LIST */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto" />
                <p className="text-sm font-semibold text-gray-300">Your selection list is empty</p>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Browse products in our shop catalog to add items for sample requests or wholesale quotes.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#242424] p-3.5 rounded-xl border border-[#333333] flex items-center gap-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-[#141414] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate font-heading">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] text-[#EFA721] uppercase block font-mono mt-0.5">
                      {item.product.category}
                    </span>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-[#1C1C1C] border border-[#333333] rounded px-2 py-0.5 text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-gray-400 hover:text-[#EFA721] px-1 font-bold"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-gray-400 hover:text-[#EFA721] px-1 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER & CONVERT TO QUOTE */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#2A2A2A] bg-[#141414] space-y-3">
              <div className="text-xs text-gray-400 flex items-center justify-between">
                <span>Selected Items:</span>
                <span className="font-bold text-white">{items.length} SKUs</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const names = items.map((i) => `${i.product.name} (Qty: ${i.quantity})`).join(', ');
                  onClose();
                  onOpenQuoteModal(names);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm py-3 rounded-md btn-gold-glow transition-all"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST BULK B2B QUOTE ({items.length})</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
