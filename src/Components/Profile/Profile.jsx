import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter,FaYoutube } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { GiNewspaper } from "react-icons/gi";
import { BsThreads } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center pt-16 gap-2">
      <img
        src="https://unicorn-cdn.b-cdn.net/a757ba26-cd77-49b9-b7f5-c13bc7243f09/qnmrmdlg-400x400-(2).png?width=400&height=400"
        alt="John Rush"
        className="bg-gray-200 p-2 w-32 h-32 rounded-full shadow-inner"
      />
      <h2 className="text-[28px] font-semibold">John Rush</h2>
      <p className="profile-bio text-center w-[68%]">
        Founder in a rush. Openly sharing process daily
        →$2M+ARR→100k+ users on b2b. <br/>
        →10M+ users on b2b2c
      </p>
     
      <div className="flex flex-row space-x-4 pt-4">
        <button className=" text-blue-900 bg-gray-300 px-3 flex gap-2 justify-between items-center rounded-xl h-10 w-35 border border-gray-500 text-sm  font-medium hover:bg-blue-950 hover:text-white"><TfiWorld />Website</button>
        <button className=" text-blue-900  px-3 flex gap-2 justify-between items-center rounded-xl h-10 w-30 border  border-gray-500  text-sm  font-medium hover:bg-blue-950 hover:text-white "><GiNewspaper />Newsletter</button>
      </div>
      <div className="flex flex-row space-x-6 mt-6 rounded-md ">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-blue-950   h-4 w-4 rounded-md" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-md" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram  size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-md" />
        </a>
      
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-blue-950  hover:bg-slate-200 h-4 w-4 rounded-md" />
        </a>
        <a
          href="mailto:john.rush@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsThreads  size={30} className="text-blue-950  hover:bg-slate-200 h-4 w-4 rounded-md" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200  h-4 w-4 rounded-mdd" />
        </a>
      </div>
      
     
    </div>
  );
}

export default Profile;