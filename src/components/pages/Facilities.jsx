import React from "react";
import { MdRestaurantMenu, MdCellWifi } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { GiFireFlower } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import Button from "./core_component/Button";
import Gallery from "./Gallery";

const Facilities = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-gold-500 text-5xl font-bold font-serif">
          FACILITIES
        </h1>
        <p className="text-white font-light text-base py-5">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite unique. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>
      <div className="bg-gold-500">
        <div className="container mx-auto">
          <div className="grid grid-flow-col justify-evenly text-center text-black py-8">
            <p className="flex flex-col">
              <span className="mx-auto">
                <MdRestaurantMenu />
              </span>
              Restaurant
            </p>
            <p className="flex flex-col">
              <span className="mx-auto">
                <MdCellWifi />
              </span>
              WIFI
            </p>
            <p className="flex flex-col">
              <span className="mx-auto">
                <FaParking />
              </span>
              Parking
            </p>
            <p className="flex flex-col">
              <span className="mx-auto">
                <BsSnow />
              </span>
              AC
            </p>
            <p className="flex flex-col">
              <span className="mx-auto">
                <GiFireFlower />
              </span>
              Garden
            </p>
            <p className="flex flex-col">
              <span className="mx-auto">
                <BiDish />
              </span>
              Room Service
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Button variant="white">KNOW MORE</Button>
      </div>
      <Gallery />

    </div>
  );
};

export default Facilities;
