import React from "react";

export default function Socials({ heading }) {
  return (
    <>
        <div>
          <div className="ml-3">
            <h5 className="text-lg font-semibold text-white ">{heading}</h5>
            {/* <p className="text-gray-600">{text}</p> */}
          </div>
        </div>
        <div>
          {/* {logo && (
            <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
          )} */}
        </div>
    </>
  );
}
