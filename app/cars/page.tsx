"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { carsData } from '../data/cars';
import { CarData } from '../data/cars';
import { Heart, Search, Sliders, Filter, Star, MapPin, Calendar, ChevronDown, X } from 'lucide-react';

const CarsPage = () => {
  const [filteredCars, setFilteredCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    location: 'San Francisco, CA',
    startDate: '',
    endDate: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    searchTerm: ''
  });
  const [selectedCars, setSelectedCars] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSortOption, setActiveSortOption] = useState('relevance');
  const [isFiltersMobileOpen, setIsFiltersMobileOpen] = useState(false);
  
  // Categories for filtering
  const categories = [
    "All", "Electric", "Luxury", "SUV", "Sport", "Hybrid", "Sedan", "Convertible"
  ];

  // Load cars on initial mount
  useEffect(() => {
    // Convert the carsData object to an array
    const carsArray = Object.values(carsData);
    setFilteredCars(carsArray);
    setLoading(false);
  }, []);

  // Apply filters function
  const applyFilters = () => {
    setLoading(true);
    
    let filtered = Object.values(carsData);
    
    // Filter by search term if provided
    if (searchParams.searchTerm) {
      const term = searchParams.searchTerm.toLowerCase();
      filtered = filtered.filter(car => 
        car.title.toLowerCase().includes(term) || 
        car.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by location if provided
    if (searchParams.location && searchParams.location !== "All") {
      filtered = filtered.filter(car => 
        car.location.includes(searchParams.location)
      );
    }
    
    // Filter by category if provided
    if (searchParams.category && searchParams.category !== "All") {
      filtered = filtered.filter(car => 
        car.category === searchParams.category
      );
    }
    
    // Filter by price range if provided
    if (searchParams.minPrice) {
      filtered = filtered.filter(car => 
        car.price >= parseInt(searchParams.minPrice)
      );
    }
    
    if (searchParams.maxPrice) {
      filtered = filtered.filter(car => 
        car.price <= parseInt(searchParams.maxPrice)
      );
    }
    
    // Apply sorting
    if (activeSortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (activeSortOption === 'trips') {
      filtered.sort((a, b) => b.tripCount - a.tripCount);
    }
    
    setFilteredCars(filtered);
    setLoading(false);
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle car selection for comparison or saving
  const toggleCarSelection = (carId: string) => {
    setSelectedCars(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(carId)) {
        newSelection.delete(carId);
      } else {
        newSelection.add(carId);
      }
      return newSelection;
    });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchParams({
      location: 'San Francisco, CA',
      startDate: '',
      endDate: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      searchTerm: ''
    });
    setActiveSortOption('relevance');
    
    // Reset to all cars
    setFilteredCars(Object.values(carsData));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900">Browse Cars</h1>
            <p className="text-gray-600 mt-2">Find and book the perfect car for your next adventure</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Search Bar - Desktop */}
          <div className="hidden md:block bg-white rounded-lg shadow-md p-4 mb-8">
            <form onSubmit={handleSearch} className="flex items-center space-x-4">
              <div className="flex-grow">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="searchTerm"
                    value={searchParams.searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search by car make, model, or features..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <select
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="San Francisco, CA">San Francisco, CA</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Miami, FL">Miami, FL</option>
                  <option value="Chicago, IL">Chicago, IL</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Search
              </button>
            </form>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsFiltersMobileOpen(true)}
              className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'} hidden md:block transition-all duration-300 ease-in-out bg-white shadow-md rounded-lg h-fit sticky top-24`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
                    <X size={18} />
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category}`}
                          name="category"
                          value={category === "All" ? "" : category}
                          checked={searchParams.category === (category === "All" ? "" : category)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300"
                        />
                        <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range (per day)</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="minPrice" className="sr-only">Min Price</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <input
                          type="number"
                          name="minPrice"
                          id="minPrice"
                          placeholder="Min"
                          value={searchParams.minPrice}
                          onChange={handleInputChange}
                          className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="maxPrice" className="sr-only">Max Price</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <input
                          type="number"
                          name="maxPrice"
                          id="maxPrice"
                          placeholder="Max"
                          value={searchParams.maxPrice}
                          onChange={handleInputChange}
                          className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dates Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Trip Dates</h3>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="startDate" className="block text-xs text-gray-500 mb-1">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={searchParams.startDate}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="endDate" className="block text-xs text-gray-500 mb-1">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={searchParams.endDate}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button
                    onClick={applyFilters}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={resetFilters}
                    className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </aside>

            {/* Mobile Filters Sidebar */}
            {isFiltersMobileOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex md:hidden">
                <div className="bg-white w-80 h-full ml-auto overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold">Filters</h2>
                      <button onClick={() => setIsFiltersMobileOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <X size={18} />
                      </button>
                    </div>
                    
                    {/* Mobile Search */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Search</h3>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="searchTerm"
                          value={searchParams.searchTerm}
                          onChange={handleInputChange}
                          placeholder="Search cars..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    {/* Mobile Location */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Location</h3>
                      <select
                        name="location"
                        value={searchParams.location}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="San Francisco, CA">San Francisco, CA</option>
                        <option value="Los Angeles, CA">Los Angeles, CA</option>
                        <option value="New York, NY">New York, NY</option>
                        <option value="Miami, FL">Miami, FL</option>
                        <option value="Chicago, IL">Chicago, IL</option>
                      </select>
                    </div>
                    
                    {/* Category Filter - Mobile */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <input
                              type="radio"
                              id={`mobile-category-${category}`}
                              name="category"
                              value={category === "All" ? "" : category}
                              checked={searchParams.category === (category === "All" ? "" : category)}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300"
                            />
                            <label htmlFor={`mobile-category-${category}`} className="ml-2 text-sm text-gray-700">
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price Range Filter - Mobile */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range (per day)</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                            <input
                              type="number"
                              name="minPrice"
                              placeholder="Min"
                              value={searchParams.minPrice}
                              onChange={handleInputChange}
                              className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                            <input
                              type="number"
                              name="maxPrice"
                              placeholder="Max"
                              value={searchParams.maxPrice}
                              onChange={handleInputChange}
                              className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dates Filter - Mobile */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Trip Dates</h3>
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="mobileStartDate" className="block text-xs text-gray-500 mb-1">Start Date</label>
                          <input
                            type="date"
                            name="startDate"
                            id="mobileStartDate"
                            value={searchParams.startDate}
                            onChange={handleInputChange}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="mobileEndDate" className="block text-xs text-gray-500 mb-1">End Date</label>
                          <input
                            type="date"
                            name="endDate"
                            id="mobileEndDate"
                            value={searchParams.endDate}
                            onChange={handleInputChange}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <button
                        onClick={() => {
                          applyFilters();
                          setIsFiltersMobileOpen(false);
                        }}
                        className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Apply Filters
                      </button>
                      <button
                        onClick={() => {
                          resetFilters();
                          setIsFiltersMobileOpen(false);
                        }}
                        className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cars Grid */}
            <div className="flex-1">
              {/* Sort Options and Results Count */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
                <div className="mb-3 sm:mb-0">
                  <p className="text-gray-600">
                    {loading ? 'Searching...' : `${filteredCars.length} cars available`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <div className="relative">
                    <select
                      className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={activeSortOption}
                      onChange={(e) => {
                        setActiveSortOption(e.target.value);
                        setTimeout(() => applyFilters(), 0);
                      }}
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Highest Rating</option>
                      <option value="trips">Most Trips</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Cars Grid */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                </div>
              ) : filteredCars.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <p className="text-lg text-gray-600 mb-4">No cars found matching your criteria.</p>
                  <button
                    onClick={resetFilters}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map((car) => (
                    <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Link href={`/cars/${car.id}`} className="block">
                        <div className="relative h-48 w-full">
                          <Image
                            src={car.image}
                            alt={car.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-transform hover:scale-105"
                            priority={car.id === '1'}
                          />
                          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                            {car.category}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleCarSelection(car.id);
                            }}
                            className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full ${
                              selectedCars.has(car.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
                            } transition-colors`}
                          >
                            <Heart size={18} className={selectedCars.has(car.id) ? 'fill-current' : ''} />
                          </button>
                        </div>
                      </Link>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900">{car.title}</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm ml-1 font-medium">{car.rating.toFixed(1)}</span>
                            <span className="text-xs text-gray-500 ml-1">({car.totalRatings})</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 flex items-center">
                          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                          {car.location}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                            {car.seats} seats
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                            {car.transmission}
                          </span>
                          {car.range && (
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                              {car.range} mi range
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                          <div>
                            <span className="font-bold text-green-500">${car.price}</span>
                            <span className="text-gray-500 text-sm"> / day</span>
                          </div>
                          <Link href={`/cars/${car.id}`} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarsPage; 