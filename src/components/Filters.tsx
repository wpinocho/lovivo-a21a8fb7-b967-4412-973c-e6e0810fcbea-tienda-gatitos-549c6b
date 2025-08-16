import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedBreed: string;
  onBreedChange: (breed: string) => void;
  selectedGender: string;
  onGenderChange: (gender: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedBreed,
  onBreedChange,
  selectedGender,
  onGenderChange,
  priceRange,
  onPriceRangeChange
}) => {
  const breeds = ['Todos', 'Persa', 'Maine Coon', 'Siamés', 'Británico de Pelo Corto', 'Ragdoll', 'Bengalí'];
  const genders = ['Todos', 'male', 'female'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Raza</label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="Todos">Todos</option>
            <option value="male">Macho</option>
            <option value="female">Hembra</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <div className="flex gap-2">
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;