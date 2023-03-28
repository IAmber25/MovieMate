import React from "react";
import { Link } from "react-router-dom";
import  Poster  from '../assets/photo-default.avif'

const Card = ({poster, title, description, id}) => {

  const posterImg = poster ? `https://image.tmdb.org/t/p/w400/${poster}` : Poster

  return ( 
    <div className="max-w-sm bg-zinc-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={posterImg}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
