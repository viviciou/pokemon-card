import type { PokemonDetail, PokemonNameAndUrl } from "./pokemonService.types";

const LIMIT = 10;
const pokemonService = async (offset: number) => {
  const fetchPokemons = async () => {
    try {
      const pokemonsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`
      );
      if (!pokemonsResponse) {
        throw new Error("Network pokemonsResponse was not ok");
      }
      const pokemons = await pokemonsResponse.json();

      const pokemonUrls = pokemons.results.map(
        (pokemon: PokemonNameAndUrl) => pokemon.url
      );
      const pokemonDetailsPromises = pokemonUrls.map((url: string) =>
        fetch(url).then((res) => res.json())
      );
      const pokemonDetails: PokemonDetail[] = await Promise.all(
        pokemonDetailsPromises
      );

      return pokemonDetails;
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      return [];
    }
  };
  return await fetchPokemons();
};
export default pokemonService;
