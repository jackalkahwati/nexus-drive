"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

type FAQItem = {
  question: string;
  answer: string;
};

const HostFAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How do I list my car on Nexus Drive?",
      answer: "Listing your car is easy! Click on 'Become a Host' and follow these steps: 1) Create an account if you don't already have one. 2) Provide your vehicle details including make, model, year, and photos. 3) Set your availability calendar and pricing. 4) Add a description and any special features. 5) Submit your listing for review. Once approved, your car will be live on our platform."
    },
    {
      question: "How much can I earn by sharing my car?",
      answer: "Earnings vary based on your car's make, model, year, location, and how often you make it available. On average, hosts earn between $500-$1,500 per month with one vehicle. Luxury and specialty vehicles can earn significantly more. Our pricing calculator in the host dashboard can help you estimate your potential earnings based on your specific vehicle and location."
    },
    {
      question: "What insurance coverage is provided for hosts?",
      answer: "All vehicles listed on Nexus Drive are covered by our comprehensive insurance policy during active rental periods. This includes collision damage up to the actual cash value of your vehicle, liability coverage up to $1 million, and 24/7 roadside assistance. The coverage begins when the renter picks up your vehicle and ends when it's returned to you."
    },
    {
      question: "What happens if my car is damaged during a rental?",
      answer: "If your car is damaged during a rental, our insurance will cover the repairs, subject to the terms of our policy. Document the damage immediately upon the vehicle's return by taking photos and report it through your host dashboard within 24 hours. Our claims team will guide you through the process to ensure your vehicle is repaired quickly."
    },
    {
      question: "How do I get paid for my rentals?",
      answer: "You'll receive payments directly to your linked bank account within 3 business days after each completed rental. You can view your earnings, upcoming payouts, and payment history in your host dashboard. We use secure payment processing to ensure your earnings are transferred safely and reliably."
    },
    {
      question: "Can I set my own rental prices?",
      answer: "Yes! You have full control over your pricing. You can set a base daily rate and adjust pricing for weekends, holidays, and special events. Our dynamic pricing tool can also automatically optimize your rates based on demand in your area to maximize your earnings. You can update your pricing at any time through your host dashboard."
    },
    {
      question: "How does the vehicle handoff work?",
      answer: "Vehicle handoffs can be done in person or through our contactless option. For in-person handoffs, you'll meet the renter at an agreed location, verify their license, do a quick walk-around inspection, and hand over the keys. For contactless handoffs, you can use our secure key lockbox solution. Either way, both parties will need to complete the check-in process in the app, including photos documenting the vehicle's condition."
    },
    {
      question: "How are renters vetted for safety?",
      answer: "We thoroughly vet all renters on our platform. Every renter undergoes identity verification, driver's license validation, and a driving record check. We also maintain a two-way review system, so you can see feedback from other hosts before accepting a booking. You can set additional requirements for renters, such as minimum age or minimum number of reviews."
    },
    {
      question: "What if a renter returns my car late?",
      answer: "If a renter is late returning your vehicle, they'll be charged late fees automatically (which are shared with you). You can set your own late return policy in your listing settings. For significantly late returns, our support team can assist with locating the vehicle and ensuring its safe return. We recommend always maintaining open communication with renters through our in-app messaging system."
    },
    {
      question: "Can I restrict who can rent my car?",
      answer: "Yes, you can set specific criteria for who can rent your vehicle. Options include setting a minimum renter age (21, 25, or 30+), requiring a minimum number of previous rentals or reviews, and specifying a minimum driver rating. You can also manually review and approve each booking request before it's confirmed."
    },
    {
      question: "How do I handle maintenance and cleaning between rentals?",
      answer: "Regular maintenance and cleaning are your responsibility as a host. We recommend performing routine maintenance according to your vehicle manufacturer's guidelines and thoroughly cleaning your car between rentals. You can set a cleaning fee in your listing to offset these costs. For longer rentals, you can also schedule maintenance breaks on your availability calendar."
    },
    {
      question: "What support does Nexus Drive provide for hosts?",
      answer: "We offer comprehensive support for hosts including: 24/7 emergency assistance, a dedicated host support line for quick issue resolution, educational resources and webinars to optimize your listing, regular host meetups and community forums, and a host advisory board that helps shape our policies. Our success team is also available to provide personalized coaching to help maximize your earnings."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center mb-8">Host FAQs</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Find answers to common questions about hosting and sharing your vehicle on Nexus Drive. 
              Learn how to maximize your earnings and provide a great experience for renters.
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
            <h2 className="text-2xl font-semibold mb-4">Ready to start hosting?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Turn your car into a second income by sharing it on Nexus Drive. 
              Join thousands of hosts who are earning money with their vehicles.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/become-host"
                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Become a Host
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HostFAQPage;