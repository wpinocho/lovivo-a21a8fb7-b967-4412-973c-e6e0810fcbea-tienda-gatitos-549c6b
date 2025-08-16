import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Kitten } from '../types/kitten';

interface CartItem {
  kitten: Kitten;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (kitten: Kitten) => void;
  removeFromCart: (kittenId: string) => void;
  updateQuantity: (kittenId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  console.log('CartProvider rendering with', items.length, 'items');

  const addToCart = (kitten: Kitten) => {
    console.log('Adding kitten to cart:', kitten.name);
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.kitten.id === kitten.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.kitten.id === kitten.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { kitten, quantity: 1 }];
    });
  };

  const removeFromCart = (kittenId: string) => {
    console.log('Removing kitten from cart:', kittenId);
    setItems(prevItems => prevItems.filter(item => item.kitten.id !== kittenId));
  };

  const updateQuantity = (kittenId: string, quantity: number) => {
    console.log('Updating quantity for kitten:', kittenId, 'to:', quantity);
    if (quantity <= 0) {
      removeFromCart(kittenId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.kitten.id === kittenId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.kitten.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};