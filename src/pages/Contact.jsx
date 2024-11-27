import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
