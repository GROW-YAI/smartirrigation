import React from "react";
import { Link } from "react-router-dom";

interface Plan {
  title: string;
  features: string[];
  price: string;
  buttonLabel: string;
  buttonLink: string;
  icon: string;
}

const plans: Plan[] = [
  {
    title: "Starter Plan",
    features: [
      "Basic irrigation automation",
      "Real-time soil moisture updates",
      "Community support",
    ],
    price: "GHC0/month",
    buttonLabel: "Start for Free",
    buttonLink: "/signup",
    icon: "🌱",
  },
  {
    title: "Smart Plan",
    features: [
      "Advanced irrigation automation",
      "Detailed weather predictions",
      "Priority support",
      "Access to premium templates",
    ],
    price: "GHC49.99/month",
    buttonLabel: "Get Started",
    buttonLink: "/signup",
    icon: "💧",
  },
  {
    title: "Enterprise Plan",
    features: [
      "Custom irrigation solutions",
      "Dedicated support team",
      "Team collaboration",
      "Customizable reporting",
    ],
    price: "Contact for pricing",
    buttonLabel: "Contact Us",
    buttonLink: "/contact",
    icon: "🌾",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="py-40 bg-gray-50" id="pricing">
      <div className="container max-w-7xl px-6 mx-auto ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-500 mb-12 text-center">
          Affordable & Smart Plans for Irrigation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Plan Icon */}
              <div className="text-4xl text-teal-500 mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-teal-500 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 text-center mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-teal-500">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.buttonLink}
                className="bg-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300"
              >
                {plan.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

