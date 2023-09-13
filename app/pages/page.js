"use client";
import React from "react";

import Cards from "@/components/Cards";
import { useState, useEffect } from "react";
import { nowPlaying } from "@/components/constants/constants";
import { fetchmovie } from "@/utils/Context";

const MovieList = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const fetchdata = await fetchmovie(nowPlaying);
        setmovies(fetchdata.results);
      } catch (error) {}
    };
    getMovie();
  }, []);

  return (
    <main>
      <section className="py-7 max-w-7xl mx-auto">
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

export default MovieList;
