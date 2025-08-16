import React from 'react';
import { X, Heart, ShoppingCart, Star, Shield, Calendar, Users } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenModalProps {
  kitten: Kitten | null;
  isOpen: boolean;
  onClose: () => void;
}

const KittenModal: React.FC<KittenModalProps> = ({ kitten, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !kitten) return null;

  const handleAddToCart = () => {
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={kitten.image}
            alt={kitten.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {kitten.vaccinated && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Vacunado
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{kitten.name}</h2>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {kitten.age}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {kitten.gender === 'male' ? 'Macho' : 'Hembra'}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold ml-1">4.8</span>
              </div>
              <span className="text-3xl font-bold text-purple-600">${kitten.price}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Raza</h3>
            <p className="text-gray-700 bg-gray-50 px-3 py-2 rounded-lg inline-block">{kitten.breed}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{kitten.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Características</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Shield className={`w-5 h-5 ${kitten.vaccinated ? 'text-green-500' : 'text-red-500'}`} />
                <span className="text-sm">
                  {kitten.vaccinated ? 'Vacunado' : 'Sin vacunar'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-sm">Muy cariñoso</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Adoptar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KittenModal;