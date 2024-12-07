// const plans = [
//   {
//     title: "Free Plan",
//     features: [
//       "Basic portfolio creation",
//       "Limited templates",
//       "Community support",
//     ],
//     price: "GHC0/month",
//     buttonLabel: "Sign Up for Free",
//     buttonLink: "/signup",
//   },
//   {
//     title: "Pro Plan",
//     features: [
//       "Advanced customization",
//       "Premium templates",
//       "Priority support",
//     ],
//     price: "GHC49.99/month",
//     buttonLabel: "Get Started",
//     buttonLink: "/signup",
//   },
//   {
//     title: "Enterprise Plan",
//     features: ["Custom solutions", "Dedicated support", "Team collaboration"],
//     price: "Contact for pricing",
//     buttonLabel: "Contact Us",
//     buttonLink: "/contact",
//   },
// ];

// const Pricing = () => {
//   return (
//     <div className=" py-20" id="pricing">
//       <div className="container px-4 mx-auto">
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
//           Affordable Plans for Everyone
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
//             >
//               <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
//               <p className="text-4xl font-bold text-blue-500 mb-4">
//                 {plan.price}
//               </p>
//               <ul className="text-gray-700 text-center mb-6 space-y-2">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//               <a
//                 href={plan.buttonLink}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300"
//               >
//                 {plan.buttonLabel}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

const plans = [
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
    icon: "🌱", // Example icon (use your own or import an actual icon)
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
    icon: "💧", // Example icon (use your own or import an actual icon)
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
    icon: "🌾", // Example icon (use your own or import an actual icon)
  },
];

const Pricing = () => {
  return (
    <div className="py-40 bg-gray-50" id="pricing">
      <div className="container px-4 mx-auto">
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
              <a
                href={plan.buttonLink}
                className="bg-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300"
              >
                {plan.buttonLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
