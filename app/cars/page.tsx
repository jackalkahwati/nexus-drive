"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { vehicleService, Vehicle } from '../lib/vehicle-service';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Heart } from 'lucide-react';

// Map placeholder instead of actual map component to fix build errors
const MapPlaceholder = () => (
  <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
    <p>Map is temporarily unavailable</p>
  </div>
);

// Simplified Map components
const Map = ({ children, style, initialViewState, mapboxAccessToken, mapStyle, ...props }: any) => (
  <MapPlaceholder />
);

const Marker = ({ children, longitude, latitude, anchor }: any) => null;
const Popup = ({ children, longitude, latitude, anchor, onClose }: any) => null;

// ViewState type definition
interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
};

// Define additional properties for enhanced vehicle
interface EnhancedVehicle extends Vehicle {
  coordinates: [number, number];
  price: number;
  trips: number;
}

// Helper function to match car name with appropriate image
const getCarImagePath = (car: Vehicle | EnhancedVehicle): string => {
  // Extract brand from car name (e.g., "Tesla Model 3" -> "tesla")
  const brand = car.name.split(' ')[0].toLowerCase();
  
  // Check if we have a matching image for this brand
  const commonBrands = ['tesla', 'bmw', 'mercedes', 'jeep', 'audi', 'ford'];
  
  if (commonBrands.includes(brand)) {
    return `/images/${brand}.jpg`;
  }
  
  // Fallback to car type-specific image if available
  const commonTypes = ['suv', 'sedan', 'sport', 'luxury', 'electric', 'convertible'];
  const carType = car.type.toLowerCase();
  
  if (commonTypes.includes(carType)) {
    return `/images/types/${carType}.jpg`;
  }
  
  // Last fallback to a generic car type image
  return `/images/types/sedan.jpg`;
};

// Generate random coordinates for demo purposes
const generateRandomCoordinates = (baseLocation = [-122.431, 37.773], radius = 0.1): [number, number] => {
  return [
    baseLocation[0] + (Math.random() - 0.5) * radius,
    baseLocation[1] + (Math.random() - 0.5) * radius
  ];
};

// Function to extract year from car name
const extractYear = (name: string): string => {
  const yearRegex = /\b(20\d{2})\b/;
  const match = name.match(yearRegex);
  return match ? match[1] : new Date().getFullYear().toString();
};

// Function to extract make and model from car name
const extractMakeModel = (name: string): string => {
  const yearRegex = /\b(20\d{2})\b/;
  return name.replace(yearRegex, '').trim();
};

const CarsPage = () => {
  const [cars, setCars] = useState<EnhancedVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState({
    location: 'San Francisco, CA',
    startDate: '',
    endDate: '',
    type: ''
  });
  const [viewport, setViewport] = useState({
    longitude: -122.431,
    latitude: 37.773,
    zoom: 12
  });
  const [selectedCar, setSelectedCar] = useState<EnhancedVehicle | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    // Fetch vehicles on initial load
    fetchVehicles();
  }, []);
  
  const fetchVehicles = async (params?: any) => {
    setLoading(true);
    try {
      const vehicles = await vehicleService.getVehicles(params);
      
      // Enhance vehicles with additional data for UI
      const enhancedVehicles = vehicles.map(vehicle => ({
        ...vehicle,
        coordinates: generateRandomCoordinates(),
        price: Math.floor(Math.random() * 100) + 80, // Random price between 80 and 180
        trips: Math.floor(Math.random() * 50) + 1, // Random number of trips
      }));
      
      setCars(enhancedVehicles);
      setError(null);
    } catch (err) {
      console.error('Error fetching vehicles:', err);
      setError('Failed to load vehicles. Please try again later.');
      // Fallback to static data if API fails
      const enhancedStaticCars = staticCars.map(car => ({
        ...car,
        coordinates: generateRandomCoordinates(),
        price: Math.floor(Math.random() * 100) + 80,
        trips: Math.floor(Math.random() * 50) + 1,
      }));
      setCars(enhancedStaticCars);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchVehicles({
      zoneId: searchParams.location || undefined,
      startDate: searchParams.startDate || undefined,
      endDate: searchParams.endDate || undefined,
      type: searchParams.type || undefined
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const toggleFavorite = (e: React.MouseEvent, carId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId);
      } else {
        newFavorites.add(carId);
      }
      return newFavorites;
    });
  };

  // Fallback static data if API fails
  const staticCars = [
    {
      id: 'tesla-model-3-2023',
      name: 'Tesla Model 3 2023',
      type: 'Electric',
      status: 'AVAILABLE',
      mileage: 12000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'toyota-camry-hybrid-2022',
      name: 'Toyota Camry Hybrid 2022',
      type: 'Hybrid',
      status: 'AVAILABLE',
      mileage: 15000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'bmw-m4-2022',
      name: 'BMW M4 2022',
      type: 'Sport',
      status: 'AVAILABLE',
      mileage: 8000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'jeep-wrangler-2021',
      name: 'Jeep Wrangler 2021',
      type: 'SUV',
      status: 'AVAILABLE',
      mileage: 20000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'audi-q5-2022',
      name: 'Audi Q5 2022',
      type: 'SUV',
      status: 'AVAILABLE',
      mileage: 10000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'ford-mustang-2020',
      name: 'Ford Mustang 2020',
      type: 'Sport',
      status: 'AVAILABLE',
      mileage: 25000,
      zoneId: 'San Francisco',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex flex-col">
        {/* Turo-style top bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-shrink-0">
                <span className="text-sm font-medium text-gray-500">Where</span>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    className="w-full sm:w-56 py-1 focus:outline-none font-medium"
                    placeholder="City, airport, or address"
                  />
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm font-medium text-gray-500">From</span>
                <div className="relative">
                  <input
                    type="date"
                    name="startDate"
                    value={searchParams.startDate}
                    onChange={handleInputChange}
                    className="w-full sm:w-40 py-1 focus:outline-none font-medium"
                  />
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm font-medium text-gray-500">Until</span>
                <div className="relative">
                  <input
                    type="date"
                    name="endDate"
                    value={searchParams.endDate}
                    onChange={handleInputChange}
                    className="w-full sm:w-40 py-1 focus:outline-none font-medium"
                  />
                </div>
              </div>
              
              <button 
                onClick={handleSearch}
                className="ml-auto bg-purple-700 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-800 transition-colors"
              >
                Search
              </button>
            </div>
            
            {/* Filter options */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Daily price</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Vehicle type</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Make</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Years</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Seats</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Electric</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>Deliver to me</span>
              </div>
              <div className="border border-gray-300 rounded-md px-3 py-1 flex items-center">
                <span>All filters</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Left panel - Car list */}
          <div className="w-full md:w-1/2 lg:w-2/5 overflow-y-auto">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-1">{cars.length}+ cars available</h1>
              <p className="text-gray-600 text-sm mb-4">These cars are located in and around {searchParams.location}</p>
              
              {loading ? (
                <div className="text-center py-10">
                  <svg className="animate-spin h-10 w-10 mx-auto text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-3 text-gray-600">Loading vehicles...</p>
                </div>
              ) : error ? (
                <div className="text-center py-10">
                  <p className="text-red-500">{error}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cars.map((car) => (
                    <Link href={`/cars/${car.id}`} key={car.id}>
                      <div 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                        onMouseEnter={() => setSelectedCar(car)}
                        onMouseLeave={() => setSelectedCar(null)}
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-2/5 relative">
                            <div className="relative h-48 sm:h-full">
                              <Image
                                src={getCarImagePath(car)}
                                alt={car.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                              />
                              <button 
                                className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                onClick={(e) => toggleFavorite(e, car.id)}
                              >
                                <Heart 
                                  size={20} 
                                  className={favorites.has(car.id) ? "fill-red-500 text-red-500" : "text-gray-600"} 
                                />
                              </button>
                            </div>
                          </div>
                          <div className="p-4 sm:w-3/5">
                            <div className="flex flex-col h-full">
                              <div>
                                <div className="flex justify-between items-start mb-1">
                                  <h2 className="font-bold">{extractMakeModel(car.name)} {extractYear(car.name)}</h2>
                                </div>
                                <div className="flex items-center mb-2">
                                  <span className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    5.0
                                  </span>
                                  <span className="text-sm text-gray-600 ml-1">
                                    ({car.trips} trips)
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600 mb-1">
                                  {car.zoneId || "San Francisco"}
                                </div>
                                <div className="text-sm text-gray-600 mb-3">
                                  Apr 5 - 8
                                </div>
                              </div>
                              <div className="mt-auto flex justify-between items-center pt-2 border-t border-gray-100">
                                <div className="text-sm text-green-600">
                                  Save ${Math.floor(car.price * 0.05)}
                                </div>
                                <div className="text-right">
                                  <div className="text-sm line-through text-gray-500">${(car.price + Math.floor(car.price * 0.05)).toFixed(0)}</div>
                                  <div className="font-bold">${car.price.toFixed(0)} total</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <div className="py-2 text-center text-gray-500 text-sm">
                    Free cancellation available for all trips.
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right panel - Map */}
          <div className="w-full md:w-1/2 lg:w-3/5 h-[500px] md:h-auto">
            <Map
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              initialViewState={viewport}
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              onMove={(evt: { viewState: ViewState }) => setViewport(evt.viewState)}
            >
              {cars.map((car) => (
                <Marker
                  key={car.id}
                  longitude={car.coordinates[0]}
                  latitude={car.coordinates[1]}
                  anchor="bottom"
                >
                  <div 
                    className={`${selectedCar?.id === car.id ? 'bg-purple-700 text-white scale-110' : 'bg-white text-gray-900'} px-2 py-1 rounded shadow-md font-bold text-sm transition-all cursor-pointer hover:scale-110`}
                    onClick={() => setSelectedCar(car)}
                  >
                    ${car.price}
                  </div>
                </Marker>
              ))}
              
              {selectedCar && (
                <Popup
                  longitude={selectedCar.coordinates[0]}
                  latitude={selectedCar.coordinates[1]}
                  anchor="bottom"
                  onClose={() => setSelectedCar(null)}
                  closeOnClick={false}
                >
                  <div className="p-2 w-48">
                    <Image
                      src={getCarImagePath(selectedCar)}
                      alt={selectedCar.name}
                      width={150}
                      height={100}
                      className="object-cover rounded w-full h-24 mb-2"
                    />
                    <h3 className="font-bold text-sm">{selectedCar.name}</h3>
                    <div className="flex justify-between mt-1">
                      <div className="flex items-center text-xs">
                        <svg className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        5.0 ({selectedCar.trips} trips)
                      </div>
                      <div className="font-bold text-sm">${selectedCar.price}/day</div>
                    </div>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default CarsPage; 