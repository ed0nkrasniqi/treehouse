import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer"

function Slider({ data }) {
  const [currentImage, setCurrentImage] = useState(0);
   const [aX , setAX] = useState(10);
  const previousImage = () => {
    setAX(-10);
    setCurrentImage(
      currentImage === 0 ? data?.firstsliderImages.length - 1 : currentImage - 1
    );
    
  };


   
  
  const nextImage = () => {
    setAX(10);
    setCurrentImage(
      currentImage === data?.firstsliderImages.length - 1 ? 0 : currentImage + 1
    );
  };

  const getCurrentImageText = () => {
    if (data && data.firstsliderImages && data.firstsliderImages.length > 0) {
      const currentImageData = data.firstsliderImages[currentImage];
      return (
        <div className="p-2 text-xl flex justify-between">
          <div className="font-medium">{currentImageData.houseName}</div>
        </div>
      );
    }
    return '';
  };

  const getMoreImageText = () => {
    if (data && data.firstsliderImages && data.firstsliderImages.length > 0) {
      const currentImageData = data.firstsliderImages[currentImage];

      

      return (
        <motion.div
          className="border-2 bg-white shadow-lg border-zinc-400 rounded-xl px-5  justify-between"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:text-3xl text-xl my-10 text-center border-b-2  pb-5">
            {currentImageData.houseName}
          </div>
          <div className="flex">
            <div className="text-white bg-green-900 lg:text-xl text-center  rounded-xl py-1 sm:px-5 px-4 mr-5">
              {currentImageData.houseStyle}
            </div>
            <div className="text-white bg-green-900 lg:text-xl text-center rounded-xl py-1 sm:px-5 px-4">
              {currentImageData.houseSq}m²
            </div>
          </div>
          <div className="flex flex-col">
            <div className="lg:text-xl font-medium mt-5">
              Stories: {currentImageData.hStories}
            </div>
            <div className="lg:text-xl font-medium mt-3">
              Bedrooms: {currentImageData.hBedrooms}
            </div>
            <div className="lg:text-xl font-medium mt-3">
              Bathrooms: {currentImageData.hBathrooms}
            </div>
            <div className="lg:text-xl font-medium mt-3 mb-3">
              Garage: {currentImageData.hasGarage}
            </div>
          </div>
        </motion.div>
      );
    }
    return '';
  };

  const slideVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    prev: { x: 10, opacity: 0 },
  };

    const[ref, inView] = useInView({
  threshold: 0.5
});


  return (
    <motion.div 
    ref={ref}
    initial={{opacity : 0}}
    animate ={inView && {opacity: 1 , transition : {duration: 0.5 }}}
    className="lg:p-32 px-5 py-20 bg-[#f8f8f6]">
      <motion.div
        className="mb-20 text-center"
        initial="hidden"
        animate="visible"
        variants={slideVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-green-900 lg:text-4xl text-2xl mb-5"
          variants={slideVariants}
        >
          Nulla suscipit risus ut urna fermentum, ac ullamcorper mi malesuada
        </motion.h3>
        <motion.p className="lg:text-xl" variants={slideVariants}>
          Praesent volutpat lorem in dolor consectetur, ut interdum nibh viverra
        </motion.p>
      </motion.div>
      <div className="sm:flex justify-center">
        <motion.div
          className="border-2 mr-2  sm:w-[500px]  shadow-lg lg:m-0 mb-5 border-zinc-400 rounded-xl"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
          transition={{ duration: 0.8 }}
          key={currentImage}
        >
          <img
            className="image-slider2 rounded-t-xl h-[300px]"
            src={data?.firstsliderImages[currentImage].hsImage.url}
            width={500}
          />
          {getCurrentImageText()}
        </motion.div>
        <motion.div
          className="sm:w-[450px]  lg:ml-32"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
        >
          {getMoreImageText()}
        </motion.div>
      </div>
      <div className="flex justify-center mt-10">
        <motion.button
          className="prev-button border-2 border-green-900 bg-green-900 hover:bg-green-950 hover:border-green-950 text-center text-white py-2 px-10 rounded-lg mr-2"
          onClick={previousImage}
          initial="hidden"
          animate="visible"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
        </motion.button>
        <motion.button
          className="next-butt border-green-900 border-2 hover:bg-green-950 hover:border-green-950 bg-green-900 text-center text-white py-2 px-10 rounded-xl mr-2"
          onClick={nextImage}
          initial="hidden"
          animate="visible"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Slider;





export async function getStaticProps() {
  const res = await fetch(
    "https://cms.treehouse-ks.eu/api/homeslider/647a1bafb0809013fa9aeef8"
  );
  const data = await res.json();

  return { props: { data } };
}