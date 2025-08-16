import React from 'react';
import { Heart, Shield, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  console.log('Rendering About page');

  const values = [
    {
      icon: Heart,
      title: "Amor y Cuidado",
      description: "Cada gatito recibe amor incondicional y cuidados especializados desde el primer día."
    },
    {
      icon: Shield,
      title: "Salud Garantizada",
      description: "Todos nuestros gatitos pasan por revisiones veterinarias completas y tienen garantía de salud."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Trabajamos solo con criadores certificados que mantienen los más altos estándares de calidad."
    },
    {
      icon: Users,
      title: "Familias Felices",
      description: "Más de 1000 familias han encontrado a su compañero perfecto a través de nosotros."
    }
  ];

  const team = [
    {
      name: "María González",
      role: "Fundadora y Veterinaria",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Con 15 años de experiencia en medicina veterinaria, María fundó KittenStore con la misión de conectar gatitos con familias amorosas."
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Comportamiento",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Carlos se especializa en el comportamiento felino y ayuda a las familias a prepararse para recibir a su nuevo compañero."
    },
    {
      name: "Ana Martínez",
      role: "Coordinadora de Adopciones",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Ana se encarga de hacer el match perfecto entre cada gatito y su futura familia, asegurando compatibilidad total."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Conectando corazones felinos con familias amorosas desde 2020
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En KittenStore, creemos que cada gatito merece un hogar lleno de amor y cada familia 
              merece encontrar a su compañero perfecto. Nos dedicamos a crear conexiones especiales 
              que duran toda la vida.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Trabajamos incansablemente para asegurar que cada gatito reciba los mejores cuidados 
              desde el nacimiento hasta que encuentra su hogar definitivo. Nuestro compromiso va 
              más allá de la adopción: ofrecemos apoyo continuo a las familias.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                "Un gatito no es solo una mascota, es un miembro de la familia"
              </h3>
              <p className="text-purple-600">- María González, Fundadora</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop"
              alt="Gatito adorable"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Familias Felices</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos en KittenStore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible nuestra misión
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-200">Gatitos Adoptados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-purple-200">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-purple-200">Razas Disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-purple-200">Familias Satisfechas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Tienes Preguntas?
            </h2>
            <p className="text-lg text-gray-600">
              Estamos aquí para ayudarte a encontrar a tu compañero perfecto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
              <p className="text-gray-600">
                Av. Principal 123<br />
                Ciudad de México, CDMX
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">
                +52 55 1234 5678<br />
                Lun - Sáb: 9:00 - 18:00
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@kittenstore.com<br />
                adopciones@kittenstore.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;