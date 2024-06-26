import React from "react";
import Profile from "./Components/Profile/Profile";
import Card from "./Components/Card/Card";
import "./App.css";
import Socials from "./Components/Socials/Socials";
import Youtube from "./Components/Socials/Youtube";
import Gallery from "./Components/Socials/Gallery";
import Support from "./Components/s/Support";

function App() {
  return (
    <main className="   bg-[#f5f3ff]">

      
      <section className="py -8 container mx-auto">
        <div className="">
          <Profile />
        </div>
      </section>

      <section className=" flex flex-col items-center w-full container mx-auto">
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

      <section className="container mx-auto">
        <Socials />
      </section>

      <section className="mt-10 container mx-auto">
        <Youtube />
      </section>

      <section className="mt-10 container mx-auto">
        <Gallery />
      </section>
      <section className="container mx-auto">
        <div className="mt-3">
          <Support />
        </div>
      </section>


    </main>
  );
}

export default App;
