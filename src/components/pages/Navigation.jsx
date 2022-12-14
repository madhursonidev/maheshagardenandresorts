import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-64 h-40 bg-white grid rounded-b-[40px] place-content-center">
          <img
            src="/maheshagardenandresorts/assets/images/logo_2.png"
            alt="Mahesha Garden and Resorts"
          />
        </div>
        <div className="grid gap-20 items-center text-white font-bold ml-auto grid-flow-col">
          <Link to="contact" className="border-b-2 border-solid">
            Home
          </Link>
          <Link to="contact"> Facilities </Link>
          <Link to="contact"> Rooms </Link>
          <Link to="contact"> Contact-us </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
