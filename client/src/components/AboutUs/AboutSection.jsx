import React from "react";
import about_img from "../../assets/about_us.png";

const AboutSection = ({ handleButtonClick }) => {
  return (
    <div className="hero py-8 sm:py-14 bg-base-300">
      <div className="hero-content grid md:grid-cols-2 gap-8">
        <div className="order-2 ml-auto hidden md:block">
          <img src={about_img} alt="About" />
        </div>
        <div>
          <h1 className="text-5xl font-bold leading-normal">About Us</h1>
          <div className="block md:hidden">
            <img src={about_img} alt="About" className="w-1/2 h-auto mx-auto" />
          </div>
          <p className="py-6 text-xl sm:text-3xl">
            Explore Social Media trends effortlessly with InsightHub. Simple,
            user-friendly, and packed with insights – we make social media
            analytics easy for everyone
          </p>
          <button className="btn btn-warning w-1/2 text-xl mt-4" onClick={handleButtonClick}>
            Our Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
