import React from 'react'
import Link from 'next/link';

const Cards = ({movies,setmovies,movie }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 ">
      <Link href={`/pages/movie/${movie.id}`}>
        <img
          className="rounded-t-lg  "
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
   

export default Cards
