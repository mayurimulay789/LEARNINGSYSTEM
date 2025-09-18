"use client"

import { useState, useEffect } from "react"
import { Quote, Star, Sparkles, Heart, Award, Zap } from "lucide-react"

export default function ServicesPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("our-valuable-services")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate quotes
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const quotes = [
    {
      text: "Excellence is not a skill, it's an attitude. We deliver services that exceed expectations.",
      author: "Our Philosophy",
      icon: Award,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      text: "Innovation distinguishes between a leader and a follower. We lead with cutting-edge solutions.",
      author: "Our Vision",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      text: "Quality is not an act, it is a habit. Every service we provide reflects our commitment to excellence.",
      author: "Our Promise",
      icon: Star,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      text: "Customer satisfaction is our highest priority. We build lasting relationships through exceptional service.",
      author: "Our Commitment",
      icon: Heart,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const values = [
    { icon: Award, title: "Excellence", description: "Uncompromising quality in every service" },
    { icon: Zap, title: "Innovation", description: "Cutting-edge solutions for modern challenges" },
    { icon: Star, title: "Reliability", description: "Consistent performance you can trust" },
    { icon: Heart, title: "Care", description: "Dedicated support and guide for every client" },
  ]

  return (
    <section
      id="our-valuable-services"
      className="relative px-4 py-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-blue-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-purple-200/20 animate-float-delayed"></div>
        <Sparkles className="absolute w-6 h-6 top-32 right-32 text-blue-300/40 animate-pulse" />
        <Star className="absolute w-5 h-5 bottom-32 left-32 text-purple-300/40 animate-twinkle" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text sm:text-4xl lg:text-5xl">
            Our Valuable Services
          </h1>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-28"></div>
              <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse md:w-28"></div>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-base text-gray-600 sm:text-lg lg:text-xl">
            Delivering exceptional solutions with unwavering commitment to quality, innovation, and customer
            satisfaction
          </p>
        </div>

        {/* Quote Carousel */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-48 overflow-hidden sm:h-40 lg:h-36">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    currentQuote === index
                      ? "opacity-100 translate-y-0"
                      : index < currentQuote
                        ? "opacity-0 -translate-y-full"
                        : "opacity-0 translate-y-full"
                  }`}
                >
                  <div className={`relative p-8 bg-gradient-to-r ${quote.gradient} text-white rounded-2xl shadow-2xl`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 bg-white rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-4">
                        <Quote className="w-8 h-8 text-white/80" />
                      </div>

                      {/* Quote Text */}
                      <blockquote className="mb-6 text-center">
                        <p className="text-lg italic font-medium leading-relaxed sm:text-xl lg:text-2xl">
                          "{quote.text}"
                        </p>
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-3">
                        <quote.icon className="w-6 h-6 text-white" />
                        <cite className="text-base not-italic font-semibold sm:text-lg">— {quote.author}</cite>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote ? "bg-purple-600 scale-125" : "bg-purple-200 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:scale-105">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 transition-transform duration-300 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-2xl group-hover:opacity-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-8 py-4 space-x-3 text-white transition-all duration-300 transform rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105 group">
            <span className="text-base font-medium">Discover Our Complete Service Portfolio</span>
            <Star className="w-5 h-5 group-hover:animate-spin" />
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
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
