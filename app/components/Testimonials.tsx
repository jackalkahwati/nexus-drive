"use client";

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    role: 'Entrepreneur',
    image: '/images/user1.jpg',
    content:
      "Renting through this platform was incredibly smooth. The car was in perfect condition and exactly as described. Will definitely use this service again for my future trips!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    image: '/images/user2.jpg',
    content:
      "As someone who travels frequently, I've used many car rental services, but this one stands out. The selection of vehicles is impressive, and the booking process is seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Software Engineer',
    image: '/images/user3.jpg',
    content:
      "I needed a car for a weekend trip, and the entire experience from booking to return was hassle-free. The car was clean, well-maintained, and fuel-efficient.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience renting with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-green-500/20" />
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                    } mr-1`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 