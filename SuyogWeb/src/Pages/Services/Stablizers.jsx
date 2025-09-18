"use client"

import { useState, useEffect } from "react"
import { Shield, Zap, Monitor, Settings, CheckCircle, Star, ArrowRight, Sparkles } from "lucide-react"

export default function Stabilizers() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Voltage Protection",
      description: "Automatic voltage regulation and surge protection",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Monitor,
      title: "Digital Display",
      description: "Real-time voltage monitoring and status indicators",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Wide Input Range",
      description: "Handles voltage fluctuations from 140V to 280V",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Settings,
      title: "Auto Cut-off",
      description: "Intelligent protection against over/under voltage",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const applications = [
    "Air Conditioners",
    "Refrigerators",
    "Washing Machines",
    "Television Sets",
    "Computer Systems",
    "Industrial Equipment",
  ]

  const models = [
    {
      name: "Home Series",
      capacity: "2KVA - 10KVA",
      features: ["Single Phase", "Digital Display", "Compact Design"],
      price: "Starting from ₹8,000",
    },
    {
      name: "Commercial Series",
      capacity: "15KVA - 50KVA",
      features: ["Three Phase", "Industrial Grade", "Remote Monitoring"],
      price: "Starting from ₹25,000",
    },
    {
      name: "Industrial Series",
      capacity: "75KVA - 500KVA",
      features: ["Heavy Duty", "Custom Solutions", "24/7 Support"],
      price: "Custom Pricing",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-green-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-emerald-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-green-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-emerald-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Voltage Protection</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text">
              Voltage Stabilizers
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Protect your valuable equipment with our advanced voltage stabilizers. Reliable power conditioning for
              homes, offices, and industrial applications.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-xl hover:scale-105">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-green-600 transition-all duration-300 transform bg-white border-2 border-green-300 rounded-full hover:bg-green-50 hover:scale-105">
                <span>View Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Advanced Protection Features</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our stabilizers offer comprehensive protection against voltage fluctuations and power surges
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

      {/* Models Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Product Range</h2>
            <p className="text-lg text-gray-600">Choose from our comprehensive range of voltage stabilizers</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {models.map((model, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 transform border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl hover:scale-105"
              >
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{model.name}</h3>
                <p className="mb-4 font-semibold text-green-600">{model.capacity}</p>

                <ul className="mb-6 space-y-2">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 text-xl font-bold text-green-600">{model.price}</div>

                <button className="w-full py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Suitable for All Applications</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our voltage stabilizers are designed to protect a wide range of electrical equipment from voltage
                fluctuations and ensure optimal performance.
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
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
                <div className="text-center">
                  <Shield className="w-24 h-24 mx-auto mb-4 text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Complete Protection</h3>
                  <p className="text-gray-600">Safeguard your equipment from power fluctuations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Protect Your Equipment Today</h2>
          <p className="mb-8 text-xl opacity-90">
            Don't let voltage fluctuations damage your valuable equipment. Get a custom stabilizer solution today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-green-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-green-600 hover:scale-105">
              <span>Request Quote</span>
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
