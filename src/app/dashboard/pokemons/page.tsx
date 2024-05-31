import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

const getPokemons = async (limit = 151, offset = 0): Promise<Array<SimplePokemon>> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(result => result.json())

    const pokemons = await data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
        url: pokemon.url
    }))
    return pokemons
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons()
    return (
        <div className='flex flex-col'>

            <span className='text-5xl my-2 mx-auto'>Listado de pokémons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons} />

        </div>
    )
}
