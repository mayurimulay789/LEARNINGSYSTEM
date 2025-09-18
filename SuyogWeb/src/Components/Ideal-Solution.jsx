"use client"

import { useState, useEffect } from "react"
import { Beaker, Zap, Shield, Wrench, CheckCircle, Sparkles, Star } from "lucide-react"
import ideal from "../assets/image3.png"

export default function IdealSolution() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("ideal-solution")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const solutionFeatures = [
    {
      icon: Beaker,
      title: "Electrolysis Process",
      description: "Water-based gas generation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Zero Risk",
      description: "No gas storage, no explosions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "On-demand gas production",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wrench,
      title: "Multi-Purpose",
      description: "Soldering, brazing, cutting, heating",
      color: "from-orange-500 to-red-500",
    },
  ]

  const operations = ["Soldering", "Brazing", "Cutting", "Heating", "Melting", "Precision Work"]

  return (
    <section
      id="ideal-solution"
      className="relative px-4 py-12 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 right-20 bg-purple-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 left-20 bg-pink-200/20 animate-float-delayed"></div>
        <Sparkles className="absolute w-6 h-6 top-32 left-32 text-purple-300/40 animate-pulse" />
        <Star className="absolute w-5 h-5 bottom-32 right-32 text-pink-300/40 animate-twinkle" />
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
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl rotate-3 group-hover:rotate-6"></div>
              <div className="absolute inset-0 transition-transform duration-500 transform bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-2xl -rotate-3 group-hover:-rotate-6"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src={ideal || "/placeholder.svg"}
                  alt="H2O chemical formula on chalkboard representing our water-based gas generation technology"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent group-hover:opacity-100"></div>

                {/* Floating Badges */}
                <div className="absolute px-3 py-1 transition-all duration-500 transform -translate-y-2 rounded-full shadow-lg opacity-0 top-4 left-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-purple-900">H2O Technology</span>
                </div>
                <div className="absolute px-3 py-1 transition-all duration-500 delay-200 transform translate-y-2 rounded-full shadow-lg opacity-0 bottom-4 right-4 bg-white/90 backdrop-blur-sm group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold text-pink-900">Eco-Friendly</span>
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
              <h2 className="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 bg-clip-text sm:text-4xl lg:text-5xl">
                The Ideal Solution
              </h2>
              <h3 className="mb-4 text-xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text sm:text-2xl lg:text-3xl">
                for Industrial Operations
              </h3>
              <div className="relative">
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 md:w-28"></div>
                <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 animate-pulse md:w-28"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8 space-y-6">
              <div
                className={`transform transition-all duration-700 delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  We wish to introduce ourselves as manufacturers of{" "}
                  <span className="font-semibold text-purple-900">H2O Gas Generator</span>. Our generator is an ideal
                  solution for <span className="font-semibold text-pink-900">soldering, brazing, cutting, heating</span>
                  , and more. We are aware of the risk and danger in industries due to storage of fuel gas.
                </p>
              </div>

              <div
                className={`transform transition-all duration-700 delay-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                  All operations like soldering, brazing heating, melting, and cutting that are carried out by fuel gas
                  can be made very easily and systematically by our gas generator{" "}
                  <span className="font-semibold text-red-900">without any risk of explosion or accident</span> because
                  there is no storage of gas in our machine. Our gas is generated from the process of{" "}
                  <span className="font-semibold text-blue-900">electrolysis of water</span>.
                </p>
              </div>
            </div>

            {/* Operations Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 transition-all duration-1000 delay-900 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              {operations.map((operation, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 space-x-2 transition-all duration-300 transform rounded-lg shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-md hover:scale-105"
                >
                  <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{operation}</span>
                </div>
              ))}
            </div>

            {/* Solution Features */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-1000 delay-1100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              {solutionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="relative p-4 text-center transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-1 text-xs font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>

                    {hoveredFeature === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl animate-pulse"></div>
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
