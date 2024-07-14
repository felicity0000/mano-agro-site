import { LeftImpactContent} from "../constants/index";

const Impact: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center px-4 md:px-48 pt-16">
      <div className="py-8 w-full">
        <h2 className="text-green-700 font-semibold text-2xl md:text-4xl text-center">
          IMPACT OF MECHANISATION 
        </h2>
      </div>
      <div className="">
        <div className="">
          {LeftImpactContent.map((item, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-green-700 font-semibold text-xl md:text-3xl text-center">
                {item.leftHeading}
              </h4>
              <p className="text-lg text-gray-700 text-justify tracking-tighter">
                {item.leftImpactDescription}
              </p>
              <div className="flex flex-col">
                {item.leftImpactImages.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt="farm products and equipment"
                    className="p-4"
                  />
                ))}
              </div>
             
            </div>
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default Impact;
