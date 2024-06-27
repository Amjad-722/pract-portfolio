import React from "react";
import Card from "./Components/Card/Card";
import "./App.css";
import Socials from "./Components/Socials/Socials";
import Youtube from "./Components/Socials/Youtube";
import Gallery from "./Components/Socials/Gallery";
import Support from "./Components/s/Support";
import Footer from "./Components/footer/footer";
import AddCommentButton from "./Components/AddCommentButton/AddCommentButton";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <main className="   bg-[#f5f3ff]">
      <section className="py -8 container mx-auto">
        <div className="">
          <Profile />
        </div>
      </section>
      <div>
      <div className=" p-5">
     
      <AddCommentButton />
    </div>
      </div>

      <section className=" flex flex-col items-center w-full container mx-auto">
        <div className="grid grid-cols-1 gap-4 p-5 w-[600px]">
          <Card/>
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
      <section className="container mt-4 mx-auto">
        <div className="mt-3">
          <Support />
        </div>
      </section>

      

      <section  className="h-80 ">
        
      <Footer/>

      </section>
    </main>
  );
}

export default App;
