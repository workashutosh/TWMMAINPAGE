import about from '../images/mobile.webp';

const AboutUs = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-12 lg:px-24 about select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-44 items-center">
        {/* Image Section */}
        <div className="flex justify-center  md:justify-end">
          <img 
            src={about} 
            alt="About Us" 
            className="w-full max-w-md rounded-lg "
          />
        </div>
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Who we are<br />
            What is <span className="text-blue-600">TWM Research Alert</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Welcome to TWM Research Alert, a premier SEBI-registered research analyst based in Mumbai, India. We are dedicated to providing reliable and insightful stock and index recommendations to our valued clients, empowering them to build wealth through meticulously researched investment strategies.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            Our team has a proven track record of developing products and services that have consistently outperformed major stock indices, delivering significant returns for our investors. Each recommendation is the result of rigorous and precise analysis of market dynamics.
          </p>
          <button>contact us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
