import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

import CurrentAllFavoritesContext from '../context/favoritesContext';
import FoodDrinkCard from './FoodDrinkCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FetchAlcoholDrinks() {
  const [fetchedDrink, setFetchedDrink] = useState();
  const drinksByCalories = 'https://lazy-back.site.etifrom.dev/api/alcohol_drinks/';
  const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);
  const [refresh, setRefresh] = useState(false);

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    fetchAllFavorites();
    axios
      .get(drinksByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedDrink(data));
  }, []);

  useEffect(() => {}, [allFavorites]);

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
          {fetchedDrink &&
            fetchedDrink
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .slice(0, 10)
              .map((info, index) => (
                <SwiperSlide key={index}>
                  <FoodDrinkCard key={index} {...info} category='drinks'/>
                </SwiperSlide>
              ))}
        </Swiper>
        <button className={'refreshButton'} onClick={Refresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default FetchAlcoholDrinks;
