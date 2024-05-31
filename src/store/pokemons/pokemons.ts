//rxslice
import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface pokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

/* const getInitialState = (): pokemonsState => {

    //return typeof localStorage === 'undefined' ? {} : 
    return JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
} */

const initialState: pokemonsState = {
    //..getInitialState()
    favorites: {}
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon

            if (!!state.favorites[id]) {
                delete state.favorites[id]
                // return
            } else {
                state.favorites[id] = pokemon
            }
            //NOHACER
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer