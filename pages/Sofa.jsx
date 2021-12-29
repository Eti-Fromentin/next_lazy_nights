import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import CurrentUserNameContext from "../context/userContext";
import CurrentFinalChoicesContext from "../context/finalChoices";
import CurrentAllFavoritesContext from "../context/favoritesContext";

import MovieCard from "../components/MovieCard";
import FoodDrinkCard from "../components/FoodDrinkCard";
import NutritionLabel from "../components/NutritionLabel";

import styles from "../styles/Sofa.module.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

function Sofa() {
  const { userName } = useContext(CurrentUserNameContext);
  const { userChoice } = useContext(CurrentFinalChoicesContext);
  const [totalChoice, setTotalChoice] = useState();
  const { allFavorites } = useContext(CurrentAllFavoritesContext);

  useEffect(() => {}, [userChoice, allFavorites]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {userName ? (
        <div>
          <h2 className={styles.sofaPresentation}>
            Congratulations! <br />
            Food, Drinks and Movie... <br />
            Are you ready for your Lazy Night?!?
          </h2>
          <section>
            {userChoice.some(
              (ele) =>
                ele.itemCategory === "recipe" && ele.username === userName
            ) && (
              <div className={styles.sofaSection}>
                <h3 className={styles.sofaSectionTitle}>Recipe:</h3>
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
                  {userChoice
                    .filter(
                      (ele) =>
                        ele.itemCategory === "recipe" &&
                        ele.username === userName
                    )
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <FoodDrinkCard
                          key={index}
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
            )}
          </section>
          <hr className={styles.sofaHrline} />
          <section>
            {userChoice.some(
              (ele) =>
                ele.itemCategory === "takeaway" && ele.username === userName
            ) && (
              <div>
                <h3 className={styles.sofaSectionTitle}>TakeAway:</h3>
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
                  {userChoice
                    .filter(
                      (ele) =>
                        ele.itemCategory === "takeaway" &&
                        ele.username === userName
                    )
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <FoodDrinkCard
                          key={index}
                          name={info.itemName}
                          calories={info.calories}
                          carbs={info.carbs}
                          fat={info.fat}
                          protein={info.protein}
                          imgUrl={info.imgUrl}
                          store={info.store}
                          portion={info.portion}
                          category='takeaway'
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
          </section>
          <hr className={styles.sofaHrline} />
          <section>
            {userChoice.some(
              (ele) =>
                ele.itemCategory === "drinks" && ele.username === userName
            ) && (
              <div>
                <h3 className={styles.sofaSectionTitle}>Drinks:</h3>
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
                  {userChoice
                    .filter(
                      (ele) =>
                        ele.itemCategory === "drinks" &&
                        ele.username === userName
                    )
                    .map((info, index) => (
                      <SwiperSlide key={index}>
                        <FoodDrinkCard
                          key={index}
                          name={info.itemName}
                          calories={info.calories}
                          sugar={info.sugar}
                          imgUrl={info.imgUrl}
                          category='drinks'
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            )}
          </section>
          <hr className={styles.sofaHrline} />
          <section>
            {userChoice.some(
              (ele) => ele.itemCategory === "movie" && ele.username === userName
            ) && (
              <div>
                <h3 className={styles.sofaSectionTitle}>Movies:</h3>
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
                  {userChoice
                    .filter(
                      (ele) =>
                        ele.itemCategory === "movie" &&
                        ele.username === userName
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
              </div>
            )}
          </section>
          <button
            className={styles.btnTicket}
            onClick={() => {
              setTotalChoice(userChoice);
            }}
          >
            Give me my Calories Ticket!
          </button>
          <div>{totalChoice && <NutritionLabel total={totalChoice} />}</div>
        </div>
      ) : (
        <h2 className={styles.sofaNoLogged}>
          It appears you are not logged in, <br />
          go to the Homepage first!{" "}
        </h2>
      )}
    </main>
  );
}

export default Sofa;
