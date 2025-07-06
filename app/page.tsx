'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp, FiCheck, FiStar } from 'react-icons/fi';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const stats = [
    { number: '500+', label: 'Satisfied Clients' },
    { number: '95%', label: 'Conversion Rate' },
    { number: '10K+', label: 'Leads Generated' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Our lead generation has increased by 300% since working with this team.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The quality of leads we receive is exceptional. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Founder, InnovateNow',
      content: 'The ROI we&apos;ve seen is incredible. Best decision for our business.',
      rating: 5
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Transform Your Business With Premium Leads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented growth with our data-driven lead generation strategies. We connect you with high-intent customers who are ready to engage with your business.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 my-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FiTarget className="w-8 h-8" />,
              title: 'Precision Targeting',
              description: 'Advanced algorithms identify and engage your ideal customers with pinpoint accuracy.'
            },
            {
              icon: <FiUsers className="w-8 h-8" />,
              title: 'Qualified Prospects',
              description: 'Connect with pre-vetted leads who are actively seeking your solutions.'
            },
            {
              icon: <FiTrendingUp className="w-8 h-8" />,
              title: 'Scalable Growth',
              description: 'Data-driven strategies that adapt and scale with your business needs.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-blue-50">
          <h2 className="text-3xl font-bold text-center mb-4">Start Growing Today</h2>
          <p className="text-gray-600 text-center mb-8">Join hundreds of successful businesses that trust us with their lead generation.</p>
          {submitted ? (
            <div className="text-center text-green-600 py-8">
              <h3 className="text-2xl font-semibold">Thank you for your interest!</h3>
              <p className="mt-2">We&apos;ll be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
              >
                <FiCheck className="w-5 h-5" />
                Get Started
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
