import React from 'react';
import { UserPlus, FileCheck, TrendingUp, Package, Stars } from 'lucide-react';
import BookingForm from './BookingForm';

const ContactUs = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Free Trail",
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Form */}
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-blue-100 text-center mb-8 text-lg max-w-2xl mx-auto">
            Experience our platform firsthand. Fill out the form below to begin your free trial journey.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            {/* Timeline - Hidden on mobile */}
            <div className="hidden md:block absolute -left-64 top-0 w-56">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 w-0.5 h-full bg-blue-200"></div>

                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-white">
                        <p className="font-medium">{step.title}</p>
                        <p className="text-blue-100 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;