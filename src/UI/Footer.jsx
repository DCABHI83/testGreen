import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white px-6 py-10">
        {/* Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo / Branding */}
          <div>
            <h1 className="text-2xl font-bold">LOGO</h1>
            <p className="mt-2 text-gray-400 text-sm">
              Professional cleaning services for your home.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h1 className="text-xl font-semibold mb-3">Contact Us</h1>
            <p className="text-gray-300">📞 +91 xxxxxxxxxx</p>
            <p className="text-gray-300">📧 info@cleaningservices.com</p>
            <a
              href="#book"
              className="inline-block mt-3 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Book Appointment
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h1 className="text-xl font-semibold mb-3">Company</h1>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#services" className="hover:text-gray-400">Services</a></li>
              <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Cleaning Services. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
