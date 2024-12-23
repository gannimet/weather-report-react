import { memo } from 'react'
import './WeatherWidget.scss'
import { City } from '../model/weather-types';

type WeatherWidgetProps = {
  city: City | undefined;
};

export default memo<WeatherWidgetProps>(({ city }) => {
  return <div className='weather-widget'>
    Wetter für: {city?.name ?? '-'}
  </div>
})
