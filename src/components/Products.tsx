import { useState } from "react";
import { productsItems } from "../constants/index";
import { Link } from "react-scroll";

const Products = () => {
  const [showFullText, setShowFullText] = useState<Array<boolean>>(
    productsItems.map(() => false)
  );

  const toggleFullText = (index: number) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
  };

  return (
    <div
      id="products"
      className="flex flex-col items-center px-4 pt-16 md:px-48"
    >
      <div className="py-8">
        <h2 className="text-green-600 font-semibold text-4xl">
          Our Farm Produce
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-2xl p-2 bg-white"
          >
            {item.pdtImage.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt="farm products and equipment"
                className="w-full h-64 object-cover"
              />
            ))}
            <div className="p-4">
              <h4 className="font-semibold text-gray-700 mb-2">
                {item.pdtName}
              </h4>
              <p
                className={
                  showFullText[index]
                    ? "text-justify text-sm"
                    : "text-justify text-sm overflow-ellipsis overflow-hidden h-20"
                }
              >
                {item.content}
              </p>
              <button
                onClick={() => toggleFullText(index)}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded"
              >
                {showFullText[index] ? "Show Less" : "Read More"}
              </button>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5}
              >
                <button className="mt-2 w-full bg-green-600 text-white py-2 rounded cursor-pointer">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
