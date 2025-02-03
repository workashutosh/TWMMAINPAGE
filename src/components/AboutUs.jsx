import about from '../images/mobile.webp';
import { TrendingUp, Award, LineChart } from 'lucide-react';
import Button from './FlamingButton';


const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b  py-16 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-blue-600"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-blue-600"></div>
      </div>
      
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32  items-center">
          {/* Left side - Image */}
          <div className="relative group">
            {/* Main Content Container */}
            <div className="bg-blue-600/10 p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-gray-900">
                    What is{" "}
                    <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                      TWM Research Alert
                    </span>
                  </h3>
                  <p className="text-lg text-gray-900 leading-relaxed">
                    Welcome to TWM Research Alert, a premier SEBI-registered research analyst based in Mumbai, India. We are dedicated to providing reliable and insightful stock and index recommendations to our valued clients.
                  </p>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-2xl hidden md:block transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-green-500" size={28} />
                  <span className="text-sm font-semibold text-gray-800">Consistent Growth</span>
                </div>
              </div>
            </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article
                  class=" bg-blue-600 shadow-lg p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
                >
                  <div className=' flex items-center gap-2'>

                  
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="w-10 h-10 text-white bg-blue-600 rounded-full p-1"
                  >
                    <path
                      d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <h3 className='font-semibold text-white'>Expert Analysis</h3>
                  </div>
                  <p class="text-sm w-full text-white">
                  Unlock the power of data-driven insights with our expert analysis. Our team of seasoned analysts provides in-depth research and actionable recommendations to help you make informed investment decisions.
                  </p>
                </article>

                  <article
                    class=" bg-blue-600 shadow-lg p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
                  >
                   <div className=' flex items-center gap-2'>              
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="w-10 h-10 text-white bg-blue-600 rounded-full p-1"
                        >
                          <path
                            d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="currentColor"
                          ></path>
                        </svg>
                        <h3 className='font-semibold text-white'>Proven Track Record</h3>
                        </div>
                    <p class="text-sm w-full text-white">
                    With a history of consistently outperforming market indices, our strategies are designed to deliver reliable growth. Trust our proven track record to guide your investments toward success.
                    </p>
                  </article>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article
                    class=" bg-blue-600 shadow-lg p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
                  >
                   <div className=' flex items-center gap-2'>              
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="w-10 h-10 text-white bg-blue-600 rounded-full p-1"
                        >
                          <path
                            d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="currentColor"
                          ></path>
                        </svg>
                        <h3 className='font-semibold text-white'>Tailored Strategies</h3>
                        </div>
                    <p class="text-sm w-full text-white">
                    Every investor is unique. We craft personalized investment strategies tailored to your financial goals, risk tolerance, and market conditions, ensuring optimal results.
                    </p>
                  </article>
            </div>

            <Button />
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
