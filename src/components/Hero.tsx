import fieldImage from "../assets/field.jpg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center mb-16"
      style={{ backgroundImage: `url(${fieldImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-2xl lg:text-8xl font-semibold text-white text-center">
          Natural and Organic <br />
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white text-center">
          Farm Store
        </h2>
        <Button className="bg-yellow-600 p-6 hover:bg-yellow-500">
          <a href="#about">Discover More</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;