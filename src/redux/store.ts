import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { gamesAPI } from '../api/DataService'
import filtersSlice from './slices/filtersSlice'
import pageSlice from './slices/pageSlice'

const rootReducer = combineReducers({
    [gamesAPI.reducerPath]: gamesAPI.reducer,
    filters: filtersSlice,
    currentPage: pageSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(gamesAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
