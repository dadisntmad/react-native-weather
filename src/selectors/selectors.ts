import { RootState } from './../redux/store';

export const selectWeather = ({ weather }: RootState) => weather.weather;
export const selectLocation = ({ weather }: RootState) => weather.location;
