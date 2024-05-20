import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedFilters: {},
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            const { key, value } = action.payload
            state.selectedFilters = {
                ...state.selectedFilters,
                [key]: value,
            }
        },
        clearFilters: (state) => {
            state.selectedFilters = {}
        },
    },
})

export const { addFilter, clearFilters } = filtersSlice.actions

export default filtersSlice.reducer
