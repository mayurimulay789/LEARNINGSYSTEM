"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Zap, Shield, Cog, Wrench, Headphones, Settings } from "lucide-react"
import logo from "../assets/arrc.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setServicesOpen(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const services = [
    {
      icon: Zap,
      title: "H2O Gas Generators",
      description: "Advanced water electrolysis technology",
      path: "/services/gas-generators",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Shield,
      title: "Stabilizers",
      description: "Voltage regulation solutions",
      path: "/services/stabilizers",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Cog,
      title: "UPS Systems",
      description: "Uninterruptible power supply",
      path: "/services/ups-systems",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored manufacturing services",
      path: "/services/custom-solutions",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 expert assistance",
      path: "/services/support",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Comprehensive service packages",
      path: "/services/maintenance",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-blue-100/50" : "bg-white shadow-lg"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <Link
              to="/"
              className="flex items-center space-x-3 text-xl font-bold text-blue-600 transition-all duration-500 sm:text-2xl lg:text-3xl hover:scale-105 group"
            >
              <div className="relative">
                {/* Logo Container with Animations */}
                <div className="relative w-10 h-10 transition-transform duration-500 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:scale-110">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt="Suyog Techtronics Logo"
                    className="object-contain w-full h-full transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-xl"
                  />

                  {/* Rotating Ring Animation */}
                  <div className="absolute inset-0 transition-opacity duration-500 border-2 rounded-full opacity-0 border-blue-300/30 animate-spin-slow group-hover:opacity-100"></div>
                  <div className="absolute transition-opacity duration-500 border rounded-full opacity-0 inset-1 border-purple-300/30 animate-spin-reverse group-hover:opacity-100"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 transition-opacity duration-500 scale-150 rounded-full opacity-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg group-hover:opacity-100"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-transparent transition-all duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-pink-700">
                  Suyog Techtronics
                </span>
                <span className="hidden text-xs font-normal transition-colors duration-300 text-blue-500/70 sm:block group-hover:text-blue-600">
                  Innovation in Manufacturing
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-2 md:flex lg:space-x-6">
            {/* Regular Menu Items */}
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-200"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                } group`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-20"></div>
                )}
                {!isActive(item.path) && (
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-10"></div>
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 group ${
                  servicesOpen
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-200"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />

                {!servicesOpen && (
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-10"></div>
                )}
              </button>

              {/* Services Dropdown Menu */}
              <div
                className={`absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100/50 transition-all duration-500 transform origin-top ${
                  servicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`group p-3 rounded-xl transition-all duration-300 hover:scale-105 ${service.bgColor} hover:shadow-lg border border-transparent hover:border-white/50`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`p-2 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            <service.icon className={`w-4 h-4 ${service.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-900">
                              {service.title}
                            </h4>
                            <p className="mt-1 text-xs leading-tight text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* View All Services */}
                  <div className="pt-3 mt-4 border-t border-blue-100">
                    <Link
                      to="/services"
                      className="flex items-center justify-center w-full py-2 space-x-2 text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700 group"
                    >
                      <span>View All Services</span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive("/contact")
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-200"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              } group`}
            >
              <span className="relative z-10">Contact</span>
              {isActive("/contact") && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-20"></div>
              )}
              {!isActive("/contact") && (
                <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-10"></div>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none ${
                isOpen
                  ? "text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-3 border-t border-blue-100 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-b-2xl">
            {/* Mobile Menu Items */}
            {[
              { path: "/", label: "Home", emoji: "🏠" },
              { path: "/about", label: "About", emoji: "👥" },
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-200"
                    : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
                } animate-slide-in`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  </div>
                )}
              </Link>
            ))}

            {/* Mobile Services Menu */}
            <div className="animate-slide-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 transform rounded-xl hover:scale-105 hover:text-blue-600 hover:bg-white/70"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">⚙️</span>
                  <span>Services</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  mobileServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2 space-x-3 text-sm text-gray-600 transition-all duration-300 rounded-lg hover:text-blue-600 hover:bg-white/50"
                      style={{ animationDelay: `${(index + 3) * 50}ms` }}
                    >
                      <service.icon className={`w-4 h-4 ${service.color}`} />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                isActive("/contact")
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-200"
                  : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
              } animate-slide-in`}
              style={{
                animationDelay: "300ms",
                animationFillMode: "both",
              }}
            >
              <span className="text-xl">📞</span>
              <span>Contact</span>
              {isActive("/contact") && (
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </nav>
  )
}
