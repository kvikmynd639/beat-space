import React from "react";

const SlidingTrack: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <div className="whitespace-nowrap animate-slide text-sm md:text-lg font-custom">
        <span className="mx-8">
          PROVIDES ARTICLES FOR SPACE ENTHUSIASTS.
        </span>
        <span className="mx-8">
          OUR EXPERTS OFFER UP-TO-DATE SPACE INFORMATION.
        </span>
        <span className="mx-8">DISCOVERING THE WONDERS OF SPACE.</span>
      </div>
    </div>
  );
};

export default SlidingTrack;
