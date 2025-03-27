"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HostToolsPage = () => {
  const toolCategories = [
    {
      title: "Listing Management",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      tools: [
        {
          name: "Vehicle Calendar",
          description: "Manage availability, bookings, and block dates for maintenance",
          link: "#"
        },
        {
          name: "Listing Editor",
          description: "Update photos, descriptions, and pricing for your vehicles",
          link: "#"
        },
        {
          name: "Pricing Assistant",
          description: "AI-powered tool to optimize pricing based on market demand",
          link: "#"
        },
        {
          name: "Quick Responses",
          description: "Create templates for fast replies to common inquiries",
          link: "#"
        }
      ]
    },
    {
      title: "Performance Insights",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tools: [
        {
          name: "Earnings Dashboard",
          description: "Track revenue, expenses, and payouts from all your vehicles",
          link: "#"
        },
        {
          name: "Vehicle Analytics",
          description: "View performance metrics and utilization rates per vehicle",
          link: "#"
        },
        {
          name: "Market Trends",
          description: "See demand patterns and pricing trends in your area",
          link: "#"
        },
        {
          name: "Review Management",
          description: "Monitor and respond to guest reviews all in one place",
          link: "#"
        }
      ]
    },
    {
      title: "Guest Management",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      tools: [
        {
          name: "Booking Manager",
          description: "Approve, modify, or decline booking requests",
          link: "#"
        },
        {
          name: "Guest Verification",
          description: "Review guest profiles and driving records",
          link: "#"
        },
        {
          name: "Check-in/Check-out",
          description: "Digital process for documenting vehicle condition",
          link: "#"
        },
        {
          name: "Messaging Center",
          description: "Centralized inbox for all guest communications",
          link: "#"
        }
      ]
    }
  ];

  const featuredTools = [
    {
      title: "Earnings Calculator",
      description: "Estimate your potential earnings based on your vehicle, location, and availability",
      image: "/images/tools/earnings-calculator.jpg",
      link: "/calculator"
    },
    {
      title: "Remote Unlock",
      description: "Control vehicle access remotely with our secure digital key system",
      image: "/images/tools/remote-unlock.jpg",
      link: "/remote-unlock"
    },
    {
      title: "Vehicle Health Monitor",
      description: "Track your vehicle's maintenance needs and get alerts for service",
      image: "/images/tools/vehicle-monitor.jpg",
      link: "/vehicle-health"
    }
  ];

  const testimonials = [
    {
      quote: "The host tools have streamlined my car sharing business. I've increased my bookings by 40% since I started using the Pricing Assistant.",
      author: "Michael R.",
      location: "San Francisco, CA",
      image: "/images/hosts/host-michael.jpg"
    },
    {
      quote: "Managing multiple vehicles used to be a headache until I discovered the Nexus Drive host tools. Now I can manage everything from one dashboard.",
      author: "Sarah L.",
      location: "Austin, TX",
      image: "/images/hosts/host-sarah.jpg"
    },
    {
      quote: "The Vehicle Analytics tool helped me identify which of my cars were underperforming, allowing me to make data-driven decisions that boosted my revenue.",
      author: "David K.",
      location: "Chicago, IL",
      image: "/images/hosts/host-david.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/images/host-tools-hero.jpg"
              alt="Car host tools and management"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container-custom relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Tools for Successful Hosts
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Take your car sharing business to the next level with our suite of host management tools designed to maximize earnings and simplify operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/become-host"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block"
                >
                  Become a Host
                </Link>
                <Link
                  href="#tool-categories"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-semibold transition-colors inline-block"
                >
                  Explore Tools
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Host Benefits */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Use Our Host Tools</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive suite of tools is designed to help hosts save time, increase bookings, and maximize earnings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Increased Earnings</h3>
                <p className="text-gray-600">
                  Our data-driven pricing tools help you set optimal rates based on seasonality, local events, and market demand to maximize your revenue.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Time Savings</h3>
                <p className="text-gray-600">
                  Automate routine tasks like messaging, check-ins, and scheduling maintenance to spend less time managing and more time earning.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk Reduction</h3>
                <p className="text-gray-600">
                  Our guest verification system and digital check-in/check-out processes help protect your vehicle and create accountability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Categories */}
        <div id="tool-categories" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Host Management Suite</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive set of tools designed to help you manage your listings efficiently.
              </p>
            </div>

            <div className="space-y-16">
              {toolCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center gap-6">
                      <div>{category.icon}</div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold mb-3">{tool.name}</h4>
                        <p className="text-gray-600 mb-4">{tool.description}</p>
                        <Link href={tool.link} className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                          Learn more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Tools</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These powerful tools have helped our top hosts increase their earnings and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTools.map((tool, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <Link 
                      href={tool.link} 
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md inline-block transition-colors"
                    >
                      Try Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Hosts Are Saying</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Hear from hosts who have transformed their car sharing experience with our tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-8">
                  <div className="flex gap-4 items-center mb-6">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-500 py-16 text-white">
          <div className="container-custom">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Ready to maximize your car's earning potential?</h2>
                <p className="text-xl opacity-90">
                  Join thousands of successful hosts on Nexus Drive today.
                </p>
              </div>
              <div>
                <Link 
                  href="/become-host" 
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg inline-block transition-colors"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HostToolsPage; 