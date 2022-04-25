export type WeatherSliceState = {
  weather: WeatherType;
  isLoading: boolean;
  error: string;
  location: string;
  forecast: ForecastType[];
};

export type WeatherType = {
  name: string;
  sys: Country;
  main: Main;
  weather: Weather[];
};

export type ForecastType = {
  dt_txt: string;
  weather: Weather[];
  main: Main;
};

type Country = {
  country: string;
};

type Main = {
  temp: number;
};

type Weather = {
  id: number;
  description?: string;
};
