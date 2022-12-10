import React from "react";
import Button from "./core_component/Button";

const Footer = () => {
  return (
    <div className="bg-[#14274A] py-14">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div>
          <p>
            <img
              src="/assets/images/Logo_white_1.png"
              alt="Mahesha"
              className="py-5 "
            />
          </p>
          <p className="max-w-xs">
            Gram: Bada Bangarda, Super Coridor, Indore 453112
          </p>
          <p>99-260-788-12</p>
        </div>
        <div>
          <p>About Us </p>
          <p>Contact </p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p> Facebook </p>
          <p> Twitter </p>
          <p> Instagram </p>
        </div>
        <div>
          <p> Subscribe to our newsletter </p>
          <form action="" method="post" className="flex">
            <input type="email" placeholder="Email Address" />
            <Button>OK</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
