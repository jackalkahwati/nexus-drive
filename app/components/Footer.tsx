"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/55E46CFD-EB71-4A7C-B24D-4F1B771BD2F5.PNG" 
                alt="Nexus Drive Logo" 
                className="h-16 w-auto"
                style={{ maxWidth: '180px' }}
              />
            </Link>
            <p className="mt-4 text-gray-400">Renting cars has never been easier. Join thousands of satisfied customers today.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-400 hover:text-white transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/become-host" className="text-gray-400 hover:text-white transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-400 hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-400 hover:text-white transition-colors">
                  Insurance & Protection
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Host Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/host-tools" className="text-gray-400 hover:text-white transition-colors">
                  Host Tools
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-white transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/become-host" className="text-gray-400 hover:text-white transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            © {currentYear} Nexus Drive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 