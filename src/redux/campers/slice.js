import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersInitialState = {
  items: [],
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
  // reducers: {
  //   //save {id,name,number}, which we have to edit
  //   setContactForEdit: (state, action) => {
  //     state.contactForEdit = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      //fetch contacts
      .addCase(fetchCampers.pending, isPending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, isRejected);
  },
});

export const campersReducer = campersSlice.reducer;

// export const { setContactForEdit } = contactsSlice.actions;
