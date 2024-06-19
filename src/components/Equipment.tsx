import { useState } from "react";
import { EquipmentItems } from "../constants/index";
import { Link } from "react-scroll";

const Equipment = () => {
  const [showFullText, setShowFullText] = useState<Array<boolean>>(
    EquipmentItems.map(() => false)
  );

  const toggleFullText = (index: number) => {
    setShowFullText(
      showFullText.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div id="equipment" className="flex flex-col md:items-center px-4 pt-16 md:px-48">
      <div className="py-8">
        <h2 className="text-green-600 font-semibold text-xl md:text-4xl">
          Our Farm Equipment
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {EquipmentItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-2xl p-2 bg-white"
          >
            {item.eImage.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt="farm products and equipment"
                className="w-full h-64 object-cover"
              />
            ))}
            <div className="p-4">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                {item.eName}
              </h4>
              <p
                className={
                  showFullText[index]
                    ? "text-justify text-sm"
                    : "text-justify text-sm overflow-ellipsis overflow-hidden h-20"
                }
              >
                {item.Description}
              </p>
              <div className="gap-10">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
