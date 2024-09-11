import React from "react";

const Sec2Img = (props) => {
  return (
    <div className="relative">
      <img src={props.src} />
      <div className="absolute top-3 left-3 text-white">
        <h4 className=" text-md ">{props.name}</h4>
        <p className="font-light text-sm ">25 Listings</p>
      </div>
    </div>
  );
};

export default Sec2Img;
