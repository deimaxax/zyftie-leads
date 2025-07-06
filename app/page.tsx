'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp, FiCheck, FiStar } from 'react-icons/fi';

const heroGradient =
  "bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800";
const accent = "text-pink-400";
const pill =
  "inline-block rounded-full px-3 py-1 bg-pink-100 text-pink-600 font-semibold text-xs tracking-wider uppercase shadow-sm";
const glass =
  "bg-white/70 backdrop-blur-md shadow-xl border border-white/20";

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

  const features = [
    {
      icon: <FiTarget className="w-10 h-10 text-pink-400" />,
      title: 'Precision Targeting',
      description: 'No mass-mailing: algorithmic audiences, human-verified, zero wasted clicks.'
    },
    {
      icon: <FiUsers className="w-10 h-10 text-violet-600" />,
      title: 'Qualified Prospects',
      description: 'You get intros, not just emails. Every lead confirmed by a specialist.'
    },
    {
      icon: <FiTrendingUp className="w-10 h-10 text-indigo-500" />,
      title: 'Scalable Growth',
      description: 'Whether you need 100 or 10,000 – growth adapts to your real sales ops.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: '“Lead quality doubled. We literally paused outgoing calls.”',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CMO, GrowthCo',
      content: '“Results in week one, not quarter one. Worth every cent.”',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
      name: 'Emma Davis',
      role: 'Founder, InnovateNow',
      content: '“Real pipeline, not promises. Immediate ROI.”',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const proofLogos = [
    { src: "https://cdn.simpleicons.org/airbnb/9ca3af", alt: "Airbnb" },
    { src: "https://cdn.simpleicons.org/stripe/9ca3af", alt: "Stripe" },
    { src: "https://cdn.simpleicons.org/amazon/9ca3af", alt: "Amazon" },
    { src: "https://cdn.simpleicons.org/google/9ca3af", alt: "Google" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-pink-300 selection:text-white">

      {/*  HERO SECTION  */}
      <section className={`relative overflow-hidden py-28 md:py-40 ${heroGradient}`}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute right-0 top-10 w-[48vw] opacity-40"
            viewBox="0 0 800 400" fill="none">
            <ellipse cx="530" cy="220" rx="350" ry="120" fill="#f472b6" fillOpacity="0.13" />
          </svg>
          <svg className="absolute left-0 bottom-0 w-[39vw] opacity-30"
            viewBox="0 0 800 400" fill="none">
            <ellipse cx="230" cy="350" rx="200" ry="60" fill="#c4b5fd" fillOpacity="0.18" />
          </svg>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className={pill}>B2B Lead Engine</span>
          <motion.h1
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6"
          >
            <span className="text-white">Stop hunting. Start </span>
            <span className={accent}>closing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-purple-200/90 leading-relaxed mb-10"
          >
            We deliver you intros to decision-makers ready to talk. Real companies, real deals ― 100% pre-qualified by analysts.
          </motion.p>
          {/* Proof logos */}
          <div className="flex justify-center gap-6 mb-8 opacity-80 scale-90 hover:scale-100 transition">
            {proofLogos.map(logo => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-8" />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full shadow-xl hover:bg-pink-400 hover:scale-105 transition-all">
              Get started — free intro call
            </button>
            <button className="px-8 py-4 border-2 border-white/60 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:scale-105 transition-all">
              See how it works
            </button>
          </motion.div>
        </div>
      </section>

      {/*  STATS - edge to edge, glass */}
      <section className="relative z-10 -mt-16 mb-24">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.1 }}
              className={`${glass} text-center py-8 px-6 rounded-2xl hover:bg-white/90 hover:shadow-2xl transition-all border-pink-100`}
            >
              <div className="text-4xl mb-2 font-black text-pink-500">{stat.number}</div>
              <div className="text-neutral-700/90 font-semibold tracking-wider text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES: Overlapping layer, vertical */}
      <section className="relative max-w-6xl mx-auto px-6 z-10 mb-24">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity:0, y:18 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay: 0.25 + i*0.18 }}
              className={`${glass} flex flex-col items-center text-center py-10 px