import React from "react";
import { Zap, User, CalendarCheck, Sparkles } from "lucide-react"; 

const Features = () => {
  return (
    <div className="w-full py-10 flex flex-col md:flex-row justify-around items-center gap-10">
      
     
      <div className="flex flex-col items-center text-center">
        <Zap className="w-10 h-10 text-gray-500" />
        <h3 className="mt-2 font-semibold text-lg">Affordable pricing</h3>
      </div>

     
      <div className="flex flex-col items-center text-center">
        <User className="w-10 h-10 text-gray-500" />
        <h3 className="mt-2 font-semibold text-lg">Trusted pros</h3>
      </div>

    
      <div className="flex flex-col items-center text-center">
        <CalendarCheck className="w-10 h-10 text-gray-500" />
        <h3 className="mt-2 font-semibold text-lg">Easy booking</h3>
      </div>

   
      <div className="flex flex-col items-center text-center">
        <Sparkles className="w-10 h-10 text-gray-500" />
        <h3 className="mt-2 font-semibold text-lg">Spotless finish</h3>
      </div>

    </div>
  );
};

export default Features;
