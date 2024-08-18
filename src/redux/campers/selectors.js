import { createSelector } from '@reduxjs/toolkit';

export const selectCampersList = state => state.campers.items;

export const selectFavoritesId = state => state.campers.favorites;

export const selectFavoritesList = createSelector(
  [selectCampersList, selectFavoritesId],
  (campers, favoritesId) => {
    const favorites = campers.filter(camper =>
      favoritesId.includes(camper._id)
    );

    console.log('favorites: ', favorites);

    return favorites;
  }
);
