"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Find the perfect car',
    description: 'Browse thousands of cars with detailed specifications, verified reviews, and flexible pickup options.',
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Book with confidence',
    description: 'Reserve your car with our secure booking system. No hidden fees, free cancellation up to 24 hours before your trip.',
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pick up and go',
    description: 'Meet the owner to get the keys and start your adventure, or choose contactless pickup for added convenience.',
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-.293-.707l-2-2A1 1 0 0017 5h-5a1 1 0 00-1-1H3z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Return and review',
    description: 'Return the car at the end of your trip, fill up the tank, and share your experience with the community.',
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Renting a car on NexusTuro is simple and secure. Follow these easy steps to get started on your next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <div className="bg-green-500 text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who have found their perfect ride on NexusTuro.
              Sign up today and get $25 off your first rental!
            </p>
            <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Get Started Now
            </Link>
          </div>
          <div className="md:w-2/5">
            <div className="relative h-64 w-full">
              <Image 
                src="/images/car-adventure.jpg"
                alt="Happy customer with rental car"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 