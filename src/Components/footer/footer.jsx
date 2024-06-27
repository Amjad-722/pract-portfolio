import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Subscribe to the Newsletter"
  );

  return (
    <div className="flex flex-col items-center justify-evenly  border px-8 mt-12 mx-60 h-48 rounded-2xl bg-blue-950 border-gray-800 ">
      <div className="flex flex-row space-x-4 justify-center mt-8 gap-2 items-center">
        <input
          type="email"
          placeholder={emailPlaceholder}
          className="px-3 py-2 rounded-xl border border-gray-500 text-sm text-white bg-blue-950 font-medium h-10 w-96"
          onFocus={() => setEmailPlaceholder("")}
          onBlur={(e) => {
            if (e.target.value === "") {
              setEmailPlaceholder("Subscribe to the Newsletter");
            }
          }}
        />
        <button className="text-slate-300 bg-blue-950 px-3 flex justify-between items-center rounded-xl h-10 w-24 border border-gray-500 text-sm font-medium hover:bg-white hover:text-blue-950">
          Sign In
          <IoIosArrowRoundForward  />
        </button>
      </div>
      <div className="flex justify-between items-center mt-10 pb-2 text-slate-300 pt-8 w-full">
        <h3 className="mr-4">© 2024 All rights reserved.</h3>
        <div className="flex ">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              size={30}
              className=" text-slate-300 hover:text-slate-100 h-4 w-4 rounded-md"
            />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialPinterestCircular
              size={30}
              className="text-slate-300 hover:text-slate-100 h-4 w-4 rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
