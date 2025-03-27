"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignupPage = () => {
  return (
    <main>
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <div className="h-64 md:h-full relative">
                    <Image 
                      src="/images/happy-customer.jpg" 
                      alt="Join our community"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500 bg-opacity-70 flex items-center justify-center p-8">
                      <div className="text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Join our community</h2>
                        <p className="mb-6">Access amazing cars or earn money by sharing your vehicle</p>
                        <div className="text-green-200 text-sm">
                          <p>• Free cancellation up to 24h before trip</p>
                          <p>• Verified hosts and guests</p>
                          <p>• 24/7 customer support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
                  
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        required
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="account-type" className="block text-sm font-medium text-gray-700 mb-1">
                        I want to
                      </label>
                      <select
                        id="account-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="guest">Rent cars as a guest</option>
                        <option value="host">Share my car as a host</option>
                        <option value="both">Both rent and share cars</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <Link href="/terms" className="text-green-500 hover:text-green-600">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-green-500 hover:text-green-600">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
                    >
                      Create Account
                    </button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-600">
                      Already have an account?{' '}
                      <Link href="/login" className="text-green-500 hover:text-green-600 font-medium">
                        Log in
                      </Link>
                    </p>
                  </div>
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

export default SignupPage; 