'use client'
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '.';
import { setFavoritePokemons } from './pokemons/pokemons';

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    storeRef.current?.dispatch(setFavoritePokemons(favorites))
  }, [])


  return <Provider store={storeRef.current}>{children}</Provider>
}