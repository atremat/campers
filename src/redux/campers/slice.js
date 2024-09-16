import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersInitialState = {
  items: [],
  favorites: [],
  page: 1,
  perPage: 10,
  sortOrder: 'asc',
  sortBy: '_id',
  totalItems: 1,
  filter: {},
  loading: false,
  error: null,
};

const isPending = state => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  reducers: {
    //toggle state of favorite
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //fetch campers
      .addCase(fetchCampers.pending, isPending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchCampers.rejected, isRejected);
  },
});

export const campersReducer = campersSlice.reducer;

export const { toggleFavorite } = campersSlice.actions;
