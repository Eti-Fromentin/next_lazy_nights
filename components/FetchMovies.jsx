import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import MovieCard from "./MovieCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

export default function FetchMovies({ torefresh, category }) {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const randomPageLazy = getRandomInt(400);
  const randomPageHappy = getRandomInt(250);
  const randomPageBlue = getRandomInt(50);
  const callParameters = getParameters(category);
  const router = useRouter();
  const numbSlice = router.pathname === "/Catalog" ? 40 : 15;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getParameters(category) {
    if (category === "lazy") {
      return `&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&with_genres=878&sort_by=vote_count.desc&page=${randomPageLazy}`;
    } else if (category === "happy") {
      return `&with_genres=35&with_genres=28&with_genres=12&with_genres=878&without_genres=10749&sort_by=vote_count.desc&page=${randomPageHappy}`;
    } else if (category === "blue") {
      return `&with_genres=10749&without_genres=28&without_genres=80&without_genres=99&without_genres=27&without_genres=10751&without_genres=10770&sort_by=popularity.desc&page=${randomPageBlue}`;
    } else if (category === "catalog") {
      return `&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&with_genres=80&with_genres=10751&with_genres=14&with_genres=27&with_genres=878&with_genres=53&without_genres=99&sort_by=vote_count.desc&page=${randomPageLazy}`;
    }
  }

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&primary_release_date.gte=1970-01-01&with_original_language=en${callParameters}`
      )
      .then((response) => response.data)
      .then((data) => setFetchedMovies(data.results));
  }, [refresh, torefresh]);

  return (
    <div>
      {!fetchedMovies.length ? (
        "Loading"
      ) : (
        <div >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="myMovieSwiper"
        >
          {fetchedMovies.length &&
            fetchedMovies
              .filter((movie) => movie.poster_path)
              .slice(0, `${numbSlice}`)
              .map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieCard key={index} title={movie.title} desc={movie.overview} img={movie.poster_path} id={movie.id} />
                </SwiperSlide>
              ))}
        </Swiper>
        {router.pathname !== "/Catalog" && (
             <button className={"refreshButton"} onClick={Refresh}>
               Refresh
             </button>
           )}
        </div>
      )}
    </div>
  );
}
