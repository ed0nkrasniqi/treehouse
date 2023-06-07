import { useState } from "react";
import { motion } from "framer-motion";
import ProjectTitle from "./ProjectTitle";

function ImageSlider({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? data?.prImages.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === data?.prImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const getCurrentImageText = () => {
    if (data && data.prImages && data.prImages.length > 0) {
      return data.prImages[currentImageIndex].imageDesc;
    }
    return "";
  };

  return (
    <div className="image-slider h-full w-full relative">
      {/* <div className="flex  bg-zinc-300 rounded-full sm:w-96 w-64 lg:ml-[96px] ml-5 justify-center py-[5px]">
        <ProjectTitle prtitle={data.prTitle} />
        <p className="font-medium sm:ml-10 ml-5 sm:text-2xl">{getCurrentImageText()}</p>
      </div> */}
      <div className="slider-content flex justify-center h-full">
        <motion.img
          className="h-full w-full object-contain"
          src={data?.prImages[currentImageIndex].image.url}
          alt=""
          key={currentImageIndex}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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

export default ImageSlider;




