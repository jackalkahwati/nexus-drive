"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Booking = {
  id: string;
  car: string;
  image: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  totalAmount: number;
  location: string;
};

type Car = {
  id: string;
  name: string;
  image: string;
  status: 'active' | 'maintenance' | 'unavailable';
  earnings: number;
  bookings: number;
  rating: number;
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  
  // Mock data for demonstration
  const bookings: Booking[] = [
    {
      id: 'B23456',
      car: '2022 Tesla Model 3',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      startDate: '2025-04-10',
      endDate: '2025-04-15',
      status: 'upcoming',
      totalAmount: 450,
      location: 'San Francisco, CA'
    },
    {
      id: 'B12345',
      car: '2023 BMW X5',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      startDate: '2025-03-26',
      endDate: '2025-03-28',
      status: 'active',
      totalAmount: 320,
      location: 'Los Angeles, CA'
    },
    {
      id: 'B98765',
      car: '2021 Porsche 911',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      startDate: '2025-03-15',
      endDate: '2025-03-18',
      status: 'completed',
      totalAmount: 650,
      location: 'San Diego, CA'
    },
    {
      id: 'B87654',
      car: '2022 Jeep Wrangler',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVlcCUyMHdyYW5nbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      startDate: '2025-02-25',
      endDate: '2025-02-28',
      status: 'cancelled',
      totalAmount: 280,
      location: 'Portland, OR'
    }
  ];
  
  const cars: Car[] = [
    {
      id: 'C12345',
      name: '2022 Tesla Model 3',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      status: 'active',
      earnings: 2450,
      bookings: 8,
      rating: 4.8
    },
    {
      id: 'C23456',
      name: '2020 Audi Q5',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMHE1fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      status: 'maintenance',
      earnings: 1875,
      bookings: 6,
      rating: 4.5
    },
    {
      id: 'C34567',
      name: '2023 Ford Mustang',
      image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      status: 'unavailable',
      earnings: 1200,
      bookings: 4,
      rating: 4.7
    }
  ];
  
  const userStats = {
    totalEarnings: 5525,
    totalBookings: 18,
    averageRating: 4.7,
    pendingPayouts: 650
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-orange-100 text-orange-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Alex! Manage your bookings and listings.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/become-host" 
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                + List a Car
              </Link>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 mb-2">Total Earnings</p>
              <h3 className="text-2xl font-bold">${userStats.totalEarnings}</h3>
              <p className="text-sm text-green-600 mt-2">+12% from last month</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 mb-2">Total Bookings</p>
              <h3 className="text-2xl font-bold">{userStats.totalBookings}</h3>
              <p className="text-sm text-green-600 mt-2">+5% from last month</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 mb-2">Average Rating</p>
              <h3 className="text-2xl font-bold">{userStats.averageRating}/5.0</h3>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(userStats.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 mb-2">Pending Payouts</p>
              <h3 className="text-2xl font-bold">${userStats.pendingPayouts}</h3>
              <Link href="#" className="text-sm text-green-600 mt-2 inline-block">View details</Link>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                className={`pb-4 px-1 ${
                  activeTab === 'bookings'
                    ? 'border-b-2 border-green-500 text-green-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('bookings')}
              >
                My Bookings
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === 'cars'
                    ? 'border-b-2 border-green-500 text-green-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('cars')}
              >
                My Cars
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-green-500 text-green-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button
                className={`pb-4 px-1 ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-green-500 text-green-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </div>
          </div>
          
          {/* Bookings Tab Content */}
          {activeTab === 'bookings' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Bookings</h2>
                <div>
                  <select 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    defaultValue="all"
                  >
                    <option value="all">All Bookings</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 h-48 md:h-auto">
                        <img
                          src={booking.image}
                          alt={booking.car}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-3/4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-lg font-bold mb-1">{booking.car}</h3>
                            <p className="text-gray-500 text-sm mb-2">
                              Booking #{booking.id} · {booking.location}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row mb-4">
                          <div className="mb-2 md:mb-0 md:mr-8">
                            <p className="text-sm text-gray-500">Pickup Date</p>
                            <p className="font-medium">{formatDate(booking.startDate)}</p>
                          </div>
                          <div className="mb-2 md:mb-0 md:mr-8">
                            <p className="text-sm text-gray-500">Return Date</p>
                            <p className="font-medium">{formatDate(booking.endDate)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-medium">${booking.totalAmount}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/bookings/${booking.id}`}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                          >
                            View Details
                          </Link>
                          
                          {booking.status === 'upcoming' && (
                            <>
                              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                                Modify
                              </button>
                              <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors">
                                Cancel
                              </button>
                            </>
                          )}
                          
                          {booking.status === 'completed' && (
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                              Write Review
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Cars Tab Content */}
          {activeTab === 'cars' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Cars</h2>
                <Link
                  href="/become-host"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  + Add New Car
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(car.status)}`}>
                          {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-4">{car.name}</h3>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Earnings</p>
                          <p className="font-semibold">${car.earnings}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Bookings</p>
                          <p className="font-semibold">{car.bookings}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Rating</p>
                          <div className="flex items-center justify-center">
                            <span className="font-semibold mr-1">{car.rating}</span>
                            <svg 
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link
                          href={`/cars/${car.id}`}
                          className="flex-1 px-4 py-2 bg-green-500 text-white text-center rounded-md hover:bg-green-600 transition-colors"
                        >
                          Manage
                        </Link>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Profile Tab Content */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Your Profile</h2>
              
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      Change Photo
                    </button>
                    
                    <div className="mt-6 w-full">
                      <h3 className="text-lg font-semibold mb-2">Verification</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Email</span>
                          <span className="text-green-600 flex items-center">
                            Verified
                            <svg 
                              className="w-5 h-5 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 20 20" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Phone</span>
                          <span className="text-green-600 flex items-center">
                            Verified
                            <svg 
                              className="w-5 h-5 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 20 20" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Driver's License</span>
                          <span className="text-green-600 flex items-center">
                            Verified
                            <svg 
                              className="w-5 h-5 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 20 20" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Identity</span>
                          <button className="text-blue-600 hover:underline">
                            Verify Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          defaultValue="Alex"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          defaultValue="Johnson"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="alex.johnson@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue="(555) 123-4567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        defaultValue="123 Main Street"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 mb-4"
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <input
                            type="text"
                            id="city"
                            defaultValue="San Francisco"
                            placeholder="City"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="text"
                            id="state"
                            defaultValue="CA"
                            placeholder="State"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="text"
                            id="zipCode"
                            defaultValue="94103"
                            placeholder="Zip Code"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows={4}
                        defaultValue="Hi there! I'm Alex, a tech enthusiast and travel lover. I enjoy exploring new places and meeting new people. I take great care of my vehicles and expect the same from renters."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab Content */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Security</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Password</h4>
                    <p className="text-gray-600 mb-4">
                      Last changed 3 months ago. We recommend changing your password every 3 months.
                    </p>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      Change Password
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                    <p className="text-gray-600 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Payment Methods</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4587</p>
                        <p className="text-sm text-gray-500">Expires 12/2026</p>
                      </div>
                    </div>
                    <div>
                      <button className="text-red-600 hover:text-red-800">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  Add Payment Method
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Notifications</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive emails about bookings, reviews, and account updates</p>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Receive text messages for booking confirmations and reminders</p>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Communications</p>
                      <p className="text-sm text-gray-500">Receive updates about promotions, new features, and offers</p>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Account Actions</h3>
                
                <div className="space-y-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    Download My Data
                  </button>
                  
                  <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;