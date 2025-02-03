import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../images/s1.webp';
import img2 from '../images/s2.webp';
import img3 from '../images/s3.webp';
import img4 from '../images/s4.webp';
import img5 from '../images/s5.webp';
import img6 from '../images/s4.webp';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 3; // Number of items shown at once

  const features = [
    {
      id: 1,
      title: "Daily Market Views",
      description: "Stay updated with the latest market trends and insights every day. Our team provides in-depth analyses and reports on global market movements, economic indicators, and emerging opportunities. These comprehensive, easy-to-understand reports are tailored to your trading needs, helping you make well-informed decisions consistently.",
      icon: img1
    },
    {
      id: 2,
      title: "Well-Researched Ideas",
      description: "Benefit from expert opinions backed by rigorous research and detailed analysis. Each recommendation is based on reliable data, industry trends, and market conditions. With our well-researched ideas, you can make decisions with greater confidence and enhance your investment strategies.",
      icon: img2
    },
    {
      id: 3,
      title: "Credits-Based Subscription Model",
      description: "Enjoy a cost-effective approach to accessing premium research. Our flexible credits-based subscription system allows you to pay only for successful calls and the services you use. This model ensures you get the maximum value for your investment while maintaining financial control.",
      icon: img3
    },
    {
      id: 4,
      title: "Timely Customer Support",
      description: "Our dedicated support team is always available to address your queries and concerns. Whether you need help with trading strategies, technical issues, or account-related inquiries, we ensure prompt and reliable assistance for a smooth trading experience.",
      icon: img4
    },
    {
      id: 5,
      title: "Initial Hand-Holding For Beginners",
      description: "Starting your trading journey can be daunting, but we’ve got you covered. Our personalized guidance program helps beginners gain confidence and clarity in navigating the trading world. Learn the basics, understand market dynamics, and start trading with our expert support.",
      icon: img5
    },
    {
      id: 6,
      title: "Insights Aligned with Your Goals",
      description: "Achieve your investment objectives with research and recommendations tailored to your specific goals. We analyze your risk appetite, investment horizon, and financial targets to provide actionable insights that align perfectly with your needs.",
      icon: img1
    },
    {
      id: 7,
      title: "Risk Assessment Tools",
      description: "Manage trading risks effectively with our advanced tools. Get actionable insights into potential risks, evaluate market volatility, and implement strategies to safeguard your investments. Stay ahead with comprehensive data and intuitive risk management features.",
      icon: img6
    },
    {
      id: 8,
      title: "Advanced Charting Tools",
      description: "Visualize market trends like never before with our state-of-the-art charting tools. Customize charts, identify patterns, and analyze data with precision. Whether you’re a seasoned trader or a beginner, our tools provide a competitive edge in your market analysis.",
      icon: img2
    },
    {
      id: 9,
      title: "Portfolio Performance Tracking",
      description: "Monitor and evaluate your portfolio’s performance with ease. Our detailed analytics and insights help you understand the impact of your investment decisions. Stay informed about returns, identify areas for improvement, and optimize your strategies for better outcomes.",
      icon: img3
    },
    {
      id: 10,
      title: "Community Discussions",
      description: "Join a dynamic community of traders and investors to share ideas, discuss strategies, and stay updated on market trends. Engage in meaningful conversations, learn from others’ experiences, and build valuable connections in the trading world.",
      icon: img4
    }
  ];

  const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === features.length - ITEMS_PER_PAGE ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? features.length - ITEMS_PER_PAGE : prevIndex - 1
    );
  };

  const getCurrentPage = () => Math.floor(currentIndex / ITEMS_PER_PAGE);

  return (
    <section className="lg:py-12 py-12 w-full">
      <div className="px-4">
        <div className="border border-blue-500 bg-[#F9FBFF] md:rounded-[20px] rounded-[12px] md:pt-8 md:pb-10 p-5">
          <div className="md:px-10 px-2 items-center mb-5 flex justify-center flex-col text-center">
            <h1 className="text-blue-600 font-extrabold text-center xl:text-[3.438rem] xl:leading-[3.781rem] md:text-[2.5rem] text-[30px] md:leading-[2.5rem] leading-[33px] md:max-w-[700px] max-w-[232px]">
              SERVICES WE PROVIDE
            </h1>
            <p className="md:mt-3 mt-1 text-[14px] md:text-[20px] leading-[20.8px] md:leading-[28px] text-H2Color md:max-w-[427px] max-w-[220px]">
              Trading and Investment Insights Based on Market Conditions Suitable For Everyone.
            </p>
          </div>

          <div className="relative mx-auto px-4 md:px-0 h-[500px]">
            <div className="h-[400px] relative perspective-1000 overflow-hidden">
              <div 
                className="relative h-full w-full flex transition-transform ease-in-out duration-500" 
                style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_PER_PAGE)}%)` }}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <div className="cursor-pointer bg-white rounded-lg shadow-lg p-6 h-full">
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

            <div className="flex justify-center mt-4 gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === getCurrentPage() ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(i * ITEMS_PER_PAGE)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;