import { useState } from 'react';
import { BadgePlus , BadgeMinus } from 'lucide-react';

const Accordion = () => {
  const [openSections, setOpenSections] = useState({
    intraday: false,
    lowRisk: false,
    trusted: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
  <>
  <div className='bg-blue-100'> 

    <div className='bg-blue-400 h-10'>
            <p className=' uppercase font-semibold text-center pt-1 text-xl  text-white'>Why choose us</p>
    </div>
    <div className="flex flex-col  lg:flex-row items-center gap-10 p-6 max-w-auto mx-[20px]">



      {/* Accordion Section */}
      <div className="lg:w-1/2 ">
        {/* Intraday Section */}
        <div className="border border-gray-300 rounded-md shadow-lg shadow-blue-300 mb-6">
          <button
            className="w-full p-4 text-left bg-blue-600 rounded text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => toggleSection('intraday')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Intraday & Long-Term Trade Excellence 🚀</h2>
              <span>{openSections.intraday ? <BadgeMinus /> : <BadgePlus />}</span>
            </div>
          </button>
          {openSections.intraday && (
            <div className="p-4 bg-white rounded-b">
              <p>Achieve up to 80-85% accuracy in your trades with our proven strategies. Sign up now for high-precision daily trade recommendations!  </p>
            </div>
          )}
        </div>

        {/* Low Risk Section */}
        <div className="border border-gray-300 rounded-md  shadow-lg mb-6 shadow-blue-300">
          <button
            className="w-full p-4 text-left bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => toggleSection('lowRisk')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Low Risk, High Rewards 💡</h2>
              <span>{openSections.lowRisk ? <BadgeMinus /> : <BadgePlus />}</span>
            </div>
          </button>
          {openSections.lowRisk && (
            <div className="p-4 bg-white rounded-b">
              <p>We focus on quality over quantity, delivering fewer but highly profitable tips. Our premium services are designed to maximize your returns with minimal risk. </p>
            </div>
          )}
        </div>

        {/* Trusted By Section */}
        <div className="border border-gray-300  rounded-md shadow-lg shadow-blue-300">
          <button
            className="w-full p-4 text-left bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => toggleSection('trusted')}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Trusted by Thousands 🌟</h2>
              <span>{openSections.trusted ? <BadgeMinus /> : <BadgePlus />}</span>
            </div>
          </button>
          {openSections.trusted && (
            <div className="p-4 bg-white rounded-b">
              <p>Our satisfied clients are our biggest advocates. Their referrals drive our growth, and we take pride in building lasting relationships. </p>
            </div>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/business-growth-concept-illustration_114360-8949.jpg?t=st=1735027979~exp=1735031579~hmac=6d684ccfee94d4769a4189692f84b762cdf3557941984f65975d9db60724345f&w=740"
          alt="Trading illustration"
          className="w-[400px] md:ml-24 shadow-md rounded-[10%] shadow-blue-400"
        />
      </div>
    </div>

  </div>

    </>
  );
};

export default Accordion;
