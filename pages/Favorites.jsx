import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Image from "next/image";

import CurrentAllFavoritesContext from "../context/favoritesContext";
import CurrentUserNameContext from "../context/userContext";

import MovieCard from "../components/MovieCard";
import FoodDrinkCard from "../components/FoodDrinkCard";
import SmallLogo from "../public/assets/SmallLogo.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Favorites.module.css";

SwiperCore.use([Pagination, Navigation]);

function Favorites() {
  const { userName } = useContext(CurrentUserNameContext);
  const { allFavorites, fetchAllFavorites } = useContext(
    CurrentAllFavoritesContext
  );

  useEffect(() => {
    fetchAllFavorites();
  }, [userName]);

  return (
    <div className={styles.main}>
      {userName.length ? (
        <div className={styles.FavoritePage}>
          <div className={styles.img}>
            <Image src={SmallLogo} alt="Lazy Night Small Logo" />
          </div>
          <h1 className={styles.FavoritesFirstTitle}>Your favorites</h1>
          <h2 className={styles.FavoritePresentation}>
            Here you will find all your favorites recipes, products and movies.{" "}
            <br />
            You can also add what you want to your Lazy Night from here.
          </h2>
          <section>
            <h3 className={styles.FavoriteSectionTitle}>Your Recipes:</h3>
              {allFavorites.some(
                (elt) =>
                  elt.username === userName && elt.itemCategory === "recipe"
              ) ? (
                <div className={styles.swiperContainer}>
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
                  {allFavorites
                    .filter(
                      (elt) =>
                        (elt.itemCategory === "recipe") &
                        (elt.username === userName)
                    )
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <FoodDrinkCard
                          key={index} {...info}
                          name={info.itemName}
                          calories={info.calories}
                          carbs={info.carbs}
                          fat={info.fat}
                          protein={info.protein}
                          sugar={info.sugar}
                          imgUrl={info.imgUrl}
                          category='recipe'
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
            </div>
              ) : (
                <h2 className={styles.FavoriteNoProduct}>
                  Nothing yet in here
                </h2>
              )}
          </section>
          <hr className={styles.favoritesHrline} />
          <section>
            <h3 className={styles.FavoriteSectionTitle}>Your Takeaways:</h3>
            {allFavorites.some(
              (elt) =>
                elt.username === userName && elt.itemCategory === "takeaway"
            ) ? (
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
                {allFavorites
                  .filter(
                    (elt) =>
                      (elt.itemCategory === "takeaway") &
                      (elt.username === userName)
                  )
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <FoodDrinkCard
                        key={index} {...info}
                        name={info.itemName}
                        store={info.store}
                        portion={info.portion}
                        calories={info.calories}
                        carbs={info.carbs}
                        fat={info.fat}
                        protein={info.protein}
                        imgUrl={info.imgUrl}
                        category='takeaway'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <h2 className={styles.FavoriteNoProduct}>Nothing yet in here</h2>
            )}
          </section>
          <hr className={styles.favoritesHrline} />
          <section>
            <h3 className={styles.FavoriteSectionTitle}>Your Drinks:</h3>
            {allFavorites.some(
              (elt) =>
                elt.username === userName && elt.itemCategory === "drinks"
            ) ? (
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
                {allFavorites
                  .filter(
                    (elt) =>
                      (elt.itemCategory === "drinks") &
                      (elt.username === userName)
                  )
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <FoodDrinkCard
                        key={index} {...info}
                        name={info.itemName}
                        calories={info.calories}
                        sugar={info.sugar}
                        imgUrl={info.imgUrl}
                        category='drinks'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <h2 className={styles.FavoriteNoProduct}>Nothing yet in here</h2>
            )}
          </section>
          <hr className={styles.favoritesHrline} />
          <section>
            <h3 className={styles.FavoriteSectionTitle}>Your Movies:</h3>
            {allFavorites.some(
              (elt) => elt.username === userName && elt.itemCategory === "movie"
            ) ? (
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
                {allFavorites
                  .filter(
                    (elt) =>
                      (elt.itemCategory === "movie") &
                      (elt.username === userName)
                  )
                  .map((info, index) => (
                    <SwiperSlide key={index}>
                      <MovieCard
                        key={index}
                        id={info.itemId}
                        title={info.itemName}
                        desc={info.moviedescription}
                        img={info.imgUrl}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : (
              <h2 className={styles.FavoriteNoProduct}>Nothing yet in here</h2>
            )}
          </section>
        </div>
      ) : (
        <div className={styles.FavoriteUnlogged}>
          <h2 className={styles.FavoriteUnloggedText}>
            Oh no ! <br />
            You must be logged in to view this page !
          </h2>
        </div>
      )}
    </div>
  );
}

export default Favorites;
