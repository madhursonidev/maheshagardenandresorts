import React from "react";
import Button from "./core_component/Button";

const AboutUs = () => {
  return (
    <div className="bg-black px-5 py-20 ">
      <div className="flex justify-between container mx-auto">
        <div className="w-1/2 text-white flex justify-between flex-col">
          <p className="text-2xl font-bold font-serif text-gold-500">
            ABOUT US
          </p>
          <p className="text-4xl w-1/2 font-bold leading-normal">
            Your Peaceful Gateway, A Little Away From The City!
          </p>
          <Button className="text-2xl text-black font-bold !p-4">
            <p className="flex items-center">KNOW MORE</p>
          </Button>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/images/Rectangle_1106.png"
            alt="Rooms"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
