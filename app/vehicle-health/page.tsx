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
    status: 'Good',
    odometer: 12354,
    lastService: '2023-08-15',
    nextService: '2023-12-15',
  },
  {
    id: '3',
    name: 'BMW M4 Competition 2023',
    image: '/images/car-details/bmw-m4/main.jpg',
    location: 'San Francisco, CA',
    status: 'Attention Needed',
    odometer: 24576,
    lastService: '2023-06-10',
    nextService: '2023-10-10',
    alerts: ['Oil change due', 'Tire pressure: front left (28 PSI)']
  },
  {
    id: '6',
    name: 'Honda Civic 2023',
    image: '/images/car-details/honda-civic/main.jpg',
    location: 'Chicago, IL',
    status: 'Good',
    odometer: 8754,
    lastService: '2023-09-05',
    nextService: '2024-01-05',
  }
];

const VehicleHealthPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock maintenance history
  const maintenanceHistory = [
    { date: '2023-08-15', service: 'Regular Maintenance', odometer: 10250, cost: '$325', provider: 'Tesla Service Center' },
    { date: '2023-05-20', service: 'Tire Rotation', odometer: 7500, cost: '$80', provider: 'Discount Tire' },
    { date: '2023-03-12', service: 'Brake Pad Replacement', odometer: 5200, cost: '$450', provider: 'Auto Shop Express' },
    { date: '2023-01-05', service: 'Oil Change', odometer: 3000, cost: '$95', provider: 'Quick Lube' },
    { date: '2022-11-15', service: 'Initial Inspection', odometer: 1200, cost: '$150', provider: 'Tesla Service Center' }
  ];

  // Health metrics data (for charts)
  const healthMetrics = {
    batteryHealth: 95, // percentage
    brakeWear: 85,
    tireCondition: 90,
    oilLife: 70,
    overallHealth: 88
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
                Vehicle Health Monitor
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Track your vehicle's health, maintenance history, and receive alerts for service needs. Stay on top of your car's condition to ensure a safe and reliable driving experience.
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
                            <div className="flex justify-between items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                vehicle.status === 'Good' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {vehicle.status}
                              </span>
                              <span className="text-xs text-gray-500">{vehicle.odometer.toLocaleString()} mi</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vehicle Health Dashboard */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedVehicle.name}</h2>
                      <p className="text-gray-500">{selectedVehicle.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedVehicle.status === 'Good' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedVehicle.status}
                    </span>
                  </div>

                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Odometer</div>
                      <div className="text-xl font-semibold">{selectedVehicle.odometer.toLocaleString()} mi</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Last Service</div>
                      <div className="text-xl font-semibold">{selectedVehicle.lastService}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Next Service</div>
                      <div className="text-xl font-semibold">{selectedVehicle.nextService}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Health Score</div>
                      <div className="text-xl font-semibold">{healthMetrics.overallHealth}%</div>
                    </div>
                  </div>

                  {/* Alerts Section */}
                  {selectedVehicle.alerts && selectedVehicle.alerts.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Alerts Requiring Attention
                      </h3>
                      <ul className="list-disc pl-6 text-yellow-800">
                        {selectedVehicle.alerts.map((alert, index) => (
                          <li key={index} className="mb-1">{alert}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Health Metrics */}
                  <div>
                    <div className="border-b border-gray-200 mb-4">
                      <nav className="flex -mb-px">
                        <button 
                          onClick={() => setActiveTab('overview')}
                          className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'overview' 
                              ? 'border-blue-500 text-blue-600' 
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          Overview
                        </button>
                        <button 
                          onClick={() => setActiveTab('maintenance')}
                          className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'maintenance' 
                              ? 'border-blue-500 text-blue-600' 
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          Maintenance History
                        </button>
                        <button 
                          onClick={() => setActiveTab('metrics')}
                          className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'metrics' 
                              ? 'border-blue-500 text-blue-600' 
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          Health Metrics
                        </button>
                      </nav>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'overview' && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Vehicle Overview</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="mb-4">
                              <div className="text-sm text-gray-500 mb-1">Vehicle Type</div>
                              <div className="font-medium">Electric SUV</div>
                            </div>
                            <div className="mb-4">
                              <div className="text-sm text-gray-500 mb-1">Year</div>
                              <div className="font-medium">2023</div>
                            </div>
                            <div className="mb-4">
                              <div className="text-sm text-gray-500 mb-1">VIN</div>
                              <div className="font-medium">5YJ3E1EA8PF........</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-500 mb-1">License Plate</div>
                              <div className="font-medium">ABC1234</div>
                            </div>
                          </div>
                          <div>
                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                              <div className="text-sm text-gray-500 mb-1">Overall Health Score</div>
                              <div className="relative pt-1">
                                <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
                                  <div 
                                    style={{ width: `${healthMetrics.overallHealth}%` }} 
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                  ></div>
                                </div>
                                <div className="text-right mt-1 text-gray-500 text-xs">{healthMetrics.overallHealth}%</div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 mb-1">Service Schedule</div>
                              <div className="font-medium mb-2">Next service due in 45 days</div>
                              <button className="text-blue-600 text-sm hover:text-blue-800">
                                Schedule Maintenance
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'maintenance' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold">Maintenance History</h3>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded transition-colors">
                            Add Service Record
                          </button>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Odometer</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {maintenanceHistory.map((record, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.service}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.odometer.toLocaleString()} mi</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.cost}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.provider}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {activeTab === 'metrics' && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Health Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 mb-1">Battery Health</div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
                                <div 
                                  style={{ width: `${healthMetrics.batteryHealth}%` }} 
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                              <div className="text-right mt-1 text-gray-500 text-xs">{healthMetrics.batteryHealth}%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 mb-1">Brake Wear</div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
                                <div 
                                  style={{ width: `${healthMetrics.brakeWear}%` }} 
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                              <div className="text-right mt-1 text-gray-500 text-xs">{healthMetrics.brakeWear}%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 mb-1">Tire Condition</div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
                                <div 
                                  style={{ width: `${healthMetrics.tireCondition}%` }} 
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                              <div className="text-right mt-1 text-gray-500 text-xs">{healthMetrics.tireCondition}%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 mb-1">Oil Life</div>
                            <div className="relative pt-1">
                              <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200">
                                <div 
                                  style={{ width: `${healthMetrics.oilLife}%` }} 
                                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                                    healthMetrics.oilLife > 75 ? 'bg-green-500' : healthMetrics.oilLife > 40 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                ></div>
                              </div>
                              <div className="text-right mt-1 text-gray-500 text-xs">{healthMetrics.oilLife}%</div>
                            </div>
                          </div>
                        </div>
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
            <h2 className="text-2xl font-bold mb-12 text-center">Vehicle Health Monitor Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Real-time Diagnostics</h3>
                <p className="text-gray-600">
                  Monitor your vehicle's vital systems in real-time with our advanced diagnostic tools. Catch potential issues before they become major problems.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Smart Alerts</h3>
                <p className="text-gray-600">
                  Receive automatic notifications when your vehicle needs attention or maintenance. Stay informed about service schedules and critical issues.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">Maintenance Records</h3>
                <p className="text-gray-600">
                  Keep detailed maintenance records in one place. Track service history, costs, and upcoming maintenance needs to maintain your vehicle's value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleHealthPage; 