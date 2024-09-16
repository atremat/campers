import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://campers-app-nodejs-be.onrender.com/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (queryParams, thunkAPI) => {
    try {
      const response = await axios.get('/', {
        params: {
          page: queryParams.page || 1,
          perPage: queryParams.perPage || 10,
          sortBy: queryParams.sortBy || '_id',
          sortOrder: queryParams.sortOrder || 'asc',
          filter: JSON.stringify(queryParams.filter || {}),
        },
      });
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
