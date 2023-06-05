import { useState } from "react";

function Slider({ data }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage(
      currentImage === 0 ? data?.firstsliderImages.length - 1 : currentImage - 1
    );
  };

  const nextImage = () => {
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
    return "";
  };
   const getMoreImageText = () => {
     if (data && data.firstsliderImages && data.firstsliderImages.length > 0) {
       const currentImageData = data.firstsliderImages[currentImage];
       return (
          <div className=" border-2 bg-white shadow-lg border-zinc-400 rounded-xl p-5 justify-between">
          <div className=" text-3xl text-center border-b-2 mb-10 pb-5">{currentImageData.houseName}</div>
          <div className="flex">
          <div className="text-white bg-green-900 text-xl text-center  rounded-2xl py-1 sm:px-5 px-4 mr-5">{currentImageData.houseStyle}</div>
          <div className="text-white bg-green-900 text-xl text-center rounded-2xl py-1 sm:px-5 px-4">{currentImageData.houseSq}m²</div>
          </div>
          <div className="flex flex-col">          
          <div className="text-xl font-medium mt-5">Stories: {currentImageData.hStories}</div>
          <div className="text-xl font-medium mt-3">Bedrooms: {currentImageData.hBedrooms}</div>
          <div className="text-xl font-medium mt-3">Bathrooms: {currentImageData.hBathrooms}</div>
          <div className="text-xl font-medium mt-3">Garage: {currentImageData.hasGarage}</div>
          </div>           
          </div>
       );
     }
     return "";
   };

  return (
    <>
      <div className="lg:p-32 p-5 bg-[#f8f8f6]">
        <div className="mb-20">
          <h3 className="text-green-900 text-4xl">Nulla suscipit risus ut urna fermentum, ac ullamcorper mi malesuada</h3>
          <p className="text-xl">Praesent volutpat lorem in dolor consectetur, ut interdum nibh viverra</p>
        </div>
        <div className="sm:flex justify-between">
          <div className="border-2 p-1 sm:w-[500px] shadow-lg lg:m-0 mb-5 border-zinc-400 rounded-xl">
            <img
              className="image-slider2 rounded-t-xl h-[300px]"
              src={data?.firstsliderImages[currentImage].hsImage.url}
              width={500}
            />
            {getCurrentImageText()}
          </div>
          <div className="sm:w-[450px] sm:ml-5 lg:mx-20 ">{getMoreImageText()}</div>

          
           
        </div>

        <div className="flex justify-center  mt-10">
          <button
            className="prev-button bg-green-900 text-center text-white py-2 px-10 rounded-lg mr-2"
            onClick={previousImage}
          >
            Prev
          </button>
          <button
            className="next-button bg-green-900 text-center text-white py-2 px-10 rounded-lg mr-2"
            onClick={nextImage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;


export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:3000/api/homeslider/647a1bafb0809013fa9aeef8"
  );
  const data = await res.json();

  return { props: { data } };
}