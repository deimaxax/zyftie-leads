import React from 'react';

// Icons - Bold & Modern
const ArrowRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.498 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface HeroSectionProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function HeroSection({ formData, handleInputChange, handleSubmit }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,170,0.08)_0%,transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl opacity-25 animate-pulse delay-2000"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <CheckBadgeIcon />
                <span className="text-sm font-semibold text-gray-900">Trusted by 200+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-1">
                <SparklesIcon />
                <span className="text-sm font-medium text-blue-600">SOC 2 Certified</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="display-1">
                We Build
                <br />
                <span className="text-gradient">Digital Empires</span>
                <br />
                That Dominate
              </h1>
              
              <p className="text-large text-gray-600 max-w-xl leading-relaxed">
                Stop settling for mediocre tech. We engineer enterprise-grade solutions that don&apos;t just work—they <strong className="text-black">crush the competition</strong> and drive exponential growth.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-black">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-black">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime Guaranteed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-black">6 Weeks</div>
                <div className="text-sm text-gray-600 font-medium">Average MVP Delivery</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Elite Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary btn-xl group"
              >
                Start Your Project
                <ArrowRightIcon />
              </a>
              <button className="btn btn-secondary btn-xl group">
                <PlayIcon />
                Watch Case Study
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders:</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-lg font-bold text-gray-400">FINTECH</div>
                <div className="text-lg font-bold text-gray-400">HEALTHCARE</div>
                <div className="text-lg font-bold text-gray-400">E-COMMERCE</div>
                <div className="text-lg font-bold text-gray-400">ENTERPRISE</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="relative">
            {/* Form Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full mb-4">
                  <SparklesIcon />
                  <span className="text-sm font-semibold text-gray-700">Free Strategy Session</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Get Your Custom Solution Blueprint
                </h3>
                <p className="text-gray-600">
                  30-minute consultation • No commitment • $2,500 value
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Smith" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="Acme Corp" 
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select your primary need</option>
                    <option value="ai-ml">AI/ML Development</option>
                    <option value="data-engineering">Data Engineering</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="enterprise-software">Enterprise Software</option>
                    <option value="consulting">Technology Consulting</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Budget</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k+">$500K+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project goals, current challenges, and timeline..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-textarea"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-xl w-full group"
                >
                  Get My Free Strategy Session
                  <ArrowRightIcon />
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon />
                    <span>Response in 2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements Around Form */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
