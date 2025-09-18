"use client"

import { useState, useEffect } from "react"
import { Wrench, Cog, Target, Lightbulb, CheckCircle, Star, ArrowRight, Sparkles, Settings } from "lucide-react"

export default function CustomSolutions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const capabilities = [
    {
      icon: Target,
      title: "Custom Pressure Specs",
      description: "Tailored gas pressure specifications to meet your exact requirements",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Cog,
      title: "Bespoke Designs",
      description: "Unique equipment designs for specialized industrial applications",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Cutting-edge solutions for complex manufacturing challenges",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Settings,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all custom products",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding your specific requirements and challenges",
    },
    {
      step: "02",
      title: "Design",
      description: "Creating custom solutions tailored to your needs",
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Building and testing prototypes for validation",
    },
    {
      step: "04",
      title: "Manufacturing",
      description: "Full-scale production with quality assurance",
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance and technical support",
    },
  ]

  const industries = [
    "Automotive Manufacturing",
    "Aerospace Industry",
    "Medical Device Manufacturing",
    "Electronics Assembly",
    "Jewelry & Precious Metals",
    "Research & Development",
  ]

  const customProducts = [
    {
      name: "High-Pressure Gas Generators",
      description: "Custom pressure specifications up to 15 bar for specialized applications",
      features: ["Variable pressure control", "Safety interlocks", "Remote monitoring"],
    },
    {
      name: "Multi-Station Systems",
      description: "Centralized gas generation for multiple workstations",
      features: ["Central distribution", "Individual controls", "Usage monitoring"],
    },
    {
      name: "Portable Solutions",
      description: "Mobile gas generation units for field applications",
      features: ["Battery powered", "Compact design", "Rugged construction"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-purple-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-pink-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-purple-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-pink-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
              <Wrench className="w-5 h-5" />
              <span className="font-medium">Tailored Solutions</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
              Custom Solutions
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              Specialized manufacturing services designed to meet your unique requirements. From concept to completion,
              we deliver innovative solutions that exceed expectations.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-xl hover:scale-105">
                <span>Start Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-purple-600 transition-all duration-300 transform bg-white border-2 border-purple-300 rounded-full hover:bg-purple-50 hover:scale-105">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Custom Capabilities</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Leveraging 15+ years of experience to deliver innovative custom solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`${capability.bgColor} p-4 rounded-xl mb-4 inline-block`}>
                  <capability.icon className={`w-6 h-6 ${capability.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Development Process</h2>
            <p className="text-lg text-gray-600">From concept to completion in 5 structured phases</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {process.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
                    {phase.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Custom Product Examples</h2>
            <p className="text-lg text-gray-600">Innovative solutions we've developed for our clients</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {customProducts.map((product, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:scale-105"
              >
                <h3 className="mb-4 text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{product.description}</p>

                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Industries We Serve</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our custom solutions span across multiple industries, each with unique requirements and challenges that
                we're equipped to handle.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-purple-500" />
                    <span className="font-medium text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                <div className="text-center">
                  <Wrench className="w-24 h-24 mx-auto mb-4 text-purple-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Custom Engineering</h3>
                  <p className="text-gray-600">Tailored solutions for every industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Build Something Custom?</h2>
          <p className="mb-8 text-xl opacity-90">
            Let's discuss your unique requirements and create a solution that perfectly fits your needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-purple-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Start Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105">
              <span>Request Proposal</span>
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
