import React from "react";
import Photo from "../assets/photo.jpg";
const Hero = () => {
  return (
    <section className="flex gap-6 pb-6">
      <div className="h-110 w-145">
        <img
          src={Photo}
          alt="Profile"
          className="h-full w-full object-cover rounded-b-xl"
        />
      </div>

      <div className="h-110 w-200 rounded-xl flex flex-col px-10 py-15 justify-end bg-yellow-100/50 backdrop-blur-md ">
        <h1 className="text-4xl font-medium">Hi there, I'm someone!</h1>
        <p className="text-lg mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ad
          non. Ut nostrum blanditiis, quibusdam repellendus omnis fugiat non
          accusantium?
        </p>
      </div>
    </section>
  );
};

export default Hero;
