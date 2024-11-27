import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-36">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">Our Features</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Explore the cutting-edge functionalities that make our irrigation
            system a smart, efficient, and sustainable choice for farmers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full">
              <span className="material-icons text-4xl">auto_mode</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Automation
            </h3>
            <p className="text-gray-600 mt-2">
              The system detects soil dryness and starts irrigation
              automatically, reducing manual effort.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              <span className="material-icons text-4xl">sms</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              SMS Updates
            </h3>
            <p className="text-gray-600 mt-2">
              Get real-time updates about soil health via GSM-enabled SMS
              alerts, keeping you informed wherever you are.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full">
              <span className="material-icons text-4xl">eco</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Sustainability
            </h3>
            <p className="text-gray-600 mt-2">
              Our system is designed for sustainable farming, minimizing water
              waste and protecting the environment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-red-100 text-red-600 rounded-full">
              <span className="material-icons text-4xl">timeline</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Real-Time Data
            </h3>
            <p className="text-gray-600 mt-2">
              Track moisture levels, temperature, and other key metrics in
              real-time through our user-friendly platform.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
              <span className="material-icons text-4xl">devices</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Multi-Device Access
            </h3>
            <p className="text-gray-600 mt-2">
              Monitor and control your irrigation system from any device, be it
              a smartphone, tablet, or desktop.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-8 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
              <span className="material-icons text-4xl">security</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Secure System
            </h3>
            <p className="text-gray-600 mt-2">
              Your data is safe with us, thanks to advanced encryption and
              security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
