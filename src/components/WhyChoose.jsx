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
    <div className="grid lg:grid-cols-4 grid-cols-1 px-12 select-none justify-between md:gap-7 gap-4 md:mt-24 mt-12 xl:pe-14">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="md:block flex items-center gap-2 bg-white shadow-md md:rounded-[15px] rounded-[6px] md:p-5 py-4 px-2"
        >
          <div className="md:w-[41px] md:h-[41px] w-[24px] h-[24px]">
            <img
              alt="Image not found"
              fetchPriority="high"
              width="40"
              height="40"
              decoding="async"
              src={stat.imgSrc}
              style={{ color: 'transparent', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className="xl:text-[40px] xl:leading-[44px] md:text-[2.5rem] md:leading-[2.5rem] font-bold text-[18px] leading-[22px] text-blue-600 text-primary md:mt-5">
              {stat.title}
            </h2>
            <p className="md:text-[16px] text-[9px] text-[#231F20] md:mt-3 mt-1">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
