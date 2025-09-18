"use client"

import { useState, useEffect } from "react"
import { Target, Heart, Leaf, Sparkles, Star } from "lucide-react"
import mission from "../assets/Mission1.png"

export default function OurMission() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPillar, setHoveredPillar] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("our-mission")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const missionPillars = [
    {
      icon: Target,
      title: "Industry Standard",
      description: "Setting benchmarks in customer service",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Exceptional value & reliability services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Protecting future generations",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section
      id="our-mission"
      className="relative px-4 py-12 overflow-hidden border-t border-gray-200 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-purple-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-blue-200/20 animate-float-delayed"></div>
        <Sparkles className="absolute w-6 h-6 top-32 right-32 text-purple-300/40 animate-pulse" />
        <Star className="absolute w-5 h-5 bottom-32 left-32 text-blue-300/40 animate-twinkle" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl -rotate-3 group-hover:-rotate-6"></div>
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl rotate-3 group-hover:rotate-6"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={mission || "/placeholder.svg"}
                  alt="Business handshake representing partnership and trust"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent group-hover:opacity-100"></div>

                {/* Floating Badge */}
                <div className="absolute px-3 py-1 transition-all duration-500 transform -translate-y-2 rounded-full shadow-lg opacity-0 top-4 left-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-purple-900">Partnership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 bg-clip-text sm:text-4xl lg:text-5xl">
                Our Mission
              </h2>
              <div className="relative">
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 md:w-28"></div>
                <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse md:w-28"></div>
              </div>
            </div>

            {/* Mission Content */}
            <div className="mb-8 space-y-6">
              <div
                className={`transform transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  At the heart of our mission is a commitment to{" "}
                  <span className="font-semibold text-purple-900">
                    setting the industry standard in customer service
                  </span>{" "}
                  by delivering exceptional value and unwavering reliability. We aim to revolutionize the{" "}
                  <span className="font-semibold text-blue-900">jewellery and metal industries</span> through continuous
                  innovation, offering cutting-edge, high-quality solutions like our{" "}
                  <span className="font-semibold text-cyan-900">H2O Gas Generator</span>.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  Our goal is to become the{" "}
                  <span className="font-semibold text-purple-900">preferred supplier of H2O Gas Generators</span> by
                  upholding excellence in product quality, customer satisfaction, and responsive service.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-900 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  We are equally dedicated to promoting{" "}
                  <span className="font-semibold text-green-900">
                    sustainable and responsible manufacturing practices
                  </span>{" "}
                  that create lasting value for our customers, empower our employees, and protect the environment for
                  future generations.
                </p>
              </div>
            </div>

            {/* Mission Pillars */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredPillar(index)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div className="relative p-4 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center`}
                    >
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-900">{pillar.title}</h4>
                    <p className="text-xs text-gray-600">{pillar.description}</p>

                    {hoveredPillar === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-xl animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
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
