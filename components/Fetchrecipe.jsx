import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import axios from "axios";
import { useRouter } from "next/router";

import CurrentAllFavoritesContext from "../context/favoritesContext";

import FoodDrinkCard from "./FoodDrinkCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

function FetchRecipe({ torefresh }) {
  const key = process.env.NEXT_PUBLIC_RECIPE_API_KEY;
  const recipeByNutrient = `https://api.spoonacular.com/recipes/findByNutrients?minCholesterol=30&minCarbs=30&minFat=50&minCalories=600&maxSugar=10&number=300&random=true&apiKey=${key}`;
  const [fetchedRecipe, setFetchedRecipe] = useState();
  const [refresh, setRefresh] = useState(false);
  const { allFavorites, fetchAllFavorites } = useContext(
    CurrentAllFavoritesContext
  );
  const router = useRouter();
  const numbSlice = router.pathname === "/Catalog" ? 40 : 15;

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    fetchAllFavorites();
    axios
      .get(recipeByNutrient)
      .then((response) => response.data)
      .then((data) =>
        setFetchedRecipe(
          data.filter((elt) => elt.calories > 700 || parseInt(elt.fat) > 70)
        )
      );
  }, [torefresh]);

  useEffect(() => {}, [allFavorites, refresh]);

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {fetchedRecipe &&
            fetchedRecipe.slice(0, `${numbSlice}`).map((info, index) => (
              <SwiperSlide key={index}>
                <FoodDrinkCard
                  key={index}
                  name={info.title}
                  calories={info.calories}
                  sugar={info.sugar}
                  imgUrl={info.image}
                  carbs={info.carbs}
                  fat={info.fat}
                  protein={info.protein}
                  category="recipe"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        {router.pathname !== "/Catalog" && (
          <button className={"refreshButton"} onClick={Refresh}>
            Refresh
          </button>
        )}
      </div>
    </div>
  );
}

export default FetchRecipe;
