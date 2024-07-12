import React, { useState, useEffect } from "react";
import fieldImage1 from "../assets/field.jpg";
import fieldImage2 from "../assets/maize1.jpg";
import fieldImage3 from "../assets/coffee2.jpg";
import fieldImage4 from "../assets/e1.jpg";
import fieldImage5 from "../assets/tomatoes1.jpg";
import fieldImage6 from "../assets/tractor.jpg";
import fieldImage7 from "../assets/e5.jpg";
import { Button } from "./ui/button";

interface Slide {
  imageUrl: string;
  caption?: string;
}

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images for slideshow
  const slides: Slide[] = [
    { imageUrl: fieldImage1, caption: "Field Image 1" },
    { imageUrl: fieldImage2, caption: "Field Image 2" },
    { imageUrl: fieldImage3, caption: "Field Image 3" },
    { imageUrl: fieldImage4, caption: "Field Image 4" },
    { imageUrl: fieldImage5, caption: "Field Image 5" },
    { imageUrl: fieldImage6, caption: "Field Image 6" },
    { imageUrl: fieldImage7, caption: "Field Image 7" },
  ];

  useEffect(() => {
    // Function to rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center mb-16"
      style={{ backgroundImage: `url(${slides[currentImageIndex].imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-5xl font-semibold text-white text-center">
        Enhancing Small-scale Agriculture 
        <br />
        </h1>
        <h2 className="md:text-3xl font-semibold text-white text-center">
          Through Mechanization
        </h2>
        <Button className="bg-yellow-600 p-6 hover:bg-yellow-500">
          <a href="#about">Discover More</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
