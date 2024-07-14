import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const currentImageRef = useRef<HTMLDivElement>(null);
  const nextImageRef = useRef<HTMLDivElement>(null);

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
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % slides.length;
      const newNextIndex = (nextImageIndex + 1) % slides.length;

      if (nextImageRef.current) {
        nextImageRef.current.style.backgroundImage = `url(${slides[nextIndex].imageUrl})`;
      }

      const timeline = gsap.timeline({
        onComplete: () => {
          setCurrentImageIndex(nextIndex);
          setNextImageIndex(newNextIndex);
          if (currentImageRef.current && nextImageRef.current) {
            gsap.set(currentImageRef.current, { opacity: 1 });
            gsap.set(nextImageRef.current, { opacity: 0 });
          }
        }
      });

      timeline
        .to(currentImageRef.current, { opacity: 0, duration: 1 }, 0)
        .to(nextImageRef.current, { opacity: 1, duration: 1 }, 0);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentImageIndex, nextImageIndex, slides.length]);

  return (
    <div id="hero-wrapper" className="relative h-screen overflow-hidden mb-16">
      <div
        id="current-hero"
        ref={currentImageRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity"
        style={{ backgroundImage: `url(${slides[currentImageIndex].imageUrl})`, opacity: 1 }}
      ></div>
      <div
        id="next-hero"
        ref={nextImageRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity"
        style={{ backgroundImage: `url(${slides[nextImageIndex].imageUrl})`, opacity: 0 }}
      ></div>
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
