import React from "react";
import fieldImage1 from "../assets/field.jpg";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div id="hero-wrapper" className="relative h-screen overflow-hidden mb-16">
      <div
        id="hero-image"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fieldImage1})` }}
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
