import { useState, useEffect } from 'react';
import Select from 'react-select';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
];

const segments = [
  { value: "Equity cash / intraday", label: "Equity cash / intraday" },
  { value: "Option (Call-Put)", label: "Option (Call-Put)" },
  { value: "Future (Derivatives)", label: "Future (Derivatives)" },
  { value: "Index", label: "Index" },
  { value: "Commodity", label: "Commodity" }
];

const investments = [
  { value: "Above Rs 50000", label: "Above Rs 50000" },
  { value: "Above Rs 1 Lakhs", label: "Above Rs 1 Lakhs" },
  { value: "Above Rs 3 Lakhs", label: "Above Rs 3 Lakhs" },
  { value: "Above Rs 5 Lakhs", label: "Above Rs 5 Lakhs" },
];

const languages = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "andh", label: "Andh" },
  { value: "arabi", label: "Arabic" },
  { value: "asami", label: "Assamese" },
  { value: "beng", label: "Bengali" },
  { value: "bodo", label: "Bodo" },
  { value: "dogri", label: "Dogri" },
  { value: "gujarati", label: "Gujarati" },
  { value: "kan", label: "Kannada" },
  { value: "kashmiri", label: "Kashmiri" },
  { value: "konkani", label: "Konkani" },
  { value: "maithili", label: "Maithili" },
  { value: "malayalam", label: "Malayalam" },
  { value: "manipuri", label: "Manipuri" },
  { value: "marathi", label: "Marathi" },
  { value: "nepali", label: "Nepali" },
  { value: "odia", label: "Odia" },
  { value: "punjabi", label: "Punjabi" },
  { value: "sanskrit", label: "Sanskrit" },
  { value: "santhali", label: "Santhali" },
  { value: "sindhi", label: "Sindhi" },
  { value: "tamil", label: "Tamil" },
  { value: "telugu", label: "Telugu" },
  { value: "urdu", label: "Urdu" }
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    segment: '',
    investment: '',
    language: '',
    consent: true,
    ipAddress: '', // Store IP Address
    utmSource: ''  // Store UTM Source
  });

  const [errors, setErrors] = useState({
    fullNameError: '',
    phoneError: '',
    stateError: '',
    segmentError: '',
    investmentError: '',
    languageError: '',
  });

  useEffect(() => {
    // Capture the query parameter "utm" from the URL
    const params = new URLSearchParams(window.location.search);
    const utm = params.get('utm');
    if (utm) {
      setFormData(prevState => ({ ...prevState, utmSource: utm }));
    }

    // Fetch the user's IP address using an external API
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setFormData(prevState => ({ ...prevState, ipAddress: data.ip }));
      })
      .catch((error) => console.error('Error fetching IP address:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Regex for name - allows only alphabets and spaces
    const nameRegex = /^[A-Za-z\s]+$/;

    // Regex for phone - allows only numbers and ensures a valid phone format (starts with +91)
    const phoneRegex = /^\d{10}$/;

    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (value && !value.startsWith("+91") && phoneRegex.test("+91" + value)) {
        setFormData({
          ...formData,
          [name]: "+91" + value,
        });
        setErrors({ ...errors, phoneError: '' });
      } else if (value && !phoneRegex.test(value)) {
        setErrors({ ...errors, phoneError: 'Invalid phone number' });
      } else {
        setErrors({ ...errors, phoneError: '' });
      }
    } else if (name === "fullName") {
      if (nameRegex.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({ ...errors, fullNameError: '' });
      } else {
        setErrors({ ...errors, fullNameError: 'Invalid name (only alphabets and spaces allowed)' });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : ''
    });
    setErrors({ ...errors, [`${name}Error`]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (!formData.fullName) validationErrors.fullNameError = 'Full name is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) validationErrors.phoneError = 'Phone number is required and should be valid';
    if (!formData.state) validationErrors.stateError = 'State is required';
    if (!formData.segment) validationErrors.segmentError = 'Segment is required';
    if (!formData.investment) validationErrors.investmentError = 'Investment is required';
    if (!formData.language) validationErrors.languageError = 'Language is required';
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
  
      // Sending formData to the specified URL using POST method
      fetch('https://twmresearchalert.com/subdomain/gateway/registrationget.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      })
        .then(response => response.json()) // Assuming the response is JSON
        .then(data => {
          console.log('Success:', data);
          // Redirect after successful submission
          window.location.href = 'https://twmresearchalert.com/landingpage/thank-you/';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg space-y-4">
      <div className="mb-8">
        <h4 className="text-center text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-3 shadow-md">
          Book Your Free Trial & Start Profit Booking
        </h4>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
          />
          {errors.fullNameError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.fullNameError}</div>
          )}
        </div>

        <div className="relative">
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
          />
          {errors.phoneError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.phoneError}</div>
          )}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
          />
        </div>

        <div className="space-y-4">
          <Select
            name="state"
            value={formData.state ? { value: formData.state, label: formData.state } : ''}
            onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
            options={indianStates.map((state) => ({ value: state, label: state }))}
            placeholder="Select State"
            className="w-full"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                background: '#F9FAFB',
                borderColor: '#E5E7EB',
                '&:hover': {
                  borderColor: '#3B82F6'
                }
              }),
              placeholder: (base) => ({
                ...base,
                color: '#9CA3AF'
              })
            }}
          />
          {errors.stateError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.stateError}</div>
          )}
        </div>

        <div className="space-y-4">
          <Select
            name="segment"
            value={formData.segment ? { value: formData.segment, label: formData.segment } : ''}
            onChange={(selectedOption) => handleSelectChange('segment', selectedOption)}
            options={segments}
            placeholder="Select Segment"
            className="w-full"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                background: '#F9FAFB',
                borderColor: '#E5E7EB',
                '&:hover': {
                  borderColor: '#3B82F6'
                }
              }),
              placeholder: (base) => ({
                ...base,
                color: '#9CA3AF'
              })
            }}
          />
          {errors.segmentError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.segmentError}</div>
          )}
        </div>

        <div className="space-y-4">
          <Select
            name="investment"
            value={formData.investment ? { value: formData.investment, label: formData.investment } : ''}
            onChange={(selectedOption) => handleSelectChange('investment', selectedOption)}
            options={investments}
            placeholder="Select Investment Amount"
            className="w-full"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                background: '#F9FAFB',
                borderColor: '#E5E7EB',
                '&:hover': {
                  borderColor: '#3B82F6'
                }
              }),
              placeholder: (base) => ({
                ...base,
                color: '#9CA3AF'
              })
            }}
          />
          {errors.investmentError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.investmentError}</div>
          )}
        </div>

        <div className="space-y-4">
          <Select
            name="language"
            value={formData.language ? { value: formData.language, label: formData.language } : ''}
            onChange={(selectedOption) => handleSelectChange('language', selectedOption)}
            options={languages}
            placeholder="Select Language"
            className="w-full"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                background: '#F9FAFB',
                borderColor: '#E5E7EB',
                '&:hover': {
                  borderColor: '#3B82F6'
                }
              }),
              placeholder: (base) => ({
                ...base,
                color: '#9CA3AF'
              })
            }}
          />
          {errors.languageError && (
            <div className="text-red-500 text-xs mt-1 ml-1">{errors.languageError}</div>
          )}
        </div>

        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-sm text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-md"
        >
          Submit
        </button>
      </div>
    </form>

  );
};

export default BookingForm;
