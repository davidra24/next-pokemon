import { PokemonContent } from '@/pokemons/components/PokemonContent';
import { Pokemon } from '@/pokemons/interfaces/pokemon.interface';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface props { params: { id: string }, searchParams: any }

//build time
export async function generateStaticParams() {
    return Array.from({ length: 151 }).map((v, i) => ({ id: `${i + 1}` }))
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    try {

        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
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
    const { id, name } = await getPokemon(params.id)
    return {
        title: `#${id} - ${name}`,
        description: `Pagina web del pokemon ${name}`
    }
}


export default async function PokemonPage({ params }: props) {

    const pokemon = await getPokemon(params.id);


    return (
        <PokemonContent pokemon={pokemon} />
    );
}