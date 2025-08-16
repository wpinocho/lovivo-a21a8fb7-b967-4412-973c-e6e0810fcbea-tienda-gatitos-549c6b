import React from 'react';
import { X, Heart, ShoppingCart, Check } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';

interface KittenModalProps {
  kitten: Kitten | null;
  isOpen: boolean;
  onClose: () => void;
}

const KittenModal: React.FC<KittenModalProps> = ({ kitten, isOpen, onClose }) => {
  const { addToCart } = useCart();

  console.log('Rendering KittenModal for:', kitten?.name);

  if (!isOpen || !kitten) return null;

  const handleAddToCart = () => {
    addToCart(kitten);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{kitten.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Images */}
              <div>
                <img
                  src={kitten.image}
                  alt={kitten.name}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                {kitten.gallery && kitten.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {kitten.gallery.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${kitten.name} ${index + 2}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-purple-600">${kitten.price}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Raza:</span>
                      <p className="font-medium">{kitten.breed}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Edad:</span>
                      <p className="font-medium">{kitten.age}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Género:</span>
                      <p className="font-medium">{kitten.gender}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Estado:</span>
                      <p className="font-medium text-green-600">Disponible</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Personalidad:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {kitten.personality.map((trait, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm text-gray-600">Cuidados médicos:</span>
                    <div className="flex space-x-4 mt-2">
                      <div className="flex items-center">
                        <Check className={`w-4 h-4 mr-1 ${kitten.vaccinated ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="text-sm">Vacunado</span>
                      </div>
                      <div className="flex items-center">
                        <Check className={`w-4 h-4 mr-1 ${kitten.neutered ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="text-sm">Esterilizado</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm text-gray-600">Descripción:</span>
                    <p className="mt-1 text-gray-700 leading-relaxed">{kitten.description}</p>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Adoptar a {kitten.name}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KittenModal;