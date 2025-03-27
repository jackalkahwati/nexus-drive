"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How does Nexus Drive work?",
      answer: "Nexus Drive is a peer-to-peer car sharing platform. Car owners can list their vehicles on our platform, and renters can book these cars for their trips. Once you find a car you like, you can book it directly through our platform. The car owner will then approve your booking and arrange a pickup location and time."
    },
    {
      question: "What are the requirements to rent a car?",
      answer: "To rent a car, you must be at least 21 years old, have a valid driver's license, clean driving record, and a valid credit card for payment. Some luxury or specialty vehicles may have additional requirements like higher age minimums or security deposits."
    },
    {
      question: "Is insurance included?",
      answer: "Yes, every trip includes insurance coverage through our protection plans. This covers both the car owner and the renter in case of accidents or damages during the rental period. You can also choose to upgrade your insurance coverage during the booking process."
    },
    {
      question: "How do I cancel a booking?",
      answer: "You can cancel a booking through your account dashboard. If you cancel more than 24 hours before the trip starts, you'll receive a full refund. Cancellations made within 24 hours of the trip may be subject to a cancellation fee. Check the specific car listing for the exact cancellation policy."
    },
    {
      question: "What fuel policy applies?",
      answer: "Our standard policy is 'return as received.' This means you should return the car with the same level of fuel as when you picked it up. Some hosts may offer different arrangements, so always check the specific listing for details."
    },
    {
      question: "What happens if I return the car late?",
      answer: "If you're running late, try to inform the car owner as soon as possible. Late returns may incur additional hourly or daily charges. Excessive lateness without communication may result in additional fees and impact your ability to use our platform in the future."
    },
    {
      question: "How do I become a car host?",
      answer: "To list your car, click on 'Become a Host' and follow the registration process. You'll need to provide information about your vehicle, including photos, availability, and pricing. Once approved, your car will be listed on our platform for renters to book."
    },
    {
      question: "What if the car breaks down during my rental?",
      answer: "In case of a breakdown, contact the car owner and our 24/7 roadside assistance immediately. We provide roadside assistance for all bookings, which includes towing, jump-starts, flat tire changes, and lockout services."
    },
    {
      question: "Can I modify my booking after it's confirmed?",
      answer: "Yes, you can request modifications to your booking through your account dashboard. Changes are subject to availability and approval by the car owner. Some changes may affect the total cost of your booking."
    },
    {
      question: "How does the rating system work?",
      answer: "After each trip, both renters and car owners can rate and review each other. This helps maintain quality and trust in our community. Your rating will appear on your profile and can influence your ability to rent or host in the future."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Find answers to common questions about renting cars with Nexus Drive. 
              If you can't find what you're looking for, please visit our Help Center or contact our support team.
            </p>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white py-12">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Contact us by phone, email, or visit our Help Center for more information.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage; 