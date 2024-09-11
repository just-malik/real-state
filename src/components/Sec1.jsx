import React from "react";

const Sec1 = () => {
  return (
    <div className="relative ">
      <img className="h-[409px] " src="/bg-1.png" />
      <div className="absolute top-0 w-full h-full bg-[#063053] opacity-50"></div>
      <div className="absolute text-white top-20 left-56">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] mb-4">Find Your Dream Home</h1>
          <p className="mb-10">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
          <div className="flex gap-6 ">
            <button className="bg-[#4A60A1] px-6 py-3 rounded-md">Rent</button>
            <button className="bg-white text-[#4A60A1] px-6 py-3 rounded-md">
              Sale
            </button>
          </div>
          <div className=" w-full rounded-md grid gap-5  grid-cols-4 bg-white mt-4 px-10 py-5 ">
            <div className="">
              <h4 className="mb-3 text-[#4A60A1] font-bold">Locations</h4>
              <select className="text-[#4A60A1]">
                <option className="opacity-60" value="">Select your city</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>
            <div className="">
            <h4 className="mb-3 text-[#4A60A1] font-bold">Property Type</h4>
              <select className="text-[#4A60A1]">
                <option className="opacity-60" value="">Select property type</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Sargodha">Lahore</option>
                <option value="Sargodha">Islamabad</option>
                <option value="Sargodha">Karachi</option>
              </select>
            </div>
            <div>
            <h4 className="mb-3 text-[#4A60A1] font-bold">Rent Range</h4>
              <select className="text-[#4A60A1]">
                <option className="opacity-60" value="">Select rent range</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Sargodha">Lahore</option>
                <option value="Sargodha">Islamabad</option>
                <option value="Sargodha">Karachi</option>
              </select>
            </div>
            <div className=" flex justify-center items-center">
                <button className="px-8 py-3 bg-[#4A60A1] text-white rounded-md">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
