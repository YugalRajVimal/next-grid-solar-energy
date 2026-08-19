import React from "react";
import { Zap, Disc } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-[#aeaeae] flex flex-col gap-2">
            <span className="w-8 h-[2px] bg-orange-400"></span> Ecological Way
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Reshaping Energy for <br /> the Future
          </h1>

          <p className="text-gray-600 mt-6">
            At NextGrid Solar, we are committed to delivering clean, reliable, and affordable solar energy solutions. With expertise in engineering, procurement, and commissioning, we design and install state-of-the-art solar systems tailored to homes, businesses, and industries. <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Our mission is simple: help you save money, protect the environment, and secure long-term energy independence.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="flex items-start flex-col gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-[#F6A235]">
                <Zap size={44} strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Reduce Your Daily Energy Use
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lower your power bills while supporting a greener planet with efficient solar solutions for everyday use.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 flex-col">
              <div className="w-12 h-12 flex items-center justify-center text-[#F6A235]">
                <Disc size={44} strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  The Most Used Energy Systems
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Benefit from advanced, dependable solar systems designed for both residential and commercial needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full">
          <img
            src="/heroImg.webp"
            alt="Solar House"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
