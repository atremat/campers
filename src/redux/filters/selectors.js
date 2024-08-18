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
  [
    selectCampersList,
    selectLocation,
    selectVehicleType,
    selectAC,
    selectShower,
    selectTV,
    selectKitchen,
    selectAutomatic,
  ],
  (
    campers,
    valueFilter,
    vehicleType,
    isAC,
    isShower,
    isTV,
    isKitchen,
    isAutomatic
  ) => {
    const visibleCampers = campers.filter(
      ({
        location,
        form,
        transmission,
        details: { AC, toilet, shower, TV, kitchen },
      }) => {
        let result =
          location.toLowerCase().includes(valueFilter.trim().toLowerCase()) &&
          form === vehicleType;
        if (isAC) {
          result = result && AC > 0;
        }

        if (isTV) {
          result = result && TV > 0;
        }

        if (isKitchen) {
          result = result && kitchen > 0;
        }

        if (isAutomatic) {
          result = result && transmission.toLowerCase() == 'automatic';
        }

        if (isShower) {
          result = result && (toilet > 0 || shower > 0);
        }
        return result;
      }
    );

    return visibleCampers;
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
