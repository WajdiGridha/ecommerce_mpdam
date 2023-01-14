import React from "react";
import { IoMdCart } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-center ">
      <div className="lg:w-3/6 w-11/12 flex items-center justify-between">
        <a className="underline" href="/">
          Home
        </a>
        <a className="underline" href="/">
          Products
        </a>
        <img className="w-28" src="images/logo.png" alt="" />
        <a className="underline" href="/">
          Collections
        </a>
        <IoMdCart size={"1.5rem"} />
      </div>
    </nav>
  );
};

export default Navbar;
