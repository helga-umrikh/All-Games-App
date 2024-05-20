import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

const pageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        addCurrentPage: (state, action) => (state = action.payload),
    },
})

export const { addCurrentPage } = pageSlice.actions

export default pageSlice.reducer
