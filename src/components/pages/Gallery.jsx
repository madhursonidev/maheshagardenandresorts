import React from "react";
import Button from "./core_component/Button";

const imgs = [
  {
    img: "/assets/images/Rectangle_1111.png",
  },
  {
    img: "/assets/images/Rectangle_1112.png",
  },
  {
    img: "/assets/images/Rectangle_1114.png",
  },
  {
    img: "/assets/images/Rectangle_1115.png",
  },
  {
    img: "/assets/images/Rectangle_1113.png",
  },
  {
    img: "/assets/images/Rectangle_1116.png",
  },
  {
    img: "/assets/images/Rectangle_1117.png",
  },
];
const openImage = (singleImage) => {};

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-gold-500 text-5xl font-bold font-serif">GALLERY</h1>
      <div className="columns-3">
        {imgs.map((obj, i) => {
          return (
            <img
              src={obj.img}
              alt={i}
              className="w-full p-2"
              onClick={() => openImage(obj.img)}
            />
          );
        })}
      </div>
      <div className="px-2 py-5"><Button >SEE MORE</Button></div>
    </div>
  );
};

export default Gallery;
