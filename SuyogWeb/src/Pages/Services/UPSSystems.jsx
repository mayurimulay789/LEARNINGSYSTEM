"use client"

import { useState, useEffect } from "react"
import { Cog, Battery, Monitor, Zap, CheckCircle, Star, ArrowRight, Sparkles, Clock } from "lucide-react"

export default function UPSSystems() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Battery,
      title: "Extended Backup",
      description: "Long-lasting battery backup for uninterrupted power",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Monitor,
      title: "LCD Monitoring",
      description: "Real-time status display and battery health monitoring",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Zap,
      title: "Pure Sine Wave",
      description: "Clean power output for sensitive electronic equipment",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Clock,
      title: "Auto Restart",
      description: "Automatic restart after power restoration",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const upsTypes = [
    {
      name: "Online UPS",
      description: "Continuous power conditioning with zero transfer time",
      capacity: "1KVA - 200KVA",
      features: ["Zero Transfer Time", "Pure Sine Wave", "High Efficiency", "Hot Swappable Batteries"],
      applications: ["Data Centers", "Servers", "Critical Systems"],
    },
    {
      name: "Offline UPS",
      description: "Cost-effective backup power for basic applications",
      capacity: "600VA - 10KVA",
      features: ["Automatic Voltage Regulation", "Surge Protection", "Battery Management", "Compact Design"],
      applications: ["Home Computers", "Small Offices", "Personal Electronics"],
    },
    {
      name: "Line Interactive",
      description: "Advanced voltage regulation with battery backup",
      capacity: "500VA - 5KVA",
      features: ["Voltage Regulation", "Boost/Buck Function", "LCD Display", "USB Monitoring"],
      applications: ["Workstations", "Network Equipment", "Small Servers"],
    },
  ]

  const applications = [
    "Computer Systems",
    "Network Equipment",
    "Medical Devices",
    "Security Systems",
    "Telecommunication",
    "Industrial Controls",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-blue-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-cyan-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-blue-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-cyan-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
              <Cog className="w-5 h-5" />
              <span className="font-medium">Uninterrupted Power</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text">
              UPS Systems
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Reliable uninterruptible power supply systems for continuous operation. Protect your critical equipment
              from power outages and fluctuations.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-xl hover:scale-105">
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-blue-600 transition-all duration-300 transform bg-white border-2 border-blue-300 rounded-full hover:bg-blue-50 hover:scale-105">
                <span>Product Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Advanced UPS Features</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our UPS systems provide comprehensive power protection with advanced monitoring capabilities
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

      {/* UPS Types Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">UPS System Types</h2>
            <p className="text-lg text-gray-600">Choose the right UPS technology for your specific needs</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {upsTypes.map((ups, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 transform border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl hover:scale-105"
              >
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{ups.name}</h3>
                <p className="mb-2 font-semibold text-blue-600">{ups.capacity}</p>
                <p className="mb-6 leading-relaxed text-gray-600">{ups.description}</p>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {ups.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {ups.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Critical Power Protection</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our UPS systems provide reliable backup power for mission-critical applications, ensuring business
                continuity and data protection.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                <div className="text-center">
                  <Battery className="w-24 h-24 mx-auto mb-4 text-blue-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Reliable Backup</h3>
                  <p className="text-gray-600">Continuous power for critical operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ensure Continuous Power Supply</h2>
          <p className="mb-8 text-xl opacity-90">
            Don't let power outages disrupt your operations. Get a reliable UPS solution tailored to your needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-blue-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-blue-600 hover:scale-105">
              <span>Calculate Backup Time</span>
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
