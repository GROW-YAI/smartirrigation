import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-36" id="contact">
      <div className="container max-w-7xl px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-500 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-gray-900 border-b pb-4">
                Contact Information
              </h3>
              <p className="flex items-center text-gray-700 space-x-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-teal-500 text-lg"
                />
                <span>
                  <strong>Email:</strong> support@lithiumtech.com
                </span>
              </p>
              <p className="flex items-center text-gray-700 space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-teal-500 text-lg"
                />
                <span>
                  <strong>Phone:</strong> +233 24 399 9631
                </span>
              </p>
              <p className="flex items-center text-gray-700 space-x-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-teal-500 text-lg"
                />
                <span>
                  <strong>Address:</strong> 18 Mboumou st, Accra, Ghana
                </span>
              </p>
              <div className="text-center mt-8">
                <a
                  href="#"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300 inline-block"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
