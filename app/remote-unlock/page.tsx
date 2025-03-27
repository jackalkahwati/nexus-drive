"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Mock vehicle data
const vehicles = [
  {
    id: '1',
    name: 'Tesla Model Y 2023',
    image: '/images/car-details/tesla-model-y/main.jpg',
    location: 'San Francisco, CA',
    status: 'Locked',
    lastUnlocked: '2023-10-15 14:23',
  },
  {
    id: '2',
    name: 'BMW M4 Competition 2023',
    image: '/images/car-details/bmw-m4/main.jpg',
    location: 'San Francisco, CA',
    status: 'Unlocked',
    lastUnlocked: '2023-10-16 09:12',
  },
  {
    id: '3',
    name: 'Honda Civic 2023',
    image: '/images/car-details/honda-civic/main.jpg',
    location: 'Chicago, IL',
    status: 'Locked',
    lastUnlocked: '2023-10-14 18:45',
  }
];

// Mock access log
const accessLogData = [
  { id: 1, vehicle: 'Tesla Model Y 2023', action: 'Unlocked', user: 'John Doe (Guest)', time: '2023-10-15 14:23', location: 'San Francisco, CA' },
  { id: 2, vehicle: 'BMW M4 Competition 2023', action: 'Unlocked', user: 'Michael Smith (Owner)', time: '2023-10-16 09:12', location: 'San Francisco, CA' },
  { id: 3, vehicle: 'Honda Civic 2023', action: 'Locked', user: 'Michael Smith (Owner)', time: '2023-10-14 19:30', location: 'Chicago, IL' },
  { id: 4, vehicle: 'Honda Civic 2023', action: 'Unlocked', user: 'Sarah Johnson (Guest)', time: '2023-10-14 18:45', location: 'Chicago, IL' },
  { id: 5, vehicle: 'Tesla Model Y 2023', action: 'Locked', user: 'Michael Smith (Owner)', time: '2023-10-15 08:10', location: 'San Francisco, CA' },
];

const RemoteUnlockPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [unlockStatus, setUnlockStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAccessLog, setShowAccessLog] = useState(false);

  const handleUnlock = (action: 'unlock' | 'lock') => {
    setIsLoading(true);
    setUnlockStatus('');
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Add 10% chance of error for demonstration
      const success = Math.random() > 0.1;
      
      if (success) {
        const newStatus = action === 'unlock' ? 'Unlocked' : 'Locked';
        setSelectedVehicle({
          ...selectedVehicle,
          status: newStatus,
          lastUnlocked: action === 'unlock' ? new Date().toLocaleString() : selectedVehicle.lastUnlocked
        });
        setUnlockStatus(`Vehicle successfully ${action === 'unlock' ? 'unlocked' : 'locked'}.`);
      } else {
        setUnlockStatus(`Error: Could not ${action} vehicle. Please try again.`);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container-custom py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Remote Unlock Control
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Securely manage access to your vehicles, lock or unlock remotely, and track access history. Perfect for contactless handovers with guests.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/host-tools"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Back to Host Tools
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Vehicle Selection Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Your Vehicles</h2>
                  <div className="space-y-4">
                    {vehicles.map((vehicle) => (
                      <div 
                        key={vehicle.id} 
                        className={`cursor-pointer rounded-lg p-4 transition-colors ${
                          selectedVehicle.id === vehicle.id 
                            ? 'bg-blue-50 border border-blue-200' 
                            : 'bg-white border border-gray-200 hover:border-blue-200'
                        }`}
                        onClick={() => setSelectedVehicle(vehicle)}
                      >
                        <div className="flex items-center">
                          <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image 
                              src={vehicle.image} 
                              alt={vehicle.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <h3 className="font-semibold">{vehicle.name}</h3>
                            <p className="text-sm text-gray-500">{vehicle.location}</p>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                vehicle.status === 'Locked' 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {vehicle.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Control Panel */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedVehicle.name}</h2>
                      <p className="text-gray-500">{selectedVehicle.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedVehicle.status === 'Locked' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {selectedVehicle.status}
                    </span>
                  </div>

                  <div className="relative h-48 mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Status Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Current Status</div>
                      <div className="flex items-center">
                        <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                          selectedVehicle.status === 'Locked' ? 'bg-red-500' : 'bg-green-500'
                        }`}></span>
                        <span className="text-xl font-semibold">{selectedVehicle.status}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Last Unlocked</div>
                      <div className="text-xl font-semibold">{selectedVehicle.lastUnlocked}</div>
                    </div>
                  </div>

                  {/* Lock/Unlock Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <button
                      onClick={() => handleUnlock('unlock')}
                      disabled={isLoading || selectedVehicle.status === 'Unlocked'}
                      className={`flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold transition-colors ${
                        isLoading || selectedVehicle.status === 'Unlocked'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                      )}
                      Unlock Vehicle
                    </button>
                    <button
                      onClick={() => handleUnlock('lock')}
                      disabled={isLoading || selectedVehicle.status === 'Locked'}
                      className={`flex items-center justify-center px-6 py-3 rounded-md text-white font-semibold transition-colors ${
                        isLoading || selectedVehicle.status === 'Locked'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                      Lock Vehicle
                    </button>
                  </div>

                  {/* Status Messages */}
                  {unlockStatus && (
                    <div className={`p-4 mb-8 rounded-lg ${
                      unlockStatus.includes('Error') 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {unlockStatus}
                    </div>
                  )}

                  {/* Access Log */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Recent Activity</h3>
                      <button 
                        onClick={() => setShowAccessLog(!showAccessLog)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      >
                        {showAccessLog ? 'Hide Access Log' : 'View Access Log'}
                        <svg 
                          className={`w-4 h-4 ml-1 transform transition-transform ${showAccessLog ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {showAccessLog && (
                      <div className="overflow-x-auto bg-gray-50 rounded-lg p-4">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {accessLogData.map((log) => (
                              <tr key={log.id}>
                                <td className="px-4 py-3 text-sm text-gray-900">{log.vehicle}</td>
                                <td className="px-4 py-3 text-sm">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    log.action === 'Unlocked' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {log.action}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-500">{log.user}</td>
                                <td className="px-4 py-3 text-sm text-gray-500">{log.time}</td>
                                <td className="px-4 py-3 text-sm text-gray-500">{log.location}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-12 text-center">Enhanced Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Remote Control</h3>
                <p className="text-gray-600">
                  Lock or unlock your vehicle from anywhere in the world with our secure app. Perfect for managing access for guests or dealing with emergency situations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Access Logs</h3>
                <p className="text-gray-600">
                  Monitor who accesses your vehicle and when with detailed access logs. All lock and unlock events are securely recorded with timestamps and location data.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Temporary Access</h3>
                <p className="text-gray-600">
                  Generate temporary access codes for guests. Set time limits for access and revoke permissions anytime for complete control over your vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full p-6 text-left">
                  <span className="font-semibold">Is remote unlocking secure?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Yes, our remote unlocking system uses bank-level encryption and multiple authentication factors to ensure security. Each unlock request is verified through our secure servers and all activity is logged for additional security.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full p-6 text-left">
                  <span className="font-semibold">What happens if there's no internet connection?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Our system can work on minimal data connections. For complete loss of connectivity, we provide backup unlock methods including offline access codes that can be generated in advance for emergency situations.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="flex justify-between items-center w-full p-6 text-left">
                  <span className="font-semibold">Which vehicle models are compatible?</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Our remote unlock system is compatible with most modern vehicles manufactured after 2015 that have smart key capabilities. We're constantly expanding our compatibility list. Check our vehicle compatibility page for specific models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RemoteUnlockPage; 