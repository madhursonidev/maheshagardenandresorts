import React from "react";
import Button from "./core_component/Button";
import TextInput from "./core_component/TextInput";
import { MdBed, MdPhone } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const Rooms = () => {
  return (
    <div className="flex bg-gold-500 px-5 py-28 justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-serif font-medium">
          BOOK YOUR RESORT ROOM
        </h1>
        <p>There are three types of room available.</p>
        <form action="" method="post" className="mt-12">
          <div className="grid grid-flow-col justify-between gap-5 text-left">
            <div className="flex flex-col">
              <label className="font-medium flex" for="room">
                <MdBed /> ROOM
              </label>
              <TextInput name="room" placeholder="Choose Room Type" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium flex" for="date">
                <RiCalendar2Fill /> DATE
              </label>
              <TextInput name="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium flex" for="name">
                <GoPerson /> NAME
              </label>
              <TextInput name="name" placeholder="Your full name" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium flex" for="phoneNumber">
                <MdPhone /> PHONE NUMBER
              </label>
              <TextInput name="phoneNumber" placeholder="Mobile number" />
            </div>
            <Button className="text-2xl text-black font-bold !p-4">
              <p className="flex items-center">BOOK NOW</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rooms;
