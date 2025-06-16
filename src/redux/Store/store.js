import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../Slice/favoritesSlice';
import moviesReducer from '../Slice/moviesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer ,
    movies: moviesReducer,
  }
});

export default store;
