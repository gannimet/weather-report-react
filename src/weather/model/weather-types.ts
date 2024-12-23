export type WeatherDataResponse = {
  weather: WeatherData;
};

export type WeatherData = {
  wind_speed_10: number;
  wind_direction_10: number;
  temperature: number;
  precipitation_10: number;
};

export type City = {
  name: string;
  latitude: number;
  longitude: number;
};