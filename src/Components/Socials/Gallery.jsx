import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";


const photos = [
  "https://unicorn-cdn.b-cdn.net/24934d1f-378a-49dc-a78c-eba105152be6/theregisti-ziszilqlsom-unsplash-(1).png?width=1476&height=986",
  "https://unicorn-cdn.b-cdn.net/2efd4e37-8600-4f45-b74c-1db24e525e52/kal-visuals-b5v2bz8uso0-unsplash-(1).png?width=1476&height=984",
  "https://unicorn-cdn.b-cdn.net/c9a6965d-e063-4e99-8701-35741c7dd8ad/nubelson-fernandes-ie71-tmrrke-unsplash-(1).png?width=1476&height=832",
  "https://unicorn-cdn.b-cdn.net/7f56e79b-1b1b-4a6b-b652-f6392e58eb74/onur-binay-o2-ezngziyk-unsplash-(1).png?width=1476&height=832",
  
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="  flex flex-col items-center">
      <div className="w-full max-w-xl  font-normal">
        <h1 className=" text-start text-[18px]  text-purple-950 font-semibold">GALLERY</h1>
        <hr className="border-gray-600 border-[0.6px] mt-2"/> 
      </div>
     

      <div className="mt-3 relative flex items-center justify-center">
        <button
          className="absolute left-[-16px] bg-gray-500 text-white p-2 rounded-full"
          onClick={prevPhoto}
        >
          <FaCircleArrowLeft />
        </button>
        <div className="rounded-2xl overflow-hidden w-full h-[56vh]">
          <img
            className="rounded-2xl"
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            width="560"
            height="315"
          />
        </div>
        <button
          className="absolute right-[-16px] bg-gray-500 text-white p-2 rounded-full"
          onClick={nextPhoto}
        >
           <FaCircleArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Gallery;
