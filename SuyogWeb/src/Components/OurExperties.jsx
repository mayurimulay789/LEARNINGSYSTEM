"use client"

import { useState, useEffect } from "react"
import { Zap, Shield, Cog, Wrench, CheckCircle, Star } from "lucide-react"
import exp from "../assets/Image4.png"

export default function OurExpertise() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("our-expertise")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate features
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const features = [
    {
      icon: Zap,
      title: "Electrolysis Technology",
      description: "Advanced water electrolysis process",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "No gas storage, zero explosion risk",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored pressure specifications",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Complete Service",
      description: "Manufacturing, service & spare parts",
      color: "from-purple-400 to-pink-500",
    },
  ]

  

  return (
    <section
      id="our-expertise"
      className="relative px-4 py-12 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 rounded-full top-10 right-10 bg-blue-200/20 animate-float"></div>
        <div className="absolute w-32 h-32 rounded-full bottom-10 left-10 bg-purple-200/20 animate-float-delayed"></div>
        <Star className="absolute w-6 h-6 top-1/4 left-1/4 text-yellow-300/40 animate-twinkle" />
        <Star className="absolute w-4 h-4 delay-1000 bottom-1/3 right-1/3 text-blue-300/40 animate-twinkle" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text sm:text-4xl lg:text-5xl">
                Our Expertise
              </h2>
              <div className="relative">
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-28"></div>
                <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse md:w-28"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8 space-y-6">
              <div
                className={`transform transition-all duration-700 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  All operations like{" "}
                  <span className="font-semibold text-blue-900">soldering, brazing, heating, melting, and cutting</span>{" "}
                  that are carried out by fuel gas can be made very easily and systematically by our gas generator{" "}
                  <span className="font-semibold text-purple-900">without any risk of explosion or accident</span>{" "}
                  because there is no storage of gas in our machine.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  Our gas is generated from the process of{" "}
                  <span className="font-semibold text-pink-900">electrolysis of water</span>. We manufacture H2O gas
                  generators as per customer demand and customize gas pressure max to max on customer demand.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  We also manufacture <span className="font-semibold text-blue-900">stabilizers and UPS systems</span>,
                  both online and offline. We provide service and spare parts for all our products.
                </p>
              </div>
            </div>

            

            {/* Features Showcase */}
            <div
              className={`transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`relative p-4 text-center bg-white rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                      activeFeature === index ? "ring-2 ring-blue-400 shadow-xl" : ""
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-1 text-xs font-semibold text-gray-900 sm:text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>

                    {activeFeature === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`order-first lg:order-last transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl -rotate-3 group-hover:-rotate-6"></div>
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl rotate-3 group-hover:rotate-6"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={exp || "/placeholder.svg"}
                  alt="Advanced technology and manufacturing equipment"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:opacity-100"></div>

                {/* Floating Badges */}
                <div className="absolute px-3 py-1 transition-all duration-500 transform -translate-y-2 rounded-full shadow-lg opacity-0 top-4 left-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-green-600">Eco-Friendly</span>
                </div>
                <div className="absolute px-3 py-1 transition-all duration-500 delay-200 transform translate-y-2 rounded-full shadow-lg opacity-0 bottom-4 right-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-blue-600">Advanced Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
