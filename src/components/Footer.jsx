import twm from '../images/logofull.webp';

const Footer = () => {
  const importantLinks = [
    { name: "Standard Do's & Don'ts", href: '/dnd' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms and Conditions', href: '/tnc' },
    { name: 'User Consent', href: '/userconsent' },
    { name: 'Legal Disclaimer', href: '/disclaimer' },
    { name: 'Investor Charter', href: '/charter' },
    { name: 'Advertisement Disclaimer', href: '/addisclaimer' }
  ];

  const packages = [
    { name: 'Index Basic', href: '/packages' },
    { name: 'Index Pro', href: '/packages' },
    { name: 'Index Club Option', href: '/packages' },
    { name: 'Equity Basic', href: '/packages' },
    { name: 'Equity Pro', href: '/packages' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-500 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8  ">
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
            <p className="">9769960695</p>
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
      <div className="max-w-6xl mx-auto px-4 mt-6 text-center ">
            <p>ODR Portal (Securities Market Approach for Resolution through ODR Portal ) can be accessed via the following link – <a href="https://smartodr.in/ ">https://smartodr.in/ </a> https://smartodr.in/        </p>
            <h6>Attention Investors !</h6>
            <p>
            Investment in securities market is subject to market risk , we do not offer any guaranteed profit service. Before taking Expert Advice & any services with TWM Research Alert, Client should read disclaimer, terms and conditions, Disclosure and refund policy of the company. We do not accept advisory fee in any personal or Individual bank account , any payment made should be in favor of TWM Research Alert. All trades will be exclusively on specific advice of TWM Research Alert, no advice should be taken from anyone else by client. Risk of loss in trading & investment can be substantial and can even wipe-out complete capital at stake. Investment in securities market are subject to market risks, you are requested to carefully consider whether trading/investment is appropriate for you in light of your experience, objectives, financial resources and other relevant circumstances. TWM Research Alert Platform attempts to provide the best suitable research & trading ideas as per Technical and Derivative Analysis. One need to trade inputs as per personal risk-appetite & with strict stop-losses. TWM Research Alert and any of its employees, shall not be liable for losses, if any, incurred by you.
            </p>
            <strong>twmresearchalert.com © Copyright 2024. All rights reserved.</strong>
      </div>
    </footer>
  );
};

export default Footer;