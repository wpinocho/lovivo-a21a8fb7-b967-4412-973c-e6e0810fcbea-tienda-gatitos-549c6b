import React from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';

interface KittenCardProps {
  kitten: Kitten;
  onViewDetails: (kitten: Kitten) => void;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten, onViewDetails }) => {
  const { addToCart } = useCart();

  console.log('Rendering KittenCard for:', kitten.name);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(kitten);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-4 left-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Vacunado
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{kitten.name}</h3>
          <span className="text-2xl font-bold text-purple-600">${kitten.price}</span>
        </div>
        
        <p className="text-gray-600 mb-2">{kitten.breed} • {kitten.age}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {kitten.personality.slice(0, 2).map((trait, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(kitten)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Ver Detalles</span>
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Adoptar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KittenCard;