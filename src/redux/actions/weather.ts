import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (location: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a20e93adc63a3af0b3e33257540e1382`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
