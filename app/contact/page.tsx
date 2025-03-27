"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? We're here to help. Reach out to our team through any of the methods below.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@nexusdrive.com" className="text-green-600 hover:text-green-700">
                  support@nexusdrive.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Available Monday to Friday, 9am to 6pm EST.
                </p>
                <a href="tel:+15551234567" className="text-green-600 hover:text-green-700">
                  (555) 123-4567
                </a>
              </div>
              
              {/* Office */}
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come say hello at our headquarters.
                </p>
                <address className="not-italic text-green-600">
                  1234 Market Street<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Thank you for your message! Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="">Select a topic</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="hosting">Hosting Questions</option>
                          <option value="billing">Billing & Payments</option>
                          <option value="feedback">Feedback & Suggestions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="h-96 bg-gray-200 relative">
          {/* Placeholder for a map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600">Interactive map would be integrated here</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 