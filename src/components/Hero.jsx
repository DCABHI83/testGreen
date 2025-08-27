import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-b from-gray-100 to-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Book Professional Home Cleaning Easily
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mb-2">
        Carpet, Sofa, Room and Flat Cleaning
      </p>
      <p className="text-lg md:text-xl text-gray-600 mb-2">
        1BHK, 2BHK & More
      </p>

      <div className="mt-6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc5AVkn0JtTpq8L3OaPrgyoT_gy4jFgwVG2OZrztcIoWfxpVA/viewform?usp=header "
          className="bg-black text-white text-lg md:text-xl rounded-lg px-6 py-3 shadow-lg hover:bg-gray-800 transition duration-300"
          target='_blank'
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}

export default Hero
