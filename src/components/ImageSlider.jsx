import { useEffect, useState } from "react";
import { images } from "../data/images";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative right-1 ml-1
        w-full
        h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]
        mt-16
        rounded-xl md:rounded-2xl
        border border-gray-200  
        overflow-hidden
      "
    >
      {/* Image */}
      <img
        src={images[index].src}
        alt={images[index].text}
        className="
          absolute inset-0
          w-full h-full 
          object-cover 
          transition-all duration-700 ease-in-out
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Text */}
      <div
        className="
          absolute 
          bottom-6 sm:bottom-10 md:bottom-14 
          w-full 
          text-center 
          px-4 sm:px-6
        "
      >
        <h2
          className="
            text-white 
            text-lg sm:text-2xl md:text-3xl lg:text-4xl 
            font-bold 
            drop-shadow-lg
          "
        >
          {images[index].text}
        </h2>
      </div>
    </div>
  );
}
