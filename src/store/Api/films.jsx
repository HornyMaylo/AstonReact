import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { key } from './apiKey';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev',
    method: 'GET',
    headers: {
      'X-API-KEY': key,
      Accept: 'application/json',
    },
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () => `/v1.3/movie?limit=2`,
    }),
    getFilmById: build.query({
      query: (id) => ({
        url: `/v1.3/movie/${id}`,
      }),
    }),
    getFilmByName: build.query({
      query: (filmName) => ({
        url: `/v1.3/movie`,
        params: {
          name: filmName,
        },
      }),
      transformResponse(res) {
        return res.docs;
      },
    }),
  }),
});


export const {
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  useGetFilmByNameQuery,
} = filmsApi;