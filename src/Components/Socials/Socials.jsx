import React from "react";

function Socials() {
  return (
    <section className="flex flex-col mt-3 items-center">
      <div className="font-normal w-full ">
        <h1 className="text-[18px]  text-purple-950 font-semibold">
          New Podcast Episode
        </h1>
        <p className="text-gray-500">Check out more on Spotify</p>
        <hr className="border-gray-600 border-[0.6px] mt-2"/> 
      </div>
     
      <div className="bg-black p-12 text-white text-center mt-4 rounded-2xl relative">
        <h1 className="font-serif text-[18px] font-bold">
          Sorry, that's not currently available in your region.
        </h1>
        <p className="text-gray-400 font-serif">
          Luckily, lots of other stuff is.
        </p>
      </div>
    </section>
  );
}

export default Socials;
