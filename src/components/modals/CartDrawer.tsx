import React from 'react';
import { X, ShoppingBag, Trash2, Send } from 'lucide-react';
import { CartItem } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

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
        <div className="w-screen max-w-md bg-[#0B0C0E] border-l border-[#2D303E] shadow-2xl flex flex-col justify-between text-white">
          
          {/* DRAWER HEADER */}
          <div className="p-5 border-b border-[#2D303E] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="text-base font-sans font-extrabold uppercase">Sample & Export Selection</h3>
              <span className="bg-[#16171E] text-[#F59E0B] text-xs font-mono font-extrabold px-2 py-0.5 rounded border border-[#F59E0B]/40">
                {items.length} Items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#16171E] text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ITEM LIST */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#F59E0B]/40 mx-auto" />
                <p className="text-sm font-sans font-extrabold text-white uppercase">Your selection list is empty</p>
                <p className="text-xs text-white/60 max-w-xs mx-auto font-normal">
                  Browse products in our export catalogue to add items for sample requests or container quotes.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#16171E] p-3.5 rounded-xl border border-[#2D303E] flex items-center gap-3"
                >
                  <ImageWithFallback
                    src={item.product.image}
                    alt={item.product.name}
                    category={item.product.categorySlug}
                    className="w-16 h-16 object-cover rounded-lg bg-[#0B0C0E] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-sans font-extrabold text-white uppercase truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] text-[#F59E0B] uppercase block font-mono font-extrabold mt-0.5">
                      {item.product.category}
                    </span>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-[#0B0C0E] border border-[#2D303E] rounded px-2 py-0.5 text-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-white/60 hover:text-[#F59E0B] px-1 font-bold"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs text-white font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-white/60 hover:text-[#F59E0B] px-1 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-white/50 hover:text-red-400 transition-colors p-1"
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
            <div className="p-5 border-t border-[#2D303E] bg-[#16171E] space-y-3">
              <div className="text-xs text-white/80 flex items-center justify-between">
                <span>Selected Export Items:</span>
                <span className="font-extrabold text-white font-mono">{items.length} SKUs</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const names = items.map((i) => `${i.product.name} (Qty: ${i.quantity})`).join(', ');
                  onClose();
                  onOpenQuoteModal(names);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs py-3.5 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
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
