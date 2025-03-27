"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'San Francisco',
    image: '/images/los-angeles.jpg',
    cars: 253,
  },
  {
    id: 2,
    name: 'Los Angeles',
    image: '/images/new-york.jpg',
    cars: 235,
  },
  {
    id: 3,
    name: 'Miami',
    image: '/images/miami.jpg',
    cars: 192,
  },
  {
    id: 4,
    name: 'Chicago',
    image: '/images/los-angeles.jpg',
    cars: 178,
  },
  {
    id: 5,
    name: 'Las Vegas',
    image: '/images/new-york.jpg',
    cars: 164,
  },
  {
    id: 6,
    name: 'Denver',
    image: '/images/miami.jpg',
    cars: 152,
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Browse by destination</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.name.toLowerCase().replace(' ', '-')}`}
              className="group block"
            >
              <div className="relative rounded-lg overflow-hidden aspect-[1/1]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-white">
                  <h3 className="text-lg font-bold text-gray-900">{destination.name}</h3>
                  <p className="text-sm text-gray-600">{destination.cars} cars available</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 