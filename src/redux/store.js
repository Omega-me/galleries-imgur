import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './gallerySlice';

const store = configureStore({
  reducer: { galleryState: galleryReducer },
});

export default store;
