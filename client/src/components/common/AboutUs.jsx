import React from "react";
import { Logo } from "../../utils";

const AboutUs = () => {
  return (
    <section
      id="about-section"
      className="py-16 max-w-screen-xl mx-auto md:grid md:grid-cols-4 
      md:grid-rows-6 px-8 flex flex-col "
    >
      <div
        className="md:col-span-2 md:col-start-1 
        drop-shadow-[0_3px_3px_rgba(199,87,224,0.8)] text-stone-400 
        lg:text-8xl sm:text-6xl md:text-6xl text-4xl flex items-center justify-center"
      >
        Our Mission
      </div>

      <div
        className="md:col-span-2 md:row-span-5 md:col-start-1 md:row-start-2
        bg-slate/10 flex justify-center items-center"
      >
        <div className="relative group">
          <img
            src={Logo}
            alt="logo"
            className="object-cover group-hover:drop-shadow-[0_3px_3px_rgba(199,87,224,0.8)] 
            transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </div>

      <div
        className="md:col-span-2 md:row-span-7 md:col-start-3  
         lg:px-0 sm:px-8 py-4  bg-slate/20 md:grid md:grid-cols-1 md:grid-rows-7"
      >
        <div className="md:row-span-6 md:row-start-2 sm:px-4 px-2 text-stone-300 h-full">
          <p className="sm:text-xl text-sm">
            At <span className="text-animate">SkillHub</span>, our mission is
            to revolutionize the way developers present their skills and connect
            with job opportunities across the globe. We are dedicated to
            providing a platform that not only highlights your unique talents
            but also verifies them through advanced blockchain technology,
            ensuring that your credentials are both authentic and credible. By
            bridging the gap between exceptional talent and top-notch
            opportunities, we strive to empower developers to achieve their
            career goals, accelerate their growth, and thrive in a competitive
            job market. Our commitment is to foster a supportive community where
            professionals can unlock their full potential and secure their ideal
            roles.
          </p>
          <br />
          <a href="/about-us">
            <span className="lg:top-6 top-0 text-xl relative font-medium hover:text-orange-500 hover:underline">
              Learn more
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
