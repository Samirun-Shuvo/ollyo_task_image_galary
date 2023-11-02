import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imagesList: [
    {
      id: 1,
      path: "./images/image-1.webp",
      select: false,
    },
    {
      id: 2,
      path: "./images/image-2.webp",
      select: false,
    },
    {
      id: 3,
      path: "./images/image-3.webp",
      select: false,
    },
    {
      id: 4,
      path: "./images/image-4.webp",
      select: false,
    },
    {
      id: 5,
      path: "./images/image-5.webp",
      select: false,
    },
    {
      id: 6,
      path: "./images/image-6.webp",
      select: false,
    },
    {
      id: 7,
      path: "./images/image-7.webp",
      select: false,
    },
    {
      id: 8,
      path: "./images/image-8.webp",
      select: false,
    },
    {
      id: 9,
      path: "./images/image-9.webp",
      select: false,
    },
    {
      id: 10,
      path: "./images/image-10.jpeg",
      select: false,
    },
    {
      id: 11,
      path: "./images/image-11.jpeg",
      select: false,
    },
  ],
  dragdDrop: {
    dragId: "",
    dropId: "",
  }
}

export const imageGalleySlice = createSlice({
  name: 'imageGallery',
  initialState,
  reducers: {
    selectImage(state, action) {
      state.imagesList = state.imagesList.map((image) => {
        if (image.id === action.payload.index) {
          return {
            ...image,
            select: !image.select,
          }
        } else {
          return {
            ...image
          }
        }
      })

    },
    resetSelectImage(state) {
      state.imagesList = state.imagesList.map((image) => {
        return {
          ...image,
          select: false
        }
      })
    },
    deleteImage(state) {
      const newList = state.imagesList.filter((image) => {
        return image.select === false
      })
      state.imagesList = newList
    },
    setDragId(state, action) {
      state.dragdDrop.dragId = action.payload.id
    },
    setDropId(state, action) {

      let dragIndex = 0;
      let dropIndex = 0;

      state.imagesList.forEach((image, index) => {
        if (image.id == state.dragdDrop.dragId) {
          dragIndex = index;
        }
        if (image.id == action.payload.id) {
          dropIndex = index;
        }
      });


      if (dragIndex !== -1 && dropIndex !== -1) {
        const [draggedItem] = state.imagesList.splice(dragIndex, 1);
        state.imagesList.splice(dropIndex, 0, draggedItem);
      }

      state.dragdDrop = {
        dragId: '',
        dropId: '',
      };
    }
  },
})

export const { selectImage, deleteImage, setDragId, setDropId, resetSelectImage } = imageGalleySlice.actions

export default imageGalleySlice.reducer