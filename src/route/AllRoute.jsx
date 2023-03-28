import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" />}></Route>
      <Route path="movie/:id" element={<MovieDetail />}></Route>
      <Route
        path="movie/popular"
        element={<MovieList apiPath="movie/popular" title="Popular"/>}
      ></Route>
      <Route
        path="movie/latest"
        element={<MovieList apiPath="movie/upcoming" 
        title="Latest"/>}
      ></Route>
      <Route
        path="movie/upcoming"
        element={<MovieList apiPath="movie/upcoming" 
        title="Upcoming"/>}
      ></Route>
      <Route path="search" element={<Search apiPath="search/movie" />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoute;
