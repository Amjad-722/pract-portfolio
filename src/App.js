import React from "react";
import Profile from "./Components/Profile/Profile";
import Card from "./Components/Card/Card";
import "./App.css";
import Socials from "./Components/Socials/Socials";

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <Profile />
        </div>
      </section>

      <section className="bg-[#f5f3ff] h-500 flex flex-col items-center">
        <div className="font-mono">
          <h1 className="text-center mb-1 text-[20px] font-bold">
            Released projects
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <hr className="border-black w-[600px]" />
        </div>

        <div className="grid grid-cols-1 gap-4 p-5 w-[600px]">
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/39d8a25d-4687-41c1-8c63-3df582b81d32/unicorn-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/4c6bbe7e-d7c3-45fa-90c7-e9e07ec6e949/listing-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/af0c4201-9421-4443-87c7-9b73be71a28c/index-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/69622952-d83e-4b03-a9a8-61907e861cfc/devhunt-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/93afec7d-5b67-4707-b7f3-68ce3913c713/filmgrail-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/157c0cb5-fe43-4760-828f-6eebebc4f8bd/allgpts-ios.png?width=600&height=600s"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
        </div>
      </section>

      <section  className="bg-black text-white p-24 w-80 rounded-md mx-auto">
        <div className="">
          <Socials heading='this is a heading'/>
        </div>
      </section>
    </main>
  );
}

export default App;
