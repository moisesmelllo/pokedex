import Image from "next/image";
import { getPokemon } from "../api/route";

const PokemonPage = async ({params}) => {
  const {pokemonName} = params;
  const pokemonObject = await getPokemon(pokemonName)
  
  return (
    <div className="flex flex-col justify-center items-center mt-24 text-white">
      <h1 className='text-4xl text-bold '>
        {pokemonName}
      </h1>
      <Image 
        src={pokemonObject.sprites.other["official-artwork"].front_default}
        alt='pokemon image'
        width={600}
        height={64}
      />
      <div className="flex space-x-3">
        {pokemonObject.stats.map((stat) => (
          <p>{stat.stat.name}: {stat.base_stat}</p>
        ))}
      </div>
    </div>
  )
}

export default PokemonPage