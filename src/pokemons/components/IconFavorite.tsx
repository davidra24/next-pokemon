'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { toggleFavorite } from '@/store/pokemons/pokemons'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '../interfaces/simple-pokemon.interface'

interface Props {
    pokemon: SimplePokemon
}

export const IconFavorite = ({ pokemon }: Props) => {
    const { id } = pokemon
    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id])
    const dispatch = useAppDispatch()

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
            <div className="text-red-600">
                {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                    {isFavorite ? 'Es favorito' : 'No es favorito'}
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
        </div>
    )
}