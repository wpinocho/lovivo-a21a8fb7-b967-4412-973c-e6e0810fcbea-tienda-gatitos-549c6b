import React from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, searchTerm, onSearchChange }) => {
  const { items } = useCart();
  const location = useLocation();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  console.log('Rendering Header with', totalItems, 'items in cart');

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">🐱</div>
            <span className="text-2xl font-bold text-purple-600">KittenStore</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Sobre Nosotros
            </Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contacto
            </a>
          </nav>

          {/* Search Bar - Only show on home page */}
          {location.pathname === '/' && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar gatitos..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <nav className="flex items-center justify-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Sobre Nosotros
            </Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;