import React, { memo, useEffect, useMemo, useState } from 'react'
import './WeatherWidget.scss'
import { City, WeatherData } from '../model/weather-types';
import { fetchWeatherData } from './data-access';

type WeatherWidgetProps = {
  city: City | undefined;
};

export default memo<WeatherWidgetProps>(({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    if (!city) {
      return;
    }

    const { latitude, longitude } = city;

    fetchWeatherData(latitude, longitude).then((weatherData) => setWeatherData(weatherData))
  }, [city]);

  const needleStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `rotate(${weatherData?.wind_direction_10 ?? 0}deg)`
    };
  }, [weatherData]);

  return !!weatherData ? (
    <div className='weather-widget'>
      <div className="temperature">Temperatur: {weatherData.temperature}°</div>

      <div className="wind">
        <div className="wind-speed">Windgeschwindigkeit: {weatherData.wind_speed_10} km/h</div>

        <div className="wind-direction">
          <span className="needle" style={needleStyle}></span>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading …</p>
  )
})
