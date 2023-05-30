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

const Catalog = ({ data }) => {
 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedStories, setSelectedStories] = useState([]);
  const [selectedGarage, setSelectedGarage] = useState('');

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
 
  const filteredProducts = data.docs.filter((product) => {
    const categoryMatch = !selectedCategory || product.categories.includes(selectedCategory);
    const bedroomsMatch =
      selectedBedrooms.length === 0 || selectedBedrooms.includes(product.bedroomsNumber);
    const bathroomsMatch =
      selectedBathrooms.length === 0 || selectedBathrooms.includes(product.bathrooms);
    const storiesMatch = selectedStories.length === 0 || selectedStories.includes(product.stories);
    const garageMatch = !selectedGarage || product.garage === selectedGarage;
    return categoryMatch && bedroomsMatch && bathroomsMatch && storiesMatch && garageMatch;
  });

  return (
    <>
      <Header />
      <div className={`${comfortaa.className} sm:flex`}>
        <div className="float-left pb-10  mr-10 rounded-r-xl bg-[#f8f8f6] ">
          <div className="my-10 pb-10 border-b-2 mx-10 border-zinc-300 ">
            <h3 className="text-2xl">Catalog Filters</h3>
          </div>

          <div className="mx-10 pb-5 ">
            <h4 className="text-xl mb-2">Bedrooms</h4>
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

          <div className="mx-10 pb-5">
            <h4 className="text-xl mb-2">Bathrooms</h4>
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

          <div className="mx-10 pb-5">
            <h4 className="text-xl mb-2">Stories</h4>
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

          <div className="mx-10 pb-10 border-b-2 border-zinc-300">
            <h4 className="text-xl mb-2">Garage</h4>
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

          <div className="m-10">
            <h4 className="text-xl mb-5">Style Category</h4>
            <div className="flex ">
              <div className="mr-5  rounded-xl border-[2px] border-zinc-300 hover:border-zinc-400">
                <img
                  src="catalog1.jpg"
                  alt="Modern House"
                  className={`rounded-t-xl ${
                    selectedCategory.includes("Modern House") ? "border-green-900" : ""
                  }`}
                  onClick={() => handleCategoryChange("Modern House")}
                  style={{ width: "200px", height: "120px", cursor: "pointer" }}
                />
                <div className="bg-white rounded-b-lg">
                  <p className="text-center py-1 text-[15px]">Modern House</p>
                </div>
              </div>
              <div className="rounded-xl border-2 shadow-sm border-zinc-300 hover:border-zinc-400">
                <img
                  src="catalog2.jpg"
                  alt="Classic House"
                  className={`rounded-t-xl ${
                    selectedCategory.includes("Classic House") ? "border-green-900" : ""
                  }`}
                  onClick={() => handleCategoryChange("Classic House")}
                  style={{ width: "200px", height: "120px", cursor: "pointer" }}
                />
                <div className="bg-white rounded-b-lg">
                  <p className="text-center py-1 text-[15px]">Classic House</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f8f6] rounded-xl float-right sm:w-3/4">
          <div className="grid sm:grid-cols-2 gap-4 px-10 py-8">
            {data?.docs?.map((product) => (
              <div className="border-2 rounded-xl hover:border-zinc-400" key={product.id}>
                <Link href={`/catalog/${product?.id}`}>
                  <img
                    src={product.prImages[0]?.image?.url}
                    alt={product?.prTitle}
                    className="w-full rounded-t-xl h-96 object-cover"
                  />
                </Link>

                <div className="flex justify-between items-center p-2">
                  <h3 className="text-xl font-bold">{product?.prTitle}</h3>
                  <Link className="text-xl border-2 rounded-xl px-2 py-[6px] border-green-900 hover:text-white font-bold hover:bg-green-900" href={`/catalog/${product?.id}`}>
                    
                      View Details
                    
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {comfortaa.styles}
    </>
  );
};

export default Catalog;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/projects/`);
  const data = await res.json();

  return { props: { data } };
}