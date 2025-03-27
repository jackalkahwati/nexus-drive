"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Star, MapPin, Share, ClipboardCopy, Heart, Check, Info, X, User, Zap, Activity, Settings, Mail, Shield, Twitter, CreditCard } from 'lucide-react';
import { carsData, CarData } from '../../data/cars';

// Map placeholder instead of actual map component to fix build errors
const MapPlaceholder = () => (
  <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
    <p>Map is temporarily unavailable</p>
  </div>
);

// Simplified Map component
const Map = ({ children, style, initialViewState, mapboxAccessToken, mapStyle }: any) => (
  <MapPlaceholder />
);

// Simplified Marker component
const Marker = ({ children, longitude, latitude, anchor }: any) => null;

export default function CarDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'reviews' | 'location'>('overview');
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  // Get ID directly from params to avoid the async warning
  const id = params.id;
  
  // Get car data based on ID
  const carData: CarData = carsData[id];

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Car not found</p>
      </div>
    );
  }
  
  // Overview tab content
  function renderOverviewTab() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Car details and photos */}
        <div className="md:col-span-2">
          {/* Car images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8">
            <div className="md:col-span-3">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image 
                  src={carData.additionalImages[0]} 
                  alt={carData.title} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image 
                  src={carData.additionalImages[1]} 
                  alt={`${carData.title} side view`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image 
                  src={carData.additionalImages[2]} 
                  alt={`${carData.title} interior`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image 
                  src={carData.additionalImages[3]} 
                  alt={`${carData.title} rear view`} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-white rounded-md px-3 py-1 text-sm flex items-center">
                    <ClipboardCopy size={16} className="mr-1" />
                    View 12 photos
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Car title and info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{carData.title}</h1>
            <p className="text-gray-500 mb-4">Base</p>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-purple-600 fill-current" />
                <span className="ml-1 font-bold">{carData.rating}</span>
                <span className="ml-1 text-gray-600">({carData.tripCount} trips)</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <User className="w-4 h-4 mr-2" />
                <span>{carData.seats} seats</span>
              </div>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                <span>Electric</span>
              </div>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Activity className="w-4 h-4 mr-2" />
                <span>{carData.range} miles</span>
              </div>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Settings className="w-4 h-4 mr-2" />
                <span>Automatic transmission</span>
              </div>
            </div>
          </div>
          
          {/* Host information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Hosted by</h2>
            <div className="flex items-start">
              <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                <Image 
                  src={carData.host.image} 
                  alt={carData.host.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{carData.host.name}</h3>
                <div className="flex items-center mb-1">
                  <Star className="w-4 h-4 text-purple-600 fill-current" />
                  <span className="ml-1 font-bold">{carData.host.rating}</span>
                </div>
                <p className="text-gray-600 text-sm">{carData.host.trips} trips • Joined {carData.host.joined}</p>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-2">
              {showFullDescription ? carData.description : `${carData.description.substring(0, 100)}...`}
            </p>
            <button 
              className="text-gray-700 border border-gray-300 rounded-md px-3 py-1 text-sm"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              More
            </button>
          </div>
          
          {/* Features section - preview for Overview tab */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Vehicle features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-3">Safety</h3>
                <ul className="space-y-2">
                  {carData.safetyFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Device connectivity</h3>
                <ul className="space-y-2">
                  {carData.deviceConnectivity.slice(0, 2).map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button 
              className="mt-4 text-gray-700 border border-gray-300 rounded-md px-3 py-1 text-sm"
              onClick={() => setActiveTab('features')}
            >
              See all 14 features
            </button>
          </div>
          
          {/* Location preview */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Parking details</h2>
            <p className="text-gray-700 mb-4">
              Pick-up is remote. Vehicle will be parked in the parking lot of the San Bruno CAL TRAIN STATION (NOT BART)
            </p>
            <p className="text-gray-700 mb-4">
              Set your destination address to: 599 San Mateo Ave, San Bruno, CA 94066
            </p>
            <button 
              className="text-gray-700 border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              More
            </button>
          </div>
        </div>
        
        {/* Right column - Booking and details */}
        <div className="md:col-span-1">
          <div className="sticky top-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Cancellation policy</h2>
              <div className="flex items-start mb-2">
                <Check className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Free cancellation</p>
                  <p className="text-sm text-gray-600">Full refund within 24 hours of booking. More flexible options available at checkout.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Payment options</h2>
              <div className="flex items-start mb-2">
                <CreditCard className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Flexible payment</p>
                  <p className="text-sm text-gray-600">$0 to book when you choose the Stay flexible option at checkout.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Distance included</h2>
              <div className="flex items-start mb-2">
                <MapPin className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">{carData.miles} mi</p>
                  <p className="text-sm text-gray-600">${carData.mileageFee}/mi fee for additional miles driven</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Insurance & Protection</h2>
              <div className="flex items-start mb-2">
                <Shield className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Insurance via Travelers</p>
                  <Info className="w-4 h-4 text-gray-400 ml-1 inline-block" />
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 px-4 font-medium hover:bg-gray-50">
              <Heart className="w-5 h-5 mr-2" />
              Add to favorites
            </button>
            
            <div className="flex justify-between">
              <button className="rounded-full border border-gray-300 p-3 hover:bg-gray-50">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="rounded-full border border-gray-300 p-3 hover:bg-gray-50">
                <Mail className="w-5 h-5" />
              </button>
              <button className="rounded-full border border-gray-300 p-3 hover:bg-gray-50">
                <ClipboardCopy className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-center">
              <Link href="/report" className="text-purple-600 hover:underline text-sm">
                Report listing
              </Link>
            </div>
            
            <div className="text-center">
              <Link href="/cancellation" className="text-purple-600 hover:underline text-sm">
                Cancellation policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Features tab content
  function renderFeaturesTab() {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Vehicle features</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Safety</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carData.safetyFeatures.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Device connectivity</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carData.deviceConnectivity.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Reviews tab content
  function renderReviewsTab() {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Ratings and reviews</h2>
          <div className="flex items-center mb-8">
            <div className="text-4xl font-bold mr-2">{carData.ratings.overall}</div>
            <Star className="w-6 h-6 text-purple-600 fill-current" />
            <span className="text-gray-600 ml-2">({carData.totalRatings} ratings)</span>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <div className="flex justify-between mb-1">
                <span>Cleanliness</span>
                <span>{carData.ratings.cleanliness}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${carData.ratings.cleanliness * 20}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Maintenance</span>
                <span>{carData.ratings.maintenance}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${carData.ratings.maintenance * 20}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Communication</span>
                <span>{carData.ratings.communication}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${carData.ratings.communication * 20}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Convenience</span>
                <span>{carData.ratings.convenience}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${carData.ratings.convenience * 20}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Accuracy</span>
                <span>{carData.ratings.accuracy}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: `${carData.ratings.accuracy * 20}%` }}></div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-6">Based on {carData.totalRatings} guest ratings</p>
          
          <div className="space-y-8">
            {carData.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-8">
                <div className="flex mb-4">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.date}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-5 h-5 ${star <= review.rating ? 'text-purple-600 fill-current' : 'text-gray-300'} mr-1`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          
          <button className="mt-6 mx-auto block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
            See more
          </button>
        </div>
      </div>
    );
  }

  // Location tab content
  function renderLocationTab() {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Rules of the road</h2>
        
        <div className="space-y-6 mb-12">
          {carData.rules.map((rule, index) => (
            <div key={index} className="flex">
              <div className="w-8 h-8 mr-4 flex-shrink-0">
                {index === 0 && <X className="w-6 h-6 text-gray-700" />}
                {index === 1 && <Check className="w-6 h-6 text-gray-700" />}
                {index === 2 && <Zap className="w-6 h-6 text-gray-700" />}
                {index === 3 && <MapPin className="w-6 h-6 text-gray-700" />}
              </div>
              <div>
                <h3 className="font-medium mb-1">{rule.rule}</h3>
                <p className="text-sm text-gray-600">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4">PICKUP AT CAR LOCATION</h2>
          <p className="text-xl font-medium mb-4">{carData.pickupLocation.primary}</p>
          <div className="bg-gray-100 inline-block px-3 py-1 rounded-md text-sm">FREE</div>
        </div>
        
        <div className="w-full h-96 mb-10">
          <MapPlaceholder />
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">PICKUP LOCATIONS</h2>
          <div className="space-y-4">
            {carData.pickupLocation.options.map((option, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                <span>{option.name}</span>
                <span className="font-medium">{option.fee}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">BRING THE CAR TO ME</h2>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span>Up to {carData.delivery.range} miles</span>
            <span className="font-medium">${carData.delivery.fee}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Free delivery to select locations for trips of 2 weeks or longer
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Top navigation bar with logo and car information */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/images/logo.svg" alt="Logo" width={80} height={24} className="h-8 w-auto" />
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-4">
              <div className="text-gray-600 line-through text-sm">${carData.originalPrice}</div>
              <div className="font-bold text-lg">${carData.price} total</div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Continue
              </button>
            </div>
            <div className="text-xs text-gray-500">Price before taxes</div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              className={`py-4 ${activeTab === 'overview' ? 'border-b-2 border-purple-600 text-purple-600 font-medium' : 'text-gray-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              OVERVIEW
            </button>
            <button
              className={`py-4 ${activeTab === 'features' ? 'border-b-2 border-purple-600 text-purple-600 font-medium' : 'text-gray-600'}`}
              onClick={() => setActiveTab('features')}
            >
              FEATURES
            </button>
            <button
              className={`py-4 ${activeTab === 'reviews' ? 'border-b-2 border-purple-600 text-purple-600 font-medium' : 'text-gray-600'}`}
              onClick={() => setActiveTab('reviews')}
            >
              REVIEWS
            </button>
            <button
              className={`py-4 ${activeTab === 'location' ? 'border-b-2 border-purple-600 text-purple-600 font-medium' : 'text-gray-600'}`}
              onClick={() => setActiveTab('location')}
            >
              LOCATION
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Content will be different based on the active tab */}
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'features' && renderFeaturesTab()}
        {activeTab === 'reviews' && renderReviewsTab()}
        {activeTab === 'location' && renderLocationTab()}
      </div>
      
      <Footer />
    </main>
  );
}