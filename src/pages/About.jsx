import React, { useState, useEffect } from "react";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 50); // Determine step size
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval); // Stop counting when target is reached
          return target;
        }
        return prev + increment;
      });
    }, 50); // Updates every 50ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [target, duration]);

  return <span>{Math.round(count)}</span>;
};

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-36">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center">
          {/* <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6"> */}
          {/* <span className="material-icons text-3xl">agriculture</span> */}
          {/* </div> */}
          <h2 className="text-4xl font-bold text-green-600">
            About Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Leveraging automation and GSM technology, we are transforming farm
            irrigation into a smart, efficient, and sustainable process.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
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
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
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
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
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

        {/* Statistics Section */}
        <div className="bg-green-50 py-12 mt-16 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-green-600">
            Impact at a Glance
          </h3>
          <div className="mt-8 grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-4xl font-bold text-green-700">
                <Counter target={85} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Water Savings</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-green-700">
                <Counter target={12000} duration={2500} />+
              </h4>
              <p className="text-gray-600 mt-2">Farmers Helped</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-green-700">
                <Counter target={50} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Higher Crop Yields</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-green-700">
                <Counter target={100} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-100 py-12 mt-16 rounded-lg">
          <h3 className="text-3xl font-bold text-green-600">
            Join the Smart Farming Revolution
          </h3>
          <p className="text-gray-700 mt-4">
            Experience the future of farming with our automated irrigation
            solutions. Save water, improve crop health, and simplify your
            farming process.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
