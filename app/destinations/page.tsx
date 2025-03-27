import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Destination Cities Data
const destinationCities = [
  {
    name: 'San Francisco',
    slug: 'san-francisco',
    description: 'Explore the iconic Golden Gate Bridge, cable cars, and vibrant neighborhoods.',
    image: '/images/destinations/san-francisco.jpg',
    popularCars: ['Tesla Model Y', 'Tesla Model 3', 'Toyota Prius']
  },
  {
    name: 'Los Angeles',
    slug: 'los-angeles',
    description: 'Cruise down Sunset Boulevard and experience the entertainment capital of the world.',
    image: '/images/destinations/los-angeles.jpg',
    popularCars: ['BMW 3 Series', 'Mercedes-Benz C-Class', 'Ford Mustang']
  },
  {
    name: 'Miami',
    slug: 'miami',
    description: 'Drive along Ocean Drive and experience the vibrant culture and beautiful beaches.',
    image: '/images/destinations/miami.jpg',
    popularCars: ['Ford Mustang', 'Chevrolet Camaro', 'Jeep Wrangler']
  },
  {
    name: 'Chicago',
    slug: 'chicago',
    description: 'Navigate the Windy City with its stunning architecture and lakefront views.',
    image: '/images/destinations/chicago.jpg',
    popularCars: ['Honda Civic', 'Toyota Camry', 'Kia Soul']
  },
  {
    name: 'Las Vegas',
    slug: 'las-vegas',
    description: 'Experience the neon lights of the Strip and explore nearby natural wonders.',
    image: '/images/destinations/las-vegas.jpg',
    popularCars: ['Chevrolet Camaro', 'Ford Mustang', 'Mercedes-Benz C-Class']
  },
  {
    name: 'Denver',
    slug: 'denver',
    description: "Access the Rocky Mountains and enjoy the Mile-High City's 300 days of sunshine.",
    image: '/images/destinations/denver.jpg',
    popularCars: ['Jeep Wrangler', 'Ford Mustang', 'Toyota Camry']
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative h-full">
            <Image 
              src="/images/destinations/destination-hero.jpg" 
              alt="Nexus Drive Destinations"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Destinations</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Discover the perfect car for your journey in our most popular destinations
            </p>
          </div>
        </div>
        
        {/* Cities Grid */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Popular Destinations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationCities.map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/destinations/${city.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">{city.name}</h3>
                      <p className="text-gray-600 mb-4">{city.description}</p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-500 mb-2">Popular cars:</p>
                        <div className="flex flex-wrap gap-2">
                          {city.popularCars.map((car, index) => (
                            <span 
                              key={index} 
                              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700"
                            >
                              {car}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Why Choose Our Destinations */}
        <div className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Destinations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
                <p className="text-gray-600">
                  Our city guides provide insider tips on the best routes, hidden gems, and local attractions that you won't find in typical tourist guides.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Curated Car Selection</h3>
                <p className="text-gray-600">
                  Each destination features vehicles specifically chosen to enhance your experience, from convertibles for coastal drives to SUVs for mountain adventures.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Experience</h3>
                <p className="text-gray-600">
                  Convenient pickup locations, dedicated customer support, and detailed driving tips ensure your journey is as enjoyable as the destination itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Destination Planning */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Plan Your Perfect Trip</h2>
              <p className="text-lg text-gray-600 mb-10">
                Whether you're planning a weekend getaway or a cross-country adventure, 
                finding the right car is just the beginning. Discover our resources to help
                you make the most of your journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Seasonal Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the best times to visit each destination and seasonal attractions you shouldn't miss.
                  </p>
                  <Link href="/guides" className="text-green-600 font-semibold hover:text-green-700">
                    View Guides →
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Road Trip Itineraries</h3>
                  <p className="text-gray-600 mb-4">
                    Explore curated multi-day itineraries that showcase the best each region has to offer.
                  </p>
                  <Link href="/road-trips" className="text-green-600 font-semibold hover:text-green-700">
                    Browse Itineraries →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-green-600 py-16 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl opacity-90 mb-8">
                Choose your destination and find the perfect car for your adventure
              </p>
              <Link 
                href="/cars" 
                className="bg-white text-green-600 px-8 py-4 rounded-md font-bold text-lg inline-block hover:bg-gray-100 transition-colors"
              >
                Browse All Cars
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 