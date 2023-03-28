import React from "react";
import Card from "../component/Card";
import useFetch from "../hook/use-fetch";
import UseTitle from "../hook/use-title";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  UseTitle(`${title}`);
  return (
    <main>
      <section className="max-h-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-4">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              description={movie.overview}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
