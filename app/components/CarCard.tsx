"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';

interface CarCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  location: string;
  category: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  title,
  image,
  price,
  rating,
  location,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
          priority={id === '1'}
        />
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-900">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          {location}
        </p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div>
            <span className="font-bold text-green-500">${price}</span>
            <span className="text-gray-500 text-sm"> / day</span>
          </div>
          <Link href={`/cars/${id}`} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard; 