"use client"

import { useState, useEffect } from "react"
import { Zap, CheckCircle, Star, ArrowRight, Flame, Shield, DollarSign, Sparkles } from "lucide-react"

export default function GasGenerators() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Zero Explosion Risk",
      description: "No gas storage means no risk of explosion or accidents",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Flame,
      title: "On-Demand Generation",
      description: "Gas generated only when needed, no wastage",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "50% savings compared to acetylene, 35% vs LPG",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Advanced electrolysis technology for optimal performance",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const applications = [
    "Jewelry Manufacturing",
    "Metal Fabrication",
    "Automotive Repair",
    "Electronics Assembly",
    "Plumbing & HVAC",
    "Art & Craft Work",
  ]

  const specifications = [
    { label: "Gas Output", value: "Customizable pressure" },
    { label: "Power Supply", value: "220V AC / 110V AC" },
    { label: "Water Consumption", value: "Minimal distilled water" },
    { label: "Maintenance", value: "Low maintenance design" },
    { label: "Safety", value: "Multiple safety features" },
    { label: "Warranty", value: "2 years comprehensive" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-yellow-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-orange-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-yellow-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-orange-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Revolutionary Technology</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text">
              H2O Gas Generators
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Advanced water electrolysis technology for safe, efficient, and cost-effective gas generation. Perfect for
              soldering, brazing, cutting, and heating applications.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-yellow-500 to-orange-600 hover:shadow-xl hover:scale-105">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-orange-600 transition-all duration-300 transform bg-white border-2 border-orange-300 rounded-full hover:bg-orange-50 hover:scale-105">
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Key Features & Benefits</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover why our H2O Gas Generators are the preferred choice for professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${feature.bgColor} p-4 rounded-xl mb-4 inline-block`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Perfect for Multiple Applications</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our H2O Gas Generators are versatile solutions suitable for various industries and applications,
                providing clean, efficient, and safe gas generation.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl">
                <div className="text-center">
                  <Zap className="w-24 h-24 mx-auto mb-4 text-orange-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Clean Technology</h3>
                  <p className="text-gray-600">Environmentally friendly gas generation from water</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Technical Specifications</h2>
            <p className="text-lg text-gray-600">Detailed specifications of our H2O Gas Generators</p>
          </div>

          <div className="p-8 bg-white shadow-xl rounded-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specifications.map((spec, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                  <dt className="mb-1 text-sm font-medium text-gray-500">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Operations?</h2>
          <p className="mb-8 text-xl opacity-90">
            Contact us today to learn more about our H2O Gas Generators and how they can benefit your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-orange-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-105">
              <span>Schedule Demo</span>
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
