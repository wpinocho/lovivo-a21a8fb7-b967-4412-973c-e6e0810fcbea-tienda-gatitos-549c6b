import React from 'react';
import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    toast.success('¡Gracias por tu adopción! Te contactaremos pronto 🐱');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Carrito de Adopción
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Tu carrito está vacío</p>
              <p className="text-sm text-gray-400 mt-2">¡Agrega algunos gatitos adorables!</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.kitten.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={item.kitten.image}
                      alt={item.kitten.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.kitten.name}</h3>
                      <p className="text-sm text-gray-600">{item.kitten.breed}</p>
                      <p className="text-purple-600 font-bold">${item.kitten.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.kitten.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-purple-600">${getTotalPrice()}</span>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Proceder con la Adopción
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;