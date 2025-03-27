"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  const steps = [
    {
      id: 1,
      title: 'Find the perfect car',
      description: 'Browse thousands of cars with detailed specifications, verified reviews, and flexible pickup options.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Book with confidence',
      description: 'Reserve your car with our secure booking system. No hidden fees, free cancellation up to 24 hours before your trip.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Pick up and go',
      description: 'Meet the owner to get the keys and start your adventure, or choose contactless pickup for added convenience.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Return and review',
      description: 'Return the car at the end of your trip, fill up the tank, and share your experience with the community.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'How do I book a car?',
      answer: 'Simply search for available cars at your destination, select the dates you need, and book instantly. You will receive confirmation and all the details you need for pickup.'
    },
    {
      question: 'What happens if I need to cancel?',
      answer: 'We offer free cancellation up to 24 hours before your scheduled pickup. If you need to cancel within 24 hours, a partial fee may apply.'
    },
    {
      question: 'Is insurance included?',
      answer: 'All bookings include standard insurance coverage. Additional protection plans are available during checkout for extra peace of mind.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can request an extension through the app or website. Extensions are subject to the car\'s availability and host approval.'
    },
    {
      question: 'What if the car breaks down?',
      answer: 'We provide 24/7 roadside assistance. In case of a breakdown, contact our support team immediately for help.'
    }
  ];

  return (
    <main>
      <Header />
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Nexus Drive Works</h1>
            <p className="text-xl text-gray-600">
              Renting a car on Nexus Drive is simple and secure. Follow these easy steps to get started on your next adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of satisfied customers who have found their perfect ride on NexusDrive. Sign up today and get $25 off your first rental!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/signup" 
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-bold transition-colors text-center"
                  >
                    Get Started Now
                  </Link>
                  <Link 
                    href="/cars" 
                    className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-md font-bold transition-colors text-center"
                  >
                    Browse Cars
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                <Image
                  src="/images/happy-customer.jpg"
                  alt="Happy customer with rental car"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-6 bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default HowItWorksPage; 