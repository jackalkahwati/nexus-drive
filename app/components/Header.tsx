"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-40 h-14 flex items-center justify-center relative">
              <Image 
                src="/logos/nexus-drive-logo.png" 
                alt="Nexus Drive Logo"
                width={160}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center area - intentionally left empty */}
          <div className="flex-grow"></div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-4">
            {/* Resources dropdown */}
            <div className="relative hidden md:block">
              <button 
                className="flex items-center text-gray-700 hover:text-green-500 font-medium"
                onClick={toggleDropdown}
              >
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-64 bg-white rounded-md shadow-xl z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-500">Support</p>
                  </div>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact Support
                  </Link>
                  <Link href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help Center
                  </Link>
                  <Link href="/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Insurance & Protection
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-t border-gray-100 mt-2">
                    <p className="text-sm font-semibold text-gray-500">Host Resources</p>
                  </div>
                  <Link href="/host-tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Host Tools
                  </Link>
                  <Link href="/calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Calculator
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-t border-gray-100 mt-2">
                    <p className="text-sm font-semibold text-gray-500">Legal</p>
                  </div>
                  <Link href="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Terms of Service
                  </Link>
                  <Link href="/privacy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>

            <Link href="/login" className="text-gray-700 hover:text-green-500 font-medium">
              Log In
            </Link>
            <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Support
              </Link>
              <Link
                href="/insurance"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insurance & Protection
              </Link>
              <Link
                href="/host-tools"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Host Tools
              </Link>
              <Link
                href="/calculator"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                href="/terms"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Legal
              </Link>
              <div className="pt-2 border-t border-gray-100 flex flex-col space-y-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-green-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 