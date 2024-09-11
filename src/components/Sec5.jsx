import React from "react";
import Sec5Card from "./Sec5Card";
const Sec5 = () => {
  return (
    <div className=" my-20 px-14 ">
      <h1 className="text-center text-[30px] font-sans font-semibold mb-5">
        Latest Properties of Rent
      </h1>
      <p className="text-center text-[#c3c7cc]">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        <br /> cubilia curae; Proin sodales ultrices nulla blandit volutpat.
      </p>
      <div className="flex gap-5 mt-10">
        <Sec5Card src="/Card 55.png" />
        <Sec5Card src="/Card 6.png" />
        <Sec5Card src="/Card 7.png" />
        <Sec5Card src="/Card 8.png" />
      </div>
    </div>
  );
};

export default Sec5;
