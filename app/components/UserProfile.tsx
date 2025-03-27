"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

interface UserData {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  bookingsCount?: number;
  loyaltyPoints?: number;
}

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [session, status]);
  
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/proxy/users/profile');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Use session data as fallback if API call fails
      if (session?.user) {
        setUserData({
          id: session.user.id || 'unknown',
          name: session.user.name,
          email: session.user.email || 'unknown',
          image: session.user.image,
          bookingsCount: 0,
          loyaltyPoints: 0
        });
      }
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
      </div>
    );
  }
  
  if (!session) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Welcome to Nexus Drive</h3>
        <p className="text-gray-600 mb-4">Sign in to access your account and bookings.</p>
        <div className="flex space-x-2">
          <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-md transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-16 h-16 overflow-hidden rounded-full">
          {userData?.image ? (
            <Image 
              src={userData.image} 
              alt={userData.name || 'User'} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-600">
                {userData?.name?.charAt(0) || userData?.email.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold">{userData?.name || 'User'}</h3>
          <p className="text-gray-500">{userData?.email}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <span className="block text-sm text-gray-500">Bookings</span>
          <span className="text-2xl font-bold">{userData?.bookingsCount || 0}</span>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <span className="block text-sm text-gray-500">Loyalty Points</span>
          <span className="text-2xl font-bold">{userData?.loyaltyPoints || 0}</span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Link href="/dashboard" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
          Dashboard
        </Link>
      </div>
    </div>
  );
} 