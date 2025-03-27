"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InsurancePage = () => {
  const coveragePlans = [
    {
      title: "Basic",
      description: "Essential coverage for budget-conscious renters",
      price: "$15/day",
      coverage: [
        { benefit: "Liability coverage up to $100,000", included: true },
        { benefit: "Collision damage with $2,500 deductible", included: true },
        { benefit: "24/7 roadside assistance (basic)", included: true },
        { benefit: "Personal effects coverage", included: false },
        { benefit: "Loss of use coverage", included: false },
        { benefit: "Zero deductible option", included: false }
      ]
    },
    {
      title: "Standard",
      description: "Balanced protection for most travelers",
      price: "$25/day",
      recommended: true,
      coverage: [
        { benefit: "Liability coverage up to $250,000", included: true },
        { benefit: "Collision damage with $1,000 deductible", included: true },
        { benefit: "24/7 roadside assistance (premium)", included: true },
        { benefit: "Personal effects coverage up to $500", included: true },
        { benefit: "Loss of use coverage", included: false },
        { benefit: "Zero deductible option", included: false }
      ]
    },
    {
      title: "Premium",
      description: "Complete coverage for peace of mind",
      price: "$40/day",
      coverage: [
        { benefit: "Liability coverage up to $1,000,000", included: true },
        { benefit: "Collision damage with $0 deductible", included: true },
        { benefit: "24/7 roadside assistance (premium)", included: true },
        { benefit: "Personal effects coverage up to $1,500", included: true },
        { benefit: "Loss of use coverage", included: true },
        { benefit: "Zero deductible option", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Is insurance mandatory when renting on Nexus Drive?",
      answer: "Yes, all rentals on Nexus Drive require some form of insurance coverage. You can choose from our protection plans or, in some cases, use coverage from your personal auto insurance or credit card if they provide rental car coverage."
    },
    {
      question: "What happens if I get into an accident?",
      answer: "In case of an accident, ensure everyone's safety, then document the scene with photos and exchange information with other parties involved. Contact our 24/7 emergency line immediately, and we'll guide you through the claims process. With our insurance coverage, you'll have support throughout the entire process."
    },
    {
      question: "Does my personal auto insurance cover rentals?",
      answer: "Many personal auto insurance policies extend coverage to rental cars, but coverage levels and exclusions vary. We recommend contacting your insurance provider to verify your coverage before declining our protection plans. Remember that using your personal insurance for a claim may affect your premium rates."
    },
    {
      question: "Are there any exclusions to the insurance coverage?",
      answer: "Yes, certain activities may void insurance coverage, including: unauthorized drivers operating the vehicle, driving under the influence, using the vehicle for commercial purposes, off-road driving (unless specifically permitted for the vehicle), racing or reckless driving, and driving outside the agreed-upon geographic area."
    },
    {
      question: "How do I file an insurance claim?",
      answer: "To file a claim, contact our customer support team within 24 hours of the incident. You'll need to provide details about the incident, photos of any damage, a copy of the police report (if applicable), and your rental agreement information. Our claims specialists will guide you through the process and work directly with the insurance provider."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/insurance-cover.jpg"
              alt="Car insurance protection"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container-custom relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drive with Complete Confidence
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Our comprehensive insurance options provide protection and peace of mind for every journey, so you can focus on enjoying the road ahead.
              </p>
              <Link
                href="#coverage-plans"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block"
              >
                View Coverage Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Our Insurance */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Nexus Drive Insurance</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our tailored protection plans are designed specifically for car sharing, offering benefits that standard insurance policies don't provide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                <p className="text-gray-600">
                  Protection against liability, collision, theft, and natural disasters, with options for zero deductible.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Claims Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available around the clock to assist with claims processing and emergency support.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Flexible Options</h3>
                <p className="text-gray-600">
                  Choose from multiple coverage levels to suit your needs and budget, with transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Plans */}
        <div id="coverage-plans" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Insurance Coverage Plans</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Select the level of protection that's right for your trip. All plans include 24/7 customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coveragePlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden relative ${plan.recommended ? 'ring-2 ring-green-500' : ''}`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 font-semibold">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <p className="text-3xl font-bold text-green-600 mb-6">{plan.price}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.coverage.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          {item.included ? (
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          )}
                          <span className={item.included ? 'text-gray-800' : 'text-gray-500'}>
                            {item.benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`w-full py-3 rounded-md font-semibold ${
                        plan.recommended 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      } transition-colors`}
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How Claims Work */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Insurance Claims Work</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've simplified the claims process to get you back on the road as quickly as possible.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-100"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Report the Incident</h3>
                    <p className="text-gray-600">
                      Contact our 24/7 support team as soon as possible after an incident. For emergencies or accidents with injuries, call emergency services first, then contact us.
                    </p>
                  </div>
                  
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Document Everything</h3>
                    <p className="text-gray-600">
                      Take photos of any damage, the scene of the incident, and gather information from other parties involved (if applicable). Our mobile app makes it easy to upload these documents.
                    </p>
                  </div>
                  
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Claims Assessment</h3>
                    <p className="text-gray-600">
                      Our claims specialists will review your case and guide you through the next steps. For most claims, we aim to complete the assessment within 48 hours.
                    </p>
                  </div>
                  
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">4</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Resolution</h3>
                    <p className="text-gray-600">
                      Once approved, we'll arrange for repairs or reimbursement according to your coverage plan. Premium plan members receive priority handling for faster resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our insurance coverage.
              </p>
            </div>

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

        {/* CTA */}
        <div className="bg-green-50 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Journey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Choose the right coverage for your next adventure and drive with confidence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/cars" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold transition-colors"
                >
                  Browse Cars
                </Link>
                <Link 
                  href="/help" 
                  className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-md font-semibold transition-colors"
                >
                  Contact Support
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

export default InsurancePage; 