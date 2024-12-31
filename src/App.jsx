import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import WhyChoose from "./components/WhyChoose"
import Services from "./components/Services"

const App = () => {
  return (
    <div className="min-h-screen font-lato">
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main content with padding-top to account for fixed navbar */}
      <div className="pt-16"> {/* Adjust pt-16 based on your navbar height */}
        <Header />
        <AboutUs />
        <WhyChoose />
        <Services />
      </div>
    </div>
  );
};

export default App