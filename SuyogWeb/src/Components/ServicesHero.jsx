"use client"

import { useState, useEffect } from "react"
import { Zap, Shield, Cog, ArrowRight, Star, CheckCircle, Award } from "lucide-react"

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-rotate featured services
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % featuredServices.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const featuredServices = [
    {
      icon: Zap,
      title: "H2O Gas Generators",
      description: "Revolutionary water electrolysis technology",
      gradient: "from-sky-400 to-teal-400",
      stats: "50% Cost Savings",
    },
    {
      icon: Shield,
      title: "Stabilizers & UPS",
      description: "Complete power protection solutions",
      gradient: "from-teal-400 to-emerald-400",
      stats: "100% Reliability",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored manufacturing excellence",
      gradient: "from-sky-400 to-indigo-400",
      stats: "15+ Years Experience",
    },
  ]

  const achievements = [
    { number: "1000+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Star },
    { number: "24/7", label: "Support Available", icon: CheckCircle },
  ]

  return (
    <section className="relative px-4 py-16 overflow-hidden text-gray-800 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 mb-4 space-x-2 bg-white border rounded-full border-sky-100">
              <Star className="w-3 h-3 text-sky-500" />
              <span className="text-xs font-medium text-sky-700">Industry Leading Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              <span className="block mb-1 text-gray-800">Innovative</span>
              <span className="block text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">
                Solutions
              </span>
              <span className="block text-gray-800">for Every Need</span>
            </h1>

            {/* Description */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <p className="max-w-2xl mx-auto mb-6 text-base leading-relaxed text-gray-600 lg:mx-0">
                From cutting-edge H2O Gas Generators to comprehensive power solutions, we deliver excellence that
                transforms your operations and drives success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <button className="inline-flex items-center px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 transform rounded-full shadow-md group bg-gradient-to-r from-sky-500 to-teal-500 hover:shadow-lg hover:scale-105">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center px-6 py-3 space-x-2 font-medium transition-all duration-300 transform border rounded-full group text-sky-600 border-sky-200 hover:bg-sky-50 hover:scale-105">
                <span>Contact Us</span>
              </button>
            </div>

            {/* Achievements */}
            <div
              className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center cursor-pointer group">
                  <div className="flex justify-center mb-1">
                    <achievement.icon className="w-5 h-5 transition-transform duration-300 text-sky-500 group-hover:scale-110" />
                  </div>
                  <div className="mb-1 text-lg font-bold text-gray-800 transition-colors duration-300 sm:text-xl lg:text-2xl group-hover:text-sky-600">
                    {achievement.number}
                  </div>
                  <div className="text-xs text-gray-500 sm:text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Featured Services Carousel */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Service Card */}
              <div className="relative overflow-hidden h-80 sm:h-96 rounded-2xl">
                {featuredServices.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      currentService === index
                        ? "opacity-100 translate-y-0"
                        : index < currentService
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                    }`}
                  >
                    <div
                      className={`relative h-full p-6 bg-gradient-to-br ${service.gradient} overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-white rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10 flex flex-col justify-between h-full text-white">
                        {/* Service Icon */}
                        <div className="flex items-start justify-between">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">{service.stats}</div>
                            <div className="text-xs opacity-80">Proven Results</div>
                          </div>
                        </div>

                        {/* Service Content - Centered with more padding */}
                        <div className="py-4 text-center">
                          <h3 className="mb-3 text-xl font-bold sm:text-2xl">{service.title}</h3>
                          <p className="px-2 text-sm leading-relaxed sm:text-base opacity-90">{service.description}</p>
                        </div>

                        {/* Empty space for better balance */}
                        <div className="h-4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {featuredServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentService ? "bg-sky-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
