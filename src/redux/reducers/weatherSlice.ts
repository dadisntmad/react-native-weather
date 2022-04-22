import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherSliceState, WeatherType } from '../../types/weather';
import { fetchWeather } from '../actions/weather';

const initialState: WeatherSliceState = {
  weather: {} as WeatherType,
  isLoading: false,
  error: '',
  location: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.fulfilled.type]: (state, action: PayloadAction<WeatherType>) => {
      state.isLoading = false;
      state.error = '';
      state.weather = action.payload;
    },
    [fetchWeather.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
