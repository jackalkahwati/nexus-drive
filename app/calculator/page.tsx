"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CalculatorPage = () => {
  // Form state
  const [carValue, setCarValue] = useState(30000);
  const [carType, setCarType] = useState('sedan');
  const [daysAvailable, setDaysAvailable] = useState(15);
  const [location, setLocation] = useState('san-francisco');
  
  // Results state
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const [yearlyEarnings, setYearlyEarnings] = useState(0);
  const [dailyRate, setDailyRate] = useState(0);
  const [occupancyRate, setOccupancyRate] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  
  // Other state
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Location data for rates and occupancy
  const locationData = {
    'san-francisco': { 
      name: 'San Francisco',
      baseRate: 85,
      occupancyRate: 0.75,
      multiplier: 1.2
    },
    'los-angeles': {
      name: 'Los Angeles',
      baseRate: 75,
      occupancyRate: 0.70,
      multiplier: 1.1
    },
    'new-york': {
      name: 'New York',
      baseRate: 95,
      occupancyRate: 0.80,
      multiplier: 1.3
    },
    'miami': {
      name: 'Miami',
      baseRate: 70,
      occupancyRate: 0.65,
      multiplier: 1.0
    },
    'chicago': {
      name: 'Chicago',
      baseRate: 65,
      occupancyRate: 0.60,
      multiplier: 0.9
    },
    'austin': {
      name: 'Austin',
      baseRate: 60,
      occupancyRate: 0.65,
      multiplier: 0.85
    }
  } as const;
  
  // Define location type based on keys in locationData
  type LocationKey = keyof typeof locationData;
  
  // Car type multipliers
  const carTypeData = {
    'sedan': { name: 'Sedan', multiplier: 1.0 },
    'suv': { name: 'SUV', multiplier: 1.2 },
    'luxury': { name: 'Luxury', multiplier: 1.5 },
    'electric': { name: 'Electric', multiplier: 1.4 },
    'convertible': { name: 'Convertible', multiplier: 1.3 },
    'sport': { name: 'Sport', multiplier: 1.6 }
  } as const;
  
  // Define car type based on keys in carTypeData
  type CarTypeKey = keyof typeof carTypeData;
  
  // Calculate earnings when inputs change
  useEffect(() => {
    const calculate = () => {
      setIsCalculating(true);
      
      // Get data for selected location and car type
      const selectedLocation = locationData[location as LocationKey];
      const selectedCarType = carTypeData[carType as CarTypeKey];
      
      // Calculate daily rate based on car value, type, and location
      const calculatedDailyRate = Math.round(
        (selectedLocation.baseRate + (carValue * 0.0007)) * 
        selectedLocation.multiplier * 
        selectedCarType.multiplier
      );
      
      // Calculate expected occupancy based on days available and location
      const calculatedOccupancy = Math.min(
        selectedLocation.occupancyRate * (daysAvailable / 30), 
        0.9
      );
      
      // Calculate monthly earnings (daily rate * days * occupancy)
      const calculatedMonthlyEarnings = Math.round(
        calculatedDailyRate * daysAvailable * calculatedOccupancy
      );
      
      // Calculate service fee (15% of earnings)
      const calculatedServiceFee = Math.round(calculatedMonthlyEarnings * 0.15);
      
      // Set state with calculated values
      setDailyRate(calculatedDailyRate);
      setOccupancyRate(calculatedOccupancy);
      setMonthlyEarnings(calculatedMonthlyEarnings - calculatedServiceFee);
      setYearlyEarnings((calculatedMonthlyEarnings - calculatedServiceFee) * 12);
      setServiceFee(calculatedServiceFee);
      
      setIsCalculating(false);
    };
    
    calculate();
  }, [carValue, carType, daysAvailable, location]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white">
          <div className="container-custom py-16 md:py-24">
            <div className="md:flex items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  See How Much Your Car Could Earn
                </h1>
                <p className="text-xl opacity-90 mb-6">
                  Calculate your potential earnings with our interactive tool and discover how Nexus Drive can turn your car into passive income.
                </p>
                <div className="flex flex-wrap gap-4 text-sm opacity-80">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Accurate estimates</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Real market data</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Instant results</span>
                  </div>
                </div>
              </div>
              <div className="md:w-5/12">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-600">Your Estimated Earnings</h2>
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Daily Rate:</span>
                      <span className="font-bold text-xl">${dailyRate}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Expected Occupancy:</span>
                      <span className="font-bold text-xl">{Math.round(occupancyRate * 100)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Service Fee:</span>
                      <span className="font-bold text-xl">${serviceFee}/mo</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="text-center">
                      <div className="text-gray-500 mb-1">Estimated Monthly Earnings</div>
                      <div className="text-4xl font-bold text-green-600">${monthlyEarnings}</div>
                      <div className="text-sm text-gray-500 mt-2">${yearlyEarnings} per year</div>
                    </div>
                  </div>
                  <Link 
                    href="/become-host" 
                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-md font-semibold transition-colors"
                  >
                    Start Earning Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calculator Form */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="md:w-3/4 mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Customize Your Estimate</h2>
              
              <div className="bg-gray-50 rounded-lg p-8">
                {/* Car Value */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">Car Value</label>
                  <div className="mb-2">
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="1000"
                      value={carValue}
                      onChange={(e) => setCarValue(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$5,000</span>
                    <span className="font-semibold text-green-600">${carValue.toLocaleString()}</span>
                    <span>$100,000</span>
                  </div>
                </div>
                
                {/* Car Type */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">Car Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(carTypeData).map(([key, data]) => (
                      <button
                        key={key}
                        className={`py-3 px-4 rounded-md text-center transition-colors ${
                          carType === key 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-green-500'
                        }`}
                        onClick={() => setCarType(key)}
                      >
                        {data.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Days Available */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Days Available Per Month: <span className="text-green-600">{daysAvailable} days</span>
                  </label>
                  <div className="mb-2">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={daysAvailable}
                      onChange={(e) => setDaysAvailable(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1 day</span>
                    <span>15 days</span>
                    <span>30 days</span>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {Object.entries(locationData).map(([key, data]) => (
                      <option key={key} value={key}>{data.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-16 text-center">How Hosting Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-700">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">List Your Car</h3>
                <p className="text-gray-600">
                  Create a free listing with photos, set your availability, and establish your pricing. Our pricing tool suggests optimal rates.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-700">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Accept Bookings</h3>
                <p className="text-gray-600">
                  Review and approve booking requests from verified guests. You're always in control of who drives your car.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-700">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Paid</h3>
                <p className="text-gray-600">
                  Earn money each time your car is rented. Payments are automatically deposited into your bank account within 3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-6">
                      <span>How accurate is the earnings calculator?</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      Our calculator provides estimates based on real data from thousands of listings in your area. Actual earnings may vary based on seasonal demand, your car's popularity, and how you price your listing.
                    </div>
                  </details>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-6">
                      <span>What fees does Nexus Drive charge?</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      Nexus Drive takes a 15% commission on your earnings. This fee covers insurance, 24/7 customer support, marketing to attract guests, and payment processing. There are no listing fees or monthly charges.
                    </div>
                  </details>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-6">
                      <span>Is my car eligible to be listed?</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      Most vehicles that are 15 years old or newer with fewer than 150,000 miles are eligible. Your car must pass our safety inspection and be in good cosmetic condition. Luxury, exotic, and classic cars may be exempt from age requirements.
                    </div>
                  </details>
                </div>
                
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-6">
                      <span>What insurance coverage is provided?</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      All rentals include up to $1 million in liability insurance and comprehensive physical damage protection. Your personal insurance won't be affected by any incidents that occur during a rental period.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-green-500 py-16 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Turn Your Car Into a Passive Income Stream?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of successful hosts on Nexus Drive. Get started in minutes.
              </p>
              <Link 
                href="/become-host" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg inline-block transition-colors"
              >
                Start Hosting Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorPage; 