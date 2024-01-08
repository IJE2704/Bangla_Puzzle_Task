import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

//  this function detect which page the user currently on
  const handleRouteClick = (route) => {
    setActiveRoute(route);
  };

  // user currently on which page the color of the icon will change
  const getIconColor = (route) => {
    return route === activeRoute ? "#000" : "#fff";
  };
//  this function will change the selected icon background
  const getBackgroundColor = (route) => {
    return route === activeRoute ? "#F1D5BB" : "transparent";
  };

  return (
    <div className="w-[132px] h-[851.999px] flex flex-col justify-start items-center bg-black rounded-3xl">
      <div className="h-[122px] flex justify-center items-center pt-10 pl-3">
        <img src="https://i.ibb.co/Q8n25KK/S.png" alt="" />
      </div>
      <div
        style={{ backgroundColor: getBackgroundColor("/home") }}
        className="w-full h-[130px] flex justify-center items-center"
      >
        <Link to="/home" onClick={() => handleRouteClick("/home")}>
          <IoMdHome color={getIconColor("/home")} fontSize={51} />
        </Link>
      </div>
      <div
        style={{ backgroundColor: getBackgroundColor("/menu") }}
        className="w-full h-[130px] flex justify-center items-center"
      >
        <Link to="/menu" onClick={() => handleRouteClick("/menu")}>
          <MdOutlineRestaurantMenu
            color={getIconColor("/menu")}
            fontSize={51}
          />
        </Link>
      </div>
      <div
        style={{ backgroundColor: getBackgroundColor("/cart") }}
        className="w-full h-[130px] flex justify-center items-center"
      >
        <Link to="/cart" onClick={() => handleRouteClick("/cart")}>
          <FaCartArrowDown color={getIconColor("/cart")} fontSize={51} />
        </Link>
      </div>
      <div
        style={{ backgroundColor: getBackgroundColor("/location") }}
        className="w-full h-[130px] flex justify-center items-center"
      >
        <Link to="/location" onClick={() => handleRouteClick("/location")}>
          <FaLocationDot color={getIconColor("/location")} fontSize={51} />
        </Link>
      </div>
      <div
        style={{ backgroundColor: getBackgroundColor("/exit") }}
        className="w-full h-[130px] flex justify-center items-center"
      >
        <Link to="/exit" onClick={() => handleRouteClick("/exit")}>
          <IoExit color={getIconColor("/exit")} fontSize={51} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
