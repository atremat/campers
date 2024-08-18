import { createSelector } from '@reduxjs/toolkit';
import { selectCampersList } from '../campers/selectors';

export const selectLocation = state => state.filters.location;

export const selectAC = state => state.filters.isAC;

export const selectAutomatic = state => state.filters.isAutomatic;

export const selectKitchen = state => state.filters.isKitchen;

export const selectTV = state => state.filters.isTV;

export const selectShower = state => state.filters.isShower;

export const selectFilteredCampers = createSelector(
  [selectCampersList, selectLocation],
  (campers, valueFilter) => {
    const visibleContacts = campers.filter(({ location }) => {
      return location.toLowerCase().includes(valueFilter.trim().toLowerCase());
    });

    return visibleContacts;
  }
);
