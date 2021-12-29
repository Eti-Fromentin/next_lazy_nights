//Unfinished, must debug favorite feature and slider in favorite page

import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
import Image from "next/image";

// import CurrentUserNameContext from "../context/userContext";
// import CurrentAllFavoritesContext from "../context/favoritesContext";

import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  // const [isAdded, setIsAdded] = useState(false);
  // const { userName } = useContext(CurrentUserNameContext);
  // const { allFavorites } = useContext(CurrentAllFavoritesContext);

  const productName = product.itemCategory
    ? product.itemName
    : product.product_name;
  const productImg = product.itemCategory
    ? product.imgUrl
    : product.selected_images.front.display.fr;
  const productNameGeneric = product.itemCategory
    ? product.itemName
    : product.generic_name;
  const productCalories = product.itemCategory
    ? product.calories
    : product.nutriments.energy_value;
  const productCarbs = product.itemCategory
    ? product.carbs
    : product.nutriments.carbohydrates;
  const productFat = product.itemCategory
    ? product.fat
    : product.nutriments.fat;
  const productProtein = product.itemCategory
    ? product.carbs
    : product.nutriments.proteins;
  const productSugar = product.itemCategory
    ? product.sugar
    : product.nutriments.sugars;

  // function AddToFavorite() {
  //   if (userName) {
  //     setIsFavorite(!isFavorite);
  //     axios.post("https://lazy-back.site.etifrom.dev/api/favorites/barcode", {
  //       username: userName,
  //       itemCategory: "barcode",
  //       itemName: product.product_name,
  //       calories: product.nutriments.energy_value,
  //       fat: product.nutriments.fat,
  //       carbs: product.nutriments.carbohydrates,
  //       protein: product.nutriments.proteins,
  //       sugar: product.nutriments.sugars,
  //       imgUrl: product.selected_images.front.display.fr,
  //     });
  //   } else {
  //     window.alert("You must be logged in to use the favorite feature");
  //   }
  // }

  // function DeleteFromFavorite() {
  //   setIsFavorite(false);
  //   axios.delete(
  //     `https://lazy-back.site.etifrom.dev/api/favorites/barcode/${userName}/${product.product_name}`
  //   );
  // }

  // function handleClickFavorite() {
  //   isFavorite ? DeleteFromFavorite() : AddToFavorite();
  // }

  function handleClickFlip() {
    setMore(!more);
  }

  // useEffect(() => {
  //   if (
  //     allFavorites.some(
  //       (object) =>
  //         object.username === userName &&
  //         object.itemName === product.product_name &&
  //         object.itemCategory === "barcode"
  //     )
  //   ) {
  //     setIsFavorite(true);
  //   }
  // }, []);

  useEffect(() => {}, [isFavorite]);

  return (
    <div className={styles.productCard}>
      {more ? (
        <div className={styles.productImgContainer}>
          <div className={styles.productFront}>
            <h3 className={styles.productDescTitle}>{productName}</h3>
            <Image
              className={styles.productCardImage}
              id={styles.productCardImage}
              src={productImg}
              alt={productName}
              layout="fill"
            />
          </div>
        </div>
      ) : (
        <div className={styles.productBack}>
          <div className={styles.productDescBack}>
            <h2 className={styles.productDescTitleBack}>{productName}</h2>
            <h3 className={styles.productDescName}>{productNameGeneric}</h3>
            <div className={styles.productDescDetails}>
              <p>Per 100g:</p>
              <div className={styles.productDescDetailsLi}>
                Calories: {productCalories} KCal
              </div>
              <div className={styles.productDescDetailsLi}>
                Carbs: {productCarbs} g
              </div>
              <div className={styles.productDescDetailsLi}>
                Fat: {productFat} g
              </div>
              <div className={styles.productDescDetailsLi}>
                Protein: {productProtein} g
              </div>
              <div className={styles.productDescDetailsLi}>
                Sugar: {productSugar} g
              </div>
            </div>
          </div>
          <button
            className={styles.materialIconsOutlined}
            id={styles.close}
            onClick={handleClickFlip}
          >
            cancel
          </button>
        </div>
      )}
      <div className={styles.btnRow}>
        <button
          className={styles.materialIconsOutlined}
          onClick={handleClickFlip}
        >
          info
        </button>
        {/* <button
          className={styles.materialIconsOutlined}
          id={isFavorite ? styles.isFavorite : styles.notFavorite}
          onClick={handleClickFavorite}
        >
          star
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
