import { configureStore } from '@reduxjs/toolkit'
import imageGalleryReducer from '../redux/ImageGallarySlice/imageGallerySlice'
export const store = configureStore({
  reducer: {
    imageGallery: imageGalleryReducer
  },
})