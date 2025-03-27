"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the open road today</h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking for your perfect ride or want to share your car, Nexus Drive makes it simple.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
              <Link 
                href="/cars" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-bold transition-colors"
              >
                Find a Car
              </Link>
              <Link 
                href="/become-host" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-md font-bold transition-colors"
              >
                Become a Host
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/car-adventure.jpg" 
                alt="Car on a scenic road trip" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 