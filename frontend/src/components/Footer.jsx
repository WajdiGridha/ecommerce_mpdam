import React from "react";
import { FaReact } from "react-icons/fa";
import { BsFacebook, BsYoutube, BsDiscord } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-full bg-stone-100">
      <div className="lg:w-3/5 w-11/12 m-auto p-5 flex justify-between">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Shirts</h1>
          <a className="text-xs text-gray-600" href="/">
            Oxfor Button-Down Shirts
          </a>
          <a className="text-xs text-gray-600" href="/">
            Dress Shirt
          </a>
          <a className="text-xs text-gray-600" href="/">
            Office Shirt
          </a>
          <a className="text-xs text-gray-600" href="/">
            Flannel Shirt
          </a>
          <a className="text-xs text-gray-600" href="/">
            Chambray Shirt
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Shoes</h1>
          <a className="text-xs text-gray-600" href="/">
            Loafers
          </a>
          <a className="text-xs text-gray-600" href="/">
            Moccasins
          </a>
          <a className="text-xs text-gray-600" href="/">
            Oxfords
          </a>
          <a className="text-xs text-gray-600" href="/">
            Chukkas
          </a>
          <a className="text-xs text-gray-600" href="/">
            Active Sneakers
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Watches</h1>
          <a className="text-xs text-gray-600" href="/">
            Audemars Piguet
          </a>
          <a className="text-xs text-gray-600" href="/">
            Vacheron Constantin.
          </a>
          <a className="text-xs text-gray-600" href="/">
            Rolex
          </a>
          <a className="text-xs text-gray-600" href="/">
            Jaeger-LeCoultre
          </a>
          <a className="text-xs text-gray-600" href="/">
            Blancpain.
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Glasses</h1>
          <a className="text-xs text-gray-600" href="/">
            {" "}
            RFLKT Theory
          </a>
          <a className="text-xs text-gray-600" href="/">
            Persol PO2469V
          </a>
          <a className="text-xs text-gray-600" href="/">
            EyeBuyDirect Jungle
          </a>
          <a className="text-xs text-gray-600" href="/">
            Calvin Klein CK20531
          </a>
          <a className="text-xs text-gray-600" href="/">
            Ray-Ban Clubmaster
          </a>
        </div>
      </div>
      <div className="w-1/2 m-auto p-5 flex justify-center space-x-10 text-gray-700">
        <FaReact size={"2rem"} />
        <BsDiscord size={"2rem"} />
        <BsFacebook size={"2rem"} />
        <BsYoutube size={"2rem"} />
        <AiFillInstagram size={"2rem"} />
        <AiFillTwitterCircle size={"2rem"} />
      </div>
    </footer>
  );
};

export default Footer;
