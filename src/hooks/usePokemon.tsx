import { useCallback, useEffect, useState } from "react";
import pokemonService from "@/services/pokemonService";
import type { PokemonDetail } from "@/services/pokemonService.types";

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const fetchPokemons = async (offset: number) => {
    const pokemonDetails = await pokemonService(offset);

    return pokemonDetails;
  };

  const updatePokemons = useCallback(async (offset: number) => {
    const newPokemons = await fetchPokemons(offset);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
  }, []);

  useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const data = await fetchPokemons(0);
      setPokemons(data);
    };
    fetchAndSetPokemons();
  }, []);

  return { pokemons, setPokemons, updatePokemons };
};
export default usePokemon;
