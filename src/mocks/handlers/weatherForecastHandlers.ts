import { HttpResponse, http, passthrough } from 'msw';
import { weatherForecastData } from '../data/weatherForecastData';

export const weatherForecastHandlers = [
  http.get(`${import.meta.env.VITE_APP_API_URL}/WeatherForecast`, () => {
    if (import.meta.env.VITE_APP_IS_STRICT_MOCKS === 'yes') {
      return HttpResponse.json(weatherForecastData, { status: 200 });
    }
    return passthrough();
  }),
];
