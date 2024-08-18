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
    toggleAC(state) {
      state.isAC = !state.isAC;
    },
    toggleTransmission(state) {
      state.isAutomatic = !state.isAutomatic;
    },
    toggleKitchen(state) {
      state.isKitchen = !state.isKitchen;
    },
    toggleTV(state) {
      state.isTV = !state.isTV;
    },
    toggleShower(state) {
      state.isShower = !state.isShower;
    },
  },
});

export const {
  changeFilterLocation,
  toggleAC,
  toggleTransmission,
  toggleKitchen,
  toggleTV,
  toggleShower,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
