'use client'

import Image from "next/image";
import { getPokemon } from "../api/route";
import { useEffect, useState } from "react";
import Link from "next/link";

const Pokecard = ({pokemon, index}) => {
  const [pokemondata, setPokemonData]= useState('')

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getPokemon(pokemon.name);
        setPokemonData(data);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar informações do Pokémon:', error);
      }
    };
    fetchPokemonData();
  }, [pokemondata.name]);

  return (
    <Link
      href={pokemon.name}
      key={pokemon.name + 'card'}
      className="w-64 h-64 m-4 border border-black flex flex-col justify-center items-center text-white">
      <Image 
        src={pokemondata && pokemondata.sprites.front_default}
        alt='pokemon image'
        width={200}
        height={64}
      />
      {pokemon.name}
      <div className="flex space-x-2">
        {pokemondata && pokemondata.types.map((type) => (
          <p>{type.type.name}</p>
        ))}
      </div>
    </Link>
  )
}

export default Pokecard;