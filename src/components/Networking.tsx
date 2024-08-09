import {
  leftNetworkingContent,
  rightNetworkingContent,
} from "../constants/index";
import e1 from "../assets/e1.jpg";
import tractor from "../assets/tractor.jpg";

const Networking = () => {
  return (
    <div
      id="networking"
      className="flex flex-col items-center px-4 md:px-48 pt-40"
    >
      <div className="py-8 w-full">
        <h2 className="text-green-700 font-semibold text-2xl md:text-4xl text-center">
          NETWORKING
        </h2>
      </div>
      <div className="">
        <div className="space-y-6">
          {leftNetworkingContent.map((item, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-green-700 font-semibold text-xl md:text-3xl text-center">
                {item.LNheading}
              </h4>
              <p className="text-lg text-gray-700 text-justify tracking-tighter">
                {item.LNcontent}
              </p>
            </div>
          ))}
          <div className="my-2">
            <div className="my-2">
              <img src={e1} className="w-auto h-96 mx-auto" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {rightNetworkingContent.map((item, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-green-700 font-semibold text-xl md:text-3xl text-center py-4">
                {item.RNheading}
              </h4>
              <p className="text-lg text-gray-700 text-justify tracking-tighter">
                {item.RNcontent}
              </p>
            </div>
          ))}
          <div className="flex justify-center">
            <img src={tractor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networking;
