import React from "react";
import { FaLink } from "react-icons/fa6";

const Card = ({ link, logo, heading, text }) => {
  return (
    <div className="px-6">
      <a
        href={link}
        className="block w-full  rounded-lg border-[1px] border-gray-300 hover:border-gray-500 transition-all duration-200 relative overflow-hidden"
      >
        <div className="flex items-center justify-between gap-2 p-2 cursor-pointer group">
          <div className="flex items-center gap-2">
            <img className="w-14 h-14 rounded-[2px]" src={logo} alt="Logo" />
            <div>
              <h5 className="text-md font-medium text-gray-900">{heading}</h5>
              <p className="text-xs text-gray-600">{text}</p>
            </div>
          </div>
          <div className="opacity-0 absolute right-3 inset-0 flex items-center justify-end bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <FaLink className="text-black" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
