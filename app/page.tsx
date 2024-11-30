"use client";
 
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
 
export default function Home() {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "/image/arlecchino1.jpeg"
  );
  const [currentText, setCurrentText] = useState<string>(""); // Holds the currently typed text
  const texts = ["Welcome to My Portfolio", "Thuwanon Najai"]; // Text to type
  const [textIndex, setTextIndex] = useState<number>(0); // Tracks the current text index
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // Tracks the current character index
 
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
          setCurrentText((prev) => prev + texts[textIndex][currentCharIndex]);
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        }, 100); // Typing speed
 
        return () => clearInterval(typingInterval);
      } else {
        // When the full text is typed, delay and then reset for the next text
        const delayTimeout = setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
          setCurrentCharIndex(0); // Reset character index
          setCurrentText(""); // Clear text for the next line
        }, 1000); // Delay before typing the next text
 
        return () => clearTimeout(delayTimeout);
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
            {currentText || "Loading..."} {/* Display a fallback text */}
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