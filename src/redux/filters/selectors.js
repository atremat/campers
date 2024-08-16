// import { createSelector } from '@reduxjs/toolkit';
// import { selectContacts } from "../contacts/selectors";

export const selectLocation = state => state.filters.location;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, valueFilter) => {
//     const visibleContacts = contacts.filter(({ name, phoneNumber }) => {
//       return (
//         name.toLowerCase().includes(valueFilter.trim().toLowerCase()) ||
//         phoneNumber.includes(valueFilter.trim())
//       );
//     });
//     return visibleContacts;
//   }
// );
