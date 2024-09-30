import { useState } from "react";
import CurrentWeather from "../components/CurrentWeather";
import WeatherService from "../services/weather/weather-service";
import { CurrentWeatherData } from "../models/current";

const CurrentWeatherPage = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();

  const searchCurrentWeather = (city: string) => {
    WeatherService.getCurrentWeather(city).then((data) => {
      setCurrentWeather(data);
    });
  };

  return (
    <>
      <CurrentWeather
        currentWeather={currentWeather}
        searchCurrentWeather={searchCurrentWeather}
      />
    </>
  );
};

export default CurrentWeatherPage;
