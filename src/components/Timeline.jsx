import React from 'react';
import { UserPlus, FileCheck, TrendingUp, Package, Stars } from 'lucide-react';

const TimelineStep = ({ icon: Icon, title, description, isCompleted, isLast }) => (
  <div className="flex flex-col md:flex-1 w-full md:w-auto">
    {/* Mobile Layout */}
    <div className="flex md:hidden">
      <div className="relative flex flex-col items-center mr-4">
        {/* Vertical line before */}
        {!isLast && (
          <div className={`absolute w-0.5 h-full top-12 left-1/2 -translate-x-1/2 ${
            isCompleted ? 'bg-blue-500' : 'bg-gray-200'
          }`} />
        )}
        {/* Icon */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
          ${isCompleted ? 'bg-blue-500 ring-4 ring-blue-100' : 'bg-gray-200 ring-4 ring-gray-100'}`}>
          <Icon className={`w-5 h-5 ${isCompleted ? 'text-white' : 'text-gray-500'}`} />
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 pb-12">
        <div className={`p-4 rounded-lg border ${
          isCompleted ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
        }`}>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden md:flex md:flex-col items-center">
      <div className="relative flex items-center justify-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isCompleted ? 'bg-blue-500' : 'bg-gray-200'
        }`}>
          <Icon className={`w-6 h-6 ${isCompleted ? 'text-white' : 'text-gray-500'}`} />
        </div>
        {!isLast && (
          <div className={`hidden md:block h-1 w-full absolute left-1/2 top-6 -z-10 ${
            isCompleted ? 'bg-blue-500' : 'bg-gray-200'
          }`} />
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 max-w-[200px]">{description}</p>
      </div>
    </div>
  </div>
);

const CustomerJourneyTimeline = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Registration",
      description: "Begin your journey with a quick and easy sign-up process for free trial access",
      isCompleted: true
    },
    {
      icon: FileCheck,
      title: "KYC Verification",
      description: "Complete our secure identity verification process to ensure account safety",
      isCompleted: true
    },
    {
      icon: TrendingUp,
      title: "Free Trades",
      description: "Experience our platform with complimentary demo trading features",
      isCompleted: true
    },
    {
      icon: Package,
      title: "Package Selection",
      description: "Choose from our range of customized trading packages that suit your needs",
      isCompleted: false
    },
    {
      icon: Stars,
      title: "Service Access",
      description: "Get full platform access with the flexibility to upgrade or modify your package",
      isCompleted: false
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey With Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From registration to full access, we've made every step simple and straightforward.
          Here's how your trading journey unfolds.
        </p>
      </div>
      
      {/* Timeline Container */}
      <div className="bg-white rounded-lg  p-6">
        <div className="flex flex-col md:flex-row md:gap-4">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerJourneyTimeline;