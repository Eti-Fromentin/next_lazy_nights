import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import CurrentUserNameContext from "../context/userContext";
// import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
// import CurrentFinalChoicesContext from '../Contexts/finalChoices';

import logo from "../public/assets/logo.png";
import More from "../public/assets/more.png";

import styles from "../styles/MovieCard.module.css";
import Image from "next/image";

function MovieCard() {
  // const { allFavorites } = useContext(CurrentAllFavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  // const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);
  const [fetchedMovie, setFetchedMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&primary_release_date.gte=1970-01-01&with_original_language=en`
      )
      .then((response) => response.data)
      .then((data) => setFetchedMovie(data.results[0]));
  }, []);

  function AddToFavorite() {
    if (userName) {
      setIsFavorite(true);
      axios.post("https://lazy-back.site.etifrom.dev/api/favorites/movies", {
        username: userName,
        itemCategory: "movie",
        itemName: title,
        description: desc,
        imgUrl: img,
        itemId: id,
      });
    } else {
      window.alert("You must be logged in to use the favorite feature");
    }
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(
      `https://lazy-back.site.etifrom.dev/api/favorites/movies/${userName}/${id}`
    );
  }

  function handleClickFavorite() {
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
    if (isAdded) {
      setUserChoice(userChoice.filter((element) => element.itemName != title));
    } else {
      setUserChoice([
        ...userChoice,
        {
          username: userName,
          itemCategory: "movie",
          itemName: title,
          description: desc,
          imgUrl: img,
          itemId: id,
        },
      ]);
    }
  }

  function handleClickFlip() {
    setMore(!more);
  }

  // useEffect(() => {
  //   if (allFavorites.some((object) => object.username === userName && object.itemId === id && object.itemCategory === 'movie')) {
  //     setIsFavorite(true);
  //   }
  //   if (userChoice.some((object) => object.username === userName && object.itemId === id && object.itemCategory === 'movie')) {
  //     setIsAdded(true);
  //   }
  // }, [isFavorite, isAdded, userChoice, id, allFavorites, userName]);
  // useEffect(() => {}, [isFavorite, isAdded, userChoice]);

  return (
    <>
      {!fetchedMovie ? (
        <p>Loading</p>
      ) : (
        <div className={styles.movieCard}>
          {more ? (
            <div className={styles.cardFront}>
              <div className={styles.posterContainer}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${fetchedMovie.poster_path}`}
                  alt=""
                  layout="fill"
                />
              </div>
              <div className={styles.btnRow}>
                <button
                  className={styles.movieMaterialIconsOutlined}
                  onClick={handleClickFlip}
                >
                  info

                </button>
                <button
                  className={styles.movieMaterialIconsOutlined}
                  id={
                    isFavorite
                      ? "styles.MovieisFavorite"
                      : "styles.MovienotFavorite"
                  }
                  onClick={handleClickFavorite}
                >
                  star
                </button>
                <button
                  className={styles.movieMaterialIconsOutlined}
                  id={isAdded ? "styles.MovieisAdd" : "styles.MovienotAdd"}
                  onClick={handleClickAdded}
                >
                  add_shopping_cart
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.cardBack}>
              <Image
                src={logo}
                layout="fill"
                id={styles.logoFondDesc}
                alt="Logo"
              />
              <h2 className={styles.movieCardTitle}>{fetchedMovie.title}</h2>
              <p className={styles.movieBackDesc}>{fetchedMovie.overview}</p>
              <button
                className={styles.movieMaterialIconsOutlined}
                id={styles.movieBtnClose}
                onClick={handleClickFlip}
              >
                cancel
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MovieCard;

// <div className={styles.movieImageContainer}>
// {more ? (
//   <div className={styles.moviefront}>
//     {/* <div className={styles.posterContainer}> */}
//       <Image
//         src={`https://image.tmdb.org/t/p/w500/${fetchedMovie.poster_path}`}
//         // width={500}
//         // height={500}
//         layout="fill"
//         objectFit="contain"
//         alt=""
//         className={styles.movieCardImage}
//       />
//     {/* </div> */}
//     <button
//       className={styles.movieMaterialIconsOutlined}
//       id={
//         isFavorite
//           ? "styles.MovieisFavorite"
//           : "styles.MovienotFavorite"
//       }
//       onClick={handleClickFavorite}
//     >
//       star
//     </button>
//     <button
//       className={styles.movieMaterialIconsOutlined}
//       id={isAdded ? "styles.MovieisAdd" : "styles.MovienotAdd"}
//       onClick={handleClickAdded}
//     >
//       add_shopping_cart
//     </button>
//     <button className={styles.movieBtnMore} onClick={handleClickFlip}>
//       <Image src={More} alt="more" />
//     </button>
//   </div>
// ) : (
//   <div className={styles.movieBack}>
//     <p className={styles.movieDescBack} id={styles.moviePBack}>
//       <div id={styles.movieCardTitle}>{title}</div>
//       <Image
//         src={logo}
//         className={styles.filmLogoFondDesc}
//         id={styles.logoFondDesc}
//         alt="fondDescLogo"
//       />
//       <p className={styles.movieBackDesc}>{desc}</p>
//     </p>
//     <button
//       className={styles.movieMaterialIconsOutlined}
//       id={styles.movieBtnClose}
//       onClick={handleClickFlip}
//     >
//       cancel
//     </button>
//   </div>
// )}
// </div>
