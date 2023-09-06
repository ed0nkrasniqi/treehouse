import React, { useState } from 'react';
import { Comfortaa } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

const Catalog = ({ data, footerData }) => {
  console.log(data);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedStories, setSelectedStories] = useState([]);
  const [selectedGarage, setSelectedGarage] = useState('');
  const [showFilters, setShowFilters] = useState(false); // State for filters toggle

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBedroomsChange = (bedroom) => {
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms(selectedBedrooms.filter((b) => b !== bedroom));
    } else {
      setSelectedBedrooms([...selectedBedrooms, bedroom]);
    }
  };

  const handleBathroomsChange = (bathroom) => {
    if (selectedBathrooms.includes(bathroom)) {
      setSelectedBathrooms(selectedBathrooms.filter((b) => b !== bathroom));
    } else {
      setSelectedBathrooms([...selectedBathrooms, bathroom]);
    }
  };

  const handleStoriesChange = (story) => {
    if (selectedStories.includes(story)) {
      setSelectedStories(selectedStories.filter((s) => s !== story));
    } else {
      setSelectedStories([...selectedStories, story]);
    }
  };

  const handleGarageChange = (garage) => {
    setSelectedGarage(garage);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedBedrooms([]);
    setSelectedBathrooms([]);
    setSelectedStories([]);
    setSelectedGarage('');
  };

  const filteredProducts = data.docs.filter((product) => {
    const categoryMatch = !selectedCategory || product?.style?.includes(selectedCategory);
    const bedroomsMatch = selectedBedrooms.length === 0 || selectedBedrooms.includes(product.bedroomsNumber);
    const bathroomsMatch = selectedBathrooms.length === 0 || selectedBathrooms.includes(product.bathrooms);
    const storiesMatch = selectedStories.length === 0 || selectedStories.includes(product.stories);
    const garageMatch = !selectedGarage || product.garage === selectedGarage;
    return categoryMatch && bedroomsMatch && bathroomsMatch && storiesMatch && garageMatch;
  });

  return (
    <>
      <Header />
      <div className={`${comfortaa.className} lg:flex justify-center `}>
        {/* Mobile filters toggle button */}
        <div className="lg:hidden mx-5 my-5">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-green-900 text-white px-4 py-2 rounded-lg"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filters section */}
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:float-left pb-10  mr-5 rounded-r-xl `}>
          <div className="my-10 pb-10 border-b-2 lg:mx-10 mx-5 border-zinc-300 ">
            <h3 className="text-2xl">Filters</h3>
          </div>

          <div className="lg:mx-10 mx-5 pb-5 ">
            <h4 className="text-lg mb-2">Bedrooms</h4>
            <div className="flex">
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedBedrooms.includes(2) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBedroomsChange(2)}
              >
                2
              </button>
              <button
                className={`py-2 px-4 rounded-xl mx-5 ${
                  selectedBedrooms.includes(3) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBedroomsChange(3)}
              >
                3
              </button>
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedBedrooms.includes(4) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBedroomsChange(4)}
              >
                4
              </button>
            </div>
          </div>

          <div className="lg:mx-10 mx-5 pb-5">
            <h4 className="text-lg mb-2">Bathrooms</h4>
            <div className="flex ">
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedBathrooms.includes(2) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBathroomsChange(2)}
              >
                2
              </button>
              <button
                className={`py-2 px-4 mx-5 rounded-xl ${
                  selectedBathrooms.includes(3) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBathroomsChange(3)}
              >
                3
              </button>
              <button
                className={`py-2 px-4  rounded-xl ${
                  selectedBathrooms.includes(4) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleBathroomsChange(4)}
              >
                4
              </button>
            </div>
          </div>

          <div className="lg:mx-10 mx-5 pb-5">
            <h4 className="text-lg mb-2">Stories</h4>
            <div className="flex">
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedStories.includes(1) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleStoriesChange(1)}
              >
                1
              </button>
              <button
                className={`py-2 px-4 mx-5 rounded-xl ${
                  selectedStories.includes(2) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleStoriesChange(2)}
              >
                2
              </button>
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedStories.includes(3) ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleStoriesChange(3)}
              >
                3
              </button>
            </div>
          </div>

          <div className="lg:mx-10 mx-5 pb-10 border-b-2 border-zinc-300">
            <h4 className="text-lg mb-2">Garage</h4>
            <div className="flex">
              <button
                className={`py-2 px-4 rounded-xl ${
                  selectedGarage === 'Yes' ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleGarageChange('Yes')}
              >
                Yes
              </button>
              <button
                className={`py-2 px-4 mx-5 rounded-xl ${
                  selectedGarage === 'No' ? 'bg-green-900 text-white' : 'bg-white border-2 border-green-900'
                }`}
                onClick={() => handleGarageChange('No')}
              >
                No
              </button>
            </div>
          </div>

          <div className="lg:m-10 mx-5">
            <h4 className="text-lg my-5">Style</h4>
            <div className="xl:flex  ">
              <div className="mr-5 xl:mb-0 mb-5 w-[200px]   rounded-xl border-[2px] border-zinc-300 hover:border-zinc-400">
                <Image
                  src="/catalog1.jpg"
                  width={200}
                  height={200}
                  alt="Modern"
                  className={`rounded-t-xl ${
                    selectedCategory.includes("Modern") ? "border-green-900" : ""
                  }`}
                  onClick={() => handleCategoryChange("Modern")}
                  style={{ width: "200px", height: "120px", cursor: "pointer" }}
                />
                <div className="bg-white rounded-b-lg">
                  <p className="text-center py-1 text-[15px]">Modern House</p>
                </div>
              </div>
              <div className="rounded-xl w-[200px] border-2 shadow-sm border-zinc-300 hover:border-zinc-400">
                <Image
                  src="/catalog2.jpg"
                  width={200}
                  height={200}
                  alt="Classic"
                  className={`rounded-t-xl ${
                    selectedCategory.includes("Classic") ? "border-green-900" : ""
                  }`}
                  onClick={() => handleCategoryChange("Classic")}
                  style={{ width: "200px", height: "120px", cursor: "pointer" }}
                />
                <div className="bg-white rounded-b-lg">
                  <p className="text-center py-1 text-[15px]">Classic House</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Filters button */}
          <div className="  lg:mx-10 mx-5 pb-5">
            <button
              className="bg-green-900 text-white mt-10 px-4 py-2 rounded-xl"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Product list */}
        <div className=" rounded-xl lg:float-right lg::w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p className="lg:text-6xl m-2 text-3xl text-center">Sorry, there is not a house with these requirements</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-4 lg:px-10 px-5 py-8">
              {filteredProducts?.map((product, index) => (
                <div className="border-2 rounded-xl hover:border-zinc-400" key={product.id}>
                  <Link href={`/catalog/${product?.id}`}>
                    <Image
                      src={product.prImages[0]?.image?.url}
                      alt={product?.prTitle}
                      className="w-full rounded-t-xl h-96 object-cover"
                      width={500}
                      height={500}
                    />
                  </Link>

                  <div className="flex justify-between items-center p-2">
                    <h3 className="text-xl font-bold">{product?.prTitle}</h3>
                    <p className='opacity-80'>
                      {product?.houseSquare ?? ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer data={footerData} />
    </>
  );
};

export default Catalog;


export async function getStaticProps() {
  const res = await fetch(`https://cms.treehouse-ks.eu/api/projects/`);
  const data = await res.json();

  const footerRes = await fetch(
    "https://cms.treehouse-ks.eu/api/globals/footer"
  );
  const footerData = await footerRes.json();

  return { props: { data, footerData } };
}

