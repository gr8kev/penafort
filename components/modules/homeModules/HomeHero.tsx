"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/wine1.png",
    "/images/wine2.png",
    "/images/wine3.png",
  ];

  // Automatic Sliding
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 mt-24">
          {/* Left Side: Heading, Description, Button */}
          <div className="text-black text-center md:text-left w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-left">
              EVERY BOTTLE TELLS A STORY
            </h1>
            <p className="text-base md:text-lg lg:text-xl opacity-80 text-left">
              Discover the rich narratives behind each bottle of wine. Join us
              on a journey through taste and tradition.
            </p>
            <div className="flex justify-start md:justify-start">
              <button className="mt-4 btn-custom btn-primary ">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right Side: Wine Bottle Carousel */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-56 md:w-72 h-72 md:h-96 overflow-hidden">
              {/* Images with fade effect */}
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Wine ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    currentIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
