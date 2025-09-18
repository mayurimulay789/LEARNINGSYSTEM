"use client"

import { useState, useEffect } from "react"
import { Sparkles, Star } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-8 text-center bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 md:py-16 lg:py-20 md:px-8 lg:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes with Parallax */}
        <div
          className="absolute w-24 h-24 rounded-full top-20 left-10 bg-blue-200/30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute w-20 h-20 rounded-full bottom-20 right-10 bg-purple-200/30 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        ></div>
        <div
          className="absolute w-16 h-16 rounded-full top-1/2 left-1/4 bg-cyan-200/30 animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div
          className="absolute w-12 h-12 rounded-full top-1/3 right-1/3 bg-pink-200/30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px)`,
          }}
        ></div>

        {/* Sparkle Effects */}
        <Sparkles className="absolute w-5 h-5 top-32 right-32 text-blue-300/50 animate-pulse" />
        <Sparkles className="absolute w-4 h-4 delay-1000 bottom-40 left-20 text-purple-300/50 animate-pulse" />
        <Star className="absolute w-4 h-4 top-1/3 right-1/4 text-cyan-300/50 animate-twinkle" />
        <Star className="absolute w-3 h-3 delay-500 bottom-1/3 left-1/3 text-pink-300/50 animate-twinkle" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 delay-1000 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <h1 className="mb-4 text-2xl font-bold leading-tight text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text md:text-4xl lg:text-5xl xl:text-6xl md:mb-6 animate-fade-in">
            Welcome to{" Suyog Techtronics"}
            <span className="relative inline-block">
              <span className="relative z-10">Suyog Techtronics</span>
              <div className="absolute bottom-0 left-0 w-full h-2 -skew-x-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-pulse md:h-3"></div>
            </span>
          </h1>

          {/* First Description */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="max-w-4xl px-2 mx-auto mb-6 text-sm leading-relaxed text-blue-800 md:text-lg lg:text-xl md:mb-8 md:px-4">
              Industry leader in manufacturing innovative{" "}
              <span className="relative font-semibold text-blue-900">
                H2O Gas Generators
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 animate-pulse"></div>
              </span>
              ,{" "}
              <span className="relative font-semibold text-purple-900">
                stabilizers
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 animate-pulse delay-300"></div>
              </span>
              , and{" "}
              <span className="relative font-semibold text-indigo-900">
                UPS solutions
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 animate-pulse delay-600"></div>
              </span>
              .
            </p>
          </div>

          {/* Second Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="max-w-3xl px-2 mx-auto text-xs leading-relaxed text-blue-800 md:text-base lg:text-lg md:px-4">
              A pioneer in innovative manufacturing solutions with over{" "}
              <span className="text-sm font-bold text-blue-900 md:text-lg lg:text-xl">15 years</span> of industry
              experience.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(90deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}
