"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight, Heart, Award, Sparkles } from "lucide-react"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [animatedCards, setAnimatedCards] = useState(new Set())

  const testimonials = [
    {
      quote:
        "The H2O Gas Generator from Suyog Techtronics has significantly improved our production efficiency while reducing our operational costs. Their customer service is exceptional.",
      author: "Ashok Sharma",
      position: "Production Manager",
      company: "TechCorp Industries",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "We've been using Suyog's gas generators for over 5 years now. The safety features and on-demand gas production have made our workshop much safer and more efficient.",
      author: "Vijay Patnayak",
      position: "Safety Director",
      company: "MetalWorks Ltd",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      quote:
        "The cost savings we've experienced with Suyog's H2O Gas Generator compared to our previous gas supply system has been remarkable. Highly recommended for any manufacturing facility.",
      author: "Girija Deshmukh",
      position: "Operations Head",
      company: "Precision Manufacturing",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("testimonials")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Staggered card animations
  useEffect(() => {
    if (isVisible) {
      testimonials.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCards((prev) => new Set([...prev, index]))
        }, index * 200)
      })
    }
  }, [isVisible, testimonials.length])

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, isVisible, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="testimonials"
      className="relative px-4 py-12 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-purple-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-pink-200/20 animate-float-delayed"></div>
        <Heart className="absolute w-6 h-6 top-32 right-32 text-pink-300/40 animate-pulse" />
        <Award className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-purple-300/40 animate-pulse" />
        <Sparkles className="absolute w-4 h-4 top-1/2 left-1/4 text-blue-300/40 animate-twinkle" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 bg-clip-text sm:text-4xl lg:text-5xl">
            Real Stories, Real Satisfaction
          </h2>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 md:w-28"></div>
              <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 animate-pulse md:w-28"></div>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-base text-gray-600 sm:text-lg">
            Discover what our valued clients say about their experience with Suyog Techtronics
          </p>
        </div>

        {/* Desktop Layout - 3 Cards */}
        <div className="hidden lg:block">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => {
              const isAnimated = animatedCards.has(index)
              const isActive = index === currentTestimonial

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 transform cursor-pointer ${
                    isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } ${isActive ? "scale-105 z-10" : "hover:scale-105"}`}
                  onClick={() => goToTestimonial(index)}
                >
                  <div
                    className={`relative flex flex-col h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                      isActive ? "border-purple-300 shadow-2xl" : "border-transparent"
                    }`}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                    ></div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote
                        className={`w-8 h-8 transition-all duration-300 ${
                          isActive ? "text-purple-400 scale-125" : "text-purple-200 group-hover:text-purple-300"
                        }`}
                      />
                    </div>

                    {/* Rating */}
                    <div className="relative z-10 flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 text-yellow-400 fill-current transition-all duration-300 delay-${
                            i * 100
                          } ${isActive ? "animate-pulse" : ""}`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="relative z-10 flex-1 mb-6 text-base italic leading-relaxed text-gray-700 lg:text-lg">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="relative z-10 flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className={`w-12 h-12 rounded-full mr-4 border-2 transition-all duration-300 ${
                            isActive ? "border-purple-300 scale-110" : "border-purple-200"
                          }`}
                        />
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                        <p className="text-sm text-purple-600">{testimonial.position}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-4 right-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-4">
                    <div className="relative flex flex-col h-full p-6 bg-white border border-purple-100 shadow-lg sm:p-8 rounded-2xl">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-2xl`}
                      ></div>

                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4">
                        <Quote className="w-6 h-6 text-purple-200 sm:w-8 sm:h-8" />
                      </div>

                      {/* Rating */}
                      <div className="relative z-10 flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current sm:w-5 sm:h-5" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="relative z-10 flex-1 mb-6 text-sm italic leading-relaxed text-gray-700 sm:text-base">
                        "{testimonial.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="relative z-10 flex items-center">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-10 h-10 mr-3 border-2 border-purple-200 rounded-full sm:w-12 sm:h-12 sm:mr-4"
                        />
                        <div>
                          <h4 className="text-base font-bold text-gray-900 sm:text-lg">{testimonial.author}</h4>
                          <p className="text-xs text-purple-600 sm:text-sm">{testimonial.position}</p>
                          <p className="text-xs text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="p-3 transition-all duration-300 transform bg-white border border-purple-100 rounded-full shadow-lg hover:shadow-xl hover:scale-110 group"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-purple-600 scale-125" : "bg-purple-200 hover:bg-purple-300"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="p-3 transition-all duration-300 transform bg-white border border-purple-100 rounded-full shadow-lg hover:shadow-xl hover:scale-110 group"
              >
                <ChevronRight className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              isAutoPlaying
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 shadow-md"
            }`}
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
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
