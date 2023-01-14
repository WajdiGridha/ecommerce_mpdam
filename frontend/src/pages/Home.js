import React from "react";
import {
  Hero,
  Categories,
  Products,
  TopProducts,
  Navbar,
  Footer,
} from "../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <TopProducts />
      <Footer />
    </div>
  );
};

export default Home;
