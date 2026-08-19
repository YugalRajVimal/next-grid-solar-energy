import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    "End-to-end EPC services",
    "Reliable engineering & world-class components",
    "Safe, professional, and timely project execution",
    "Advanced monitoring & reporting systems",
    "Commitment to sustainability and customer satisfaction",
  ];

  const valueProps = [
    {
      title: "Cost Savings",
      description:
        "Drastically reduce your monthly electricity bills and save money in the long run.",
    },
    {
      title: "Eco-Friendly",
      description:
        "Cut down carbon emissions, reduce your carbon footprint, and support a sustainable future.",
    },
    {
      title: "Energy Independence",
      description:
        "Generate your own power, reduce reliance on the grid, and gain energy security.",
    },
    {
      title: "Increase Property Value",
      description:
        "Solar-ready properties are more attractive to buyers and can increase resale value.",
    },
    {
      title: "Reliable Power Supply",
      description:
        "Advanced technology ensures consistent performance and a stable power supply.",
    },
    {
      title: "Low Maintenance",
      description:
        "Durable solar modules are designed to last 25+ years with minimal maintenance.",
    },
  ];

  return (
    <>
      <section className="bg-[#1a1a1a] w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[550px]">
          {/* Left Content */}
          <div className="text-white flex items-center">
            <div className="px-6 sm:px-10 lg:px-16 max-w-xl mx-auto py-10 md:py-0">
              {/* Small Heading */}
              <div className="mb-4">
                <div className="w-8 h-[2px] bg-[#f6a235] mb-3"></div>
                <p className="uppercase text-sm font-semibold tracking-widest">
                  Our Benefits
                </p>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6">
                Why Choose NextGrid Solar?
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
                At NextGrid Solar, we are committed to delivering clean, reliable, and affordable solar energy solutions. With expertise in engineering, procurement, and commissioning, we install state-of-the-art solar systems for homes, businesses, and industries. <br className="hidden sm:block" />
                <br className="hidden sm:block" />
                Our mission is simple: help you save money, protect the environment, and secure long-term energy independence.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-orange-400 text-lg" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Benefits List (hidden on small screens) */}
          <div className="hidden md:flex flex-col justify-center gap-8 px-8">
            <div>
              <h3 className="text-orange-400 font-semibold text-lg mb-3 uppercase tracking-wider">
                Why Choose Solar?
              </h3>
              <h4 className="text-white text-2xl font-bold mb-6">
                Benefits of Going Solar with NextGrid
              </h4>
            </div>
            <ul className="space-y-6">
              {valueProps.map((prop, i) => (
                <li key={prop.title} className="border-l-4 border-orange-400 pl-5">
                  <span className="block text-orange-200 font-semibold mb-1">{prop.title}</span>
                  <span className="text-gray-200 text-sm">{prop.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
