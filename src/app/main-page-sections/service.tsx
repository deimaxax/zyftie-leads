import React from 'react';

// Icons - Bold & Modern
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
  </svg>
);

const CpuChipIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a3 3 0 003-3V5.25a3 3 0 00-3-3H6.75a3 3 0 00-3 3v10.5a3 3 0 003 3z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const DevicePhoneMobileIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

const GlobeAltIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm0 0c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3s4.5 4.03 4.5 9-2.015 9-4.5 9zm-9.879-8.25c.44-2.152 1.843-4.081 3.879-5.519M21.879 12.75c-.44 2.152-1.843 4.081-3.879 5.519M9.879 7.519c1.171-.71 2.543-1.269 4.121-1.269s2.95.559 4.121 1.269M9.879 16.481c1.171.71 2.543 1.269 4.121 1.269s2.95-.559 4.121-1.269" />
  </svg>
);

const RocketLaunchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI/ML Development",
      subtitle: "Intelligence That Scales",
      description: "Build systems that think, learn, and evolve. From predictive analytics to generative AI, we create intelligent solutions that give you an unfair advantage.",
      features: [
        "Custom ML Models & Algorithms",
        "Computer Vision & NLP",
        "Generative AI Integration",
        "MLOps & Model Deployment",
        "Real-time AI Analytics"
      ],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      results: "$2.3M avg. cost savings per client"
    },
    {
      icon: DatabaseIcon,
      title: "Data Engineering",
      subtitle: "Data That Drives Decisions",
      description: "Transform raw data into strategic assets. We build bulletproof pipelines that handle billions of records while delivering insights at lightning speed.",
      features: [
        "Real-time Data Pipelines",
        "Cloud Data Architecture",
        "Advanced Analytics Platforms",
        "Data Lake & Warehouse Design",
        "Business Intelligence Dashboards"
      ],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      results: "10x faster data processing"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Development",
      subtitle: "Apps That Dominate",
      description: "Create mobile experiences that users can't put down. Native performance, stunning design, and features that make your competition irrelevant.",
      features: [
        "Native iOS & Android",
        "Cross-platform Solutions",
        "Enterprise Mobile Apps",
        "Mobile Backend Services",
        "App Store Optimization"
      ],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      results: "4.8+ avg. app store rating"
    },
    {
      icon: GlobeAltIcon,
      title: "Web Development",
      subtitle: "Platforms That Perform",
      description: "Build web applications that handle millions of users without breaking a sweat. Scalable, secure, and optimized for conversion.",
      features: [
        "Full-Stack Development",
        "Cloud-Native Architecture",
        "API Development & Integration",
        "Performance Optimization",
        "Security & Compliance"
      ],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      results: "99.9% uptime guarantee"
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.05)_0%,transparent_50%)]"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6">
            <div className="text-blue-600">
              <RocketLaunchIcon />
            </div>
            <span className="text-sm font-semibold text-gray-700">Enterprise-Grade Solutions</span>
          </div>
          
          <h2 className="display-2 mb-6">
            Services That
            <br />
            <span className="text-gradient">Deliver Results</span>
          </h2>
          
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            We don't just build software—we engineer competitive advantages. Every solution is designed to scale, perform, and drive measurable business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 lg:p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon />
              </div>

              {/* Service Content */}
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-lg font-semibold text-gray-700">{service.subtitle}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white">
                      <CheckIcon />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Results Badge */}
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
                  <span className="text-sm font-semibold text-gray-900">{service.results}</span>
                </div>
                
                <button className="btn btn-secondary group-hover:btn-primary transition-all duration-300">
                  Learn More
                  <ArrowRightIcon />
                </button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,212,170,0.1)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Build Something
                <br />
                <span className="text-gradient">Extraordinary?</span>
              </h3>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stop wasting time with mediocre solutions. Let's engineer something that actually moves the needle for your business.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">$50M+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Elite Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn btn-primary btn-xl">
                Start Your Project
                <ArrowRightIcon />
              </a>
              <a href="#case-studies" className="btn btn-secondary btn-xl">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
