import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id,header, description } = slide;
  return (
    <div className="relative" id={`slide${id}`}>
     <img className="rounded " style={{width:'80%', height:'500px',margin:'auto'}} src={image} alt="" />
      <div className="absolute top-52 left-52  text-white bg-black p-10 rounded opacity-80">
        <h1 className="text-2xl">{header}</h1>
      <p className=" text-xl text-white">{description}</p>
      </div>
    </div>
  );
};

export default BannerItem;
