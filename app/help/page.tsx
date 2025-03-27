"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "New to Nexus Drive? Learn the basics of car rental and hosting.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      links: [
        { title: "Creating an account", href: "#" },
        { title: "How to book your first car", href: "#" },
        { title: "Understanding rental prices", href: "#" },
        { title: "Payments and security deposits", href: "#" }
      ]
    },
    {
      title: "Booking & Rentals",
      description: "Learn about the booking process, modifications, and rental policies.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      links: [
        { title: "Modifying a booking", href: "#" },
        { title: "Cancellation policies", href: "#" },
        { title: "Vehicle pick-up and return", href: "#" },
        { title: "Extending your rental", href: "#" }
      ]
    },
    {
      title: "Car Hosting",
      description: "Everything you need to know about listing and renting out your car.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      links: [
        { title: "Listing your vehicle", href: "#" },
        { title: "Setting competitive prices", href: "#" },
        { title: "Managing bookings", href: "#" },
        { title: "Host insurance coverage", href: "#" }
      ]
    },
    {
      title: "Insurance & Safety",
      description: "Information about insurance coverage, safety procedures, and emergencies.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      links: [
        { title: "Understanding insurance coverage", href: "#" },
        { title: "Reporting an accident", href: "#" },
        { title: "Roadside assistance", href: "#" },
        { title: "Safety tips", href: "#" }
      ]
    },
    {
      title: "Payments & Billing",
      description: "Learn about payment methods, refunds, and billing questions.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      links: [
        { title: "Payment methods", href: "#" },
        { title: "Understanding fees", href: "#" },
        { title: "Refund process", href: "#" },
        { title: "Tax information", href: "#" }
      ]
    },
    {
      title: "Account Management",
      description: "Managing your profile, preferences, and notification settings.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      links: [
        { title: "Updating your profile", href: "#" },
        { title: "Password and security", href: "#" },
        { title: "Communication preferences", href: "#" },
        { title: "Privacy settings", href: "#" }
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on Nexus Drive?",
      answer: "Creating an account on Nexus Drive is simple and free. Visit our homepage and click on 'Sign Up' in the top-right corner. You can register using your email address, or sign up with your Google or Facebook account for faster access. You'll need to verify your email, add your phone number, and upload a profile photo. For car rentals, you'll also need to add your driver's license information and connect a payment method."
    },
    {
      question: "What do I need to book my first car?",
      answer: "To book your first car on Nexus Drive, you'll need: a verified Nexus Drive account with a completed profile, a valid driver's license (held for at least 1 year), a credit or debit card for payment, and to be at least 21 years old (25+ for luxury vehicles). After selecting your desired vehicle and dates, you'll submit a booking request to the host, who will review your profile and either approve or decline your request, typically within 24 hours."
    },
    {
      question: "How does the cancellation policy work?",
      answer: "Nexus Drive offers three standardized cancellation policies: Flexible (full refund if canceled 24+ hours before trip start), Moderate (full refund if canceled 5+ days before trip start), and Strict (full refund if canceled 7+ days before trip start). The policy for each vehicle is clearly displayed on the listing page before booking. If you need to cancel, simply go to your Trips page, find the reservation, and click 'Cancel Trip'. Some cancellations due to extenuating circumstances may qualify for additional consideration."
    },
    {
      question: "What happens if I have an accident or breakdown?",
      answer: "In case of an accident, ensure everyone's safety first, then document the scene and exchange information with other involved parties if applicable. Contact emergency services if needed, then call Nexus Drive's 24/7 emergency line at (800) 555-0123. For a breakdown, contact our roadside assistance at (800) 555-0124, which is included with every rental. Our support team will guide you through the next steps, including arranging a replacement vehicle if necessary."
    },
    {
      question: "How do I list my car on Nexus Drive?",
      answer: "To list your car, first create a host account on Nexus Drive, then click 'List Your Car' from your dashboard. You'll need to provide your vehicle's details (make, model, year, etc.), upload high-quality photos, write a description, set your availability calendar, and choose your pricing and rental policies. Once submitted, our team will review your listing, which typically takes 1-2 business days. After approval, your car will be live on the platform and available for bookings."
    },
    {
      question: "What insurance coverage does Nexus Drive provide?",
      answer: "All Nexus Drive rentals include comprehensive insurance coverage. For guests, this includes liability protection up to $1 million and physical damage protection up to the actual cash value of the vehicle (minus your selected deductible). For hosts, we provide primary insurance during active rental periods that protects against physical damage and liability claims, so your personal insurance won't be affected. Additional protection plans are available during the checkout process for guests who want extra coverage."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Nexus Drive accepts all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal and Apple Pay on compatible devices. For security reasons, we do not accept cash, personal checks, gift cards, or prepaid cards. All payments are processed securely through our platform, and you'll receive detailed receipts for all transactions via email."
    },
    {
      question: "How does the refund process work?",
      answer: "Refunds are processed back to your original payment method. For cancellations that qualify for a refund under the booking's cancellation policy, the process begins automatically when the cancellation is confirmed. Standard refunds typically appear in your account within 5-10 business days, depending on your financial institution. For other refund requests (like host cancellations or issues during your trip), contact our support team who will review your case and process eligible refunds within 3-5 business days."
    },
    {
      question: "What should I do if my host cancels my booking?",
      answer: "If your host cancels your booking, you'll receive an immediate notification and a full refund of your payment. Our team will also assist you in finding an alternative vehicle with similar specifications for your trip dates. In many cases, we can offer a discount on your replacement booking to compensate for the inconvenience. If you need urgent assistance with a host cancellation, especially if it's last-minute, contact our customer support team at (800) 555-0125."
    },
    {
      question: "Is there a mileage limit on Nexus Drive rentals?",
      answer: "Most Nexus Drive rentals come with a daily mileage allowance, typically between 150-250 miles per day (distances vary by host). Your specific mileage limit will be clearly displayed on the vehicle listing before booking. If you exceed this limit, additional fees apply (usually between $0.15-$0.75 per extra mile). Some hosts offer unlimited mileage packages for an additional fee, which can be more economical for long-distance trips. You can filter your search results to show only cars with unlimited mileage if this is important for your trip."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-6">Help Center</h1>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              Find answers, tips, and resources to help you get the most out of your Nexus Drive experience.
            </p>
            
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-4">How can we help you today?</h2>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Search for help articles..."
                  />
                  <svg
                    className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Help Categories */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Help by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-green-600 hover:text-green-700 flex items-center"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div id="faq" className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer p-6">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-gray-900 text-white py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
              <p className="text-gray-300 mb-8">
                Our support team is ready to assist you with any questions or concerns.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <svg
                    className="w-10 h-10 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-400 mb-4">Send us a message anytime</p>
                  <a
                    href="mailto:support@nexusdrive.com"
                    className="text-green-500 hover:text-green-400"
                  >
                    support@nexusdrive.com
                  </a>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <svg
                    className="w-10 h-10 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-400 mb-4">Mon-Fri, 9AM-6PM EST</p>
                  <a
                    href="tel:+15551234567"
                    className="text-green-500 hover:text-green-400"
                  >
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <svg
                    className="w-10 h-10 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-400 mb-4">Available 24/7</p>
                  <button
                    className="text-green-500 hover:text-green-400"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter; 