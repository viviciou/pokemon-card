import type { PokemonDetail } from "../../service/pokemonService.types";

type CardProps = { pokemon: PokemonDetail };

const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="justify-items-center p-4 w-3xs border-2 border-gray-50 rounded-md  shadow-md hover:shadow-lg transition-shadow duration-100">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <div>{pokemon.name}</div>
    </div>
  );
};
export default Card;
