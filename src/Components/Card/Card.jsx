import React from "react";
import { FaLink } from "react-icons/fa6";

const Card = ({ link, logo, heading, text }) => {
  return (
    <a
      href={link}
      className="block w-full max-w-md mx-auto bg-white rounded-lg border-2 border-gray-500 hover:border-black shadow-md transition-all duration-200"
    >
      <div>
        <div className="flex items-center p-5">
          <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
          <div className="ml-3">
            <h5 className="text-lg font-semibold text-gray-900">{heading}</h5>
            <p className="text-gray-600">{text}</p>
          </div>
          <div  className="opacity-0 transition-opacity duration-100 hover:opacity-100">
            <FaLink />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
