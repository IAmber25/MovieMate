import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Poster from "../assets/photo-default.avif";

const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=6953e91a537271dbe198cdde2342da07`
      );
      const json = await response.json();
      setData(json);
    };
    fetchMovie();
  }, []);
  const image = data.backdrop_path
    ? `https://image.tmdb.org/t/p/w400/${data.backdrop_path}`
    : Poster;

  const {
    title,
    overview,
    vote_average: star,
    popularity,
    genres,
    budget,
    imdb_id,
    revenue,
    runtime,
    release_date,
  } = data;
  return (
    <main>
      <section className="flex justify-center mx-6 gap-8 my-10">
        <div className="h-full">
          <img src={image} alt="" />
        </div>
        <div className=" flex-1 text-zinc-800 dark:text-zinc-200 flex-start mx-2 my-2">
          <p className="text-5xl font-semibold mb-4">{title}</p>
          <p>{overview}</p>
          <div className="flex justify-center gap-4 mt-4">
            {genres &&
              genres.map((genre) => (
                <div key={genre.id} className=" border border-zinc-800 dark:border-zinc-200 dark:text-zinc-200 rounded-lg px-4 py-1">
                  {genre.name}
                </div>
              ))}
          </div>
          <div className="text-start flex flex-col gap-2">
            <div>
              <span>⭐</span>
              <span>{star}</span>
              <span>◾</span>
              <span></span>
            </div>
            <div>Runtime: {runtime}</div>
            <div>Budget: {budget}</div>
            <div>Revenue: {revenue}</div>
            <div>Release Date: {release_date}</div>
            <a href="{`www.imdb.com/${imdb_id}`}">
              <div>IMDB Link</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
