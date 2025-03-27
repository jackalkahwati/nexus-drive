"use client";

import React from 'react';

const SearchForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="location"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="City, airport, or address"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="from-date" className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="date"
                id="from-date"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="to-date" className="block text-sm font-medium text-gray-700 mb-1">
              Until
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="date"
                id="to-date"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
              Search Cars
            </button>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <input
              id="electric"
              name="car-type"
              type="checkbox"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="electric" className="ml-2 block text-sm text-gray-700">
              Electric
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="luxury"
              name="car-type"
              type="checkbox"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="luxury" className="ml-2 block text-sm text-gray-700">
              Luxury
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="suv"
              name="car-type"
              type="checkbox"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="suv" className="ml-2 block text-sm text-gray-700">
              SUV
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="convertible"
              name="car-type"
              type="checkbox"
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="convertible" className="ml-2 block text-sm text-gray-700">
              Convertible
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm; 