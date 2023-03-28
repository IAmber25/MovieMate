import React from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../component/Card";
import useFetch from "../hook/use-fetch";
import UseTitle from "../hook/use-title";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryPath = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryPath);

  UseTitle(`Search Result for ${queryPath}/Cinemate`);

  return (
    <main>
      <section className="py-5 px-20 text-start">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for "${queryPath}"`
            : `Results for "${queryPath}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-4">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              description={movie.overview}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
