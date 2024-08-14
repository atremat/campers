import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
// import { filtersReducer } from './filters/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persisting token field from auth slice to localstorage
const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),
    // filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
