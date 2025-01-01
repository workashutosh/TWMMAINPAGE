import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PackageCard = ({ name, price, details }) => (
<div className="relative bg-white rounded-xl select-none shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
      {/* Decorative element */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 blur-xl" />
      
      {/* Header */}
      <div className="relative mb-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-500">/month</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />
      
      {/* Features List */}
      <ul className="space-y-4 flex-grow">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
      
      {/* Call to Action */}
      <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:opacity-90 hover:shadow-md">
        Get Started
      </button>
    </div>
);

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
      ${active 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
  >
    {children}
  </button>
);

const Packages = () => {
  const packagesData = [
    {
      "type": "Equity",
      "subtypes": [
        {
          "name": "Equity Basic",
          "price": "₹12,000/- Month",
          "details": [
            "Get 1 Intraday tip on a daily basis",
            "Approx. 16 - 18 Calls in a month",
            "Tips with Proper Stop Loss & Target",
            "Live Market Customer Support Available",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Equity Pro",
          "price": "₹35,000/- Month",
          "details": [
            "Get 1 to 2 Intraday tips on a daily basis",
            "Complementary BTST and Short Term",
            "Expiry Special alerts every weekly expiry",
            "Live Market Customer Support Available",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        }
      ]
    },
    {
      "type": "Stock Option",
      "subtypes": [
        {
          "name": "Stock Option Basic",
          "price": "₹22,500/- Month",
          "details": [
            "Get 1 Tip per day",
            "Profit approx. ₹5,000 to ₹9,000 Per Lot",
            "Customer Service Support from 9 AM to 6 PM",
            "Tips with Proper Stop Loss & Target",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Stock Option Pro",
          "price": "₹45,500/- Month",
          "details": [
            "1 or 2 Intraday + Positional Tips Per Day",
            "Profit approx. ₹7,000 to ₹9,000 Per Lot",
            "Customer Service Support from 9 AM to 6 PM",
            "10 Jackpot Calls in a Month",
            "Tips with Proper Stop Loss & Target",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        }
      ]
    },
    {
      "type": "Stock Future",
      "subtypes": [
        {
          "name": "Stock Future Basic",
          "price": "₹22,500/- Month",
          "details": [
            "3 Tips Weekly",
            "Profit Target ₹2,000 – ₹5,000 Approx",
            "Tips with Proper Stop Loss & Target",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Stock Future Pro",
          "price": "₹45,500/- Month",
          "details": [
            "1 Tip Per Day",
            "Complementary Short-term and BTST Trades",
            "Profit Target ₹4,000 – ₹6,000 Approx",
            "Tips with Proper Stop Loss & Target",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        }
      ]
    },
    {
      "type": "Index Option",
      "subtypes": [
        {
          "name": "Index Option Basic",
          "price": "₹10,000/- 15 Days",
          "details": [
            "1 Tip Per Day",
            "Required Investment ₹30,000",
            "Profit approx. ₹2,000 to ₹4,000 per trade",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Index Option Classic",
          "price": "₹18,000/- Month",
          "details": [
            "1 Tip Per Day",
            "Required Investment ₹30,000",
            "Profit approx. ₹2,000 to ₹4,000 per trade",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Index Option Pro",
          "price": "₹35,000/- Month",
          "details": [
            "1 Tip Per Day",
            "Required Investment ₹1,00,000",
            "Profit approx. ₹8,000 to ₹10,000 per trade",
            "Tips with Proper Stop Loss & Target",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        }
      ]
    },
    {
      "type": "Index Future",
      "subtypes": [
        {
          "name": "Index Future Pro",
          "price": "₹55,000/- Month",
          "details": [
            "3-4 Tips Per Week",
            "30-40 Points Gain Per Trade in NIFTY per Lot",
            "60-70 Points Gain in Bank NIFTY per Lot",
            "Accuracy 70-80%",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        }
      ]
    },
    {
      "type": "Swing Trading",
      "price": "₹30,000/- Month",
      "details": [
        "3 to 5 Momentum Stocks Weekly",
        "Suitable for Swing Traders",
        "Trading calls via WhatsApp, SMS, and Emails"
      ]
    },
    {
      "type": "TWM Package (All In One)",
      "price": "₹2,00,000/- Month",
      "details": [
        "Most Profitable services",
        "Best Recommendations across all packages",
        "Premium Tips by Chief Analyst",
        "Daily Tips with 80-85% accuracy",
        "Necessary updates via Share Market Investment Mobile App"
      ]
    },
    {
      "type": "MCX Commodities",
      "subtypes": [
        {
          "name": "MCX Commodities",
          "price": "₹20,000/- Month",
          "details": [
            "100% Intraday Commodity advisory service",
            "Calls for Crude, Silver, Zinc, Natural Gas, etc.",
            "Tips with Stop Loss & 3 Targets",
            "Dedicated Analyst Support via WhatsApp"
          ]
        },
        {
          "name": "Premium MCX Advisory",
          "price": "₹35,000/- Month",
          "details": [
            "1-3 Premium MCX Commodity Tips Daily",
            "Smallest Possible Stop Loss",
            "Tips include Gold, Silver, Crude Oil, Nickel, Natural Gas, Copper",
            "Dedicated Analyst Support via WhatsApp & Phone"
          ]
        }
      ]
    },
    {
      "type": "Forex",
      "subtypes": [
        {
          "name": "Forex Option",
          "price": "₹30,000/- Month",
          "details": [
            "U.S.$ / INR",
            "GBP / INR",
            "EURO / INR",
            "JPY / INR",
            "Trading calls via WhatsApp, SMS, and Emails"
          ]
        },
        {
          "name": "Forex Package",
          "price": "₹60,000/- Month",
          "details": [
            "4 Pairs of Currencies"
          ]
        }
      ]
    },
    {
      "type": "International Club Commodities",
      "subtypes": [
        {
          "name": "Commodities Package",
          "price": "₹1,20,000/- Month",
          "details": [
            "Recommendations for Gold, Silver, Crude Oil, Natural Gas, Copper",
            "Trading on COMEX, NYMEX, CBOT, DGCX, etc."
          ]
        },
        {
          "name": "Bullion Package",
          "price": "₹75,000/- Month",
          "details": [
            "Gold and Silver Only"
          ]
        },
        {
          "name": "Equity Package",
          "price": "₹70,000/- Month",
          "details": [
            "Dow, S&P 500"
          ]
        },
        {
          "name": "Equity Package",
          "price": "₹30,000/- Month",
          "details": [
            "Nifty"
          ]
        }
      ]
    }
  ]

  const [activeTab, setActiveTab] = useState(packagesData[0].type);

  // Organize tabs into categories
  const mainTabs = [
    "Equity",
    "Stock Option",
    "Stock Future",
    "Index Option",
    "Index Future"
  ];

  const specialTabs = [
    "Swing Trading",
    "TWM Package",
    "MCX Commodities",
    "Forex",
    "International Club Commodities"
  ];

  const getPackagesForTab = (tabName) => {
    const package_ = packagesData.find(pkg => pkg.type === tabName);
    if (!package_) return [];
    return package_.subtypes || [package_];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 uppercase"><span className='text-purple-600 '>Investment</span> Packages</h2>
        <p className="text-gray-600">Choose from our wide range of investment advisory services</p>
      </div>

      {/* Main Trading Packages */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Trading Packages</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {mainTabs.map(tab => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>
      </div>

      {/* Special Packages */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6">Specialized Services</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {specialTabs.map(tab => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getPackagesForTab(activeTab).map((pkg, index) => (
          <PackageCard
            key={`${pkg.name}-${index}`}
            name={pkg.name}
            price={pkg.price}
            details={pkg.details}
          />
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h4 className="font-bold mb-2">Expert Analysis</h4>
          <p className="text-gray-600">Get real-time market insights from our experienced analysts</p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h4 className="font-bold mb-2">Dedicated Support</h4>
          <p className="text-gray-600">24/7 customer support to assist you with your trading needs</p>
        </div>
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h4 className="font-bold mb-2">Timely Updates</h4>
          <p className="text-gray-600">Receive instant notifications via WhatsApp, SMS, and Email</p>
        </div>
      </div>
    </div>
  );
};

export default Packages;