"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState<string>("/image/arlecchino1.jpeg");

  const handleClick = () => {
    router.push("/data");
  };

  // Change background image periodically
  useEffect(() => {
    const images = ["/image/arlecchino1.jpeg", "/image/arlecchino2.jpeg"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="text-center flex flex-col items-center">
        {/* Welcome Message */}
        <h3
          className="mb-4 text-5xl font-extrabold text-yellow-300 bg-gray-900 bg-opacity-70 rounded-full px-8 py-4 drop-shadow-lg shadow-yellow-400 animate-pulse"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          Welcome to My Portfolio
        </h3>
        <h3
          className="mb-8 text-3xl font-semibold text-purple-200 bg-gray-800 bg-opacity-80 rounded-full px-6 py-2 drop-shadow-md inline-block"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          Thuwanon Najai
        </h3>

        {/* Button */}
        <button
          onClick={handleClick}
          className="px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:from-purple-400 hover:to-pink-500 hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
