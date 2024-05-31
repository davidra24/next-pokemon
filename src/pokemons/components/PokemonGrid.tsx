import { PokemonCard, SimplePokemon } from '..'

interface props {
    pokemons: Array<SimplePokemon>
}

export const PokemonGrid = ({ pokemons }: props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map(pokemon =>
                <>
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                </>
            )}
        </div>
    )
}