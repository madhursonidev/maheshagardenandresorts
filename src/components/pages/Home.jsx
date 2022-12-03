import React from "react";
import { Link } from "react-router-dom";
import Button from "./core_component/Button";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link className="text-xl underline cursor-pointer" to="facilities">
        <Button>facilities</Button>
      </Link>
      <Link to="contact">
        <p className="text-xl font-sans underline cursor-pointer">
          Click to view our contact page
        </p>
        <p className="text-xl font-serif underline cursor-pointer">
          Click to view our contact page
        </p>
      </Link>
      <Link to="rooms">Click to view our rooms page</Link>
    </div>
  );
};

export default Home;
