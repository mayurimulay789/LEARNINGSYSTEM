"use client"

import { useState, useEffect } from "react"
import { Headphones, Clock, Users, Phone, CheckCircle, Star, ArrowRight, Sparkles, MessageCircle } from "lucide-react"

export default function TechnicalSupport() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock technical support for critical issues",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Certified professionals with extensive experience",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Remote Assistance",
      description: "Quick troubleshooting via phone and remote access",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "Quick Response",
      description: "Fast response times for all support requests",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const supportPlans = [
    {
      name: "Basic Support",
      price: "Free",
      description: "Essential support for all our customers",
      features: ["Email support", "Product documentation", "Basic troubleshooting", "Warranty coverage"],
      responseTime: "48 hours",
      availability: "Business hours",
    },
    {
      name: "Premium Support",
      price: "₹5,000/year",
      description: "Enhanced support for business customers",
      features: ["Priority phone support", "Remote diagnostics", "Preventive maintenance", "Extended warranty"],
      responseTime: "4 hours",
      availability: "24/7",
    },
    {
      name: "Enterprise Support",
      price: "Custom",
      description: "Comprehensive support for large organizations",
      features: ["Dedicated support manager", "On-site service", "Custom SLA", "Training programs"],
      responseTime: "1 hour",
      availability: "24/7 Priority",
    },
  ]

  const supportChannels = [
    {
      channel: "Phone Support",
      contact: "+91 9511631824",
      hours: "24/7 for Premium & Enterprise",
      description: "Direct phone support for immediate assistance",
    },
    {
      channel: "Email Support",
      contact: "sachin.hiwale1983@gmail.com",
      hours: "24/7 response monitoring",
      description: "Detailed support via email with documentation",
    },
    {
      channel: "Remote Access",
      contact: "Secure connection setup",
      hours: "By appointment",
      description: "Direct system access for complex troubleshooting",
    },
    {
      channel: "On-site Service",
      contact: "Service team dispatch",
      hours: "Business hours + Emergency",
      description: "Physical presence for installation and repairs",
    },
  ]

  const commonIssues = [
    "Installation guidance",
    "Performance optimization",
    "Troubleshooting errors",
    "Maintenance procedures",
    "Spare parts ordering",
    "Software updates",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 overflow-hidden md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-pink-200/30 animate-float"></div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-rose-200/30 animate-float-delayed"></div>
          <Sparkles className="absolute w-6 h-6 top-32 right-32 text-pink-400/50 animate-pulse" />
          <Star className="absolute w-5 h-5 delay-1000 bottom-32 left-32 text-rose-400/50 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-600">
              <Headphones className="w-5 h-5" />
              <span className="font-medium">Expert Assistance</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text">
              Technical Support
            </h1>

            <p className="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
              24/7 expert technical support to keep your equipment running smoothly. Our certified technicians are here
              to help with installation, maintenance, and troubleshooting.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-rose-600 hover:shadow-xl hover:scale-105">
                <span>Get Support Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-pink-600 transition-all duration-300 transform bg-white border-2 border-pink-300 rounded-full hover:bg-pink-50 hover:scale-105">
                <span>Support Plans</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Comprehensive Support Services</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Professional technical support designed to maximize your equipment uptime and performance
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportFeatures.map((feature, index) => (
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

      {/* Support Plans Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Support Plans</h2>
            <p className="text-lg text-gray-600">Choose the support level that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {supportPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === 1
                    ? "border-pink-300 bg-gradient-to-br from-pink-50 to-rose-50 shadow-xl"
                    : "border-gray-200 bg-white hover:shadow-xl"
                }`}
              >
                {index === 1 && (
                  <div className="mb-4 text-center">
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-600">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mb-2 text-3xl font-bold text-pink-600">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Response Time:</span>
                    <span className="font-semibold text-gray-900">{plan.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Availability:</span>
                    <span className="font-semibold text-gray-900">{plan.availability}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-pink-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    index === 1
                      ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.price === "Free" ? "Included" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Multiple Support Channels</h2>
            <p className="text-lg text-gray-600">Reach us through your preferred communication method</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:scale-105"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">{channel.channel}</h3>
                <p className="mb-2 font-semibold text-pink-600">{channel.contact}</p>
                <p className="mb-3 text-sm text-gray-500">{channel.hours}</p>
                <p className="leading-relaxed text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="px-4 py-16 bg-white md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">We're Here to Help</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our technical support team handles a wide range of issues to keep your equipment running at peak
                performance. No issue is too small or too complex.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-pink-500" />
                    <span className="font-medium text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center p-8 aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl">
                <div className="text-center">
                  <Headphones className="w-24 h-24 mx-auto mb-4 text-pink-500" />
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">Expert Support</h3>
                  <p className="text-gray-600">Professional assistance when you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-white md:py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Need Technical Support?</h2>
          <p className="mb-8 text-xl opacity-90">
            Our expert technicians are standing by to help you resolve any issues quickly and efficiently.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-pink-600 transition-all duration-300 transform bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105">
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-pink-600 hover:scale-105">
              <span>Call Now: +91 9511631824</span>
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
