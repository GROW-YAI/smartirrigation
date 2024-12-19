import { useState } from "react";
import Hero from "../assets/farmer.jpg";
import Farmer from "../assets/founder-img.png.webp";
import Farmer2 from "../assets/user.png.webp";
import { Link } from "react-router-dom";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: "water_drop",
      title: "Smart Irrigation System",
      description:
        "Automates watering using real-time data from soil moisture sensors and environmental conditions.",
      details:
        "Our Smart Irrigation System ensures optimal irrigation with minimal effort. Save water, boost crop productivity, and reduce operational costs. Easy to install, customizable for various farm sizes, and perfect for backyard farmers, small-scale farmers, and gardening enthusiasts.",
    },
    {
      icon: "home",
      title: "Home Automation Solutions",
      description:
        "Affordable and efficient systems to automate home functions, enhancing comfort and reducing energy consumption.",
      details:
        "Locally designed and user-friendly systems that improve security, enable remote control of appliances, and save energy. Scalable solutions suitable for homeowners, real estate developers, and urban planners.",
    },
    {
      icon: "directions_bike",
      title: "Vehicle and Motorbike Tracking Systems",
      description:
        "GPS-based solutions for real-time tracking and fleet management of vehicles and motorbikes.",
      details:
        "Compact, long-lasting, and reliable tracking systems that enhance vehicle security and provide better fleet management. Ideal for logistics companies, fleet operators, and private vehicle owners.",
    },
    {
      icon: "electric_car",
      title: "Electric Vehicles (EVs)",
      description:
        "Development of sustainable, locally assembled electric mobility solutions for Africa.",
      details:
        "Affordable, eco-friendly vehicles tailored to regional needs. Enjoy reduced emissions, lower operational costs, and greater energy efficiency. Designed for eco-conscious individuals, urban commuters, and businesses investing in green technology.",
    },
    {
      icon: "school",
      title: "Human Training and Capacity Building",
      description:
        "Hands-on training programs to equip individuals with practical knowledge and skills in emerging technologies.",
      details:
        "Focused on African-specific challenges, these programs empower young innovators to create and deploy solutions, build a sustainable talent pool, and provide certifications to enhance career opportunities. Perfect for students, early-career professionals, and technology enthusiasts.",
    },
    {
      icon: "analytics",
      title: "Real-Time Data",
      description:
        "Access soil health, moisture levels, and environmental conditions directly on your device.",
      details:
        "With real-time analytics, stay informed about your farm's health. Our sensors provide instant updates on moisture levels, temperature, and nutrient content, giving you the data to make smart decisions.",
    },
  ];

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center pt-14">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-green-600 to-blue-600 text-white py-16 px-6 sm:px-12 md:px-24 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug">
              Lithium Technology <br /> Enterprise
            </h1>
            <p className="text-lg sm:text-lg md:text-xl text-gray-100">
              Deep understanding of Africa’s unique challenges. Locally designed
              and assembled solutions, ensuring affordability and reliability.
              Commitment to youth empowerment and technological self-reliance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/about"
                className="bg-white text-teal-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition w-full sm:w-auto hidden md:block"
              >
                Get Started
              </Link>
              <Link
                to="/information"
                className="bg-teal-500 px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition w-full sm:w-auto hidden md:block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={Hero}
              alt="Smart Irrigation System"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-md shadow-md max-w-xs text-sm">
              <h3 className="font-semibold text-gray-800">Live Metrics:</h3>
              <p className="text-gray-600">Soil Moisture: 75%</p>
              <div className="flex items-center text-gray-600 mt-2">
                <span className="material-icons text-blue-600 mr-2">
                  thermostat
                </span>
                <span>
                  <strong>Max:</strong> 34°C | <strong>Min:</strong> 20°C
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 leading-snug">
          Why Choose Us
        </h2>
        <p className="text-lg text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover innovative solutions designed to make life smarter, greener,
          and more efficient.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
              onClick={() => openModal(feature)}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 text-white ${
                  feature.icon === "water_drop"
                    ? "bg-teal-500"
                    : feature.icon === "home"
                    ? "bg-blue-500"
                    : feature.icon === "directions_bike"
                    ? "bg-green-500"
                    : feature.icon === "electric_car"
                    ? "bg-yellow-500"
                    : feature.icon === "analytics"
                    ? "bg-red-500"
                    : "bg-purple-500"
                }`}
              >
                <span className="material-icons text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh]">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {selectedFeature.title}
            </h3>
            <p className="text-gray-600 mt-4">{selectedFeature.details}</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition w-full md:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          What Customers Are Saying
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "The automated irrigation system has completely transformed my
              farm! I no longer have to guess when to water."
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={Farmer}
                alt="Farmer John"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">John Mensah</h4>
                <p className="text-sm text-gray-500">Farmer, Asutuare</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "With real-time data at my fingertips, I’m able to manage my crops
              better than ever before."
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={Farmer2}
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
      <div
        className="w-full h-[40vh] text-white py-10 lg:py-20 text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="bg-teal-900 bg-opacity-60 p-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Make Your Farm Smarter?
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Contact us today to get started with our automated irrigation
            system.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-teal-500 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-100 transition shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
