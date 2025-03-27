export interface CarData {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  totalRatings: number;
  tripCount: number;
  location: string;
  category: string;
  miles: number;
  mileageFee: number;
  seats: number;
  transmission: string;
  range: number;
  host: {
    name: string;
    image: string;
    rating: number;
    joined: string;
    trips: number;
    responseRate: string;
    responseTime: string;
  };
  pickupLocation: {
    primary: string;
    coordinates: [number, number];
    options: Array<{
      name: string;
      fee: string;
    }>;
  };
  delivery: {
    available: boolean;
    range: number;
    fee: number;
  };
  safetyFeatures: string[];
  deviceConnectivity: string[];
  rules: Array<{
    rule: string;
    description: string;
  }>;
  ratings: {
    overall: number;
    cleanliness: number;
    maintenance: number;
    communication: number;
    convenience: number;
    accuracy: number;
  };
  additionalImages: string[];
  reviews: Array<{
    id: number;
    name: string;
    date: string;
    comment: string;
    rating: number;
    image: string;
  }>;
}

export const carsData: { [key: string]: CarData } = {
  '1': {
    id: '1',
    title: 'Tesla Model Y 2023',
    description: 'The Tesla Model Y is an all-electric compact crossover SUV manufactured by Tesla, Inc. It has a range of up to 330 miles and features Tesla\'s advanced Autopilot system.',
    image: '/images/car-details/tesla-model-y/main.jpg',
    price: 154,
    originalPrice: 161,
    rating: 4.93,
    totalRatings: 60,
    tripCount: 72,
    location: 'San Bruno, CA',
    category: 'Electric',
    miles: 600,
    mileageFee: 0.21,
    seats: 5,
    transmission: 'Automatic',
    range: 330,
    host: {
      name: 'Brandon C.',
      image: '/images/user1.jpg',
      rating: 5.0,
      joined: 'Nov 2017',
      trips: 4128,
      responseRate: '98%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'San Bruno, CA 94066',
      coordinates: [-122.411, 37.628],
      options: [
        { name: 'San Francisco International Airport', fee: 'FREE' },
        { name: 'Norman Y. Mineta San Jose International Airport', fee: '$110.00' },
        { name: 'Oakland International Airport', fee: '$110.00' }
      ]
    },
    delivery: {
      available: true,
      range: 25,
      fee: 120
    },
    safetyFeatures: [
      'Adaptive cruise control',
      'Backup camera',
      'Blind spot warning',
      'Brake assist'
    ],
    deviceConnectivity: [
      'Bluetooth',
      'USB charger',
      'Apple CarPlay',
      'Android Auto'
    ],
    rules: [
      { rule: 'No smoking allowed', description: 'Smoking in any Turo vehicle will result in a $150 fine' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' },
      { rule: 'Recharge the vehicle', description: 'Missing battery charge may result in an additional fee' },
      { rule: 'No off-roading', description: 'This vehicle is not permitted for off-road use' }
    ],
    ratings: {
      overall: 4.93,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 4.9,
      convenience: 4.9,
      accuracy: 4.9
    },
    additionalImages: [
      '/images/car-details/tesla-model-y/main.jpg',
      '/images/car-details/tesla-model-y/side.jpg',
      '/images/car-details/tesla-model-y/interior.jpg',
      '/images/car-details/tesla-model-y/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Fu-Jen',
        date: 'January 25, 2023',
        comment: 'Fantastic FSD on this model Y. Convenient pickup location and responsive host.',
        rating: 5,
        image: '/images/user1.jpg',
      },
      {
        id: 2,
        name: 'Matt',
        date: 'January 17, 2023',
        comment: 'Very nice vehicle and great communication',
        rating: 5,
        image: '/images/user2.jpg',
      },
      {
        id: 3,
        name: 'Jalen',
        date: 'January 11, 2023',
        comment: 'Everything was great and the host was excellent.',
        rating: 5,
        image: '/images/user3.jpg',
      },
      {
        id: 4,
        name: 'Noel',
        date: 'December 30, 2022',
        comment: 'They were flexible and accommodating! Car was great and the airport pickup/dropoff was clutch.',
        rating: 5,
        image: '/images/user1.jpg',
      },
      {
        id: 5,
        name: 'Robert',
        date: 'November 27, 2022',
        comment: 'Host was disappointing and underserved basic expectations',
        rating: 3,
        image: '/images/user2.jpg',
      },
    ],
  },
  '2': {
    id: '2',
    title: 'Tesla Model 3 2023',
    description: 'The Tesla Model 3 is an all-electric four-door sedan with minimalist design and cutting-edge technology. Experience Tesla\'s most affordable electric vehicle with impressive range and performance.',
    image: '/images/car-details/tesla-model-3/main.jpg',
    price: 135,
    originalPrice: 142,
    rating: 4.95,
    totalRatings: 82,
    tripCount: 98,
    location: 'San Francisco, CA',
    category: 'Electric',
    miles: 500,
    mileageFee: 0.20,
    seats: 5,
    transmission: 'Automatic',
    range: 358,
    host: {
      name: 'Sarah L.',
      image: '/images/user2.jpg',
      rating: 4.98,
      joined: 'Mar 2019',
      trips: 2156,
      responseRate: '99%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'San Francisco, CA 94105',
      coordinates: [-122.399, 37.789],
      options: [
        { name: 'San Francisco International Airport', fee: 'FREE' },
        { name: 'Norman Y. Mineta San Jose International Airport', fee: '$120.00' },
        { name: 'Oakland International Airport', fee: '$100.00' }
      ]
    },
    delivery: {
      available: true,
      range: 30,
      fee: 130
    },
    safetyFeatures: [
      'Autopilot',
      'Forward collision warning',
      'Lane departure warning',
      'Emergency braking'
    ],
    deviceConnectivity: [
      'Bluetooth',
      'USB charger',
      'Premium audio system',
      'Wireless phone charging'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Pet friendly', description: 'Please clean up after your pets' },
      { rule: 'Return with 20% charge', description: 'Less charge may result in additional fees' },
      { rule: 'No track use', description: 'Vehicle is not permitted for track or racing use' }
    ],
    ratings: {
      overall: 4.95,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 4.9,
      accuracy: 4.9
    },
    additionalImages: [
      '/images/car-details/tesla-model-3/main.jpg',
      '/images/car-details/tesla-model-3/side.jpg',
      '/images/car-details/tesla-model-3/interior.jpg',
      '/images/car-details/tesla-model-3/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Michael',
        date: 'March 15, 2023',
        comment: 'Amazing car and great host! The Model 3 was spotless and performed perfectly.',
        rating: 5,
        image: '/images/user2.jpg',
      },
      {
        id: 2,
        name: 'Emma',
        date: 'March 10, 2023',
        comment: 'Smooth rental process and the car was in perfect condition.',
        rating: 5,
        image: '/images/user3.jpg',
      },
      {
        id: 3,
        name: 'David',
        date: 'March 5, 2023',
        comment: 'Great experience! The car was clean and charged. Sarah was very responsive.',
        rating: 5,
        image: '/images/user1.jpg',
      }
    ],
  },
  '3': {
    id: '3',
    title: 'BMW 3 Series 2023',
    description: 'The BMW 3 Series is a luxury sports sedan that combines elegant design with performance. Features a responsive engine, premium interior, and advanced driver assistance systems.',
    image: '/images/car-details/bmw-3-series/main.jpg',
    price: 120,
    originalPrice: 125,
    rating: 4.8,
    totalRatings: 45,
    tripCount: 38,
    location: 'San Francisco, CA',
    category: 'Sport',
    miles: 800,
    mileageFee: 0.25,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Michael R.',
      image: '/images/user3.jpg',
      rating: 4.9,
      joined: 'Jan 2020',
      trips: 1567,
      responseRate: '99%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'San Francisco, CA 94105',
      coordinates: [-122.399, 37.789],
      options: [
        { name: 'San Francisco International Airport', fee: 'FREE' },
        { name: 'Oakland International Airport', fee: '$90.00' }
      ]
    },
    delivery: {
      available: true,
      range: 20,
      fee: 100
    },
    safetyFeatures: [
      'M Sport brakes',
      'Active safety systems',
      'Parking sensors',
      '360-degree camera'
    ],
    deviceConnectivity: [
      'BMW iDrive 7.0',
      'Apple CarPlay',
      'Android Auto',
      'Wireless charging'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'No track use', description: 'Vehicle is not permitted for track or racing use' },
      { rule: 'Premium fuel only', description: 'Must use 91+ octane fuel' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' }
    ],
    ratings: {
      overall: 4.8,
      cleanliness: 4.9,
      maintenance: 4.8,
      communication: 4.9,
      convenience: 4.7,
      accuracy: 4.8
    },
    additionalImages: [
      '/images/car-details/bmw-3-series/main.jpg',
      '/images/car-details/bmw-3-series/side.jpg',
      '/images/car-details/bmw-3-series/interior.jpg',
      '/images/car-details/bmw-3-series/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'James',
        date: 'March 20, 2023',
        comment: 'Amazing car! The M4 Competition is a beast on the road. Michael was very professional.',
        rating: 5,
        image: '/images/user2.jpg',
      },
      {
        id: 2,
        name: 'Sarah',
        date: 'March 15, 2023',
        comment: 'Perfect rental experience. The car was immaculate and performed beautifully.',
        rating: 5,
        image: '/images/user3.jpg',
      }
    ],
  },
  '4': {
    id: '4',
    title: 'Jeep Wrangler 2023',
    description: 'The iconic Jeep Wrangler combines legendary off-road capability with modern comfort and technology. Perfect for adventure seekers and outdoor enthusiasts.',
    image: '/images/car-details/jeep-wrangler/main.jpg',
    price: 165,
    originalPrice: 175,
    rating: 4.7,
    totalRatings: 78,
    tripCount: 92,
    location: 'Los Angeles, CA',
    category: 'SUV',
    miles: 1000,
    mileageFee: 0.18,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'David K.',
      image: '/images/user1.jpg',
      rating: 4.8,
      joined: 'Jun 2021',
      trips: 892,
      responseRate: '98%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Los Angeles, CA 90012',
      coordinates: [-118.243, 34.052],
      options: [
        { name: 'Los Angeles International Airport', fee: 'FREE' },
        { name: 'Bob Hope Airport', fee: '$80.00' }
      ]
    },
    delivery: {
      available: true,
      range: 25,
      fee: 110
    },
    safetyFeatures: [
      'Trail camera',
      'Blind spot monitoring',
      'Parking sensors',
      'Electronic stability control'
    ],
    deviceConnectivity: [
      'Uconnect 4C NAV',
      'Apple CarPlay',
      'Android Auto',
      'USB ports'
    ],
    rules: [
      { rule: 'Pet friendly', description: 'Please clean up after your pets' },
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Off-road use allowed', description: 'Vehicle can be used on approved off-road trails' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' }
    ],
    ratings: {
      overall: 4.7,
      cleanliness: 4.8,
      maintenance: 4.7,
      communication: 4.8,
      convenience: 4.6,
      accuracy: 4.7
    },
    additionalImages: [
      '/images/car-details/jeep-wrangler/main.jpg',
      '/images/car-details/jeep-wrangler/side.jpg',
      '/images/car-details/jeep-wrangler/interior.jpg',
      '/images/car-details/jeep-wrangler/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Alex',
        date: 'March 18, 2023',
        comment: 'Great Jeep for our weekend adventure! David was very helpful with local trail recommendations.',
        rating: 5,
        image: '/images/user1.jpg',
      },
      {
        id: 2,
        name: 'Rachel',
        date: 'March 12, 2023',
        comment: 'Perfect for our camping trip. The Jeep handled everything we threw at it.',
        rating: 5,
        image: '/images/user2.jpg',
      }
    ],
  },
  '5': {
    id: '5',
    title: 'Mercedes-Benz C-Class 2023',
    description: 'The Mercedes-Benz C-Class represents the perfect blend of luxury, comfort, and technology. Experience premium driving with advanced safety features and sophisticated design.',
    image: '/images/car-details/mercedes-benz-c-class/main.jpg',
    price: 95,
    originalPrice: 100,
    rating: 4.9,
    totalRatings: 65,
    tripCount: 48,
    location: 'Denver, CO',
    category: 'Luxury',
    miles: 600,
    mileageFee: 0.20,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Jennifer L.',
      image: '/images/user2.jpg',
      rating: 4.95,
      joined: 'Apr 2020',
      trips: 1234,
      responseRate: '99%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Denver, CO 80202',
      coordinates: [-104.990, 39.739],
      options: [
        { name: 'Denver International Airport', fee: 'FREE' },
        { name: 'Colorado Springs Airport', fee: '$90.00' }
      ]
    },
    delivery: {
      available: true,
      range: 30,
      fee: 95
    },
    safetyFeatures: [
      'Active distance assist',
      'Active steering assist',
      'Active brake assist',
      '360-degree camera'
    ],
    deviceConnectivity: [
      'MBUX infotainment',
      'Apple CarPlay',
      'Android Auto',
      'Wireless charging'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Premium fuel only', description: 'Must use 91+ octane fuel' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' },
      { rule: 'No pets', description: 'This vehicle is not pet-friendly' }
    ],
    ratings: {
      overall: 4.9,
      cleanliness: 5.0,
      maintenance: 4.9,
      communication: 5.0,
      convenience: 4.8,
      accuracy: 4.9
    },
    additionalImages: [
      '/images/car-details/mercedes-benz-c-class/main.jpg',
      '/images/car-details/mercedes-benz-c-class/side.jpg',
      '/images/car-details/mercedes-benz-c-class/interior.jpg',
      '/images/car-details/mercedes-benz-c-class/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Thomas',
        date: 'March 22, 2023',
        comment: 'Absolutely luxurious experience! Jennifer was very professional and the car was perfect.',
        rating: 5,
        image: '/images/user3.jpg',
      },
      {
        id: 2,
        name: 'Emily',
        date: 'March 17, 2023',
        comment: 'Beautiful car and excellent service. Would definitely rent again.',
        rating: 5,
        image: '/images/user1.jpg',
      }
    ],
  },
  '6': {
    id: '6',
    title: 'Honda Civic 2023',
    description: "The Honda Civic is a compact car known for its reliability, fuel efficiency, and sporty handling. With its modern design and tech features, it's perfect for city commutes and road trips.",
    image: '/images/car-details/honda-civic/main.jpg',
    price: 85,
    originalPrice: 90,
    rating: 4.85,
    totalRatings: 70,
    tripCount: 85,
    location: 'Chicago, IL',
    category: 'Sedan',
    miles: 700,
    mileageFee: 0.15,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Emma K.',
      image: '/images/user3.jpg',
      rating: 4.9,
      joined: 'Feb 2021',
      trips: 934,
      responseRate: '100%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Chicago, IL 60611',
      coordinates: [-87.623, 41.881],
      options: [
        { name: 'O\'Hare International Airport', fee: 'FREE' },
        { name: 'Midway International Airport', fee: '$80.00' }
      ]
    },
    delivery: {
      available: true,
      range: 20,
      fee: 90
    },
    safetyFeatures: [
      'Collision mitigation',
      'Lane keeping assist',
      'Adaptive cruise control',
      'Honda Sensing suite'
    ],
    deviceConnectivity: [
      'Apple CarPlay',
      'Android Auto',
      'Bluetooth',
      'USB ports'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Pet friendly', description: 'Please clean up after your pets' },
      { rule: 'Regular fuel only', description: '87 octane fuel only' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' }
    ],
    ratings: {
      overall: 4.85,
      cleanliness: 4.9,
      maintenance: 4.9,
      communication: 4.8,
      convenience: 4.8,
      accuracy: 4.8
    },
    additionalImages: [
      '/images/car-details/honda-civic/main.jpg',
      '/images/car-details/honda-civic/side.jpg',
      '/images/car-details/honda-civic/interior.jpg',
      '/images/car-details/honda-civic/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Chris',
        date: 'April 10, 2023',
        comment: 'Great car! Super clean and fuel efficient. Emma was very responsive.',
        rating: 5,
        image: '/images/user3.jpg',
      },
      {
        id: 2,
        name: 'Jessica',
        date: 'April 5, 2023',
        comment: 'Smooth rental experience. The Civic was perfect for our city trip.',
        rating: 5,
        image: '/images/user1.jpg',
      }
    ],
  },
  '7': {
    id: '7',
    title: 'Toyota Camry 2023',
    description: 'The Toyota Camry offers a comfortable ride with excellent reliability and fuel economy. Spacious interior, advanced safety features, and hybrid options make it an ideal choice for any journey.',
    image: '/images/car-details/toyota-camry/main.jpg',
    price: 90,
    originalPrice: 95,
    rating: 4.9,
    totalRatings: 85,
    tripCount: 92,
    location: 'Atlanta, GA',
    category: 'Sedan',
    miles: 750,
    mileageFee: 0.16,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Marcus J.',
      image: '/images/user2.jpg',
      rating: 4.95,
      joined: 'Jul 2020',
      trips: 1563,
      responseRate: '98%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Atlanta, GA 30303',
      coordinates: [-84.388, 33.749],
      options: [
        { name: 'Hartsfield-Jackson Atlanta Airport', fee: 'FREE' },
        { name: 'Atlanta Downtown', fee: '$60.00' }
      ]
    },
    delivery: {
      available: true,
      range: 25,
      fee: 100
    },
    safetyFeatures: [
      'Toyota Safety Sense',
      'Pre-collision system',
      'Lane departure alert',
      'Automatic high beams'
    ],
    deviceConnectivity: [
      'Apple CarPlay',
      'Android Auto',
      'Bluetooth',
      'Amazon Alexa compatible'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'No pets', description: 'This vehicle is not pet-friendly' },
      { rule: 'Regular fuel only', description: '87 octane fuel only' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' }
    ],
    ratings: {
      overall: 4.9,
      cleanliness: 5.0,
      maintenance: 4.9,
      communication: 4.8,
      convenience: 4.9,
      accuracy: 4.8
    },
    additionalImages: [
      '/images/car-details/toyota-camry/main.jpg',
      '/images/car-details/toyota-camry/side.jpg',
      '/images/car-details/toyota-camry/interior.jpg',
      '/images/car-details/toyota-camry/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Sophia',
        date: 'May 5, 2023',
        comment: 'Excellent car! Marcus was very professional and the Camry was immaculate.',
        rating: 5,
        image: '/images/user2.jpg',
      },
      {
        id: 2,
        name: 'Daniel',
        date: 'April 28, 2023',
        comment: 'Smooth ride and great fuel economy. Perfect for our business trip.',
        rating: 5,
        image: '/images/user3.jpg',
      }
    ],
  },
  '8': {
    id: '8',
    title: 'Ford Mustang 2023',
    description: 'Experience the thrill of American muscle with the Ford Mustang. Powerful engine options, iconic styling, and modern tech features combine to deliver an exhilarating driving experience.',
    image: '/images/car-details/ford-mustang/main.jpg',
    price: 150,
    originalPrice: 160,
    rating: 4.85,
    totalRatings: 75,
    tripCount: 68,
    location: 'Miami, FL',
    category: 'Sport',
    miles: 500,
    mileageFee: 0.25,
    seats: 4,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Carlos R.',
      image: '/images/user1.jpg',
      rating: 4.92,
      joined: 'Aug 2019',
      trips: 2235,
      responseRate: '99%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Miami, FL 33139',
      coordinates: [-80.1918, 25.7617],
      options: [
        { name: 'Miami International Airport', fee: 'FREE' },
        { name: 'Fort Lauderdale Airport', fee: '$90.00' }
      ]
    },
    delivery: {
      available: true,
      range: 30,
      fee: 110
    },
    safetyFeatures: [
      'Blind spot monitoring',
      'Lane-keeping system',
      'Pre-collision assist',
      'Dynamic stability control'
    ],
    deviceConnectivity: [
      'SYNC 4 infotainment',
      'Apple CarPlay',
      'Android Auto',
      'FordPass Connect'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Premium fuel only', description: 'Must use 91+ octane fuel' },
      { rule: 'No track use', description: 'Vehicle is not permitted for track or racing use' },
      { rule: 'Age 25+', description: 'Driver must be at least 25 years old' }
    ],
    ratings: {
      overall: 4.85,
      cleanliness: 4.9,
      maintenance: 4.8,
      communication: 4.9,
      convenience: 4.8,
      accuracy: 4.8
    },
    additionalImages: [
      '/images/car-details/ford-mustang/main.jpg',
      '/images/car-details/ford-mustang/side.jpg',
      '/images/car-details/ford-mustang/interior.jpg',
      '/images/car-details/ford-mustang/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Ryan',
        date: 'June 15, 2023',
        comment: 'What an experience! The Mustang was an absolute blast to drive in Miami. Carlos was great to work with.',
        rating: 5,
        image: '/images/user1.jpg',
      },
      {
        id: 2,
        name: 'Olivia',
        date: 'June 8, 2023',
        comment: 'Gorgeous car and smooth rental process. Will definitely rent again!',
        rating: 5,
        image: '/images/user2.jpg',
      }
    ],
  },
  '9': {
    id: '9',
    title: 'Chevrolet Camaro 2023',
    description: 'The Chevrolet Camaro delivers iconic muscle car performance with modern technology. Bold styling, powerful engines, and precise handling make every drive thrilling.',
    image: '/images/car-details/chevrolet-camaro/main.jpg',
    price: 145,
    originalPrice: 155,
    rating: 4.8,
    totalRatings: 60,
    tripCount: 55,
    location: 'Las Vegas, NV',
    category: 'Sport',
    miles: 550,
    mileageFee: 0.24,
    seats: 4,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Alexis T.',
      image: '/images/user3.jpg',
      rating: 4.9,
      joined: 'Sep 2020',
      trips: 895,
      responseRate: '97%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Las Vegas, NV 89109',
      coordinates: [-115.1398, 36.1699],
      options: [
        { name: 'McCarran International Airport', fee: 'FREE' },
        { name: 'Las Vegas Strip', fee: '$70.00' }
      ]
    },
    delivery: {
      available: true,
      range: 25,
      fee: 105
    },
    safetyFeatures: [
      'Forward collision alert',
      'Rear cross traffic alert',
      'Lane change alert',
      'StabiliTrak stability control'
    ],
    deviceConnectivity: [
      'Chevrolet Infotainment 3',
      'Apple CarPlay',
      'Android Auto',
      'Bluetooth streaming'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Premium fuel only', description: 'Must use 91+ octane fuel' },
      { rule: 'No track use', description: 'Vehicle is not permitted for track or racing use' },
      { rule: 'Age 25+', description: 'Driver must be at least 25 years old' }
    ],
    ratings: {
      overall: 4.8,
      cleanliness: 4.9,
      maintenance: 4.8,
      communication: 4.7,
      convenience: 4.8,
      accuracy: 4.8
    },
    additionalImages: [
      '/images/car-details/chevrolet-camaro/main.jpg',
      '/images/car-details/chevrolet-camaro/side.jpg',
      '/images/car-details/chevrolet-camaro/interior.jpg',
      '/images/car-details/chevrolet-camaro/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Jason',
        date: 'July 10, 2023',
        comment: 'Amazing car for cruising through Vegas! Alexis was accommodating and professional.',
        rating: 5,
        image: '/images/user1.jpg',
      },
      {
        id: 2,
        name: 'Michelle',
        date: 'July 2, 2023',
        comment: 'Great experience! The Camaro was clean, well-maintained, and a joy to drive.',
        rating: 5,
        image: '/images/user2.jpg',
      }
    ],
  },
  '10': {
    id: '10',
    title: 'Kia Soul 2023',
    description: 'The Kia Soul combines unique styling with practicality. Spacious interior, user-friendly tech, and excellent fuel economy make it ideal for city driving and weekend adventures.',
    image: '/images/car-details/kia-soul/main.jpg',
    price: 75,
    originalPrice: 80,
    rating: 4.75,
    totalRatings: 55,
    tripCount: 62,
    location: 'Portland, OR',
    category: 'Crossover',
    miles: 800,
    mileageFee: 0.14,
    seats: 5,
    transmission: 'Automatic',
    range: 0,
    host: {
      name: 'Harper L.',
      image: '/images/user2.jpg',
      rating: 4.85,
      joined: 'May 2021',
      trips: 745,
      responseRate: '100%',
      responseTime: 'within an hour',
    },
    pickupLocation: {
      primary: 'Portland, OR 97205',
      coordinates: [-122.6765, 45.5231],
      options: [
        { name: 'Portland International Airport', fee: 'FREE' },
        { name: 'Portland Downtown', fee: '$65.00' }
      ]
    },
    delivery: {
      available: true,
      range: 20,
      fee: 85
    },
    safetyFeatures: [
      'Forward collision avoidance',
      'Lane keeping assist',
      'Driver attention warning',
      'Blind spot collision warning'
    ],
    deviceConnectivity: [
      'UVO link infotainment',
      'Apple CarPlay',
      'Android Auto',
      'Bluetooth connectivity'
    ],
    rules: [
      { rule: 'No smoking', description: 'Smoking in the vehicle will result in a $150 fine' },
      { rule: 'Pet friendly', description: 'Please clean up after your pets' },
      { rule: 'Regular fuel only', description: '87 octane fuel only' },
      { rule: 'Keep the vehicle tidy', description: 'Unreasonably dirty vehicles may result in a $150 fine' }
    ],
    ratings: {
      overall: 4.75,
      cleanliness: 4.8,
      maintenance: 4.7,
      communication: 4.8,
      convenience: 4.7,
      accuracy: 4.7
    },
    additionalImages: [
      '/images/car-details/kia-soul/main.jpg',
      '/images/car-details/kia-soul/side.jpg',
      '/images/car-details/kia-soul/interior.jpg',
      '/images/car-details/kia-soul/rear.jpg',
    ],
    reviews: [
      {
        id: 1,
        name: 'Tyler',
        date: 'May 22, 2023',
        comment: 'Fun little car with great handling! Perfect for exploring Portland. Harper was excellent to work with.',
        rating: 5,
        image: '/images/user3.jpg',
      },
      {
        id: 2,
        name: 'Amber',
        date: 'May 15, 2023',
        comment: 'Clean, fuel-efficient, and easy to drive. Exactly what we needed for our trip!',
        rating: 4,
        image: '/images/user1.jpg',
      }
    ],
  }
}; 