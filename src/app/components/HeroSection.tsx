"use client";

import React, { useState, useEffect } from "react";
import Button from "./Buttons";
import Image from "next/image";

const images = [
  "/HeroImage1.jpg",
  "/HeroImage2.jpg",
  "/HeroImage3.jpg",
  "/HeroImage4.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-center px-6 py-12">
      <div className="w-full md:w-1/2 text-center md:text-left md:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f59a69] mb-6">
          Modern Furniture
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Discover our exclusive collection of modern stylish furniture designed
          to elevate your space.
        </p>
        <Button>
            <a href="/Login">Shop Now</a>
        </Button>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-[400px] relative mt-8 md:mt-0">
        <Image
          src={images[currentIndex]}
          alt={`Furniture ${currentIndex + 1}`}
          fill
          className="object-cover rounded-lg shadow-lg transition-all duration-700 ease-in-out"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
