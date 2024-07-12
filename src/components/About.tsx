import { LeftAboutContent, RightAboutContent } from "../constants/index";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:items-center px-4 md:px-48 pt-16">
      <div className="py-8">
        <h2 className="text-green-600 font-semibold text-xl md:text-4xl">About Us</h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="md:w-1/2 p-1 space-y-4">
          {LeftAboutContent.map((section, index) => (
            <div key={index}>
              <h4 className="text-green-600 font-semibold text-base md:text-2xl justify-start">
                {section.title}
              </h4>
              <p className="text-lg text-gray-700 text-justify tracking-tighter">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 p-1 space-y-4">
          {RightAboutContent.map((section, index) => (
            <div key={index}>
              <h4 className="text-green-600 font-semibold text-base md:text-2xl">{section.title}</h4>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside text-lg text-gray-700 tracking-tighter">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-justify">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-gray-700 text-justify tracking-tighter">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
