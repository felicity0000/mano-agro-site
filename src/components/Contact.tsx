import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Element } from "react-scroll";

const Contact: React.FC = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "c92df721-aab0-4c37-9d06-d501b9386623");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Success");
    } else {
      console.log("Error", res);
      alert("Error");
    }
  };

  return (
    <Element name="contact">
      <div
        id="contact"
        className="flex flex-col md:px-48 py-16 gap-8 px-4 md:items-center"
      >
        {/* Contact Form */}
        <div className="py-8">
          <h2 className="text-green-600 font-semibold text-xl md:text-4xl">Contact Us</h2>
        </div>
        <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-2xl">
          <h4 className="text-green-600 font-semibold text-sm">
            HAVE QUESTIONS?
          </h4>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Telephone
              </label>
              <input
                type="tel"
                name="telephone"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={10}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white w-full bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 space-x-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            More Contact Information
          </h2>
          <div className="mb-6 flex justify-start">
            <MdPhone size={24} className="text-green-600 mr-3" />
            <div>
              <h3 className="text-green-600 text-xl font-normal">Call</h3>
              <p className="text-gray-700 text-sm">
                +256777265273 | +256703124520
              </p>
            </div>
          </div>
          {/* <div className="mb-6 flex justify-start">
            <MdLocationOn size={24} className="text-green-600 mr-3" />
            <div>
              <h3 className="text-green-600 text-xl font-normal">Location</h3>
              <p className="text-gray-700 text-sm">
                123 Main Street, Anytown, USA
              </p>
            </div>
          </div> */}
          <div className="mb-6 flex justify-start">
            <MdEmail size={24} className="text-green-600 mr-3" />
            <div>
              <h3 className="text-green-600 text-xl font-normal">Email</h3>
              <p className="text-gray-700 text-sm">magro7537@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
