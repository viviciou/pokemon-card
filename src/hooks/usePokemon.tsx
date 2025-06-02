import { useEffect, useState } from "react";
import pokemonService from "../service/pokemonService";
import type { PokemonDetail } from "../service/pokemonService.types";

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const fetchPokemons = async (offset: number) => {
    const pokemonDetails = await pokemonService(offset);

    return pokemonDetails;
  };

  useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const data = await fetchPokemons(0);
      setPokemons(data);
    };
    fetchAndSetPokemons();
  }, []);

  return { pokemons, setPokemons };
};
export default usePokemon;
