import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './feature/component/componentSlice'

export const store = configureStore({
    reducer: {
        components: componentReducer
    },
})