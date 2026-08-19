import React from "react";

import {
  FaSolarPanel,
  FaTools,
  FaRegCalendarAlt,
  FaSmile,
} from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: "68",
      title: "Panels Installed",
      description:
        "Delivering high-quality solar systems for homes, businesses, and industries across the region.",
      icon: <FaSolarPanel />,
    },
    {
      id: 2,
      number: "54",
      title: "Technical Support",
      description:
        "Our expert team provides reliable technical assistance and end-to-end support for your solar solutions.",
      icon: <FaTools />,
    },
    {
      id: 3,
      number: "33",
      title: "Years Experience",
      description:
        "Decades of experience in engineering, procurement, and commissioning of innovative solar projects.",
      icon: <FaRegCalendarAlt />,
    },
    {
      id: 4,
      number: "88",
      title: "Five Star Reviews",
      description:
        "Trusted by our customers with outstanding reviews for quality, service, and satisfaction.",
      icon: <FaSmile />,
    },
  ];

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url("/new0.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White transparent overlay */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-[#faf5ef]/50"></div>

      <div className="relative mx-auto container grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {stats.map((item) => (
          <div key={item.id} className="relative text-left">
            {/* Number */}
            <h3
              className="text-9xl font-extrabold bg-clip-text 
              bg-gradient-to-r from-orange-300 to-white text-transparent"
            >
              {item.number}
            </h3>

            {/* Icon badge */}
            <div className="absolute -top-0 right-23 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-[#f6a235] text-white text-lg rounded-full shadow-md">
              {item.icon}
            </div>

            {/* Title */}
            <h4 className="mt-6 font-bold text-lg text-gray-900">
              {item.title}
            </h4>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm max-w-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
