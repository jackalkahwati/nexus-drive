"use client";

import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <label className="text-xs font-medium text-gray-500 mb-1 block">Where</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="City, airport, address or hotel"
              className="bg-transparent w-full focus:outline-none text-gray-700"
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-medium text-gray-500 mb-1 block">From</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="3/27/2025 10:00 AM"
              className="bg-transparent w-full focus:outline-none text-gray-700"
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-medium text-gray-500 mb-1 block">Until</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="3/30/2025 10:00 AM"
              className="bg-transparent w-full focus:outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-full p-2">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 