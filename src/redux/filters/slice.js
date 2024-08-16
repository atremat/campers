import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  location: '',
  isAC: false,
  isAutomatic: false,
  isKitchen: false,
  isTV: false,
  isShower: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    changeFilterLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeFilterLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
