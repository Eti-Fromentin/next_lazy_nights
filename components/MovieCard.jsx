import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import CurrentUserNameContext from "../context/userContext";
// import CurrentAllFavoritesContext from '../Contexts/favoritesContext';
// import CurrentFinalChoicesContext from '../Contexts/finalChoices';

import logo from "../public/assets/logo.png";

import styles from "../styles/MovieCard.module.css";

function MovieCard({ id, title, desc, img }) {
  // const { allFavorites } = useContext(CurrentAllFavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { userName } = useContext(CurrentUserNameContext);
  // const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);

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
      <div className={styles.movieCard}>
        {more ? (
          <div className={styles.cardFront}>
            <div className={styles.posterContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${img}`}
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
            <h2 className={styles.movieCardTitle}>{title}</h2>
            <p className={styles.movieBackDesc}>{desc}</p>
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
    </>
  );
}

export default MovieCard;
