'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp, FiStar, FiArrowRight, FiZap, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Satisfied Clients' },
    { number: '95%', label: 'Conversion Rate' },
    { number: '10K+', label: 'Leads Generated' },
  ];

  const features = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Precision Targeting',
      description: 'No mass-mailing: algorithmic audiences, human-verified, zero wasted clicks.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Qualified Prospects',
      description: 'You get intros, not just emails. Every lead confirmed by a specialist.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Scalable Growth',
      description: 'Whether you need 100 or 10,000 – growth adapts to your real sales ops.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: '"Lead quality doubled. We literally paused outgoing calls."',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CMO, GrowthCo',
      content: '"Results in week one, not quarter one. Worth every cent."',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
      name: 'Emma Davis',
      role: 'Founder, InnovateNow',
      content: '"Real pipeline, not promises. Immediate ROI."',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const proofLogos = [
    { src: "https://cdn.simpleicons.org/airbnb/ffffff", alt: "Airbnb" },
    { src: "https://cdn.simpleicons.org/stripe/ffffff", alt: "Stripe" },
    { src: "https://cdn.simpleicons.org/apple/ffffff", alt: "Apple" },
    { src: "https://cdn.simpleicons.org/google/ffffff", alt: "Google" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 glass border border-white/20 rounded-full mb-8 text-sm font-medium"
          >
            <FiZap className="w-4 h-4 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              B2B Lead Engine
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-none"
          >
            <span className="text-white">Stop hunting.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start closing.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12"
          >
            We deliver you intros to decision-makers ready to talk. Real companies, real deals — 
            <span className="text-cyan-400 font-semibold"> 100% pre-qualified by analysts.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get started — free intro call
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              See how it works
            </button>
          </motion.div>

          {/* Proof logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm text-gray-400 font-medium">Trusted by</span>
            <div className="flex gap-6">
              {proofLogos.map(logo => (
                <Image 
                  key={logo.alt} 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={24} 
                  height={24} 
                  className="h-6 w-6 hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 glass-effect rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why choose us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We don&apos;t just generate leads. We deliver qualified prospects ready to convert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 glass-effect rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What our clients say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white/5 glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={56} 
                      height={56} 
                      className="w-14 h-14 rounded-full mr-4 ring-2 ring-cyan-400/50" 
                    />
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-200 text-lg italic mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 glass-effect rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">transform</span> your sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wasting time on unqualified leads. Get direct intros to decision-makers who are ready to buy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <FiCheck className="w-5 h-5" />
                  Start your free consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
