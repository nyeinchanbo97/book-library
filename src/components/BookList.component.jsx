import React from "react";

const BookListComponent = ({ data: {id, name, author, description, image } }) => {
  return (
    
      <div className={` group border w-full h-full rounded-xl flex flex-col justify-start gap-2 shadow-lg mx-auto relative overflow-hidden`}>
        <div
          className=" absolute bg-black text-white rounded-b-xl px-2 left-[70px] opacity-0 -translate-y-3 duration-500
        group-hover:opacity-100 group-hover:translate-y-0 z-50 font-mono "
        >
          Click for detail.
        </div>
        <div className=" overflow-hidden rounded-t-xl">
          <img
            className=" rounded-t-xl w-full h-auto object-cover group-hover:scale-110 duration-500"
            src={image}
            alt=""
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h1 className=" text-lg font-bold text-gray-600 line-clamp-1">
            {name}
          </h1>
          <h2 className=" text-sm text-gray-400 line-clamp-1">{author}</h2>
          <p className=" text-gray-500 line-clamp-3">{description}</p>
        </div>
      </div>
 
  );
};

export default BookListComponent;
