import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const features = [
    {
      id: 1,
      title: "Daily Market Views",
      description: "Stay updated with the latest market trends and insights every day.",
      icon: "/static/media/Daily-Market-Views.3621b0aa.svg"
    },
    {
      id: 2,
      title: "Well Researched Ideas",
      description: "Benefit from expert opinion, backed by in-depth research and analysis.",
      icon: "/static/media/Well-Researched-Expert-Ideas.42820f28.svg"
    },
    {
      id: 3,
      title: "Credits Based Subscription Model",
      description: "Pay only for successful research calls with our flexible credit-based subscription system.",
      icon: "/static/media/Credits-Based-Subscription.1ae8adb5.svg"
    },
    {
      id: 4,
      title: "Timely Customer Support",
      description: "Get prompt assistance and answers to your trading queries whenever needed.",
      icon: "/static/media/Timely-Customer-Support.c62c4b45.svg"
    },
    {
      id: 5,
      title: "Initial Hand Holding For Beginners",
      description: "Receive guided support to help you start trading with confidence.",
      icon: "/static/media/Initial-Hand-Holding-For-Beginners.345133b5.svg"
    },
    {
      id: 6,
      title: "Insights Aligned with Your Goals",
      description: "Research designed to provide you with actional and goal-oriented recommendations you can trust.",
      icon: "/static/media/Customer-Focused-Research.058cdb3c.svg"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + features.length) % features.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 1;

    if (diff === 0) { // Current card
      transform = 'translateX(-50%) scale(1) translateZ(0)';
      zIndex = 3;
    } else if (diff === 1 || diff === features.length - 1) { // Adjacent cards
      const direction = diff === 1 ? 1 : -1;
      transform = `translateX(${direction * 75 - 50}%) scale(0.85) translateZ(-100px)`;
      zIndex = 2;
      opacity = 0.7;
    } else { // Other cards
      const direction = diff <= features.length / 2 ? 1 : -1;
      transform = `translateX(${direction * 100 - 50}%) scale(0.7) translateZ(-200px)`;
      zIndex = 1;
      opacity = 0.5;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-in-out'
    };
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="h-[500px] relative perspective-1000">
        <div className="relative h-full">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="absolute top-0 left-1/2 w-full max-w-md cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transform-gpu">
                <div className="mb-4">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12 mb-2 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {features.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;