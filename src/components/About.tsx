import {LeftAboutContent, RightAboutContent} from '../constants/index';
const About = () => {
return (
    <div id="about" className="flex flex-col items-center px-48 pt-16">
      <div className="py-8">
        <h2 className="text-green-600 font-semibold text-4xl">About Us</h2>
      </div>
      <div className="flex flex-row items-center">
      <div className="md:w-1/2 p-16 space-y-4">
        {LeftAboutContent.map((section, index) => (
          <div key={index}>
            <h4 className="text-green-600 font-semibold text-2xl">{section.title}</h4>
            <p className="text-lg text-gray-700" text-justify>{section.content}</p>
          </div>
        ))}
      </div>
      <div className="md:w-1/2 p-16 space-y-4">
        {RightAboutContent.map((section, index) => (
          <div key={index}>
            <h4 className="text-green-600 font-semibold text-2xl">{section.title}</h4>
            <p className="text-lg text-gray-700 text-justify">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
