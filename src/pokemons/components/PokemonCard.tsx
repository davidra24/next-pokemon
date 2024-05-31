import Image from 'next/image'
import Link from 'next/link'
import { SimplePokemon } from '..'
import { IconFavorite } from './IconFavorite'

interface props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: props) => {
    const { id, name, url } = pokemon
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 flex items-center"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <IconFavorite pokemon={pokemon} />
                </div>
            </div>
        </div>
    )
}
