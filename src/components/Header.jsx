import headerImage from '../images/header.webp';
import BookingForm from './Bookingform';

const Header = () => {
  return (
    <div
    className="min-h-screen relative flex items-center justify-center py-8"
    style={{
      backgroundImage: `url(${headerImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  >
    {/* Overlay for the image */}
    <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>
  
    {/* Content container */}
    <div className="relative z-10 container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="bg-opacity-60 p-8 max-w-[350px] text-center sm:text-left">
          <h1 className="text-xl font-bold uppercase text-white">
            Ignite Your Trading Journey!
          </h1>
          <p className="text-white mt-4">
            Join our Exclusive Intraday Trading Calls and watch your profits skyrocket! 
            Don&apos;t just trade—become a market maestro and seize every opportunity. 
            Your financial success story starts here!
          </p>
          <p className="text-white mt-2">-- Join us today!</p>
        </div>
        <div className="w-full sm:w-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Header;
