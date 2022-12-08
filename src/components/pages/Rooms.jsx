import React from "react";
import InputText from "./core_component/InputText";
import { MdBed } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";

const Rooms = () => {
  return (
    <div className="flex flex-row justify-center">
      <h1 className="text-5xl font-serif font-medium">BOOK YOUR RESORT ROOM</h1>
      <p>There are three types of room available.</p>
      <form action="" method="post">
        <div className="flex">
          <div className="flex flex-col">
            <label className="font-medium" for="room">
              <MdBed /> ROOM
            </label>
            <InputText name="room" placeholder="Choose Room Type" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" for="date">
              <RiCalendar2Fill /> DATE
            </label>
            <InputText name="date" placeholder="dd/mm/yyyy" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" for="name">
              NAME
            </label>
            <InputText name="name" placeholder="Your full name" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" for="phoneNumber">
              PHONE NUMBER
            </label>
            <InputText name="phoneNumber" placeholder="Mobile number" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rooms;
