"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: March 25, 2025</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Nexus Drive ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website or use our mobile application and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our platform, including:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you personally, such as your name, email address, postal address, phone number, and date of birth.
                </li>
                <li>
                  <strong>Driver's License Information:</strong> If you rent vehicles through our platform, we collect information from your driver's license to verify your identity and confirm your eligibility to drive.
                </li>
                <li>
                  <strong>Vehicle Information:</strong> If you list vehicles on our platform, we collect information about your vehicles, such as make, model, year, license plate number, and images.
                </li>
                <li>
                  <strong>Payment Information:</strong> We collect payment details including credit card or bank account information to process transactions.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our platform, including browsing history, search queries, and features you use.
                </li>
                <li>
                  <strong>Location Data:</strong> When you use our services, we may collect precise location data from your device with your consent.
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Providing the services you request and managing your account</li>
                <li>Processing transactions and sending transaction notifications</li>
                <li>Verifying your identity and eligibility to use our services</li>
                <li>Matching renters with vehicle owners</li>
                <li>Communicating with you about your account, our services, promotions, and updates</li>
                <li>Personalizing your experience and delivering content relevant to your interests</li>
                <li>Improving our platform, developing new features, and conducting research</li>
                <li>Ensuring the security and integrity of our services</li>
                <li>Complying with legal obligations and enforcing our terms of service</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Other Users:</strong> When you book a vehicle, we share relevant information with the vehicle owner. Similarly, when you list a vehicle, information is shared with potential renters.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, customer service, and marketing.
                </li>
                <li>
                  <strong>Insurance Partners:</strong> To provide insurance coverage for trips booked through our platform.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or if we believe it's necessary to protect our rights, your safety, or the safety of others.
                </li>
                <li>
                  <strong>Business Partners:</strong> In connection with business transfers, mergers, acquisitions, or sales of assets.
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
              <p>You have several choices regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access, update or delete your personal information through your account settings</li>
                <li>Opt out of marketing communications by following the unsubscribe link in our emails</li>
                <li>Control location tracking through your device settings</li>
                <li>Set your browser to refuse cookies or alert you when cookies are being sent</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls, and any payment transactions will be encrypted using SSL technology.
              </p>
              <p className="mt-3">
                However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our platform. Any transmission of personal information is at your own risk.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>
                Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on our platform. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Our Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. If we make material changes, we will post the updated Privacy Policy on this page and update the "Last Updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> privacy@nexusdrive.com<br />
                <strong>Phone:</strong> (555) 987-6543<br />
                <strong>Address:</strong> 1234 Market Street, San Francisco, CA 94103
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;