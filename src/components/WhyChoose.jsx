import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';

const WhyChoose = () => {
  const stats = [
    {
      id: 1,
      imgSrc: img1,
      title: '150 Cr +',
      description: 'Illustrative Results',
    },
    {
      id: 2,
      imgSrc: img2,
      title: '20+ Years',
      description: 'Industry Experience',
    },
    {
      id: 3,
      imgSrc: img3,
      title: '3.4 Lakhs+',
      description: 'Subscribers',
    },
    {
      id: 4,
      imgSrc: img4,
      title: '5 Lakhs +',
      description: 'Total Research Ideas',
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-6 sm:px-8 md:px-12 select-none justify-between gap-4 sm:gap-6 md:gap-7 mt-12 sm:mt-16 md:mt-24">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex sm:flex-col items-center gap-4 sm:gap-2 bg-white shadow-md rounded-lg sm:rounded-xl p-4 sm:p-5"
        >
          <div className="w-[32px] h-[32px] sm:w-[41px] sm:h-[41px] flex-shrink-0">
            <img
              alt="Image not found"
              fetchPriority="high"
              width="40"
              height="40"
              decoding="async"
              src={stat.imgSrc}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-[40px] font-bold text-blue-600 text-primary">
              {stat.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 mt-1 sm:mt-2">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
