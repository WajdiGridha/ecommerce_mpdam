import { useNavigate } from "react-router-dom";
import React from "react";

const Products = () => {
  const navigate = useNavigate();
  const ProductDetail = () => {
    navigate("/product-detail");
  };
  return (
    <div className="w-11/12 m-auto">
      <div className="my-16 flex justify-between">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <button className="px-10 py-2 rounded bg-stone-800 text-white">
          Fillter
        </button>
      </div>
      <div className="products grid justify-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="product space-y-2">
          <div
            className="w-[300px] h-[250px] cursor-pointer"
            onClick={ProductDetail}
          >
            <img
              className="w-full h-full object-cover"
              src="images/products/cap.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/jeans.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/black-tshirt.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/floralShirt.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/sunglasses.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/tshirt.webp"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/shoes.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/black-jacket.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/bag.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/headphones.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/watch-5esA.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
        <div className="product space-y-2">
          <div className="w-[300px] h-[250px] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="images/products/watch.jpg"
              alt=""
            />
          </div>
          <h1 className="text-xl">black worthy hat</h1>
          <p className="font-bold">$34</p>
        </div>
      </div>
      <div className="btns my-10 flex justify-center space-x-5">
        <button className="px-5 py-2 bg-stone-300 rounded">Prev</button>
        <button className="px-5 py-2 bg-stone-800 text-white rounded">1</button>
        <button className="px-5 py-2 bg-stone-800 text-white rounded">2</button>
        <button className="px-5 py-2 bg-stone-800 text-white rounded">3</button>
        <button className="px-5 py-2 bg-stone-800 text-white rounded">4</button>
        <button className="px-5 py-2 bg-stone-800 text-white rounded">5</button>
        <button className="px-5 py-2 bg-stone-300 rounded">Next</button>
      </div>
      <div className="w-full my-20 flex justify-between items-center">
        <div className="w-[500px] h-[400px] border-l-8 border-t-8 border-stone-800 p-2">
          <img
            className="w-full h-full object-cover"
            src="images/products/bag-2.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="xl:text-7xl text-5xl font-bold">
            Lorem ipsum dolor, sit amet{" "}
            <span className="text-rose-500 text-6xl xl:text-8xl">
              consectetur adipisicing{" "}
            </span>
            elit.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
