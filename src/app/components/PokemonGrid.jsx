'use client'
import Pokecard from "./Pokecard"
import { useState } from "react"
import Searchbar from "./Searchbar"

const PokemonGrid = ({pokemons}) => {
  const [search, setSearch] = useState('')

  const searchFilter = (pokemons) => {
    return pokemons.filter((pokemon) => (
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    ))
  }

  const filteredPokemonList = searchFilter(pokemons)

  return (
    <div>
      <Searchbar pokemon={pokemons} search={search} setSearch={setSearch}/>
      <div className="flex flex-wrap justify-center">
        {filteredPokemonList.map((pokemon, index) => (
          <Pokecard key={pokemon.url} pokemon={...pokemon} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default PokemonGrid