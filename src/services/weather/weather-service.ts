import fetchService, { FetchService } from "../fetch/fetch.service";

export class WeatherService {
  constructor(private fetchService: FetchService) {}

  getCurrentWeather = async (location: string) => {
    return await this.fetchService.fetchData(
      `/weather/current?location=${location}`
    );
  };

  getForecastWeather = async (location: string) => {
    return await this.fetchService.fetchData(
      `/weather/forecast?location=${location}`
    );
  };
}

export default new WeatherService(fetchService);
