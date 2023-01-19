import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";

import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <>
      <header>
        <div className="menu" onClick={() => setMenu(!menu)}>
          <img src={Menu} alt="" width="30" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">{isAdmin ? "Admin" : "BoomAndDeal"}</Link>
          </h1>
        </div>

        <ul style={styleMenu}>
          <li>
            <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
          </li>

          {isAdmin && adminRouter()}

          {isLogged ? (
            loggedRouter()
          ) : (
            <li>
              <Link to="/login">Login ✥ Register</Link>
            </li>
          )}

          <li onClick={() => setMenu(!menu)}>
            <img src={Close} alt="" width="30" className="menu" />
          </li>
        </ul>
      </header>
      {!isAdmin ? (
        <div style={{ margin: "30px" }}>
          <Slider {...settings}>
            <div>
              <img
                src={img1}
                alt="5"
                width={1560}
                height={480}
                className="img-responsive center-block"
              />
            </div>
            <div>
              <img
                src={img2}
                alt="4"
                width={1560}
                height={480}
                className="img-responsive center-block"
              />
            </div>
            <div>
              <img
                src={img3}
                alt="3"
                width={1560}
                height={480}
                className="img-responsive center-block"
              />
            </div>
            <div>
              <img
                src={img4}
                alt="2"
                width={1560}
                height={480}
                className="img-responsive center-block"
              />
            </div>
          </Slider>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
