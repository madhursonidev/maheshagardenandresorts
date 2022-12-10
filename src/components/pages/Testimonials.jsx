import React from "react";
import Button from "./core_component/Button";

const Testimonials = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-6xl font-bold font-serif py-7">Testimonials</h1>
        <p className="text-3xl py-5">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p className="text-2xl"> Mr. and Mrs. Baxter, UK</p>
        <div className="flex justify-center gap-5 py-5">
          <Button>&#60;</Button>
          <Button>&#62;</Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
