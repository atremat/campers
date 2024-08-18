import { createSelector } from '@reduxjs/toolkit';
import { selectCampersList, selectFavoritesList } from '../campers/selectors';

export const selectLocation = state => state.filters.location;

export const selectAC = state => state.filters.isAC;

export const selectAutomatic = state => state.filters.isAutomatic;

export const selectKitchen = state => state.filters.isKitchen;

export const selectTV = state => state.filters.isTV;

export const selectShower = state => state.filters.isShower;

export const selectVehicleType = state => state.filters.vehicleType;

export const selectFilteredCampers = createSelector(
  [selectCampersList, selectLocation, selectVehicleType],
  (campers, valueFilter, vehicleType) => {
    const visibleContacts = campers.filter(({ location, form }) => {
      return (
        location.toLowerCase().includes(valueFilter.trim().toLowerCase()) &&
        form === vehicleType
      );
    });

    return visibleContacts;
  }
);

export const selectFilteredFavCampers = createSelector(
  [selectFavoritesList, selectLocation, selectVehicleType],
  (campers, valueFilter, vehicleType) => {
    const visibleContacts = campers.filter(({ location, form }) => {
      return (
        location.toLowerCase().includes(valueFilter.trim().toLowerCase()) &&
        form === vehicleType
      );
    });

    return visibleContacts;
  }
);
