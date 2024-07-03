import React, { useEffect, useState } from "react";

function AddCommentButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1); // Update the count every second
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getBorderColor = () => {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    return colors[count % colors.length]; // Cycle through colors
  };

  return (
    <div>
      <div className="fixed  bottom-3 flex justify-center items-center mx-auto w-full h-10 z-50 ">
        <div
          style={{
            border: `4px solid ${getBorderColor()}`,
          }}
          className="border bg-blue-400 text-white p-1  transition-all duration-300 ease-in-out"
        >
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">+ Create Website From This Template</button>
        </div>
      </div>
    </div>
  );
}

export default AddCommentButton;
