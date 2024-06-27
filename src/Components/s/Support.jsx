import React from "react";

const images = [
  {
    logo: "https://unicorn-cdn.b-cdn.net/c970fcce-bd41-43e9-bb0f-f858ab8f64c8/patreon.png?width=894&height=716",
  },
  {
    logo: "https://unicorn-cdn.b-cdn.net/af8d8c8a-a6a0-4898-be9e-9924e9acdf65/buymeacoffee.png?width=894&height=716",
  },
  {
    logo: "https://unicorn-cdn.b-cdn.net/a6398516-bdb1-46f6-ad7a-1cc3fa97c9b8/bitcoin.png?width=894&height=716",
  },
];

function Support() {
  return (
    <div>
      <div className="w-full max-w-xl  font-normal">
        <h1 className=" text-start text-[18px]  text-purple-950 font-semibold">
          Support Me
        </h1>
        <hr className="border-gray-600 border-[0.6px] mt-2" />
      </div>

      <div className="flex justify-center gap-4 px-10 mt-4  ">
        {images.map((item, index) => (
          <div key={index}>
            <div className="bg-white  rounded-lg shadow-md h-40 w-40 flex justify-center gap items-center">
              <img src={item.logo} alt="Logo" className="h-40 w-40 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
