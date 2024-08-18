import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  location: '',
  isAC: false,
  isAutomatic: false,
  isKitchen: false,
  isTV: false,
  isShower: false,
  vehicleType: 'panelTruck',
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
    changeVehicleType(state, action) {
      state.vehicleType = action.payload;
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
  changeVehicleType,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
