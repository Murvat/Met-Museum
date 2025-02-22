import { configureStore } from '@reduxjs/toolkit';
import { museumApi } from './api/museumApi';
import authReducer from './feauters/auth/authSlice';
// import filterReducer from './feauters/filtersSlice';

export const store = configureStore({
  reducer: {
    [museumApi.reducerPath]: museumApi.reducer,
    auth: authReducer,
    // filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(museumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;