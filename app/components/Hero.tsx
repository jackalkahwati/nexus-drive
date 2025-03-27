"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Luxury car background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-green-900 opacity-70"></div>
      </div>
      <div className="relative container-custom py-24 md:py-32">
        <div className="flex flex-col items-start max-w-3xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Skip the rental car counter
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl">
            Rent just about any car, just about anywhere
          </p>
          
          <div className="w-full mt-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 