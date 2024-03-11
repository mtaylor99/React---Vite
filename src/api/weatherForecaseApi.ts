import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWeatherForecast } from '../types/weatherForecastTypes';
import { customPrepareHeaders } from '../utils/queryUtils';
import { QueryTags } from './queryTags';

const baseUrl = `${import.meta.env.REACT_APP_API_URL}`;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: customPrepareHeaders,
  credentials: 'include',
});

export const weatherForecastApi = createApi({
  reducerPath: 'weatherForecastApi',
  baseQuery,
  tagTypes: [QueryTags.WeatherForecast],
  endpoints: builder => ({
    getWeatherForecast: builder.query<Array<IWeatherForecast>, void>({
      query: () => '/WeatherForecast',
    }),
  }),
});

export const { useGetWeatherForecastQuery } = weatherForecastApi;
