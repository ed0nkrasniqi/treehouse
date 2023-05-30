import { useState } from "react";
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
        <img
          className="rounded-xl h-full w-full object-contain"
          src={data?.prImages[currentImageIndex].image.url}
          alt=""
        />

        <button
          className="prev-button absolute top-1/2 left-2 transform -translate-y-1/2"
          onClick={previousImage}
        >
          Prev
        </button>
        <button
          className="next-button absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;



