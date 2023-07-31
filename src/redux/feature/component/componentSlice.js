import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    components: []
}

export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addToStor: (state, action) => {
            state.components.push({ ...action.payload })
        }
    },
})


export const { addToStor } = componentSlice.actions

export default componentSlice.reducer