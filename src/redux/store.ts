import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './reducers/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
