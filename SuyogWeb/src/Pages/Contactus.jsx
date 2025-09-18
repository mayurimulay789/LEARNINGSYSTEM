"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Sparkles, Star, MessageCircle, AlertCircle } from "lucide-react"

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  // Replace with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgrggaa"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("contact-us")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This tells Formspree to use this as reply-to address
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")

      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: ["9511631824", "9823232003"],
      gradient: "from-green-400 to-emerald-500",
      description: "Call us anytime for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["sachin.hiwale1983@gmail.com", "Satish.wagh1969@gmail.com"],
      gradient: "from-blue-400 to-cyan-500",
      description: "Send us your queries and requirements",
    },
    {
      icon: MapPin,
      title: "Address",
      content: ["Ganga Savera, Shop No. 118/119/120", "Near Shivarkar Garden, Wanwadi", "Pune - 411040"],
      gradient: "from-purple-400 to-pink-500",
      description: "Visit our manufacturing facility",
    },
  ]

  return (
    <section
      id="contact-us"
      className="relative px-4 py-12 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 md:py-20 lg:py-24 md:px-8 lg:px-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-blue-200/20 animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bottom-20 right-20 bg-purple-200/20 animate-float-delayed"></div>
        <Sparkles className="absolute w-6 h-6 top-32 right-32 text-blue-300/40 animate-pulse" />
        <Star className="absolute w-5 h-5 bottom-32 left-32 text-purple-300/40 animate-twinkle" />
        <MessageCircle className="absolute w-4 h-4 delay-500 top-1/2 right-1/4 text-cyan-300/40 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="mb-4 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 bg-clip-text sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 md:w-28"></div>
              <div className="absolute top-0 w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse md:w-28"></div>
            </div>
          </div>
          <p className="max-w-3xl px-4 mx-auto text-base text-gray-600 sm:text-lg lg:text-xl">
            Get in touch with us. We'd love to hear from you and discuss how our H2O Gas Generators can transform your
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">Get in Touch</h2>
              <p className="text-gray-600">
                Ready to revolutionize your industrial operations? Contact our experts today.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="cursor-pointer group" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                  <div
                    className={`relative p-6 rounded-2xl bg-gradient-to-r ${info.gradient} text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 transform -translate-x-8 translate-y-8 bg-white rounded-full"></div>
                    </div>

                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 transition-transform duration-300 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110">
                          <info.icon className="w-6 h-6 text-white sm:w-7 sm:h-7" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{info.title}</h3>
                        <p className="mb-3 text-sm text-white/80">{info.description}</p>
                        <div className="space-y-1">
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-sm break-words sm:text-base text-white/90">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 mt-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
              </div>

              <div className="relative z-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Send us a Message</h2>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="flex items-center p-4 mb-6 space-x-3 border border-green-200 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-700">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center p-4 mb-6 space-x-3 border border-red-200 bg-red-50 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-700">
                      Failed to send message. Please try again or contact us directly.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 text-sm border rounded-xl transition-all duration-300 focus:ring-2 focus:border-transparent sm:text-base ${
                          focusedField === "name"
                            ? "border-blue-400 ring-blue-200 shadow-lg"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 text-sm border rounded-xl transition-all duration-300 focus:ring-2 focus:border-transparent sm:text-base ${
                          focusedField === "email"
                            ? "border-blue-400 ring-blue-200 shadow-lg"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 text-sm border rounded-xl transition-all duration-300 focus:ring-2 focus:border-transparent sm:text-base ${
                        focusedField === "subject"
                          ? "border-blue-400 ring-blue-200 shadow-lg"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="H2O Gas Generator Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 text-sm border rounded-xl resize-none transition-all duration-300 focus:ring-2 focus:border-transparent sm:text-base ${
                        focusedField === "message"
                          ? "border-blue-400 ring-blue-200 shadow-lg"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      placeholder="Tell us about your requirements, current setup, and how we can help improve your operations..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 text-base font-medium text-white rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-3 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
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
