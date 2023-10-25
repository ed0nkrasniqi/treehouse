import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



function BlogSlider({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? data?.blog?.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === data?.blog?.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="image-slider h-full w-full relative">

    <div className="slider-content flex justify-center h-full mb-20 ">
      <Image
        className="h-full w-full object-cover "
        src={data?.blog[currentImageIndex]?.blogImg?.url}
        
        width={800}
        height={800}
        key={currentImageIndex}

      />

      <button
        className="prev-button absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full border-2 border-zinc-500 p-3 bg-[#f8f8f6]"
        onClick={previousImage}
        style={{ willChange: "transform" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        className="next-button absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full border-2 border-zinc-500 p-3 bg-[#f8f8f6]"
        onClick={nextImage}
        style={{ willChange: "transform" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>
  );
}

export default BlogSlider;
