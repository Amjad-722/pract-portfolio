import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';

function Profile() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img
        src="https://unicorn-cdn.b-cdn.net/a757ba26-cd77-49b9-b7f5-c13bc7243f09/qnmrmdlg-400x400-(2).png?width=400&height=400"
        alt="John Rush"
        className="bg-white p-6 w-40 h-40 rounded-full shadow-inner"
      />
      <h2 className="font-extrabold">John Rush</h2>
      <p className="profile-bio">
        Founder in a rush. Openly sharing process daily.
      </p>
      <ul className="profile-stats">
        <li>→$2M+ ARR  →100k+ users on b2b</li>
        <li>→10M+ users on b2b2c</li>
      </ul>
      <div className="flex flex-row space-x-4">
        <button className="bg-white text-blue-900 py-2 px-4 rounded-md border border-spacing-1 font-serif hover:bg-blue-950 text-lg font-bold">Website</button>
        <button className="bg-white text-blue-900 py-2 px-4 rounded-md border border-spacing-2 hover:bg-blue-950 text-lg font-bold">Newsletter</button>
      </div>
      <div className="flex flex-row space-x-6 p-4 rounded-md ">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-blue-950  hover:bg-slate-200 h-8 w-8 rounded-md" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={30} className="text-blue-950   hover:bg-slate-200 h-8 w-8 rounded-md" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-blue-950 hover:bg-slate-200 h-8 w-8 rounded-md" />
        </a>
        <a
          href="mailto:john.rush@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={30} className="text-blue-950  hover:bg-slate-200 h-8 w-8 rounded-md" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} className="text-blue-950  hover:bg-slate-200 h-8 w-8 rounded-md" />
        </a>
      </div>
      
     
    </div>
  );
}

export default Profile;
