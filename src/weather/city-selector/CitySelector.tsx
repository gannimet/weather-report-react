import { memo, useEffect } from 'react'
import './CitySelector.scss'
import { City } from '../model/weather-types';

type CitySelectorProps = {
  cities: City[];
  onCitySelected: (city: City) => void;
};

export default memo<CitySelectorProps>(({ cities, onCitySelected }) => {
  useEffect(() => {
    onCitySelected(cities[0]);
  }, []);

  const handleValueChange = (selectedCityName: string) => {
    const selectedCity = cities.find((city) => city.name === selectedCityName);

    if (selectedCity) {
      onCitySelected(selectedCity);
    }
  }

  return (
    <select
      onChange={(e) => handleValueChange(e.target.value)}
      defaultValue={cities[0].name}
    >
      {cities.map((city) => (
        <option value={city.name} key={city.name}>{city.name}</option>
      ))}
    </select>
  )
})
