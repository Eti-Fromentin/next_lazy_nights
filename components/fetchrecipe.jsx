// import React, { useState, useEffect, useContext } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import axios from 'axios';

// import CurrentAllFavoritesContext from '../Contexts/favoritesContext';

// import RecipeCard from './RecipeCard';

// import 'swiper/css';
// import './Slider.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// SwiperCore.use([Pagination, Navigation]);

// function FetchRecipe({ torefresh, category }) {
//   const key = import.meta.env.VITE_RECIPE_API_KEY;
//   const recipeByNutrient = `https://api.spoonacular.com/recipes/findByNutrients?minCholesterol=30&minCarbs=30&minFat=50&minCalories=600&maxSugar=10&number=300&random=true&apiKey=${key}`;
//   const [fetchedRecipe, setFetchedRecipe] = useState();
//   const [refresh, setRefresh] = useState(false);
//   const { allFavorites, fetchAllFavorites } = useContext(CurrentAllFavoritesContext);
//   const numbSlice = category === 'catalog' ? 40 : 15;

//   function Refresh() {
//     setRefresh(!refresh);
//   }

//   useEffect(() => {
//     fetchAllFavorites();
//     axios
//       .get(recipeByNutrient)
//       .then((response) => response.data)
//       .then((data) => setFetchedRecipe(data.filter((elt) => elt.calories > 700 || parseInt(elt.fat) > 70)));
//   }, [torefresh]);

//   useEffect(() => {}, [allFavorites, refresh]);

//   return (
//     <div>
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           className="mySwiper"
//         >
//           {fetchedRecipe &&
//             fetchedRecipe.slice(0, `${numbSlice}`).map((info, index) => (
//               <SwiperSlide key={index}>
//                 <RecipeCard key={index} {...info} />
//               </SwiperSlide>
//             ))}
//         </Swiper>
//         {category !== 'catalog' && (
//           <button className={'refreshButton'} onClick={Refresh}>
//             Refresh
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FetchRecipe;
