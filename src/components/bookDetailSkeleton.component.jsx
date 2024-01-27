import React from "react";

const bookDetailSkeletonComponent = () => {
  return (
    <div>
      <div className=" animate-pulse mx-5 lg:mx-auto border w-auto lg:w-[900px] lg:h-[450px] rounded-xl flex max-lg:flex-col gap-2 shadow-lg ">
        <div className="flex items-center justify-center  bg-gray-300 lg:rounded-s-xl max-lg:rounded-t-xl w-full lg:w-1/2 h-[450px] dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="p-3 flex flex-col gap-2 justify-center">
          <h1 className=" text-xl font-bold text-gray-600 line-clamp-1">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
          </h1>
          <h2 className=" text-lg text-gray-400 line-clamp-1">
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
          </h2>
          <p className="  text-gray-500 line-clamp-3">
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[280px] mb-3"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[250px] mb-3"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[200px] mb-3"></div>
            </div>
          </p>
        </div>
      </div>
      <button className=" float-end mr-10 my-5 px-3 py-1 border rounded-lg border-gray-500 text-gray-500">
        Back
      </button>
    </div>
  );
};

export default bookDetailSkeletonComponent;
