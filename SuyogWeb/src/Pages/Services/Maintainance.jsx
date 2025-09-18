"use client"

import { useState, useEffect } from "react"
import { Settings, Calendar, Wrench, Shield, CheckCircle, Star, ArrowRight, Sparkles } from "lucide-react"

export default function Maintenance() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const maintenanceServices = [
    {
      icon: Calendar,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance to prevent equipment failures",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Wrench,
      title: "Repair Services",
      description: "Expert repair and restoration of equipment",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Settings,
      title: "Performance Optimization",
      description: "Fine-tuning for maximum efficiency and output",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Spare Parts Supply",
      description: "Genuine spare parts with warranty coverage",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  const maintenancePackages = [
    {
      name: "Basic Maintenance",
      price: "₹2,000/visit",
      description: "Essential maintenance for optimal performance",
      features: ["Visual inspection", "Basic cleaning", "Performance check", "Minor adjustments"],
      frequency: "Quarterly",
      warranty: "3 months",
    },
    {
      name: "Comprehensive Care",
      price: "₹15,000/year",
      description: "Complete maintenance solution with priority support",
      features: ["Preventive maintenance", "Priority repair service", "Spare parts included", "Performance reports"],
      frequency: "Monthly",
      warranty: "12 months",
    },
    {
      name: "Enterprise Contract",
      price: "Custom",
      description: "Tailored maintenance contracts for large installations",
      features: ["Dedicated technician", "24/7 emergency service", "Custom maintenance schedule", "Equipment upgrades"],
      frequency: "As needed",
      warranty: "Extended",
    },
  ]

  const maintenanceSteps = [
    {
      step: "01",
      title: "Inspection",
      description: "Thorough examination of all components and systems",
    },
    {
      step: "02",
      title: "Cleaning",
      description: "Professional cleaning of internal and external parts",
    },
    {
      step: "03",
      title: "Testing",
      description: "Comprehensive testing of all functions and safety features",
    },
    {
      step: "04",
      title: "Calibration",
      description: "Precision calibration for optimal performance",
    },
    {
      step: "05",
      title: "Documentation",
      description: "Detailed maintenance report and recommendations",
    },
  ]

  const benefits = [
    "Extended equipment lifespan",
    "Reduced downtime",
    "Lower operating costs",
    "Improved safety",
    "Warranty protection",
    "Performance optimization",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-indigo-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-purple-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-indigo-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-purple-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Professional Care</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
              Maintenance Services
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Comprehensive maintenance services to keep your equipment running at peak performance. Preventive care,
              repairs, and optimization by certified technicians.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-xl hover:scale-105">
                <span>Schedule Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-indigo-600 transition-all duration-300 transform bg-white border-2 border-indigo-300 rounded-full hover:bg-indigo-50 hover:scale-105">
                <span>Maintenance Plans</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Complete Maintenance Solutions</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Professional maintenance services designed to maximize equipment reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {maintenanceServices.map((service, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${service.bgColor} p-4 rounded-xl mb-4 inline-block`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Process Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Maintenance Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to equipment maintenance and care</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {maintenanceSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                    {step.step}
                  </div>
                  {index < maintenanceSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Maintenance Packages</h2>
            <p className="text-lg text-gray-600">Choose the maintenance plan that best suits your needs</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {maintenancePackages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === 1
                    ? "border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl"
                    : "border-gray-200 bg-white hover:shadow-xl"
                }`}
              >
                {index === 1 && (
                  <div className="mb-4 text-center">
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="mb-2 text-3xl font-bold text-indigo-600">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Frequency:</span>
                    <span className="font-semibold text-gray-900">{pkg.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Warranty:</span>
                    <span className="font-semibold text-gray-900">{pkg.warranty}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    index === 1
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Benefits of Regular Maintenance</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Regular maintenance is essential for optimal equipment performance, safety, and longevity. Our
                professional maintenance services deliver measurable benefits.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500" />
                    <span className="font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl">
                <div className="text-center">
                  <Settings className="w-24 h-24 mx-auto mb-4 text-indigo-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Professional Care</h3>
                  <p className="text-gray-600">Expert maintenance for optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Keep Your Equipment Running Smoothly</h2>
          <p className="mb-8 text-xl opacity-90">
            Don't wait for equipment failure. Schedule regular maintenance to ensure optimal performance and longevity.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-indigo-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Schedule Maintenance</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 hover:scale-105">
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
