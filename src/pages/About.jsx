// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const Counter = ({ target, duration }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const increment = target / (duration / 50); // Determine step size
//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev + increment >= target) {
//           clearInterval(interval); // Stop counting when target is reached
//           return target;
//         }
//         return prev + increment;
//       });
//     }, 50); // Updates every 50ms

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [target, duration]);

//   return <span>{Math.round(count)}</span>;
// };

// // PropTypes Validation
// Counter.propTypes = {
//   target: PropTypes.number.isRequired,
//   duration: PropTypes.number.isRequired,
// };

// const About = () => {
//   return (
//     <section id="about" className="bg-gray-50 py-20 px-6 lg:px-20">
//       <div className="container max-w-7xl mx-auto text-center">
//         {/* Section Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold text-teal-500">
//             About Our Mission
//           </h2>
//           <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
//             Our vision is to inspire and empower African youth to innovate,
//             ensuring technology is accessible and fosters sustainable,
//             community-driven solutions, with a mission to design, develop, and
//             assemble innovative products that solve real-life challenges,
//             improve the cost of living, and promote technological self-reliance
//             in Africa.
//           </p>
//         </div>

//         {/* Features Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* Feature 1 */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
//             <div className="w-16 h-16 mx-auto bg-green-100 text-teal-500 flex items-center justify-center rounded-full mb-6">
//               <span className="material-icons text-3xl">water_drop</span>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">
//               Water Efficiency
//             </h3>
//             <p className="text-gray-600 mt-4">
//               Save water intelligently by irrigating only when your crops need
//               it. Maximize productivity and reduce waste effortlessly.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
//             <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-6">
//               <span className="material-icons text-3xl">health_and_safety</span>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">
//               Soil Health Monitoring
//             </h3>
//             <p className="text-gray-600 mt-4">
//               Get real-time data on soil conditions to maintain a healthy
//               environment for your crops to thrive.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
//             <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-6">
//               <span className="material-icons text-3xl">phone_iphone</span>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">GSM Alerts</h3>
//             <p className="text-gray-600 mt-4">
//               Stay informed with instant SMS notifications about soil moisture
//               and irrigation activity, anytime, anywhere.
//             </p>
//           </div>
//         </div>

//         {/* Statistics Section */}
//         <div className="bg-green-50 py-12 mt-16 rounded-lg shadow-inner">
//           <h3 className="text-3xl font-bold text-teal-500">
//             Impact at a Glance
//           </h3>
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div>
//               <h4 className="text-4xl font-bold text-teal-500">
//                 <Counter target={85} duration={2000} />%
//               </h4>
//               <p className="text-gray-600 mt-2">Water Savings</p>
//             </div>
//             <div>
//               <h4 className="text-4xl font-bold text-teal-500">
//                 <Counter target={1200} duration={2000} />+
//               </h4>
//               <p className="text-gray-600 mt-2">Farmers Helped</p>
//             </div>
//             <div>
//               <h4 className="text-4xl font-bold text-teal-500">
//                 <Counter target={50} duration={2000} />%
//               </h4>
//               <p className="text-gray-600 mt-2">Higher Crop Yields</p>
//             </div>
//             <div>
//               <h4 className="text-4xl font-bold text-teal-500">
//                 <Counter target={100} duration={2000} />%
//               </h4>
//               <p className="text-gray-600 mt-2">Satisfaction Rate</p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action Section */}
//         <div className="bg-gray-100 py-12 mt-16 rounded-lg">
//           <h3 className="text-3xl font-bold text-teal-500">
//             Join the Smart Farming Revolution
//           </h3>
//           <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
//             Experience the future of farming with our automated irrigation
//             solutions. Save water, improve crop health, and simplify your
//             farming process.
//           </p>

//           <Link
//             to="/information"
//             className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition text-center inline-block"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

// PropTypes Validation
Counter.propTypes = {
  target: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12 pt-16">
          <h2 className="text-4xl font-bold text-teal-500">
            About Our Mission
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Our vision is to inspire and empower African youth to innovate,
            ensuring technology is accessible and fosters sustainable,
            community-driven solutions, with a mission to design, develop, and
            assemble innovative products that solve real-life challenges,
            improve the cost of living, and promote technological self-reliance
            in Africa.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-green-100 text-teal-500 flex items-center justify-center rounded-full mb-6">
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
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
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
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">phone_iphone</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">GSM Alerts</h3>
            <p className="text-gray-600 mt-4">
              Stay informed with instant SMS notifications about soil moisture
              and irrigation activity, anytime, anywhere.
            </p>
          </div>

          {/* New Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-red-100 text-red-500 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">lightbulb</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            <p className="text-gray-600 mt-4">
              Pioneering creative and effective solutions for community
              development.
            </p>
          </div>

          {/* New Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-500 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">accessibility</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Accessibility
            </h3>
            <p className="text-gray-600 mt-4">
              Making advanced technology simple, affordable, and usable for
              everyone.
            </p>
          </div>

          {/* New Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-indigo-100 text-indigo-500 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">group</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Youth Empowerment
            </h3>
            <p className="text-gray-600 mt-4">
              Inspiring and equipping young Africans to lead the innovation
              ecosystem.
            </p>
          </div>

          {/* New Feature 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-green-100 text-teal-500 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">eco</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Sustainability
            </h3>
            <p className="text-gray-600 mt-4">
              Focusing on eco-friendly and cost-effective innovations.
            </p>
          </div>

          {/* New Feature 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-cyan-100 text-cyan-500 flex items-center justify-center rounded-full mb-6">
              <span className="material-icons text-3xl">handshake</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Collaboration
            </h3>
            <p className="text-gray-600 mt-4">
              Building partnerships to support local and regional progress.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-green-50 py-12 mt-16 rounded-lg shadow-inner">
          <h3 className="text-3xl font-bold text-teal-500">
            Impact at a Glance
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-4xl font-bold text-teal-500">
                <Counter target={85} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Water Savings</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-teal-500">
                <Counter target={1200} duration={2000} />+
              </h4>
              <p className="text-gray-600 mt-2">Farmers Helped</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-teal-500">
                <Counter target={50} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Higher Crop Yields</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-teal-500">
                <Counter target={100} duration={2000} />%
              </h4>
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-100 py-12 mt-16 rounded-lg">
          <h3 className="text-3xl font-bold text-teal-500">
            Join the Smart Farming Revolution
          </h3>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Experience the future of farming with our automated irrigation
            solutions. Save water, improve crop health, and simplify your
            farming process.
          </p>

          <Link
            to="/information"
            className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition text-center inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
