import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-lg font-bold text-green-600">Automation</h3>
            <p className="text-sm text-gray-600 mt-2">
              The system detects soil dryness and starts irrigation
              automatically.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-lg font-bold text-green-600">SMS Updates</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get real-time updates about soil health via GSM-enabled SMS
              alerts.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-lg font-bold text-green-600">Sustainability</h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed for sustainable farming, reducing water waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
