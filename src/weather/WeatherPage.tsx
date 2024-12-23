import { memo, useState } from 'react'
import './WeatherPage.scss'
import CitySelector from './city-selector/CitySelector'
import { cities } from './model/data-model'
import WeatherWidget from './weather-widget/WeatherWidget'
import { City } from './model/weather-types'

function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState<City>();

  return <div className='weather-page'>
    <CitySelector
      cities={cities}
      onCitySelected={(city) => setSelectedCity(city)}
    />

    <WeatherWidget city={selectedCity} />
  </div>
}

export default memo(WeatherPage)
