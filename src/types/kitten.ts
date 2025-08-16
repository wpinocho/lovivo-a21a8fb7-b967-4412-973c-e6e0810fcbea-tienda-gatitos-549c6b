export interface Kitten {
  id: string;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  personality: string[];
  gender: 'Macho' | 'Hembra';
  vaccinated: boolean;
  neutered: boolean;
  available: boolean;
  gallery?: string[];
}