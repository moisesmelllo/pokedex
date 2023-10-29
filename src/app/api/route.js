const basepath = 'https://pokeapi.co/api/v2/'


export async function getPokemonList() {
  const response = await fetch(basepath + 'pokemon?limit=151&offset=0')
  const data = await response.json()
  return data.results;
}

export async function getPokemon(name) {
  const response = await fetch(basepath + 'pokemon/' + name)
  const data = await response.json()
  return data
}