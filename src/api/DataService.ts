import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const paramsSerializer = (params: any) => {
//     return queryString.stringify({
//         ...params,
//         key: process.env.REACT_APP_ACCESS_KEY,
//     })
// }

export const gamesAPI = createApi({
    reducerPath: 'gamesAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.rawg.io/api',
        // paramsSerializer,
    }),
    endpoints: (builder) => ({
        fetchAllGames: builder.query({
            query: (filter) => ({
                url: '/games',
                params: {
                    key: process.env.REACT_APP_ACCESS_KEY,
                    ...filter,
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
