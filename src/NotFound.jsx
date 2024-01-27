import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h1 className=" text-[150px] leading-[170px] font-bold text-blue-500">
          Oops!
        </h1>
        <p className=" font-bold text-xl text-black">404-page not found</p>
        <p className="text-center text-gray-500 text-sm">
          The page you are looking for might have been removed <br></br> had its
          name changed or is temporarily unavailable.
        </p>
        <Link to={"/"}>
          <button className=" px-3 py-2 bg-blue-500 text-white rounded-xl">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
