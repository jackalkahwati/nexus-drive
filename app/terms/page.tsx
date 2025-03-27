"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last Updated: April 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  Welcome to Nexus Drive. These Terms of Service ("Terms") govern your access to and use of the Nexus Drive website, mobile applications, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
                <p>
                  <strong>"Nexus Drive,"</strong> "we," "us," or "our" refers to Nexus Drive, Inc., the company that operates the Service.
                </p>
                <p>
                  <strong>"User,"</strong> "you," or "your" refers to any individual or entity that accesses or uses the Service.
                </p>
                <p>
                  <strong>"Host"</strong> refers to a User who lists a vehicle for rent on the Service.
                </p>
                <p>
                  <strong>"Renter"</strong> refers to a User who rents a vehicle from a Host through the Service.
                </p>
                <p>
                  <strong>"Booking"</strong> refers to the reservation of a vehicle by a Renter.
                </p>
                <p>
                  <strong>"Listing"</strong> refers to a vehicle that is offered for rent through the Service.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
                <p>
                  To use the Service, you must be at least 21 years of age, have a valid driver's license, and meet other eligibility requirements specified in these Terms or elsewhere on the Service. By using the Service, you represent and warrant that you meet all eligibility requirements.
                </p>
                <p>
                  To become a Host, you must meet additional requirements, including but not limited to having a vehicle that meets our safety and reliability standards and having the legal right to rent out the vehicle.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
                <p>
                  To access certain features of the Service, you must register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Listing and Booking Vehicles</h2>
                <h3 className="text-xl font-medium mb-3">Hosts</h3>
                <p>
                  As a Host, you are responsible for creating accurate and detailed Listings for your vehicles. You agree that you have the legal right to rent your vehicle and that your vehicle meets all applicable safety and legal requirements.
                </p>
                <p>
                  You are responsible for setting your rental rates, availability, and other terms, subject to these Terms and any additional policies we may implement from time to time.
                </p>
                
                <h3 className="text-xl font-medium mb-3 mt-6">Renters</h3>
                <p>
                  As a Renter, you agree to use the vehicles you rent in accordance with the terms set by the Host and these Terms. You must possess a valid driver's license and meet any other requirements specified by the Host or required by law.
                </p>
                <p>
                  You are responsible for returning the vehicle in the same condition as when you received it, except for normal wear and tear. You agree to pay for any damage to the vehicle caused during your rental period.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Fees and Payments</h2>
                <p>
                  Nexus Drive charges service fees for the use of the Service. These fees are disclosed before you confirm a Booking or accept a rental as a Host.
                </p>
                <p>
                  Payments are processed through our third-party payment processors. By using the Service, you agree to be bound by the terms of these payment processors.
                </p>
                <p>
                  Hosts receive payment for rentals according to the payout schedule specified in our Host policies, which may be updated from time to time.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cancellations and Refunds</h2>
                <p>
                  Cancellation policies vary depending on the Listing. The applicable cancellation policy will be displayed before you make a Booking.
                </p>
                <p>
                  Nexus Drive reserves the right to override cancellation policies and issue refunds in certain circumstances, including but not limited to cases of fraud, safety concerns, or significant breaches of these Terms.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Insurance and Protection Plans</h2>
                <p>
                  Nexus Drive provides insurance coverage for vehicles rented through the Service. The details of this coverage are specified in our Insurance Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  You acknowledge that insurance coverage is subject to certain limitations and exclusions, and you agree to comply with all requirements for maintaining coverage.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Prohibited Activities</h2>
                <p>
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Using the Service for any illegal purpose</li>
                  <li>Submitting false or misleading information</li>
                  <li>Using the Service to harass, abuse, or harm another person</li>
                  <li>Using the Service for commercial purposes not explicitly authorized by Nexus Drive</li>
                  <li>Attempting to gain unauthorized access to the Service or user accounts</li>
                  <li>Interfering with or disrupting the Service</li>
                  <li>Scraping or collecting data from the Service without authorization</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Nexus Drive and its officers, directors, employees, and agents shall not be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, the Service.
                </p>
                <p>
                  In no event shall Nexus Drive's total liability to you for all claims arising from or relating to the Service exceed the amount paid by you to Nexus Drive in the twelve (12) months preceding the event giving rise to the liability.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Nexus Drive and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Modifications to the Terms</h2>
                <p>
                  Nexus Drive reserves the right to modify these Terms at any time. We will provide notice of significant changes through the Service or by sending an email to the address associated with your account. Your continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
                <p>
                  Nexus Drive reserves the right to suspend or terminate your access to the Service at any time for any reason, including but not limited to a violation of these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively through binding arbitration in San Francisco, California, using the rules and procedures of the American Arbitration Association.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at <a href="mailto:legal@nexusdrive.com" className="text-green-600 hover:text-green-700">legal@nexusdrive.com</a> or write to us at:
                </p>
                <address className="not-italic mt-4">
                  Nexus Drive, Inc.<br />
                  Attn: Legal Department<br />
                  1234 Market Street<br />
                  San Francisco, CA 94103
                </address>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 