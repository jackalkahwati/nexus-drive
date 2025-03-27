"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, this would make an API call to your backend
      // For now, we'll just simulate success
      setSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          {submitted ? (
            <div className="text-center">
              <svg 
                className="mx-auto h-16 w-16 text-green-500 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                If an account exists for {email}, we've sent a password reset link to your email address.
                Please check your inbox and follow the instructions to reset your password.
              </p>
              <p className="text-gray-600 mb-8">
                Didn't receive an email? Check your spam folder or make sure you entered the correct email address.
              </p>
              <div className="flex flex-col space-y-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Try Again
                </button>
                <Link
                  href="/login"
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-center"
                >
                  Return to Login
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
              <p className="text-gray-600 mb-6 text-center">
                Enter the email address associated with your account, and we'll send you a link to reset your password.
              </p>
              
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 bg-green-500 text-white rounded-md transition-colors ${
                    loading ? 'bg-green-400 cursor-not-allowed' : 'hover:bg-green-600'
                  }`}
                >
                  {loading ? 'Sending...' : 'Reset Password'}
                </button>
                
                <div className="mt-6 text-center">
                  <Link href="/login" className="text-green-600 hover:text-green-800">
                    Return to login
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;