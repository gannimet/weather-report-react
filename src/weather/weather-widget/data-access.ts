import { WeatherDataResponse } from "../model/weather-types";

export const fetchWeatherData = (lat: number, lon: number) => {
  return fetch(`https://api.brightsky.dev/current_weather?lat=${lat}&lon=${lon}&units=dwd`)
    .then((response) => {
      return response.json() as Promise<WeatherDataResponse>;
    })
    .then((response) => response.weather);
};