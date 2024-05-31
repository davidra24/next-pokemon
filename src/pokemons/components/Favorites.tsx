'use client'
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { PokemonGrid } from './PokemonGrid';


export const Favorites = () => {
    const favoritePokemons = useAppSelector(state => {
        return Object.values(state.pokemons.favorites) ?? {}
    })
    const [pokemons, setPokemons] = useState(favoritePokemons)

    return (
        pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NotFavorites />
    )
}


export const NotFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className='text-red-500' />
            <span>No hay favoritos</span>
        </div>)
}