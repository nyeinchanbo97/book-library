import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <div>
      <nav className="flex justify-between py-5 px-10 border-b-4 border-blue-500 mb-14  ">
        <div className=" text-2xl font-bold text-blue-500">Read.</div>
        <ul className="lg:flex hidden gap-4 ">
          <NavLink><li className=" text-blue-500 hover:text-blue-800  cursor-pointer">History</li></NavLink>
          <li className=" text-blue-500 hover:text-blue-800  cursor-pointer">Cartoon</li>
          <li className=" text-blue-500 hover:text-blue-800  cursor-pointer">Business</li>
          <li className=" text-blue-500 hover:text-blue-800  cursor-pointer">About us</li>
          <li className=" text-blue-500 hover:text-blue-800  cursor-pointer">Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavComponent;
