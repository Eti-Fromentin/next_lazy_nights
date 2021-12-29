import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';
import { useRouter } from "next/router";

import FoodDrinkCard from './FoodDrinkCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Navigation]);

function FetchTakeAway() {
  const BurgersByCalories = 'https://lazy-back.site.etifrom.dev/api/takeaway/';
  const [fetchedTakeAway, setFetchedTakeAway] = useState();
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();
  const numbSlice = router.pathname === "/Catalog" ? 50 : 10;

  function Refresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    axios
      .get(BurgersByCalories)
      .then((response) => response.data)
      .then((data) => setFetchedTakeAway(data));
  }, []);

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
          {fetchedTakeAway &&
            fetchedTakeAway
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .slice(0, `${numbSlice}`)

              .map((info, index) => (
                <SwiperSlide key={index}>
                  <FoodDrinkCard key={index} {...info} category='takeaway' />
                </SwiperSlide>
              ))}
        </Swiper>
        {router.pathname !== "/Catalog" && (
          <button className={'refreshButton'} onClick={Refresh}>
            Refresh
          </button>
        )}
      </div>
    </div>
  );
}

export default FetchTakeAway;
