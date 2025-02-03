import React from "react";
import { Rocket, LineChart, BrainCircuit , Brain  } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center  text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-blue-700 opacity-100"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="absolute w-full h-full bg-[url('/path-to-your-futuristic-bg.png')] bg-cover bg-center"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 sm:px-12 max-w-3xl">
        <h2 className="text-lg uppercase tracking-widest text-white font-semibold mb-2">
          Our Expertise, Your Success
        </h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white glow-text leading-tight">
          The Future of Stock Market Strategies
        </h1>
        <p className="text-lg text-white mt-4">
          Get cutting-edge stock tips, intraday recommendations, and expert guidance to stay ahead of the market.
        </p>

        {/* Features */}
        <div className="flex justify-center items-center gap-6 mt-6 font-semibold text-blue-600">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            <span>Fast Market Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-6 h-6" />
            <span>AI-Powered Predictions</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain  className="w-6 h-6" />
            <span>Smart Trading Strategies</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-400 transition-transform transform hover:scale-105 shadow-md"
          >
            Get Free Trail
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
