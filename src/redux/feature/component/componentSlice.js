import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    components: []
}

export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addToStor: (state, action) => {
            const existingComponentIndex = state.components.findIndex(component => component.category === action.payload.category)
            if (existingComponentIndex >= 0) {
                state.components[existingComponentIndex] = action.payload

            } else {

                state.components.push({ ...action.payload })
            }

        }
    },
})
export const { addToStor } = componentSlice.actions

export default componentSlice.reducer
