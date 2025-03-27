"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BecomeHostPage = () => {
  const benefits = [
    {
      title: 'Earn Extra Income',
      description: 'Make money from your car when you\'re not using it. Many hosts earn $500-$1,500 per month.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Flexible Schedule',
      description: 'You decide when your car is available. Block off dates when you need your car and accept bookings when you don\'t.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Insurance Coverage',
      description: 'All bookings include comprehensive insurance and 24/7 roadside assistance to protect your vehicle.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Easy Management',
      description: 'Our intuitive app makes it simple to manage bookings, communicate with guests, and track your earnings.',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'List your car',
      description: 'Create a listing with photos, description, and availability. It takes just 10 minutes to get started.',
    },
    {
      number: '02',
      title: 'Set your terms',
      description: 'Choose your rental price, mileage limits, and other preferences to customize your hosting experience.',
    },
    {
      number: '03',
      title: 'Accept bookings',
      description: 'Review and approve booking requests from qualified guests through our secure platform.',
    },
    {
      number: '04',
      title: 'Get paid',
      description: 'Earnings are automatically deposited to your bank account after each completed trip.',
    }
  ];

  return (
    <main>
      <Header />
      
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/images/tesla.jpg"
            alt="Host your car background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Earn money by sharing your car</h1>
            <p className="text-xl mb-8 text-gray-300">
              Turn your car into a second income by renting it out to qualified guests when you're not using it.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">How much could you earn?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-400">$500+</p>
                  <p className="text-sm text-gray-300">Average monthly income for economy cars</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">$850+</p>
                  <p className="text-sm text-gray-300">Average monthly income for SUVs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">$1,500+</p>
                  <p className="text-sm text-gray-300">Average monthly income for luxury cars</p>
                </div>
              </div>
            </div>
            <Link 
              href="/signup?host=true" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why host with Nexus Drive?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How hosting works</h2>
            <p className="text-xl text-gray-600">
              Listing your car is simple, safe, and designed to fit your schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                <span className="absolute -top-4 -left-4 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/signup?host=true" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Have questions about hosting?</h2>
                <p className="text-gray-600 mb-6">
                  Get answers to common questions about sharing your car on Nexus Drive, insurance coverage, earnings, and more.
                </p>
                <Link 
                  href="/host-faq" 
                  className="inline-block border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  View Host FAQ
                </Link>
              </div>
              <div className="md:w-1/2 p-8 flex justify-center">
                <div className="relative w-full max-w-md h-64">
                  <Image
                    src="/images/happy-customer.jpg"
                    alt="Happy car host"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default BecomeHostPage; 