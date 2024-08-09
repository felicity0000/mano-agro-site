import { LeftAboutContent} from "../constants/index";
import { Eye, Flag, Trees} from "lucide-react";

const About = () => {
  return (
    <div id="about"
      className="flex flex-col md:items-center px-4 md:px-48 md:pt-40"
    >
      <div className="py-8">
        <h2 className="text-green-700 font-bold text-4xl uppercase">
          About-Us
        </h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="md:w-1/2 p-1 space-y-4">
          {LeftAboutContent.map((section, index) => (
            <div key={index}>
              <h4 className="text-green-700 font-bold text-basemd:text-2xl justify-start">
                {section.title}
              </h4>
              <p className="text-lg text-gray-700 text-justify tracking-tighter">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 p-1 space-y-4">
          <div className="space-y-4 md:space-y-8">
            <div>
              <div className="flex items-center">
                <Eye className="text-green-700" size={56}/>
                <h4 className="text-green-700 font-bold text-base md:text-2xl ml-4">
                  VISION
                </h4>
              </div>
              <p className="text-lg text-gray-700 text-justify tracking-tighter md:ml-20">
                We envision a future where small-scale farmers in Kiryandongo
                have access to the resources, knowledge, and support they need
                to thrive and succeed in agriculture. The company aims to be a
                leading provider of agricultural inputs and services, driving
                positive change and sustainable development in the region. By
                empowering farmers and promoting best practices in agriculture.
              </p>
            </div>
            <div>
              <div className="flex items-center">
              <Flag className="text-green-700" size={56} />
                <h4 className="text-green-700 font-bold text-base md:text-2xl ml-4">
                  MISSION
                </h4>
                
              </div>

              <p className="text-lg text-gray-700 text-justify tracking-tighter md:ml-20">
                To promote sustainable agriculture and rural development in
                Kiryandongo by providing small-scale farmers with access to
                high-quality seeds, fertilizers, seedlings, agricultural
                equipment, and training. The company is committed to fostering
                innovation, productivity, and profitability in agriculture,
                while also ensuring environmental sustainability and social
                development in the communities it serves.
              </p>
            </div>
            <div>
              <div className="flex items-center">
              <Trees className="text-green-700" size={56}/>
                <h4 className="text-green-700 font-bold text-base md:text-2xl ml-4">
                  VALUES
                </h4>
              </div>
              <div className="">
                <ul className="list-disc text-lg text-gray-700 text-justify tracking-tighter ml-20 md:ml-24">
                  <li>Integrity</li>
                  <li>Quality</li>
                  <li>Innovation</li>
                  <li>Collaboration</li>
                  <li>Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
