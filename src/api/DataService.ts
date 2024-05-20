import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gamesAPI = createApi({
    reducerPath: 'gamesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.rawg.io/api',
    }),
    endpoints: (builder) => ({
        fetchAllGames: builder.query({
            query: ({ filters, page }) => ({
                url: '/games',
                params: {
                    key: process.env.REACT_APP_ACCESS_KEY,
                    page: page,
                    ...filters,
                },
            }),
        }),
        fetchAllFIlterOptions: builder.query({
            query: (filterType) => ({
                url: `/${filterType}`,
                params: {
                    key: process.env.REACT_APP_ACCESS_KEY,
                },
            }),
        }),
    }),
})

export const { useFetchAllGamesQuery, useFetchAllFIlterOptionsQuery } = gamesAPI
