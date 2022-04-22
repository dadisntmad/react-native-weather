export type WeatherSliceState = {
  weather: WeatherType;
  isLoading: boolean;
  error: string;
  location: string;
};

export type WeatherType = {
  name: string;
  sys: Country;
  main: Main;
  weather: Weather[];
};

type Country = {
  country: string;
};

type Main = {
  temp: number;
};

type Weather = {
  id: number;
  description: string;
};
