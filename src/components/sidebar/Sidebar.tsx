import Image from 'next/image';
import { FaReact } from "react-icons/fa6";
import { IoBrowsersOutline, IoCalculator, IoHeartOutline } from 'react-icons/io5';
import { TbPokeball } from 'react-icons/tb';
import { SideBarMenuItem } from './';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador client side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <TbPokeball size={40} />,
        title: 'Pokemons',
        subTitle: 'Lista de pokemones estática'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Pokemons favoritos',
        subTitle: 'Lista de pokemones favoritos'
    }
]


export const Sidebar = () => {
    return (
        <div id='menu' style={{ width: 400 }} className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'>
            <div id='logo' className='my-4 px-6'>
                <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
                    <FaReact className='mr-2' />
                    <span> Dash </span>
                    <span className='text-blue-500'>8</span>.
                </h1>
                <p className='text-slate-500 text-sm'>
                    Manage your actions and activities
                </p>
            </div>
            <div id='profile' className='px-6 py-10'>
                <p className='text-slate-500'>Welcome back,</p>
                <a href='#' className='inline-flex space-x-2 items-center'>
                    <span>
                        <Image
                            className='rounded-full w-8 h-8'
                            src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
                            alt='User avatar '
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className='text-sm md:text-base font-bold'>Edward Tompson</span>
                </a>
            </div>
            <div id='nav' className='w-full px-6'>
                {menuItems.map(item => <SideBarMenuItem key={item.path} {...item} />)}
            </div>
        </div>
    )
}
