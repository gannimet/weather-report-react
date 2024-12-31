import { memo, useState } from "react";
import "./WeatherPage.scss";
import CitySelector from "./city-selector/CitySelector";
import { cities } from "./model/data-model";
import { City } from "./model/weather-types";
import WeatherWidget from "./weather-widget/WeatherWidget";

function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState<City>();

  return (
    <div className="weather-page">
      <main className="city-selection">
        <CitySelector
          cities={cities}
          onCitySelected={(city) => setSelectedCity(city)}
        />
      </main>

      <WeatherWidget city={selectedCity} />
    </div>
  );
}

export default memo(WeatherPage);
