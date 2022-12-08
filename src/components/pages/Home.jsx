import React from "react";
import Button from "./core_component/Button";
import Navigation from "./Navigation";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import AboutUs from "./AboutUs";

const Home = () => {
  const bgImage = {
    backgroundImage: 'url("/assets/images/Rectangle_1104.png")',
  };
  return (
    <div>
      <div style={bgImage} className="h-screen bg-cover">
        <div className="container flex flex-col justify-between h-full mx-auto">
          <Navigation />
          <div className="text-white">
            <div>
              <p className="text-4xl font-light">WELCOME TO</p>
              <p className="font-serif text-9xl leading-[116px]_ leading-none font-bold">
                LUXURY
              </p>
              <p className="text-5xl font-serif font-bold">HOTELS</p>
              <p className="max-w-lg">
                Book your stay and enjoy Luxury redefined at the most affordable
                rates.
              </p>
            </div>
          </div>
          <div className="grid place-content-center">
            <Button className="text-2xl text-black font-bold !p-4">
              <p className="flex items-center">
                <FaHotel size={20} className="mr-2" />
                BOOK NOW
              </p>
            </Button>
          </div>
          <div className="text-white text-center mb-5 justify-center grid place-content-center grid-flow-row">
            Scroll
            <p className="flex justify-center">
              <IoIosArrowDropdownCircle size={60} />
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
