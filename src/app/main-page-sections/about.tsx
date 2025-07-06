import React from 'react';

// Icons
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zyftie for Your Next Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're not just another development agency. We're your strategic technology partner, committed to delivering solutions that drive real business results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-600">SOC 2 compliant development processes with end-to-end encryption and comprehensive security audits.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Development Process</h3>
                  <p className="text-gray-600">Rapid prototyping, continuous integration, and iterative development to deliver value quickly.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support & Maintenance</h3>
                  <p className="text-gray-600">Round-the-clock monitoring, proactive maintenance, and dedicated support team for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                  <p className="text-gray-600">Future-proof solutions built to scale with your business growth and evolving requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Development Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Discovery & Strategy</h4>
                  <p className="text-gray-600 text-sm">Deep dive into your business requirements, technical constraints, and success metrics.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Design & Architecture</h4>
                  <p className="text-gray-600 text-sm">Create detailed technical specifications, system architecture, and user experience designs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Development & Testing</h4>
                  <p className="text-gray-600 text-sm">Agile development with continuous testing, code reviews, and quality assurance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Deployment & Support</h4>
                  <p className="text-gray-600 text-sm">Seamless deployment, performance monitoring, and ongoing maintenance support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
