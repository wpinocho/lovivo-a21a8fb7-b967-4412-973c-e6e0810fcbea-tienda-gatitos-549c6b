import { Kitten } from '../types/kitten';

export const kittens: Kitten[] = [
  {
    id: '1',
    name: 'Luna',
    breed: 'Persa',
    age: '3 meses',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    description: 'Luna es una gatita persa adorable con un pelaje suave como la seda. Le encanta jugar y es muy cariñosa.',
    personality: ['Cariñosa', 'Juguetona', 'Tranquila'],
    gender: 'Hembra',
    vaccinated: true,
    neutered: false,
    available: true,
    gallery: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Milo',
    breed: 'Maine Coon',
    age: '4 meses',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop',
    description: 'Milo es un Maine Coon majestuoso con una personalidad gentil y amorosa. Perfecto para familias.',
    personality: ['Gentil', 'Inteligente', 'Sociable'],
    gender: 'Macho',
    vaccinated: true,
    neutered: false,
    available: true,
    gallery: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'Siamés',
    age: '2 meses',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
    description: 'Bella es una siamesa elegante y vocal. Le gusta comunicarse y es muy inteligente.',
    personality: ['Vocal', 'Inteligente', 'Elegante'],
    gender: 'Hembra',
    vaccinated: true,
    neutered: false,
    available: true
  },
  {
    id: '4',
    name: 'Oliver',
    breed: 'Británico de Pelo Corto',
    age: '5 meses',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop',
    description: 'Oliver es un británico de pelo corto con una personalidad relajada y amigable.',
    personality: ['Relajado', 'Amigable', 'Independiente'],
    gender: 'Macho',
    vaccinated: true,
    neutered: false,
    available: true
  },
  {
    id: '5',
    name: 'Chloe',
    breed: 'Ragdoll',
    age: '3 meses',
    price: 1700,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop',
    description: 'Chloe es una ragdoll súper cariñosa que se derrite en tus brazos. Perfecta para abrazos.',
    personality: ['Cariñosa', 'Dócil', 'Tranquila'],
    gender: 'Hembra',
    vaccinated: true,
    neutered: false,
    available: true
  },
  {
    id: '6',
    name: 'Max',
    breed: 'Bengalí',
    age: '4 meses',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=300&fit=crop',
    description: 'Max es un bengalí activo y aventurero con un patrón de manchas hermoso.',
    personality: ['Activo', 'Aventurero', 'Curioso'],
    gender: 'Macho',
    vaccinated: true,
    neutered: false,
    available: true
  }
];