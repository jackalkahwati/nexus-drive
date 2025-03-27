"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import CarCard from '../components/CarCard';
import Link from 'next/link';

// Mock data for search results
const searchResultsData = [
  {
    id: '1',
    title: 'Tesla Model 3',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    price: 120,
    rating: 4.9,
    location: 'San Francisco, CA',
    category: 'Electric',
    seats: 5,
    transmission: 'Automatic',
    year: 2022,
  },
  {
    id: '2',
    title: 'BMW M4 Competition',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    price: 165,
    rating: 4.8,
    location: 'Los Angeles, CA',
    category: 'Sport',
    seats: 4,
    transmission: 'Automatic',
    year: 2023,
  },
  {
    id: '3',
    title: 'Jeep Wrangler',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    price: 95,
    rating: 4.7,
    location: 'Denver, CO',
    category: 'SUV',
    seats: 5,
    transmission: 'Manual',
    year: 2021,
  },
  {
    id: '4',
    title: 'Mercedes-Benz E-Class',
    image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    price: 140,
    rating: 4.9,
    location: 'New York, NY',
    category: 'Luxury',
    seats: 5,
    transmission: 'Automatic',
    year: 2022,
  },
  {
    id: '5',
    title: 'Porsche 911 Carrera',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    price: 220,
    rating: 5.0,
    location: 'Miami, FL',
    category: 'Sport',
    seats: 2,
    transmission: 'Automatic',
    year: 2023,
  },
  {
    id: '6',
    title: 'Audi e-tron GT',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    price: 180,
    rating: 4.8,
    location: 'Chicago, IL',
    category: 'Electric',
    seats: 5,
    transmission: 'Automatic',
    year: 2022,
  },
  {
    id: '7',
    title: 'Range Rover Sport',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    price: 190,
    rating: 4.7,
    location: 'Seattle, WA',
    category: 'SUV',
    seats: 5,
    transmission: 'Automatic',
    year: 2022,
  },
  {
    id: '8',
    title: 'Ford Mustang Convertible',
    image: 'https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80',
    price: 110,
    rating: 4.6,
    location: 'Austin, TX',
    category: 'Convertible',
    seats: 4,
    transmission: 'Manual',
    year: 2021,
  },
];

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTransmission, setSelectedTransmission] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [sortBy, setSortBy] = useState('recommended');
  const [searchResults, setSearchResults] = useState(searchResultsData);
  
  // Filter and sort results
  const filterAndSortResults = () => {
    let filteredResults = [...searchResultsData];
    
    // Apply category filter
    if (selectedCategory) {
      filteredResults = filteredResults.filter(car => car.category === selectedCategory);
    }
    
    // Apply transmission filter
    if (selectedTransmission) {
      filteredResults = filteredResults.filter(car => car.transmission === selectedTransmission);
    }
    
    // Apply price filter
    filteredResults = filteredResults.filter(
      car => car.price >= priceRange[0] && car.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filteredResults.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredResults.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredResults.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'recommended' - keep original order
        break;
    }
    
    setSearchResults(filteredResults);
  };
  
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };
  
  // Handle transmission selection
  const handleTransmissionSelect = (transmission: string) => {
    setSelectedTransmission(selectedTransmission === transmission ? null : transmission);
  };
  
  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const isMinSlider = e.target.id === 'min-price';
    
    setPriceRange(prev => {
      const [min, max] = prev;
      if (isMinSlider) {
        return [Math.min(value, max), max];
      } else {
        return [min, Math.max(value, min)];
      }
    });
  };
  
  // Apply filters and sorting when they change
  React.useEffect(() => {
    filterAndSortResults();
  }, [selectedCategory, selectedTransmission, priceRange, sortBy]);
  
  // Get unique categories for filter buttons
  const categories = Array.from(new Set(searchResultsData.map(car => car.category)));
  
  return (
    <main>
      <Header />
      
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-6">Find your perfect car</h1>
          <SearchForm />
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                <h3 className="text-lg font-bold mb-4">Filters</h3>
                
                {/* Category filters */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Car Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === category
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Price Range</h4>
                  <div className="px-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">${priceRange[0]}</span>
                      <span className="text-sm text-gray-600">${priceRange[1]}</span>
                    </div>
                    <div className="relative mb-4">
                      <input
                        type="range"
                        id="min-price"
                        min="0"
                        max="300"
                        step="10"
                        value={priceRange[0]}
                        onChange={handlePriceRangeChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <input
                        type="range"
                        id="max-price"
                        min="0"
                        max="300"
                        step="10"
                        value={priceRange[1]}
                        onChange={handlePriceRangeChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer absolute top-0"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-1/2 pr-2">
                        <label htmlFor="min-price-input" className="block text-xs text-gray-600 mb-1">Min Price</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">$</span>
                          <input
                            id="min-price-input"
                            type="number"
                            min="0"
                            max={priceRange[1]}
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                            className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 pl-2">
                        <label htmlFor="max-price-input" className="block text-xs text-gray-600 mb-1">Max Price</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-600">$</span>
                          <input
                            id="max-price-input"
                            type="number"
                            min={priceRange[0]}
                            max="300"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 300])}
                            className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Transmission */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-gray-700">Transmission</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTransmission === 'Automatic'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleTransmissionSelect('Automatic')}
                    >
                      Automatic
                    </button>
                    <button
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTransmission === 'Manual'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleTransmissionSelect('Manual')}
                    >
                      Manual
                    </button>
                  </div>
                </div>
                
                {/* Reset Filters */}
                <button
                  className="w-full py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedTransmission(null);
                    setPriceRange([0, 300]);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
            
            {/* Search results */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-xl font-bold">{searchResults.length} cars found</h2>
                  <p className="text-gray-600">in San Francisco, CA</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700">Sort by:</span>
                  <select 
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {searchResults.map((car) => (
                    <CarCard
                      key={car.id}
                      id={car.id}
                      title={car.title}
                      image={car.image}
                      price={car.price}
                      rating={car.rating}
                      location={car.location}
                      category={car.category}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">No matching cars found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters to find more cars</p>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedTransmission(null);
                      setPriceRange([0, 300]);
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {searchResults.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="inline-flex shadow-sm rounded-md">
                    <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-2 border border-gray-300 bg-green-500 text-white font-medium">
                      1
                    </button>
                    <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 