"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/data");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/background 1.jpg')",
      }}
    >
      <div className="text-center flex flex-col items-center">
        {/* Welcome Message */}
        <h3
          className="mb-4 text-5xl font-extrabold text-gray-100 bg-gray-800 bg-opacity-80 rounded-full px-8 py-4 drop-shadow-lg"
        >
          Welcome to My Portfolio
        </h3>
        <h3
          className="mb-8 text-3xl font-semibold text-gray-200 bg-gray-700 bg-opacity-80 rounded-full px-6 py-2 drop-shadow-md inline-block"
        >
          
        </h3>

        {/* Button */}
        <button
          onClick={handleClick}
          className="px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}