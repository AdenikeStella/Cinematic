import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from '../assets/backup.png';
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const pageTitle = useTitle(movie.title);
  const {id, original_title, overview, poster_path, genres, vote_count, vote_average, runtime, revenue, imdb_id, release_date, budget} = movie;

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup ;


  useEffect (() => {
    async function fetchMovie() {
    const response = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=865be93f91e73cc1993dc1e486ce9533`);
    const json = await response.json()
    setMovie(json);
    console.log(json);
    }
    fetchMovie();
  }, [])

  return (
<main>
  <section className="flex justify-around flex-wrap p-5">
    <div className="max-w-sm">
      <img className="rounded" src={image} alt={movie.title} />
    </div>
    <div className="max-w-2xl text-gray-900 text-lg dark:text-white">
      <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
      <p className="my-4 text-center lg:text-left text-base">{movie.overview}</p>
      {movie.genres ? (
         <p className="my-7 flex flex-wrap">
        {movie.genres.map ((genre) => (
                  <span className=" flex border-2 border-gray-100 rounded-md gap-2 p-2 m-2" key={genre.id}>{genre.name}</span>
        ))}
      </p>
      ) : "" }

    <div className="flex items-center">
        <svg className="w-5 h-5 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <span className=" text-gray-900 dark:text-white">{vote_count} reviews</span>
    </div>

        <p className="my-4 flex flex-wrap">
          <span className="mr-2 font-bold items-start">Runtime:</span>
          <span>{movie.runtime} min</span>
        </p>
        <p className="my-4 flex flex-wrap">
          <span className="mr-2 font-bold">Budget:</span>
          <span>{movie.budget}</span>

        </p>
        <p className="my-4 flex flex-wrap">
          <span className="mr-2 font-bold">Revenue:</span>
          <span>{movie.revenue}</span>

         </p>
         <p className="my-4 flex flex-wrap">
          <span className="mr-2 font-bold">Release Date:</span>
          <span>{movie.release_date}</span>

        </p>
        <p className="my-4 flex flex-wrap">
          <span className="mr-2 font-bold">IMDB Code:</span>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
        </p>
    </div>

  </section>
</main>  )
}
