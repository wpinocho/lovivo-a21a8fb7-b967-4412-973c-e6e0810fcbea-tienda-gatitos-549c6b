import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Filters from '../components/Filters';
import KittenCard from '../components/KittenCard';
import Cart from '../components/Cart';
import KittenModal from '../components/KittenModal';
import { kittens } from '../data/kittens';
import { Kitten } from '../types/kitten';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  console.log('Rendering Index page with', kittens.length, 'kittens');

  const filteredKittens = useMemo(() => {
    return kittens.filter(kitten => {
      const matchesSearch = kitten.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBreed = selectedBreed === 'Todos' || kitten.breed === selectedBreed;
      const matchesGender = selectedGender === 'Todos' || kitten.gender === selectedGender;
      const matchesPrice = kitten.price >= priceRange[0] && kitten.price <= priceRange[1];
      
      return matchesSearch && matchesBreed && matchesGender && matchesPrice && kitten.available;
    });
  }, [searchTerm, selectedBreed, selectedGender, priceRange]);

  const handleViewDetails = (kitten: Kitten) => {
    console.log('Opening modal for kitten:', kitten.name);
    setSelectedKitten(kitten);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing kitten modal');
    setIsModalOpen(false);
    setSelectedKitten(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Encuentra tu Compañero Perfecto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre gatitos adorables esperando un hogar lleno de amor. 
              Cada uno ha sido cuidado con cariño y está listo para ser parte de tu familia.
            </p>
          </div>

          <Filters
            selectedBreed={selectedBreed}
            onBreedChange={setSelectedBreed}
            selectedGender={selectedGender}
            onGenderChange={setSelectedGender}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />

          <div className="mb-6">
            <p className="text-gray-600">
              Mostrando {filteredKittens.length} gatito{filteredKittens.length !== 1 ? 's' : ''} disponible{filteredKittens.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredKittens.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐱</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron gatitos
              </h3>
              <p className="text-gray-500">
                Intenta ajustar tus filtros para ver más opciones
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredKittens.map((kitten) => (
                <KittenCard
                  key={kitten.id}
                  kitten={kitten}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}
        </main>

        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">KittenStore</h3>
              <p className="text-gray-600">
                Conectando gatitos adorables con familias amorosas desde 2024
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>🐱 Todos nuestros gatitos reciben atención veterinaria completa</p>
                <p>💝 Garantía de salud y felicidad incluida</p>
              </div>
            </div>
          </div>
        </footer>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <KittenModal
          kitten={selectedKitten}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </CartProvider>
  );
};

export default Index;