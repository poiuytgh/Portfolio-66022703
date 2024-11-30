"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "/image/arlecchino1.jpeg"
  );
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]); // Tracks all completed texts
  const texts = ["Welcome to My Portfolio", "Thuwanon Najai"]; // Texts to type
  const [textIndex, setTextIndex] = useState<number>(0); // Current text index
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // Current character index
  const [showButton, setShowButton] = useState<boolean>(false); // State to control button visibility

  const handleClick = () => {
    router.push("/data");
  };

  // Change background image periodically
  useEffect(() => {
    const images = ["/image/arlecchino1.jpeg", "/image/arlecchino2.jpeg"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex] || "/image/default.jpeg");
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Typing effect for the text
  useEffect(() => {
    if (textIndex < texts.length) {
      if (currentCharIndex < texts[textIndex].length) {
        const typingInterval = setInterval(() => {
          setDisplayedTexts((prev) => {
            const updatedTexts = [...prev];
            const newText =
              (updatedTexts[textIndex] || "") + texts[textIndex][currentCharIndex];
            updatedTexts[textIndex] = newText;
            return updatedTexts;
          });
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }, 100); // Typing speed

        return () => clearInterval(typingInterval);
      } else if (textIndex + 1 < texts.length) {
        // Move to the next text if available
        const delayTimeout = setTimeout(() => {
          setTextIndex((prevIndex) => prevIndex + 1);
          setCurrentCharIndex(0); // Reset character index
        }, 1000); // Delay before typing the next text

        return () => clearTimeout(delayTimeout);
      } else {
        // Show the button after both texts are typed
        const buttonDelay = setTimeout(() => {
          setShowButton(true); // Show the button after 1 second
        }, 1000);

        return () => clearTimeout(buttonDelay);
      }
    }
  }, [currentCharIndex, textIndex]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="text-center flex flex-col items-center">
        {/* Typing Effect Text */}
        <div className="bg-gray-900 bg-opacity-80 rounded-xl px-8 py-6 shadow-lg shadow-purple-400">
          <h3
            className="text-4xl font-bold text-purple-300"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            {displayedTexts[0]} {/* First line */}
          </h3>
          <h3
            className="text-4xl font-bold text-purple-300 mt-4"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            {displayedTexts[1]} {/* Second line */}
          </h3>
        </div>

        {/* Button */}
        {showButton && (
          <button
            onClick={handleClick}
            className="mt-8 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:from-purple-400 hover:to-pink-500 hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 opacity-0 animate-fade-in"
          >
            View My Portfolio
          </button>
        )}
      </div>
    </div>
  );
}
