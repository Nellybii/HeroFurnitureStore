'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroImages = [
  '/dining.jpg',
  '/office.jpg',
  '/living-room.jpg',
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-120 w-full rounded-lg overflow-hidden">
      <Image
        src={heroImages[index]}
        alt="Blog Hero"
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <h1 className="text-black-700 text-4xl font-bold">Explore Insights, Trends & Stories</h1>
      </div>
    </div>
  );
};

export default HeroCarousel;
