import  { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is TWM Research Alert, and how does it work?",
      answer: "TWM Research Alert is a platform that provides investment research and trading recommendations. We combine technical analysis with market research to help our users make informed trading decisions."
    },
    {
      question: "How accurate are your research calls?",
      answer: "TWM prides itself on delivering high-accuracy research calls. Our calls are based on thorough technical analysis and market research, with a track record of success. While no trading strategy can guarantee results, our approach focuses on providing well-analysed and high-probability trades to maximise potential returns."
    },
    {
      question: "Can I change my subscription plan later?",
      answer: "Yes, you can modify your subscription plan at any time through your account settings. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What is a Research Call?",
      answer: "A Research Call is a detailed analysis and recommendation for a specific trading opportunity. It includes entry points, stop-loss levels, and target prices based on our technical and fundamental analysis."
    },
    {
      question: "How do I get to know that there is a new trade or a recommendation?",
      answer: "We send immediate notifications through our platform and email when new trade recommendations are available. You can also check your dashboard for the latest updates."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-3xl mx-auto w-full py-12 bg-white rounded-lg shadow-sm">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-left font-medium text-gray-900">
                  {item.question}
                </span>
                {openItems[index] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-gray-600">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;