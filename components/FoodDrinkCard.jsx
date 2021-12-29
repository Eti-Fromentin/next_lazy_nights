import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import CurrentUserNameContext from "../context/userContext";
import CurrentAllFavoritesContext from "../context/favoritesContext";
import CurrentFinalChoicesContext from "../context/finalChoices";

import logo from "../public/assets/logo.png";

import styles from "../styles/FoodDrinkCard.module.css";

function FoodDrinkCard({
  category,
  name,
  calories,
  sugar,
  imgUrl,
  store,
  portion,
  carbs,
  protein,
  fat,
}) {
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites } = useContext(CurrentAllFavoritesContext);
  const { userChoice, setUserChoice } = useContext(CurrentFinalChoicesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const subCategory = category === 'drinks' ? 'drinks' : 'food'; 
  const [postBody, setPostBody] = useState({});

  useEffect(() => {
    if (category === "takeaway") {
      setPostBody({
        username: userName,
        itemCategory: category,
        itemName: name,
        calories: calories,
        store: store,
        portion: portion,
        fat: fat,
        carbs: carbs,
        protein: protein,
        imgUrl: imgUrl,
      });
    } else if (category === "drinks") {
      setPostBody({
        username: userName,
        itemCategory: category,
        itemName: name,
        calories: calories,
        sugar: sugar,
        imgUrl: imgUrl,
      });
    } else {
      setPostBody({
        username: userName,
        itemCategory: category,
        itemName: name,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein,
        sugar: sugar,
        imgUrl: imgUrl,
      });
    }
  }, []);

  function AddToFavorite() {
    if (userName) {
      setIsFavorite(true);
      axios.post(
        `https://lazy-back.site.etifrom.dev/api/favorites/${subCategory}`,
        postBody
      );
    } else {
      window.alert("You must be logged in to use the favorite feature");
    }
  }

  function DeleteFromFavorite() {
    setIsFavorite(false);
    axios.delete(
      `https://lazy-back.site.etifrom.dev/api/favorites/${subCategory}/${userName}/${itemName}`
    );
  }

  function handleClickFavorite() {
    isFavorite ? DeleteFromFavorite() : AddToFavorite();
  }

  function handleClickAdded() {
    if (userName) {
      setIsAdded(!isAdded);
      if (isAdded) {
        setUserChoice(userChoice.filter((element) => element.itemName != name));
      } else {
        setUserChoice([
          ...userChoice,
          {
            ...postBody,
          },
        ]);
      }
    } else {
      window.alert("You must be logged in to use this feature");
    }
  }

  function handleClickFlip() {
    setMore(!more);
  }

  useEffect(() => {
    if (
      userChoice.some(
        (object) =>
          object.username === userName &&
          object.itemName === name &&
          object.itemCategory === `${category}`
      )
    ) {
      setIsAdded(true);
    };
    if (
      allFavorites.some(
        (object) =>
          object.username === userName &&
          object.itemName === name &&
          object.itemCategory === `${category}`
      )
    ) {
      setIsFavorite(true);
    }
  }, [isFavorite, userChoice, isAdded, allFavorites, userName, category]);

  return (
    <div className={styles.card}>
      <div className={styles.foodDrinkCard}>
        {more ? (
          <div className={styles.cardFront}>
            <div className={styles.imgContainer}>
              <Image src={imgUrl} alt="" layout="fill" />
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
            <h2 className={styles.cardTitle}>
              {name}
            </h2>
            <p className={styles.cardDetails}>
              {category === "takeaway" && (
                <>
                  <div className={styles.detailsLi}>Restaurant : {store}</div>
                  <div className={styles.detailsLi}>Portion: {portion}</div>
                </>
              )}
              <div className={styles.detailsLi}>Calories: {calories}Kcal</div>
              {category !== "drinks" && (
                <>
                  <div className={styles.detailsLi}>Fat: {fat}</div>
                  <div className={styles.detailsLi}>Carbs: {carbs}</div>
                  <div className={styles.detailsLi}>Protein: {protein}</div>
                </>
              )}
              {category !== "takeaway" && (
                <div className={styles.detailsLi}>Sugar: {sugar}</div>
              )}
            </p>
            <button
              className={styles.materialIconsOutlined}
              id={styles.BtnClose}
              onClick={handleClickFlip}
            >
              cancel
            </button>
          </div>
        )}
      </div>
      <div className={styles.btnRow}>
        <button
          className={styles.materialIconsOutlined}
          onClick={handleClickFlip}
        >
          info
        </button>
        <button
          className={styles.materialIconsOutlined}
          id={isFavorite ? styles.isFavorite : styles.notFavorite}
          onClick={handleClickFavorite}
        >
          star
        </button>
        <button
          className={styles.materialIconsOutlined}
          id={isAdded ? styles.isAdd : styles.notAdd}
          onClick={handleClickAdded}
        >
          chair
        </button>
      </div>
    </div>
  );
}

export default FoodDrinkCard;
