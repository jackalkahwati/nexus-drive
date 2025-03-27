import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import FeaturedCars from './components/FeaturedCars';
import HowItWorks from './components/HowItWorks';
import PopularDestinations from './components/PopularDestinations';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main>
      <Header />
      
      <div className="relative">
        <Hero />
        <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2">
          <div className="container-custom">
            <SearchForm />
          </div>
        </div>
      </div>
      
      <div className="pt-32 pb-0">
        <FeaturedCars />
      </div>
      
      <HowItWorks />
      
      <PopularDestinations />
      
      <Testimonials />
      
      <CallToAction />
      
      <Footer />
    </main>
  );
} 