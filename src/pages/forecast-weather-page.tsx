import { useState } from "react";

import WeatherService from "../services/weather/weather-service";
import { ForecastWeather as ForecastWeatherData } from "../models/forecast";
import ForecastWeather from "../components/ForecastWeather";

const ForecastWeatherPage = () => {
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherData | null>(null);

  const searchForecastWeather = (city: string) => {
    WeatherService.getForecastWeather(city).then((data) => {
      console.log(data);
      setForecastWeather(data);
    });
  };

  return (
    <>
      <ForecastWeather
        forecastWeather={forecastWeather}
        searchForecastWeather={searchForecastWeather}
      />
    </>
  );
};

export default ForecastWeatherPage;
