import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import WhyChoose from "./components/WhyChoose"
import Services from "./components/Services"
import Footer from "./components/Footer"
import FAQ from './components/Faq';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen font-lato">
        {/* Fixed navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        
        {/* Main content with padding-top to account for fixed navbar */}
        <div className="pt-16">
          <Routes>
            {/* Home route */}
            <Route 
              path="/" 
              element={
                <>
                  <Header />
                  <AboutUs />
                  <WhyChoose />
                  <Services />
                  <FAQ />
                  <Footer />
                </>
              } 
            />

            {/* About route */}
            <Route 
              path="/about" 
              element={
                <>
                  <AboutUs />
                  <Footer />
                </>
              } 
            />

            {/* Services route */}
            <Route 
              path="/services" 
              element={
                <>
                  <Services />
                  <Footer />
                </>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;