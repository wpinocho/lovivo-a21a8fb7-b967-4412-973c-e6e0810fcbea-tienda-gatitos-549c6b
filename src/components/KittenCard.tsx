import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
  onViewDetails: (kitten: Kitten) => void;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
  };

  const handleViewDetails = () => {
    onViewDetails(kitten);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Vacunado
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-2">{kitten.breed}</p>
        <p className="text-sm text-gray-500 mb-3">{kitten.age} • {kitten.gender === 'male' ? 'Macho' : 'Hembra'}</p>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">${kitten.price}</span>
          <div className="flex gap-2">
            <button
              onClick={handleViewDetails}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
            >
              Ver detalles
            </button>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ShoppingCart className="w-4 h-4" />
              Adoptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KittenCard;