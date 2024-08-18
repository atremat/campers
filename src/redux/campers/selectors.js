import { createSelector } from '@reduxjs/toolkit';

export const selectCampersList = state => state.campers.items;

export const selectFavoritesId = state => state.campers.favorites;

export const selectFavoritesList = createSelector(
  [selectCampersList, selectFavoritesId],
  (campers, favoritesId) => {
    const favorites = campers.filter(camper =>
      favoritesId.includes(camper._id)
    );

    return favorites;
  }
);

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;
