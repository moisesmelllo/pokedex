import { getPokemonList } from "./api/route";
import Searchbar from "./components/Searchbar";
import PokemonGrid from "./components/PokemonGrid";

export default async function Home() {
  const pokemons = await getPokemonList();

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <PokemonGrid pokemons={pokemons}/>
      </div>
    </div>
  )
}
