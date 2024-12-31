// src/AnimatedCard.jsx


const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <img className="w-full" src="https://via.placeholder.com/400" alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Slide Up Card</div>
        <p className="text-gray-700 text-base">
          This card slides up on hover for an interactive experience.
        </p>
      </div>
    </div>
  </div>
  );
};

export default AnimatedCard;
