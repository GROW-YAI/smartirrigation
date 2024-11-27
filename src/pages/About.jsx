import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-green-600 mb-8">
          About Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          We are dedicated to transforming agriculture through innovative
          irrigation solutions. Our GSM-based smart system empowers farmers to
          save water, enhance soil health, and receive real-time updates, making
          farming sustainable and efficient.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">water_drop</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Water Efficiency
            </h3>
            <p className="text-gray-600 mt-4">
              Save water intelligently by irrigating only when your crops need
              it. Maximize productivity and reduce waste effortlessly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">health_and_safety</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Soil Health Monitoring
            </h3>
            <p className="text-gray-600 mt-4">
              Get real-time data on soil conditions to maintain a healthy
              environment for your crops to thrive.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">phone_iphone</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">GSM Alerts</h3>
            <p className="text-gray-600 mt-4">
              Stay informed with instant SMS notifications about soil moisture
              and irrigation activity, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
