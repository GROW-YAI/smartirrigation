import React from "react";
import Hero from "../assets/hero-image.png";

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-green-600 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-snug">
              Smarter Irrigation <br /> for a Healthier Farm
            </h1>
            <p className="text-lg text-gray-100">
              Manage farm health and water usage with our automated irrigation
              system. Real-time insights and GSM-powered control make farming
              efficient and sustainable.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="bg-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={Hero}
              alt="Smart Irrigation System"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-md shadow-md">
              <h3 className="text-sm font-semibold text-gray-800">
                Live Metrics:
              </h3>
              <p className="text-xs text-gray-600">Soil Moisture: 75%</p>
              <p className="text-xs text-gray-600">Temperature: 24°C</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Our system is designed to make farming easier, smarter, and more
          sustainable.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-4">
              <span className="material-icons text-3xl">water_drop</span>
              {/* <span className="material-symbols-rounded">water</span> */}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Automated Watering
            </h3>
            <p className="text-gray-600 mt-2">
              Never worry about overwatering or underwatering again. Let the
              system handle it for you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4">
              <span className="material-icons text-3xl">analytics</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Real-Time Data
            </h3>
            <p className="text-gray-600 mt-2">
              Access soil health, moisture levels, and environmental conditions
              directly on your device.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-4">
              <span className="material-icons text-3xl">eco</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Sustainable Farming
            </h3>
            <p className="text-gray-600 mt-2">
              Contribute to a greener planet with an eco-friendly, water-saving
              irrigation system.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Farmers Are Saying
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "The automated irrigation system has completely transformed my
              farm! I no longer have to guess when to water."
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src="/farmer1.jpg"
                alt="Farmer John"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">John Mensah</h4>
                <p className="text-sm text-gray-500">Farmer, Asutuare</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "With real-time data at my fingertips, I’m able to manage my crops
              better than ever before."
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src="/farmer2.jpg"
                alt="Farmer Jane"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Jalilu Adamu</h4>
                <p className="text-sm text-gray-500">Farmer, Kasoa-Tuba</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-green-700 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Make Your Farm Smarter?</h2>
        <p className="text-lg mt-4">
          Contact us today to get started with our automated irrigation system.
        </p>
        <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Home;
