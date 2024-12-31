import twm from '../images/logofull.webp';

const Footer = () => {
  const importantLinks = [
    { name: "Standard Do's & Don'ts", href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'User Consent', href: '#' },
    { name: 'Legal Disclaimer', href: '#' },
    { name: 'Investor Charter', href: '#' },
    { name: 'Advertisement Disclaimer', href: '#' }
  ];

  const packages = [
    { name: 'Index Basic', href: '#' },
    { name: 'Index Pro', href: '#' },
    { name: 'Index Club Option', href: '#' },
    { name: 'Equity Basic', href: '#' },
    { name: 'Equity Pro', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Contact Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-[200px]"><img className="w-auto" src={twm} alt="Logo" /></div>
          </div>
          
          <div className="text-gray-400 space-y-2 text-sm">
            <p>License Holder&apos;s Name - RISHABH KUMAR SHARMA SEBI</p>
            <p>Registration No. - INH000018081</p>
            <p>Maruti Nandan Apartment, Flat No 5, Wasan Nagar,</p>
            <p>Near Panini Society, Pathardi Phata, NASHIK,</p>
            <p>MAHARASHTRA, 422009</p>
            <p className="text-white">9769960695</p>
          </div>
        </div>

        {/* Important Links Section */}
        <div>
          <h3 className="text-gray-400 text-lg mb-4">IMPORTANT LINKS</h3>
          <ul className="space-y-3">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages Section */}
        <div>
          <h3 className="text-gray-400 text-lg mb-4">PACKAGES</h3>
          <ul className="space-y-3">
            {packages.map((pkg) => (
              <li key={pkg.name}>
                <a 
                  href={pkg.href}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {pkg.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;