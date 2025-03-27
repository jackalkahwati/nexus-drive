"use client";

import React from 'react';
import Link from 'next/link';
import CarCard from './CarCard';

// Featured cars data
const featuredCars = [
  {
    id: '1',
    title: 'Tesla Model Y',
    image: '/images/tesla.jpg',
    price: 154,
    rating: 4.9,
    location: 'San Francisco, CA',
    category: 'Electric',
  },
  {
    id: '3',
    title: 'BMW 3 Series',
    image: '/images/bmw.jpg',
    price: 120,
    rating: 4.8,
    location: 'San Francisco, CA',
    category: 'Sport',
  },
  {
    id: '8',
    title: 'Ford Mustang',
    image: '/images/jeep.jpg',
    price: 150,
    rating: 4.8,
    location: 'Miami, FL',
    category: 'Sport',
  },
  {
    id: '5',
    title: 'Mercedes-Benz C-Class',
    image: '/images/mercedes.jpg',
    price: 95,
    rating: 4.9,
    location: 'Denver, CO',
    category: 'Luxury',
  },
  {
    id: '4',
    title: 'Jeep Wrangler',
    image: '/images/jeep.jpg',
    price: 165,
    rating: 4.7,
    location: 'Los Angeles, CA',
    category: 'SUV',
  },
  {
    id: '9',
    title: 'Chevrolet Camaro',
    image: '/images/mercedes.jpg',
    price: 145,
    rating: 4.8,
    location: 'Las Vegas, NV',
    category: 'Sport',
  },
  {
    id: '6',
    title: 'Honda Civic',
    image: '/images/tesla.jpg',
    price: 85,
    rating: 4.8,
    location: 'Chicago, IL',
    category: 'Sedan',
  },
  {
    id: '7',
    title: 'Toyota Camry',
    image: '/images/bmw.jpg',
    price: 90,
    rating: 4.9,
    location: 'Atlanta, GA',
    category: 'Sedan',
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rent cars for any occasion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse an incredible selection of cars, from the everyday to the extraordinary
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.slice(0, 8).map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              title={car.title}
              image={car.image}
              price={car.price}
              rating={car.rating}
              location={car.location}
              category={car.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/cars" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors">
            Explore all cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars; 