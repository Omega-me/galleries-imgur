import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpActions from '../services/galleryServices';

export const getGalleries = createAsyncThunk('get/galleries', async (_, thunkAPI) => {
  try {
    const res = await httpActions.get();
    return res.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const imagesSlice = createSlice({
  name: 'galleries',
  initialState: {
    galleries: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {
    resetGalleryState: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getGalleries.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGalleries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.galleries = action.payload;
      })
      .addCase(getGalleries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.galleries = [];
      });
  },
});

export const { resetGalleryState } = imagesSlice.actions;

export default imagesSlice.reducer;
