import { useState, useEffect } from 'react';
import twm from '../images/twm.webp';
import '../App.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsServicesOpen(false);
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);

  return (
    <nav className="bg-opacity-30 backdrop-blur-md z-50">
    {/* Rolling Text Component */}
      <div className="bg-blue-400 overflow-hidden" style={{ height: '25px' }}>
        <div className="animate-marquee whitespace-nowrap text-white font-semibold px-2 text-sm ">
          Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary  or provide any assurance of returns to investors. Investment in securities are subject to market risks. Read all related documents carefully before investing.
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-8 w-auto" src={twm} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About Us
            </a>
            <a href="/kyc" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              KYC
            </a>
            <a href="/userconsent" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              User consent
            </a>

            {/* Services Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleServices();
                }}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Services
                <svg
                  className="ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute z-[100] left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <a href="/services/index-basic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Index Option Basic</a>
                  <a href="/services/index-premium" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Index Option Premium</a>
                  <a href="/services/index-standard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Index Option Standard</a>
                  <a href="/services/equity-cash" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Equity Cash Intraday Premium</a>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMore();
                }}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                More
                <svg
                  className="ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMoreOpen && (
                <div className="absolute z-[100] left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <a href="/more/complaint" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Complaint Board</a>
                  <a href="/more/performance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Past Performance</a>
                  <a href="/more/charter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Investor Charter</a>
                  <a href="/more/disclosure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Disclosure</a>
                  <a href="/more/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Privacy Policy</a>
                </div>
              )}
            </div>

            <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden text-white">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Home
          </a>
          <a href="/about" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            About Us
          </a>
          <a href="/services" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Services
          </a>
          <a href="/services" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Services
          </a>
          <a href="/kyc" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            KYC
          </a>
          <a href="/contact" className="block text-white hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
