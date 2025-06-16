// redux/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:30000/movies";


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(API_URL);
  console.log("Fetched movies response:", response.data);
return Array.isArray(response.data) ? response.data : response.data.results || [];
});


export const addMovie = createAsyncThunk('movies/addMovie', async (newMovie) => {
  const response = await axios.post(API_URL, newMovie);
  console.log("Added movie:", response.data);
  return response.data; 
});




export const updateMovie = createAsyncThunk('movies/updateMovie', async (updatedMovie) => {
  const response = await axios.put(`${API_URL}/${updatedMovie.id}`, updatedMovie);
  return response.data;
});


export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (movieId) => {
  await axios.delete(`${API_URL}/${movieId}`);
  return movieId;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
  builder
    .addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(addMovie.fulfilled, (state, action) => {
      state.items.push(action.payload); 
    })
    .addCase(updateMovie.fulfilled, (state, action) => {
      const index = state.items.findIndex(movie => movie.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; 
      }
    })
    .addCase(deleteMovie.fulfilled, (state, action) => {
      state.items = state.items.filter(movie => movie.id !== action.payload); 
    });
}


});

export default moviesSlice.reducer;




