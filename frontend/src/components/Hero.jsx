import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="mt-5">
      <div className="w-11/12 m-auto h-[400px] relative">
        <img
          className="w-full h-full object-cover"
          src="images/hroo.jpg"
          alt=""
        />
        <div className="absolute top-10">
          <div className="lg:w-1/2 w-4/5 m-auto p-5 space-y-5">
            <h1 className="lg:text-5xl text-4xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?
            </h1>
            <div className="bg-white px-5 py-2 flex justify-between items-center">
              <input
                className="w-full outline-0"
                type="text"
                placeholder="Search..."
              />
              <AiOutlineSearch size={"1.5rem"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
