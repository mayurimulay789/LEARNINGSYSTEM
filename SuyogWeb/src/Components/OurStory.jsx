"use client"

import { useState, useEffect } from "react"
import { Sparkles, Award, Users, Clock } from "lucide-react"
import img from "../assets/Image 1.png"

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("our-story")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    { icon: Clock, number: "15+", label: "Years Experience", color: "text-blue-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "text-purple-600" },
    { icon: Award, number: "100%", label: "Quality Assured", color: "text-pink-600" },
  ]

  return (
    <section
      id="our-story"
      className="relative px-4 overflow-hidden py-14 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-blue-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 right-10 bg-purple-200/20 animate-float-delayed"></div>
        <Sparkles className="absolute w-6 h-6 top-32 right-20 text-pink-300/40 animate-pulse" />
        <Sparkles className="absolute w-4 h-4 delay-1000 bottom-40 left-20 text-blue-300/40 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl rotate-3 group-hover:rotate-6"></div>
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl -rotate-3 group-hover:-rotate-6"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={img || "/placeholder.svg"}
                  alt="Hands holding globe representing our global reach"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:opacity-100"></div>

                {/* Floating Badge */}
                <div className="absolute px-3 py-1 transition-all duration-500 transform translate-y-2 rounded-full shadow-lg opacity-0 top-4 right-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-blue-900">15+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Header */}
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text sm:text-4xl lg:text-5xl">
                Our Story
              </h2>
              <div className="relative">
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-28"></div>
                <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse md:w-28"></div>
              </div>
            </div>

            {/* Story Content */}
            <div className="mb-8 space-y-6">
              <div
                className={`transform transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  <span className="font-semibold text-blue-900">Suyog Techtronics</span> has been working in the
                  manufacturing industry for over <span className="font-semibold text-purple-900">15 years</span>. We
                  wish to introduce ourselves as manufacturers of{" "}
                  <span className="font-semibold text-pink-900">H2O Gas Generator</span>. Our generator is an ideal
                  solution for soldering, brazing, cutting, heating, etc.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  We are aware of the risk and danger in industries due to storage of fuel gas, and the day-by-day
                  increase in the cost of gas is an added worry. We have reputed customers on our list like{" "}
                  <span className="font-semibold text-blue-900">
                    Titan, Crompton Greaves, Godrej, Ramdev Motors, TBZ, Laxmi Motors, Tirupati Stamping
                  </span>{" "}
                  etc.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transform transition-all duration-700 delay-${
                    900 + index * 200
                  } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="relative p-4 text-center transition-all duration-300 transform border border-gray-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105">
                    <div className="flex justify-center mb-2">
                      <stat.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} transition-transform duration-300 ${
                          hoveredStat === index ? "scale-125" : ""
                        }`}
                      />
                    </div>
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                    <div className="text-xs font-medium text-gray-600 sm:text-sm">{stat.label}</div>

                    {/* Hover Effect */}
                    {hoveredStat === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl animate-pulse"></div>
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
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
