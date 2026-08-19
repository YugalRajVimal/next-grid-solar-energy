import React from "react";

const services = [
  {
    id: 1,
    title: "Renewable Source",
    description:
      "Experience clean, sustainable energy generation with NextGrid's advanced solar solutions purpose-built to help you lower your carbon footprint and contribute to a greener tomorrow.",
    image: "/new/1.jpg",
  },
  {
    id: 2,
    title: "Easy Installation",
    description:
      "Our team provides seamless, end-to-end EPC services, ensuring a professional and hassle-free installation experience so you can transition to solar energy with confidence.",
    image: "/new/2.jpg",
  },
  {
    id: 3,
    title: "Low Maintenance",
    description:
      "Durable components, robust engineering, and reliable support guarantee long-term performance with minimal upkeep – maximizing your solar investment and peace of mind.",
    image: "/new/3.jpg",
  },
];

const AboutService = () => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-[#fff]">
      <div className="text-center mb-12">
        <div className="w-5 h-[2px] bg-[#f6a235] mb-3 mx-auto"></div>
        <h4 className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">
          Who We Are
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About NextGrid Solar
        </h2>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          At NextGrid Solar, we are committed to delivering clean, reliable, and affordable solar energy solutions. With expertise in engineering, procurement, and commissioning, we design and install state-of-the-art solar systems tailored to homes, businesses, and industries.
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          Our mission is simple: help you save money, protect the environment, and secure long-term energy independence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-[#f9f2e7] overflow-hidden">
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutService;
