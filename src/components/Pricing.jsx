import React from "react";

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-[#F5F5F5] rounded-xl p-6 flex flex-col gap-8 h-full">
    
        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-xl font-medium">{title}</p>
          <h1 className="text-xl md:text-2xl font-black">{price}</h1>
        </div>

        <div className="flex flex-col gap-2 text-base md:text-lg">
          {features.map((item, index) => (
            <h2 key={index}>⭐ {item}</h2>
          ))}
        </div>

        <div className="flex justify-center mt-auto">
          <a
            href="#book"
            className="bg-[#E2E2E2] px-6 py-2 rounded-lg text-lg md:text-xl hover:bg-[#d6d6d6] transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      title: "Sofa Cleaning",
      price: "₹299 – ₹599*",
      features: ["Best for fabric sofas", "Eco-friendly cleaning", "Quick turnaround"],
    },
    {
      title: "Flat Cleaning (1BHK/2BHK)",
      price: "₹2000 – ₹6500*",
      features: ["Basic to deep cleaning", "1BHK, 2BHK covered", "Toilets included"],
    },
    {
      title: "Add-Ons",
      price: "Varied",
      features: ["Per Room: ₹799 – ₹1199*", "Bathroom: ₹499 – ₹999*", "AC Cleaning: ₹599*","Car Cleaning : ₹399* Onwards"],
    },
  ];

  return (
    <div className="p-4 md:p-10">

      <div className="my-8">
        <h1 className="text-2xl md:text-3xl font-bold">Transparent Pricing</h1>
        <div className="w-[14rem] h-[4px] md:w-[17rem] bg-[#999999] mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row  gap-6">
        {pricingData.map((item, index) => (
          <PriceCard
            key={index}
            title={item.title}
            price={item.price}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
