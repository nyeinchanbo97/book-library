import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { getBookData } from "../../service/book.service";
import { BookDetailSkeletonComponent } from "../../components";

const BookDetailPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useFetch(getBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      {loading ? (
        <BookDetailSkeletonComponent />
      ) : (
        <div>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div>
              <div className="group mx-5 lg:mx-auto border w-auto lg:w-[900px] lg:h-[450px] rounded-xl flex max-lg:flex-col gap-2 shadow-lg ">
                <div className=" overflow-hidden basis-1/2  lg:rounded-s-xl max-lg:rounded-t-xl">
                  <img
                    className=" lg:rounded-s-xl max-lg:rounded-t-xl w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="p-3 flex flex-col gap-2 justify-center basis-1/2">
                  <h1 className=" text-xl font-bold text-gray-600 line-clamp-1">
                    {data.name}
                  </h1>
                  <h2 className=" text-lg text-gray-400 line-clamp-1">
                    {data.author}
                  </h2>
                  <p className="  text-gray-500 line-clamp-3">
                    {data.description}
                  </p>
                </div>
              </div>
              <button
                onClick={handleBack}
                className=" float-end mr-10 my-5 px-3 py-1 border rounded-lg border-gray-500 text-gray-500 active:scale-110 duration-500 hover:bg-black hover:text-white"
              >
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
