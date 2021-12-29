import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

import CurrentAllFavoritesContext from '../context/favoritesContext';

import FetchRecipe from '../components/Fetchrecipe';
import FetchMovies from '../components/FetchMovies';
import FetchTakeAway from '../components/FetchTakeAway';
import FoodDrinkCard from '../components/FoodDrinkCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BarCodeReader from '../components/BarCodeReader';

import styles from '../styles/catalog.module.css';

SwiperCore.use([Pagination, Navigation]);

function Catalog() {
    const [softsDrinks, setSoftsDrinks] = useState([]);
    const [allDrinks, setAllDrinks] = useState([]);
    const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);
    const [refresh, setRefresh] = useState(false);
  
    function Refresh() {
      setRefresh(!refresh);
    }
  
    useEffect(() => {
      fetchAllFavorites();
      axios
        .get('https://lazy-back.site.etifrom.dev/api/softs_drinks/')
        .then((response) => response.data)
        .then((data) => setSoftsDrinks(data));
    }, []);
  
    useEffect(() => {
      axios
        .get('https://lazy-back.site.etifrom.dev/api/alcohol_drinks/')
        .then((response) => response.data)
        .then((data) => setAllDrinks(softsDrinks.concat(data)));
    }, [softsDrinks]);
  
    useEffect(() => {}, [allFavorites, allDrinks]);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <main>
    
      <h1 className={styles.catalogTitle}>A la carte</h1>
      <h3 className={styles.catalogDesc}>Discover all items and choose your favorite ! </h3>
      <div>
      <button className={styles.refreshButton} onClick={Refresh}>
        Refresh all foods and drinks
      </button>
      <h3 className={styles.CatalogSectionTitle}>Recipes:</h3>
      <FetchRecipe torefresh={refresh}  />
      <hr className={styles.catalogHrline} />
      <h3 className={styles.CatalogSectionTitle}>Take Away:</h3>
      <FetchTakeAway  />
      <hr className={styles.catalogHrline} />
      <h3 className={styles.CatalogSectionTitle}>All Drinks:</h3>
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
          {allDrinks &&
            allDrinks
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
              .map((info, index) => (
                <SwiperSlide key={index}>
                  <FoodDrinkCard key={index} {...info} category='drinks'/>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <hr className={styles.catalogHrline} />
      <h3 className={styles.CatalogSectionTitle}>Movies:</h3>
      <FetchMovies torefresh={refresh} category={'catalog'} />
    </div>
      <BarCodeReader />
    </main>
  );
}

export default Catalog;