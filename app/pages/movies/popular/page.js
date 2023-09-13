"use client";
import React from "react";

import Cards from "@/components/Cards";
import { useState, useEffect } from "react";
import { fetchmovie } from "@/utils/Context";
import { popular } from "@/components/constants/constants";
popular

const popularMovie = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const fetchdata = await fetchmovie(popular);
       
        setmovies(fetchdata.results);
       
      } catch (error) {}
    };
    getMovie();
  }, []);

  return (
    <main>
      <section className="py-7 max-w-7xl mx-auto">
        <h1 className="dark:text-white text-3xl mb-4 ml-2 text-slate-950 font-semibold">
          Popular movies
        </h1>
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Cards
              key={movie.id}
              movies={movies}
              setmovies={setmovies}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default popularMovie;
