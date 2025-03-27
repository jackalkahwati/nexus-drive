"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { carsData } from '../../data/cars';
import { CarData } from '../../data/cars';

// City data interface
interface CityData {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  attractions: Array<{
    name: string;
    description: string;
    image: string;
  }>;
  travelTips: Array<{
    title: string;
    content: string;
  }>;
  weather: {
    bestTime: string;
    temperature: string;
    rainfall: string;
  };
  popularCarTypes: string[];
  coordinates: [number, number];
}

// Cities data
const citiesData: { [key: string]: CityData } = {
  'san-francisco': {
    name: 'San Francisco',
    tagline: 'Explore the Golden City by the Bay',
    description: "San Francisco, a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay, is known for its iconic Golden Gate Bridge, colorful Victorian houses, cable cars, and dynamic food scene. Drive through its diverse neighborhoods, explore nearby wine country, or take a scenic coastal drive down Highway 1.",
    heroImage: '/images/destinations/san-francisco.jpg',
    attractions: [
      {
        name: 'Golden Gate Bridge',
        description: 'Drive across the iconic 1.7-mile-long Golden Gate Bridge for panoramic views of the city skyline and bay.',
        image: '/images/destinations/golden-gate.jpg'
      },
      {
        name: 'Fisherman\'s Wharf',
        description: 'Experience the bustling waterfront marketplace with seafood restaurants, shops, and sea lion viewing.',
        image: '/images/destinations/fishermans-wharf.jpg'
      },
      {
        name: 'Alcatraz Island',
        description: 'Take a ferry to this former federal prison and explore its historic cell blocks and grounds.',
        image: '/images/destinations/alcatraz.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Parking Advisory',
        content: 'Parking can be challenging and expensive in downtown SF. Consider parking lots in the Embarcadero or Marina districts for better rates.'
      },
      {
        title: 'Fog Consideration',
        content: 'Summer fog is common, especially in the mornings. Plan outdoor activities for the afternoon when it typically clears.'
      },
      {
        title: 'Toll Roads',
        content: 'Most bridges in the area have tolls. The Golden Gate Bridge uses electronic tolling, so no need to stop and pay.'
      }
    ],
    weather: {
      bestTime: 'September to November',
      temperature: '45°F to 75°F year-round',
      rainfall: 'Dry summers, rainy winters'
    },
    popularCarTypes: ['Electric', 'Convertible', 'Compact'],
    coordinates: [-122.4194, 37.7749]
  },
  'los-angeles': {
    name: 'Los Angeles',
    tagline: 'Drive Through the City of Angels',
    description: "Los Angeles, the entertainment capital of the world, offers endless driving adventures from cruising down Sunset Boulevard to exploring the scenic coastal highways. With its perfect weather, diverse neighborhoods, and iconic landmarks, LA provides the perfect backdrop for your road trip experience.",
    heroImage: '/images/destinations/los-angeles.jpg',
    attractions: [
      {
        name: 'Hollywood Walk of Fame',
        description: 'Stroll along the famous sidewalk featuring over 2,600 brass stars embedded in the sidewalk.',
        image: '/images/destinations/hollywood-walk.jpg'
      },
      {
        name: 'Santa Monica Pier',
        description: 'Visit this iconic landmark offering rides, games, and sweeping ocean views at the end of Route 66.',
        image: '/images/destinations/santa-monica.jpg'
      },
      {
        name: 'Griffith Observatory',
        description: 'Drive up to this public observatory for spectacular views of the Los Angeles Basin and night sky.',
        image: '/images/destinations/griffith.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Traffic Planning',
        content: 'Avoid driving during rush hours (7-9am and 4-7pm). Use traffic apps to find alternative routes.'
      },
      {
        title: 'Parking Tips',
        content: 'Always read parking signs carefully as restrictions vary widely throughout the city. Consider parking structures over street parking in busy areas.'
      },
      {
        title: 'Vehicle Choice',
        content: 'A convertible is perfect for cruising along coastal highways like PCH, while a compact car is better for navigating tight city streets.'
      }
    ],
    weather: {
      bestTime: 'March to May, September to November',
      temperature: '57°F to 83°F year-round',
      rainfall: 'Very dry with occasional winter rain'
    },
    popularCarTypes: ['Convertible', 'Luxury', 'SUV'],
    coordinates: [-118.2437, 34.0522]
  },
  'miami': {
    name: 'Miami',
    tagline: 'Cruise Through Magic City',
    description: "Miami's vibrant culture, beautiful beaches, and year-round sunshine make it perfect for exploring by car. Drive along Ocean Drive to experience the iconic Art Deco district, cruise through the lively neighborhoods of Little Havana, or take a day trip to the breathtaking Florida Keys.",
    heroImage: '/images/destinations/miami.jpg',
    attractions: [
      {
        name: 'South Beach',
        description: 'Drive along Ocean Drive and experience Miami\'s famous beach area with its Art Deco architecture and vibrant nightlife.',
        image: '/images/destinations/south-beach.jpg'
      },
      {
        name: 'Wynwood Walls',
        description: 'Explore this outdoor museum featuring large-scale works by some of the world\'s best-known street artists.',
        image: '/images/destinations/wynwood.jpg'
      },
      {
        name: 'Everglades National Park',
        description: 'Take a day trip to explore this unique ecosystem just a short drive from downtown Miami.',
        image: '/images/destinations/everglades.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Toll Roads',
        content: 'Many major highways in Miami are toll roads. Consider getting a SunPass transponder if staying for more than a few days.'
      },
      {
        title: 'Beach Parking',
        content: 'Arrive early at beach areas to secure parking, especially on weekends. Many public garages are available near South Beach.'
      },
      {
        title: 'Hurricane Season',
        content: 'Be aware of the hurricane season (June to November) and have a backup plan if traveling during these months.'
      }
    ],
    weather: {
      bestTime: 'November to April',
      temperature: '65°F to 90°F year-round',
      rainfall: 'Rainy season from May to October'
    },
    popularCarTypes: ['Convertible', 'Luxury', 'Sport'],
    coordinates: [-80.1918, 25.7617]
  },
  'chicago': {
    name: 'Chicago',
    tagline: 'Navigate the Windy City',
    description: "Chicago offers diverse driving experiences, from cruising along Lake Shore Drive with its stunning views of Lake Michigan to exploring the charming neighborhoods beyond downtown. The city's grid system makes it easy to navigate, while its rich architecture and cultural attractions provide plenty to see along the way.",
    heroImage: '/images/destinations/chicago.jpg',
    attractions: [
      {
        name: 'Millennium Park',
        description: 'Visit this downtown park featuring iconic public art installations including Cloud Gate (The Bean).',
        image: '/images/destinations/millennium-park.jpg'
      },
      {
        name: 'Navy Pier',
        description: 'Explore this popular attraction extending into Lake Michigan with restaurants, shops, and entertainment.',
        image: '/images/destinations/navy-pier.jpg'
      },
      {
        name: 'Architectural River Cruise',
        description: 'Park your car and take a break with this popular boat tour highlighting Chicago\'s famous architecture.',
        image: '/images/destinations/chicago-river.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Winter Driving',
        content: 'If visiting during winter, be prepared for snow and icy conditions. Consider an SUV or vehicle with all-wheel drive.'
      },
      {
        title: 'Parking Strategy',
        content: 'Use SpotHero or similar apps to find and reserve parking in advance, especially downtown. Street parking is available but watch for restrictions.'
      },
      {
        title: 'Lake Shore Drive',
        content: 'This scenic route along Lake Michigan is a must-drive, offering beautiful views of the skyline and lake.'
      }
    ],
    weather: {
      bestTime: 'April to June, September to October',
      temperature: '22°F to 83°F (seasonal extremes)',
      rainfall: 'Moderate year-round, snowy winters'
    },
    popularCarTypes: ['Sedan', 'SUV', 'Crossover'],
    coordinates: [-87.6298, 41.8781]
  },
  'las-vegas': {
    name: 'Las Vegas',
    tagline: 'Drive the Entertainment Capital',
    description: "Beyond the dazzling lights of the Las Vegas Strip lies an array of driving adventures. From the engineering marvel of the Hoover Dam to the natural wonders of Red Rock Canyon and Valley of Fire, Las Vegas serves as the perfect starting point for unforgettable road trips through the desert landscape.",
    heroImage: '/images/destinations/las-vegas.jpg',
    attractions: [
      {
        name: 'The Strip',
        description: 'Cruise down Las Vegas Boulevard to experience the iconic hotels, casinos and attractions.',
        image: '/images/destinations/vegas-strip.jpg'
      },
      {
        name: 'Red Rock Canyon',
        description: 'Just 20 minutes from the Strip, this national conservation area offers a scenic 13-mile driving loop.',
        image: '/images/destinations/red-rock.jpg'
      },
      {
        name: 'Hoover Dam',
        description: 'Take a 45-minute drive to this engineering marvel on the Colorado River.',
        image: '/images/destinations/hoover-dam.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Heat Precautions',
        content: 'During summer months, always carry extra water in your vehicle and check your cooling system before desert drives.'
      },
      {
        title: 'Strip Parking',
        content: 'Most major hotels on the Strip offer paid parking. Some still offer free parking - check before you go.'
      },
      {
        title: 'Day Trips',
        content: 'Consider a sports car for city driving, but an SUV might be more comfortable for day trips to surrounding natural attractions.'
      }
    ],
    weather: {
      bestTime: 'March to May, September to November',
      temperature: '45°F to 105°F (seasonal extremes)',
      rainfall: 'Very dry year-round'
    },
    popularCarTypes: ['Luxury', 'Sport', 'Convertible'],
    coordinates: [-115.1398, 36.1699]
  },
  'denver': {
    name: 'Denver',
    tagline: 'Drive to New Heights',
    description: "Denver, the Mile-High City, offers unparalleled access to Rocky Mountain adventures. Drive through spectacular mountain passes, explore charming mountain towns, or cruise through the city's vibrant urban neighborhoods. With 300 days of sunshine and diverse terrain, Denver is a driver's paradise year-round.",
    heroImage: '/images/destinations/denver.jpg',
    attractions: [
      {
        name: 'Rocky Mountain National Park',
        description: 'Take a 1.5-hour drive to explore this stunning national park with its alpine scenery and wildlife.',
        image: '/images/destinations/rocky-mountain.jpg'
      },
      {
        name: 'Mount Evans Scenic Byway',
        description: 'Drive North America\'s highest paved road for breathtaking views from 14,130 feet.',
        image: '/images/destinations/mount-evans.jpg'
      },
      {
        name: 'Red Rocks Park',
        description: 'Just 15 miles from downtown, this natural rock formation features a famous amphitheater and hiking trails.',
        image: '/images/destinations/red-rocks.jpg'
      }
    ],
    travelTips: [
      {
        title: 'Altitude Adjustment',
        content: 'Give yourself time to adjust to the high altitude before attempting mountain drives. Stay hydrated and take it easy.'
      },
      {
        title: 'Winter Driving',
        content: 'Mountain roads can be challenging in winter. An SUV with all-wheel drive is recommended from November to April.'
      },
      {
        title: 'Mountain Pass Planning',
        content: 'Check road conditions before driving mountain passes, as weather can change quickly. Carry chains in winter months.'
      }
    ],
    weather: {
      bestTime: 'April to May, September to October',
      temperature: '22°F to 88°F (seasonal extremes)',
      rainfall: 'Semi-arid with afternoon thunderstorms in summer'
    },
    popularCarTypes: ['SUV', 'Crossover', 'Luxury'],
    coordinates: [-104.9903, 39.7392]
  }
};

const DestinationPage = ({ params }: { params: { city: string } }) => {
  const [cityData, setCityData] = useState<CityData | null>(null);
  const [localCars, setLocalCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Get city data
    const city = params.city.toLowerCase();
    if (citiesData[city]) {
      setCityData(citiesData[city]);
      
      // Filter cars by city
      const cityName = citiesData[city].name;
      const filteredCars = Object.values(carsData).filter(car => 
        car.location.includes(cityName)
      );
      setLocalCars(filteredCars);
    }
    
    setLoading(false);
  }, [params.city]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!cityData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-16">
          <h1 className="text-4xl font-bold mb-6">Destination Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find information about this destination.</p>
          <Link href="/destinations" className="btn-primary">Explore Other Destinations</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative h-full">
            {cityData.heroImage && (
              <Image 
                src={cityData.heroImage} 
                alt={cityData.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            )}
          </div>
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{cityData.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl">{cityData.tagline}</p>
          </div>
        </div>
        
        {/* City Description */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About {cityData.name}</h2>
              <p className="text-lg text-gray-700 mb-8">{cityData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                  <p>{cityData.weather.bestTime}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Temperature</h3>
                  <p>{cityData.weather.temperature}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Precipitation</h3>
                  <p>{cityData.weather.rainfall}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Popular Cars */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-2">Popular Cars in {cityData.name}</h2>
            <p className="text-gray-600 mb-10">Discover the perfect vehicle for your {cityData.name} adventure</p>
            
            {localCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localCars.slice(0, 6).map((car) => (
                  <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={car.image}
                        alt={car.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{car.title}</h3>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span>{car.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 mb-4">{car.category} • {car.transmission}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-xl">${car.price}</span>
                          <span className="text-gray-500">/day</span>
                        </div>
                        <Link href={`/cars/${car.id}`} className="text-green-600 font-semibold hover:text-green-700">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500">No cars currently available in this location.</p>
                <Link href="/cars" className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700">
                  Browse All Cars
                </Link>
              </div>
            )}
            
            {localCars.length > 0 && (
              <div className="text-center mt-12">
                <Link href="/cars" className="btn-primary">
                  View All Cars
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Popular Car Types */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10">Recommended Vehicle Types</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {cityData.popularCarTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-green-600">
                      {type === 'Electric' && '⚡'}
                      {type === 'Convertible' && '🔝'}
                      {type === 'SUV' && '🚙'}
                      {type === 'Luxury' && '✨'}
                      {type === 'Sport' && '🏎'}
                      {type === 'Sedan' && '🚗'}
                      {type === 'Compact' && '🏙️'}
                      {type === 'Crossover' && '🚐'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type}</h3>
                  <p className="text-gray-600 text-sm">
                    {type === 'Electric' && 'Eco-friendly with easy charging options throughout the city.'}
                    {type === 'Convertible' && 'Perfect for enjoying the scenic routes and great weather.'}
                    {type === 'SUV' && 'Ideal for exploring urban and outdoor attractions with plenty of space.'}
                    {type === 'Luxury' && 'Enjoy the city in style and ultimate comfort.'}
                    {type === 'Sport' && 'Experience the thrill of driving through the city's dynamic roads.'}
                    {type === 'Sedan' && 'Reliable and comfortable for city driving and day trips.'}
                    {type === 'Compact' && 'Easy parking and maneuverability in busy city streets.'}
                    {type === 'Crossover' && 'Versatile for both city driving and light off-road adventures.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Attractions */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-2">Top Attractions</h2>
            <p className="text-gray-600 mb-10">Must-visit destinations in and around {cityData.name}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cityData.attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48">
                    {attraction.image && (
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{attraction.name}</h3>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Travel Tips */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-2">Driving Tips</h2>
            <p className="text-gray-600 mb-10">Expert advice for navigating {cityData.name} by car</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {cityData.travelTips.map((tip, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-green-600 py-16 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore {cityData.name}?</h2>
              <p className="text-xl opacity-90 mb-8">
                Book your perfect car today and start your adventure
              </p>
              <Link 
                href={`/cars?location=${cityData.name}`} 
                className="bg-white text-green-600 px-8 py-4 rounded-md font-bold text-lg inline-block hover:bg-gray-100 transition-colors"
              >
                Find Cars in {cityData.name}
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationPage; 