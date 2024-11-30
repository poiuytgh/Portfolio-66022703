"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState<string>("/image/arlecchino1.jpeg");
  const [currentText, setCurrentText] = useState<string>(""); // Holds the currently typed text
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false); // Tracks when typing finishes
  const texts = ["Welcome to My Portfolio", "Thuwanon Najai"]; // Separate texts for two lines

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

  // Typing effect for the text
  useEffect(() => {
    let fullText = texts.join("\n"); // Join text with a line break
    let currentCharIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentText((prev) => prev + fullText[currentCharIndex]);
      currentCharIndex++;

      if (currentCharIndex === fullText.length) {
        clearInterval(typingInterval); // Stop typing when the whole text is done
        setIsTypingComplete(true); // Mark typing as complete
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
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
        {/* Typing Effect Text */}
        <div className="bg-gray-900 bg-opacity-80 rounded-lg px-6 py-4 shadow-lg shadow-purple-400">
          <h3
            className="text-4xl font-bold text-purple-300"
            style={{ fontFamily: "'Kanit', sans-serif", whiteSpace: "pre-wrap" }} // Preserve line breaks
          >
            {currentText}
          </h3>
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="mt-8 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg hover:from-purple-400 hover:to-pink-500 hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
