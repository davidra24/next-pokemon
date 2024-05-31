import { PokemonsResponse } from '@/pokemons';
import { PokemonContent } from '@/pokemons/components/PokemonContent';
import { Pokemon } from '@/pokemons/interfaces/pokemon.interface';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface props { params: { name: string }, searchParams: any }

//build time
export async function generateStaticParams() {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(result => result.json())

    const static151Pokemons = data.results.map(pokemon => ({
        name: pokemon.name
    }))

    return static151Pokemons.map(({ name }) => ({ name }))
}

const getPokemon = async (name: string): Promise<Pokemon> => {
    try {

        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            //cache: 'force-cache'
            next: {
                revalidate: 60 * 60 * 30 * 6
            }
        }).then(data => data.json())
        console.log(pokemon);
        return pokemon
    } catch (error) {
        notFound()
    }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
    const { id, name } = await getPokemon(params.name)
    return {
        title: `#${id} - ${name}`,
        description: `Pagina web del pokemon ${name}`
    }
}


export default async function PokemonPage({ params }: props) {

    const pokemon = await getPokemon(params.name);


    return (
        <PokemonContent pokemon={pokemon} />
    );
}