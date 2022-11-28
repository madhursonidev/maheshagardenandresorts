import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Facilities from "./components/pages/Facilities";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="rooms" element={<Rooms />} />
      </Routes>
    </div>
  );
};

export default App;
