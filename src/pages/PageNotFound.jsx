import React from "react";
import { Link } from "react-router-dom";
import pnfImage from "../assets/photo-default.avif";

const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col px-5 justify-center gap-10">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-7xl text-grey-700 dark:text-zinc-200">
            404 Oops.. Page Not Found
          </p>
          <div className="max-w-lg ">
            <img src={pnfImage} alt="" className=" rounded-3xl"/>
          </div>
        </div>
        <div>
            <Link to="/">
                <button className="w-64 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-900 rounded-md text-zinc-700 dark:text-zinc-200 border border-zinc-800 dark:border-zinc-200 px-4 py-2">Back to cinemate </button>
            </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
