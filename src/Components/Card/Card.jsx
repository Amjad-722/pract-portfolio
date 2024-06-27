import React from "react";
import { FaLink } from "react-icons/fa6";

const Card = ({ link, logo, heading, text }) => {
  return (
    <div className="px-6">
      <a
        href={link}
        className="block w-full rounded-lg border-[1px] border-gray-300 hover:border-gray-500 transition-all duration-200 relative overflow-hidden"
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

const CardList = () => {
  const cards = [
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/39d8a25d-4687-41c1-8c63-3df582b81d32/unicorn-ios.png?width=600&height=600",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    },
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/4c6bbe7e-d7c3-45fa-90c7-e9e07ec6e949/listing-ios.png?width=600&height=600",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    },
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/af0c4201-9421-4443-87c7-9b73be71a28c/index-ios.png?width=600&height=600",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    },
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/69622952-d83e-4b03-a9a8-61907e861cfc/devhunt-ios.png?width=600&height=600",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    },
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/93afec7d-5b67-4707-b7f3-68ce3913c713/filmgrail-ios.png?width=600&height=600",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    },
    {
      link: "https://example.com",
      logo: "https://unicorn-cdn.b-cdn.net/157c0cb5-fe43-4760-828f-6eebebc4f8bd/allgpts-ios.png?width=600&height=600s",
      heading: "Unicorn Platform",
      text: "Simple Website builder for busy founders"
    }
  ];

  return (
    <section className="flex flex-col items-center w-full container mx-auto">
      <div className="grid grid-cols-1 gap-4 p-5 w-[600px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            logo={card.logo}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
