import { useState } from "react";

import WeatherService from "../services/weather/weather-service";
import { ForecastWeatherData } from "../models/forecast";
import ForecastWeather from "../components/ForecastWeather";

const ForecastWeatherPage = () => {
  const [forecastWeathers, setForecastWeathers] = useState<
    ForecastWeatherData[] | null
  >(null);

  const searchForecastWeather = (city: string) => {
    WeatherService.getForecastWeather(city).then((data) => {
      console.log(data);
      setForecastWeathers(data);
    });
  };

  return (
    <>
      <ForecastWeather
        forecastWeathers={forecastWeathers}
        searchForecastWeather={searchForecastWeather}
      />
    </>
  );
};

export default ForecastWeatherPage;
