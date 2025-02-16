import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice";
import pokemonReducer from "./pokemons/pokemons";

export const makeStore = () => {
    return configureStore({
        reducer: { counter: counterReducer, pokemons: pokemonReducer },
        //middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(localStorageMiddleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']