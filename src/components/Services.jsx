import React from 'react'
import sofa from '../assets/clean-3.webp'
import room from '../assets/room.jpg'
import flat from '../assets/flat.jpg'

const Services = () => {
  const services = [
    { img: sofa, title: "Sofa Cleaning" },
    { img: room, title: "Room Cleaning" },
    { img: flat, title: "Flat Cleaning" },
  ]

  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <img
              className="w-full h-60 object-cover rounded-2xl mb-4"
              src={service.img}
              alt={service.title}
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services


