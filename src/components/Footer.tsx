const Footer = () => {
  return (
    <div className="py-5 bg-white text-center text-gray-800 dark:text-gray-500 rounded-t-lg">
      <span>
        {" "}
        <a
          href="#hero"
          className="block text-xl md:text-2x text-green-600 font-semibold"
        >
          MANO AGRO INPUTS
        </a>
      </span>
      <span>
        {" "}
        <a href="#hero" className="block font-semibold text-sm text-black">
          ENTERPRISES LIMITED
        </a>
      </span>

      <a
        href=""
        className="text-sm md:text-md font-poppins hover:text-indigo-500"
      ></a>
      <p className="text-xs mt-2 text-black">
        © MANO AGRO INPUTS ENTERPRISES LIMITED {new Date().getFullYear()}. All
        rights reserved
      </p>
    </div>
  );
};

export default Footer;
