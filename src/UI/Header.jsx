import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex justify-around items-center my-3 sticky top-0 bg-white shadow-md z-50 p-4">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Navbar */}
      <div className="flex gap-4">
        <a
          href="#services"
          className={`rounded py-2 px-4 transition ${
            activeSection === "services"
              ? "bg-blue-600 text-white"
              : "bg-[#EEEEEE] hover:bg-blue-600 hover:text-white"
          }`}
        >
          Services
        </a>
        <a
          href="#pricing"
          className={`rounded py-2 px-4 transition ${
            activeSection === "pricing"
              ? "bg-blue-600 text-white"
              : "bg-[#EEEEEE] hover:bg-blue-600 hover:text-white"
          }`}
        >
          Pricing
        </a>
        <a
          href="#contact"
          className={`rounded  py-2 px-4 transition ${
            activeSection === "contact"
              ? "bg-blue-600 text-white"
              : "bg-[#EEEEEE] hover:bg-blue-600 hover:text-white"
          }`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
