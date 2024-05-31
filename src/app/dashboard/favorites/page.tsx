import { Favorites } from '../../../pokemons/components/Favorites';

export default async function PokemonsPage() {

    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2 mx-auto'>Pokémons <small>favoritos</small></span>
            <Favorites />
        </div>
    )
}
