import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './feature/component/componentSlice'
import { api } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        components: componentReducer,
        [api.reducerPath]: api.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})