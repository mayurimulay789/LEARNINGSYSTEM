import { Phone, Mail, MapPin } from "lucide-react"
import logo from "../assets/arrc.png"
export default function Footer() {
  return (
    <footer id="contact" className="px-4 py-8 text-white bg-blue-900 md:py-12 lg:py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 mb-6 md:grid-cols-2 md:gap-8 lg:gap-12 md:mb-8">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="flex items-center mb-3 text-lg font-bold md:text-xl lg:text-2xl md:mb-4">
                <Phone className="w-4 h-4 mr-2 md:h-5 md:w-5 lg:h-6 lg:w-6 md:mr-3" />
                Phone
              </h3>
              <p className="text-sm md:text-lg">9511631824 / 9823232003</p>
            </div>

            <div>
              <h3 className="flex items-center mb-3 text-lg font-bold md:text-xl lg:text-2xl md:mb-4">
                <Mail className="w-4 h-4 mr-2 md:h-5 md:w-5 lg:h-6 lg:w-6 md:mr-3" />
                Email
              </h3>
              <div className="space-y-1 text-sm md:text-lg">
                <p className="break-words">sachin.hiwale1983@gmail.com</p>
                <p className="break-words">Satish.wagh1969@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center mb-3 text-lg font-bold md:text-xl lg:text-2xl md:mb-4">
                <MapPin className="w-4 h-4 mr-2 md:h-5 md:w-5 lg:h-6 lg:w-6 md:mr-3" />
                Address
              </h3>
              <p className="text-sm leading-relaxed md:text-lg">
                Ganga Savera, Shop No. 118/119/120 Near Shivarkar Garden, Wanwadi, Pune - 411040.
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl md:p-6 lg:p-8">
            <div className="w-20 h-20 mb-3 md:w-24 md:h-24 lg:w-32 lg:h-32 md:mb-4">
              <img src={logo} alt="Suyog Techtronics Logo" className="object-contain w-full h-full" />
            </div>
            <p className="text-sm leading-relaxed text-center text-blue-900 md:text-lg">
              Industry leader in manufacturing H2O Gas Generators, stabilizers, and UPS with over 15 years of
              experience.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center border-t border-blue-800 md:pt-6">
          <p className="text-xs md:text-sm lg:text-base">©2025 All Rights Reserved | Design by Arc Technology</p>
        </div>
      </div>
    </footer>
  )
}
