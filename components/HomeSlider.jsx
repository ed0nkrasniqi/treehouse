import { useState } from "react";
import ProjectTitle from "./ProjectTitle";

function HomeSlider({ data }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage(
      currentImage === 0 ? data?.prImages.length - 1 : currentImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage(
      currentImage === data?.prImages.length - 1 ? 0 : currentImage + 1
    );
  };

  const getCurrentImageText = () => {
    if (data && data.prImages && data.prImages.length > 0) {
      return data.prImages[currentImage].imageDesc;
    }
    return "";
  };

  return (
    <>
    </>
  );
}

export default HomeSlider;