import { Link } from "react-router-dom";

const InformationPage = () => {
  const sections = [
    {
      title: "Smart Irrigation System",
      description:
        "Automate watering with real-time soil moisture sensors and environmental conditions. Integrate seamlessly with a mobile app for monitoring.",
      usps: "Saves water, boosts crop productivity, and reduces costs.",
      image: "/api/placeholder/400/300",
      date: "Dec 19, 2024",
      tag: "Technology",
      impact: "Supporting over 1,000 farmers across Africa",
      details: [
        "Real-time monitoring",
        "Mobile app integration",
        "Weather-based automation",
      ],
    },
    {
      title: "Home Automation Solutions",
      description:
        "Affordable systems to automate home functions, enhancing comfort and reducing energy consumption with remote control.",
      usps: "User-friendly, scalable, and locally designed.",
      image: "/api/placeholder/400/300",
      date: "Dec 18, 2024",
      tag: "Lifestyle",
      impact: "Installed in 500+ homes",
      details: ["Energy monitoring", "Smart security", "Remote access"],
    },
    {
      title: "Vehicle and Motorbike Tracking Systems",
      description:
        "Real-time GPS solutions for tracking and fleet management of vehicles and motorbikes, ensuring security and peace of mind.",
      usps: "Compact, reliable, and long-lasting.",
      image: "/api/placeholder/400/300",
      date: "Dec 17, 2024",
      tag: "Security",
      impact: "Protecting 2,000+ vehicles",
      details: ["Live tracking", "Theft prevention", "Fleet management"],
    },
    {
      title: "Electric Vehicles (EVs)",
      description:
        "Sustainable, locally assembled electric vehicles tailored for African needs, offering affordability and eco-friendliness.",
      usps: "Eco-friendly, energy-efficient, and cost-effective.",
      image: "/api/placeholder/400/300",
      date: "Dec 16, 2024",
      tag: "Environment",
      impact: "Reducing carbon emissions by 50%",
      details: ["Local assembly", "Affordable pricing", "Zero emissions"],
    },
    {
      title: "Human Training and Capacity Building",
      description:
        "Practical, hands-on training in emerging technologies to empower young innovators and professionals.",
      usps: "Led by professionals, focusing on African challenges.",
      image: "/api/placeholder/400/300",
      date: "Dec 15, 2024",
      tag: "Education",
      impact: "Trained 5,000+ professionals",
      details: [
        "Hands-on workshops",
        "Industry partnerships",
        "Career support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-teal-900 text-white py-16 px-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Innovating for Africa's Future
          </h1>
          <p className="text-xl text-center text-teal-100 max-w-3xl mx-auto">
            We're building sustainable solutions that address Africa's unique
            challenges through technology and innovation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Innovation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how we're transforming African communities through
            sustainable technology solutions and capacity building.
          </p>
        </div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all"
            >
              <div className="flex flex-col h-full">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                      {section.tag}
                    </span>
                    <span className="text-sm text-gray-500">
                      {section.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-teal-800 mb-2">Impact</h4>
                    <p className="text-gray-700">{section.impact}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {section.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Learn more about this innovation
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 text-teal-500 py-16 px-6 mt-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Whether you're an investor, partner, or innovator, there's a place
            for you in our ecosystem.
          </p>
          <Link
            to="/contact"
            className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
