import { CheckCircle, ExternalLink, Mail, Settings, Code } from "lucide-react"

export default function EmailJSSetupInstructions() {
  const steps = [
    {
      title: "Create EmailJS Account",
      description: "Sign up for a free account at EmailJS",
      icon: Mail,
      details: [
        "Go to https://www.emailjs.com/",
        "Click 'Sign Up' and create your account",
        "Verify your email address",
      ],
    },
    {
      title: "Add Email Service",
      description: "Connect your email provider (Gmail, Outlook, etc.)",
      icon: Settings,
      details: [
        "Go to Email Services in your dashboard",
        "Click 'Add New Service'",
        "Choose your email provider (Gmail recommended)",
        "Follow the authentication steps",
        "Note down your SERVICE_ID",
      ],
    },
    {
      title: "Create Email Template",
      description: "Design your email template with dynamic variables",
      icon: Code,
      details: [
        "Go to Email Templates",
        "Click 'Create New Template'",
        "Use these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}",
        "Set your receiving email address",
        "Note down your TEMPLATE_ID",
      ],
    },
    {
      title: "Get Public Key",
      description: "Find your public key for client-side integration",
      icon: CheckCircle,
      details: ["Go to Account settings", "Find your Public Key", "Copy it for use in your React app"],
    },
  ]

  const templateExample = `Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your website contact form.`

  return (
    <div className="max-w-4xl min-h-screen p-6 mx-auto space-y-8 bg-gray-50">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">EmailJS Setup Guide</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Follow these steps to set up EmailJS for sending emails directly from your React contact form without a
          backend server.
        </p>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <div key={index} className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </div>
              <div className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">{index + 1}/4</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl">
        <div className="p-6 border-b border-gray-100">
          <h3 className="flex items-center space-x-2 text-xl font-semibold text-gray-900">
            <Code className="w-5 h-5 text-blue-600" />
            <span>Email Template Example</span>
          </h3>
          <p className="mt-1 text-gray-600">Use this template structure in your EmailJS template editor</p>
        </div>
        <div className="p-6">
          <div className="p-4 overflow-x-auto bg-gray-900 rounded-lg">
            <pre className="font-mono text-sm text-green-400">
              <code>{templateExample}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <div className="p-6 border-b border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900">Configuration Variables</h3>
          <p className="mt-1 text-blue-700">Replace these placeholders in your React component</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 bg-white border border-blue-100 rounded-lg shadow-sm">
              <span className="font-mono text-sm font-semibold text-gray-800">YOUR_PUBLIC_KEY</span>
              <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">From Account Settings</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white border border-blue-100 rounded-lg shadow-sm">
              <span className="font-mono text-sm font-semibold text-gray-800">YOUR_SERVICE_ID</span>
              <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">From Email Services</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white border border-blue-100 rounded-lg shadow-sm">
              <span className="font-mono text-sm font-semibold text-gray-800">YOUR_TEMPLATE_ID</span>
              <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">From Email Templates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.emailjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl"
        >
          <span>Get Started with EmailJS</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
