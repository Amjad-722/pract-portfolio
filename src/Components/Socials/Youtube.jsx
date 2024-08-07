import React from "react";

function Youtube() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8">
      <div className="w-full max-w-xl font-normal">
        <h1 className="text-start text-[18px] text-purple-950 font-semibold">
          LATEST VIDEO
        </h1>
        <p className="text-gray-500">Check out more on my channel</p>
        <hr className="border-gray-600 border-[0.6px] mt-2" />
      </div>

      <div className="mt-3 rounded-2xl w-full h-auto aspect-w-16 aspect-h-16">
        <iframe
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/52FkiPbDBi4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Youtube;
