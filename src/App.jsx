import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import WhyChoose from "./components/WhyChoose"
import Services from "./components/Services"
import Footer from "./components/Footer"
import FAQ from './components/Faq';
import UserConsent from './components/Userconsent'
import PDFViewer  from './components/PdfViewer'
import RefundPolicy from './components/RefundPolicy';
import Packages from './components/Packages';


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

            {/* Packages route */}
            <Route 
              path="/packages" 
              element={
                <>
                  <Packages />
                  <Footer />
                </>
              } 
            />

            {/* User consent route */}
            <Route 
              path="/userconsent" 
              element={
                <>
                  <UserConsent />
                  <Footer />
                </>
              } 
            />

            {/* Privacy policy */}
            <Route 
              path="/privacy" 
              element={
                <>
                  <PDFViewer url="https://twmresearchalert.com/documents/Terms.pdf" />
                  <Footer />
                </>
              } 
            />

            {/* Refund policy */}
            <Route 
              path="/refund" 
              element={
                <>
                  <RefundPolicy />
                  <Footer />
                </>
              } 
            />

            {/* Terms and condition */}
            <Route 
              path="/tnc" 
              element={
                <>
                  <PDFViewer url="https://twmresearchalert.com/documents/Terms.pdf" />
                  <Footer />
                </>
              } 
            />

            {/* Legal Disclaimer */}
            <Route 
              path="/disclaimer" 
              element={
                <>
                  <PDFViewer url="https://twmresearchalert.com/documents/Legaldisclaimer.pdf" />
                  <Footer />
                </>
              } 
            />

             {/* charter */}
             <Route 
              path="/charter" 
              element={
                <>
                  <PDFViewer url="https://twmresearchalert.com/documents/InvestorCharter.pdf" />
                  <Footer />
                </>
              } 
            />

            {/* Advertisement Disclaimer */}
            <Route 
              path="/addisclaimer" 
              element={
                <>
                  <PDFViewer url="https://twmresearchalert.com/documents/AdvertisementDisclaimer.pdf" />
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