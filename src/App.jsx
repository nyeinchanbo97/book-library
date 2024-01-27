import React, { useEffect, useState } from "react";
import useFetch from "./hook/useFetch";
import {getBookData} from "./service/book.service"
import { getAuthorData } from "./service/author.service";
import { Route, Routes } from "react-router-dom";
import { BookDetailPage, HomePage } from "./page";
import { NavComponent } from "./components";

const App = () => {
  const { data, error, loading } = useFetch(getBookData,"book");
  return (
    <div className=" main">
      <NavComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path={`/book/:id`} element={<BookDetailPage/>} />
      </Routes>
    </div>
  );
}; 

export default App;
